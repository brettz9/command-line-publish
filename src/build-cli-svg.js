'use strict';

const fs = require('fs');
const ansiToSVG = require('ansi-to-svg');
const commandLineUsage = require('command-line-usage');

const {promises: {writeFile}} = fs;

module.exports = async (cliSections, {target, ansiToSvgOptions} = {}) => {
  if (!Array.isArray(cliSections)) {
    throw new TypeError('You must include a `cliSections` array');
  }
  if (!target || typeof target !== 'string') {
    throw new TypeError('You must include a valid `target` argument');
  }
  const ansiText = commandLineUsage(cliSections);
  const ansiSVG = ansiToSVG(ansiText, ansiToSvgOptions);
  await writeFile(
    // new URL(target, import.meta.url).pathname,
    target,
    ansiSVG
  );
};
