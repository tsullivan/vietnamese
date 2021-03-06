module.exports = {
  env: { browser: true, es6: true },
  globals: { Atomics: 'readonly', SharedArrayBuffer: 'readonly' },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 2018, sourceType: 'module' },
  plugins: ['@typescript-eslint'],
  rules: {
    'space-in-parens': ['error', 'never'],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': ['warn', { args: 'none', vars: 'all' }],
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'no-shadow': ['error'],
    'no-unused-vars': 0,
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    semi: ['error', 'always'],
    'sort-imports': ['error'],
  },
  plugins: ['prettier', '@typescript-eslint'],
};
