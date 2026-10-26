// Validates every skills/<name>/SKILL.md against the Agent Skills format (agentskills.io):
// YAML frontmatter with a `name` that matches its folder (lowercase letters, digits, hyphens, max 64)
// and a `description` (max 1024 characters). Also checks the plugin manifest lists a real version.
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(root, 'skills');
const errors = [];
const names = readdirSync(dir, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);
for (const name of names) {
  const file = path.join(dir, name, 'SKILL.md');
  if (!existsSync(file)) { errors.push(`${name}: missing SKILL.md`); continue; }
  const text = readFileSync(file, 'utf8');
  const m = /^---\n([\s\S]*?)\n---\n/.exec(text);
  if (!m) { errors.push(`${name}: no YAML frontmatter`); continue; }
  const fm = Object.fromEntries(m[1].split('\n').filter((l) => /^[a-z-]+:/.test(l)).map((l) => [l.slice(0, l.indexOf(':')), l.slice(l.indexOf(':') + 1).trim()]));
  if (fm.name !== name) errors.push(`${name}: frontmatter name "${fm.name}" does not match the folder`);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(fm.name || '') || fm.name.length > 64) errors.push(`${name}: invalid name`);
  if (!fm.description) errors.push(`${name}: missing description`);
  else if (fm.description.length > 1024) errors.push(`${name}: description is ${fm.description.length} characters (max 1024)`);
  const body = text.slice(m[0].length);
  if (body.trim().split('\n').length < 10) errors.push(`${name}: body is too short to be useful`);
  for (const [, href] of body.matchAll(/\]\((?!https?:|#)([^)]+)\)/g)) {
    if (!existsSync(path.join(dir, name, href))) errors.push(`${name}: broken relative link ${href}`);
  }
}
const plugin = JSON.parse(readFileSync(path.join(root, '.claude-plugin', 'plugin.json'), 'utf8'));
if (!/^\d+\.\d+\.\d+$/.test(plugin.version)) errors.push('plugin.json: version must be x.y.z');
JSON.parse(readFileSync(path.join(root, '.claude-plugin', 'marketplace.json'), 'utf8'));

if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`${names.length} skills valid: ${names.join(', ')}`);
