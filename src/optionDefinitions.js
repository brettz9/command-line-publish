import {readFile} from 'fs/promises';

const pkg = JSON.parse(
  await readFile(new URL('../package.json', import.meta.url))
);

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
    description: 'Format of the output; defaults to "svg".',
    typeLabel: '{underline "svg"|"html"}'
  },
  {
    name: 'title', type: String,
    description: 'Title tag text; defaults to "CLI Docs".',
    typeLabel: '{underline title string}'
  }
];

const cliSections = [
  {
    // Add italics: `{italic textToItalicize}`
    content: pkg.description +
      '\n\n{italic clp -c="configPath" [--format=svg|html] target}'
  },
  {
    optionList: optionDefinitions
  }
];

export {optionDefinitions as definitions, cliSections as sections};
