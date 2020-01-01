module.exports = {
    env: {
      node: true,
      browser: false
    },
    extends: [
      'ash-nazg/sauron-node', 'plugin:node/recommended-script'
    ],
    settings: {
      polyfills: [
      ],
      jsdoc: {
        // For `jsdoc/check-examples` in `ash-nazg`
        matchingFileName: 'dummy.md',
        rejectExampleCodeRegex: '^`',
      }
    },
    overrides: [
      {
        files: ['bin/**'],
        rules: {
          'no-console': 0
        }
      },
      {
        files: ['**/*.md'],
        rules: {
          'eol-last': 'off',
          'no-console': 'off',
          'no-undef': 'off',
          'no-unused-vars': 'warn',
          'padded-blocks': 'off',
          'import/unambiguous': 'off',
          'import/no-unresolved': 'off',
          'node/no-missing-import': 'off',
          'node/no-missing-require': 'off',
          'func-names': 'off',
          'import/newline-after-import': 'off',
          'node/no-unpublished-require': 'off',
          strict: 'off',
          // Disable until eslint-plugin-jsdoc may fix: https://github.com/gajus/eslint-plugin-jsdoc/issues/211
          indent: 'off'
        }
      }
    ],
    globals: {
      // By some ESLint bug, config overrides not working with globals
      require: 'readonly',
      module: 'readonly',
      exports: 'writable'
    },
    rules: {
      'node/exports-style': 'off',
      'import/no-commonjs': 'off',
      'compat/compat': 'off',
      'node/no-unsupported-features/node-builtins': ['error', {
        ignores: ['fs.promises']
      }]
    }
  };
