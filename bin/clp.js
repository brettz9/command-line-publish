#!/usr/bin/env node
'use strict';

const {join} = require('path');
const commandLineArgs = require('command-line-args');
const commandLineUsage = require('command-line-usage');
const updateNotifier = require('update-notifier');
const pkg = require('../package.json');

// check if a new version of ncu is available and print an update notification
const notifier = updateNotifier({pkg});
if (notifier.update && notifier.update.latest !== pkg.version) {
  notifier.notify({defer: false});
}

const {sections, definitions} = require('../src/optionDefinitions.js');

const buildCliHtml = require('../src/build-cli-html.js');
const buildCliSvg = require('../src/build-cli-svg.js');

const {
  config,
  target,
  format = 'svg',
  version = false,
  help = false
} = commandLineArgs(definitions);

if (!help && !config && !version) {
  throw new TypeError('You must include a `config` argument');
}
if (format && !['svg', 'html'].includes(format)) {
  throw new TypeError('You must include a valid format: "html" or "svg"');
}

(async () => {
if (help) {
  const usage = commandLineUsage(sections);
  console.log(usage);
  return;
}
if (version) {
  console.log(pkg.version);
  return;
}

let cliSections;
try {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  ({sections: cliSections} = require(join(process.cwd(), config)));
} catch (err) {
  throw new Error(`Error reading file "${config}": ${err.toString()}`);
}

if (format === 'svg') {
  await buildCliSvg(cliSections, {target});
} else {
  await buildCliHtml(cliSections, {target});
}

console.log(`File written to ${target}!`);
})();
