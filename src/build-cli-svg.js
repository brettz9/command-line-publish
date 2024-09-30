import {writeFile} from 'fs/promises';
import ansiToSVG from 'ansi-to-svg';
import commandLineUsage from 'command-line-usage';

const buildCliSvg = async (
  cliSections, {target, ansiToSvgOptions /* , title */}
) => {
  if (!Array.isArray(cliSections)) {
    throw new TypeError('You must include a `cliSections` array');
  }
  if (!target || typeof target !== 'string') {
    throw new TypeError('You must include a valid `target` argument');
  }
  const ansiText = commandLineUsage(cliSections);
  const ansiSVG = ansiToSVG(ansiText, ansiToSvgOptions);
  // Todo: Inject the `title`
  await writeFile(
    // new URL(target, import.meta.url).pathname,
    target,
    ansiSVG
  );
};

export default buildCliSvg;
