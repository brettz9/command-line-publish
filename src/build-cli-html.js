'use strict';

const fs = require('fs');
const AnsiToHTML = require('ansi-to-html/lib/ansi_to_html.js');
const commandLineUsage = require('command-line-usage');

const {promises: {writeFile}} = fs;

module.exports = async (cliSections, {target, ansiToHtmlOptions}) => {
  if (!Array.isArray(cliSections)) {
    throw new TypeError('You must include a `cliSections` array');
  }
  if (!target || typeof target !== 'string') {
    throw new TypeError('You must include a valid `target` argument');
  }
  const ansiToHTML = new AnsiToHTML({
    newline: true, space: true, ...ansiToHtmlOptions
  });
  const ansiText = commandLineUsage(cliSections);
  // console.log('Escaped', ansiText.replace(/\u001B/gu, '<esc>'));
  await writeFile(
    // new URL(target, import.meta.url).pathname,
    target,
    `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <link href="data:image/x-icon;," type="image/x-icon"
        rel="shortcut icon" />
      <title>Git Utilities CLI docs</title>
      <style>
      body {
          @keyframes blink {
            50% {
              opacity: 0;
            }
          }
          font-family: monospace;
      }
      </style>
    </head>
    ${ansiToHTML.toHtml(ansiText.replace(/\\/gu, '\\'))}
    </body>
    </html>
  `
  );
};
