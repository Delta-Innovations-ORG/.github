import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const websitePublic = path.join(root, 'DeltaInnovations-Website', 'public');
const assetsDir = path.join(root, 'Delta-Innovations-ORG', '.github', 'assets');
const screenshotsDir = path.join(assetsDir, 'screenshots');

mkdirSync(screenshotsDir, { recursive: true });
copyFileSync(path.join(websitePublic, 'logo10.png'), path.join(assetsDir, 'logo10.png'));

const heroJpg = path.join(websitePublic, 'Group_25.jpg');
if (existsSync(heroJpg)) {
  copyFileSync(heroJpg, path.join(screenshotsDir, 'website-preview.png'));
} else {
  copyFileSync(path.join(assetsDir, 'logo10.png'), path.join(screenshotsDir, 'website-preview.png'));
}

console.log('Assets copied to', assetsDir);
