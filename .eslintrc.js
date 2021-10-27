module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['next', 'eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['unused-imports', 'simple-import-sort', '@typescript-eslint'],
  rules: {
    'unused-imports/no-unused-imports': 'warn',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'no-unused-vars': 'warn',
  },
};
