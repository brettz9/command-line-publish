import {writeFile} from 'fs/promises';
import AnsiToHTML from 'ansi-to-html/lib/ansi_to_html.js';
import commandLineUsage from 'command-line-usage';

const buildCliHtml = async (cliSections, {
  target, ansiToHtmlOptions, title
}) => {
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
      <title>${title || 'CLI Docs'}</title>
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
    ${ansiToHTML.toHtml(ansiText.replaceAll('\\', '\\\\'))}
    </body>
    </html>
  `
  );
};

export default buildCliHtml;
