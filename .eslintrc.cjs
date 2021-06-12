'use strict';

module.exports = {
  env: {
    node: true,
    browser: false
  },
  extends: [
    'ash-nazg/sauron-node-overrides'
  ],
  parser: '@babel/eslint-parser',
  settings: {
    polyfills: [
    ]
  },
  overrides: [
    {
      files: ['bin/*'],
      rules: {
        'no-console': 0
      }
    },
    {
      files: ['**/*.md/*.js'],
      rules: {
        'import/no-unresolved': ['error', {
          ignore: [
            'command-line-publish', 'fs/promises', './path/to/config-file.js'
          ]
        }],
        'node/no-missing-require': 'off'
      }
    }
  ],
  rules: {
    'node/exports-style': 'off',
    'compat/compat': 'off',
    'node/no-unsupported-features/node-builtins': ['error', {
      // Experimental in 10.0.0 and seems ok
      ignores: ['fs.promises']
    }]
  }
};
