#!/usr/bin/env node
'use strict';

const {cliBasics, autoAdd} = require('command-line-basics');

const {html: buildCliHtml, svg: buildCliSvg} = require('../index.js');

const options = cliBasics({
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

(async () => {
let cliSections;
try {
  ({sections: cliSections} = autoAdd(config));
} catch (err) {
  throw new Error(`Error reading file "${config}": ${err.toString()}`);
}

await (
  format === 'svg'
    ? buildCliSvg(cliSections, {target})
    : buildCliHtml(cliSections, {target})
);

console.log(`File written to ${target}!`);
})();
