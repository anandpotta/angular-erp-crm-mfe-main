import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const distRoot = 'dist';
const outDir = join(distRoot, 'github-pages');

const apps = [
  ['shell-app', ''],
  ['crm-app', 'remotes/crm'],
  ['inventory-app', 'remotes/inventory'],
  ['accounting-app', 'remotes/accounting'],
];

rmSync(outDir, { force: true, recursive: true });
mkdirSync(outDir, { recursive: true });

for (const [project, target] of apps) {
  const source = join(distRoot, project, 'browser');
  const destination = join(outDir, target);

  if (!existsSync(source)) {
    throw new Error(`Missing build output: ${source}`);
  }

  mkdirSync(destination, { recursive: true });
  cpSync(source, destination, { recursive: true });
}

cpSync(join(outDir, 'index.html'), join(outDir, '404.html'));
