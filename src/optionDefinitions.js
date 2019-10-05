'use strict';

const pkg = require('../package.json');

const optionDefinitions = [
  {
    name: 'target', alias: 't', type: String, defaultOption: true,
    description: 'The file path target to which to write the result',
    typeLabel: '{underline file-path}'
  },
  {
    name: 'config', alias: 'c', type: String,
    description: 'Config file (or directory) to process for ' +
      'opening its Web URL; must export/include a `sections` property, ' +
      'and it is recommended to export a `definitions` property as well, ' +
      'for easier reusability with `command-line-args`.',
    typeLabel: '{underline file-path}'
  },
  {
    name: 'format', alias: 'f', type: String,
    description: 'Format of the output',
    typeLabel: '{underline "json"|"html"}'
  },
  {
    name: 'version', alias: 'v', type: Boolean,
    description: 'Version of this tool'
  },
  {
    name: 'help', alias: 'h', type: Boolean,
    description: 'Display this help guide'
  }
];

const cliSections = [
  {
    header: 'command-line-publish',
    // Add italics: `{italic textToItalicize}`
    content: pkg.description +
      '\n\n{italic clp -c="configPath" [--format=svg|html] target}'
  },
  {
    header: 'Options',
    optionList: optionDefinitions
  }
];

exports.definitions = optionDefinitions;
exports.sections = cliSections;
