import ashNazg from 'eslint-config-ash-nazg';

export default [
  ...ashNazg(['sauron', 'node']),
  {
    files: ['bin/*'],
    rules: {
      'no-console': 0
    }
  },
  {
    rules: {
    }
  }
];
