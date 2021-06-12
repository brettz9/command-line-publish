#!/usr/bin/env node

import {dirname} from 'path';
import {fileURLToPath} from 'url';

import {cliBasics, autoAdd} from 'command-line-basics';

import {html as buildCliHtml, svg as buildCliSvg} from '../index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const options = await cliBasics({
  optionsPath: '../src/optionDefinitions.js',
  cwd: __dirname
});

if (!options) {
  process.exit(0);
}

const {
  config,
  target,
  format = 'svg'
} = options;

if (!config) {
  throw new TypeError('You must include a `config` argument');
}
if (format && !['svg', 'html'].includes(format)) {
  throw new TypeError('You must include a valid format: "html" or "svg"');
}

let cliSections;
try {
  ({sections: cliSections} = await autoAdd(config));
} catch (err) {
  throw new Error(`Error reading file "${config}": ${err.toString()}`);
}

await (
  format === 'svg'
    ? buildCliSvg(cliSections, {target})
    : buildCliHtml(cliSections, {target})
);

console.log(`File written to ${target}!`);
