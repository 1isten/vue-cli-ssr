module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    parser: 'babel-eslint',
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-alert': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'no-return-assign': 'off',
    'arrow-parens': 'off',
    'arrow-body-style': 'off',
    'prefer-promise-reject-errors': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
  },
};
