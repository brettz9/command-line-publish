# CHANGES for `command-line-publish`

## 2.0.0 (unreleased)

BREAKING CHANGE:
Require Node ^20.11.0 || >= 22.0.0

- fix: supply `command-line-basics` notifier info
- chore: update deps., devDeps., and lint
- chore: update command-line-basics and devDeps.; remove Babel

## 1.1.0

- Enhancement: Allow supplying of title (currently HTML only), defaulting to
    "CLI Docs"
- Fix: Avoid copy-paste error producing "Git Utilities CLI docs"

## 1.0.0

### User-facing

- Breaking change: Require Node 14+
- Breaking enhancement: Native ESM
- npm: Update `command-line-basics` (major), `command-line-usage` (patch)

### Dev-facing

- npm: Update devDeps.
- npm: Avoid reusing `version` script
- npm: Switch to pnpm
- Linting: As per latest
- npm: Add `build-cli` script

## 0.7.0

- npm: Update dep. command-line basics; update devDeps.

## 0.6.1

- Fix: Was misslabeling export type as "json"; fixed to be "svg"
- Docs: Show how to get SVG link to be copy-pasteable (and make ours so)

## 0.6.0

- npm: Lower `package.json`'s `engines` to 10.0.0 as experimental
  `fs.promises` seems to still work ok.
- npm: Update devDeps

## 0.5.0

- npm: Update deps and devDeps

## 0.4.1

- Fix: backslash escaping

## 0.4.0

- npm: Update `command-line-basics`

## 0.3.0

- npm: Update `command-line-basics`

## 0.2.0

- Refactor: Use `pkg.name` for header (better reusability across projects)
- Refactor: Use external `command-line-basics` for help, version, notifier

## 0.1.0

- Initial version
