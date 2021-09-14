module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['react', '@typescript-eslint', 'ordered-imports'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:ordered-imports/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'ordered-imports/ordered-imports': [
      'error',
      {
        'symbols-first': true,
        'declaration-ordering': [
          'type',
          {
            ordering: ['side-effect', 'namespace', 'default', 'destructured'],
            secondaryOrdering: ['name', 'lowercase-last'],
          },
        ],
        'specifier-ordering': 'lowercase-last',
      },
    ],
  },
};
