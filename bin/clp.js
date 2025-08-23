#!/usr/bin/env node

import {cliBasics, autoAdd} from 'command-line-basics';

import {html as buildCliHtml, svg as buildCliSvg} from '../index.js';

const options = await cliBasics({
  optionsPath: '../src/optionDefinitions.js',
  cwd: import.meta.dirname,
  options: {
    packageJsonPath: import.meta.dirname + '/../package.json'
  }
});

if (!options) {
  process.exit(0);
}

const {
  config,
  target,
  title,
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
    ? buildCliSvg(cliSections, {target, title})
    : buildCliHtml(cliSections, {target, title})
);

console.log(`File written to ${target}!`);
