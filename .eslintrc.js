'use strict';

module.exports = {
  env: {
    node: true,
    browser: false
  },
  extends: [
    'ash-nazg/sauron-node-script-overrides'
  ],
  settings: {
    polyfills: [
    ]
  },
  overrides: [
    {
      files: ['bin/**'],
      rules: {
        'no-console': 0
      }
    },
    {
      files: ['**/*.md/*.js'],
      rules: {
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
