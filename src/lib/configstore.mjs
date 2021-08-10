import Configstore from 'configstore';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));

const config = new Configstore(pkg);

config.set('awesome', true);

console.log(config.get('awesome'));
