module.exports = {
  env: {
    es6: true,
    node: true,
    'jest/globals': true
  },
  extends: ['eslint:recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'jest'],
  files: ['*.ts'],
  rules: {
    quotes: ['warning', 'single', { allowTemplateLiterals: true }],
    semi: ['error', 'always'],
    indent: ['warning', 2],
    '@typescript-eslint/no-unused-vars': [2, { args: 'none' }]
  }
};
