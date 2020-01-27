# CHANGES for `command-line-publish`

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
