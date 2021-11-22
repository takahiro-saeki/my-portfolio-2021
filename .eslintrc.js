module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  rules: {
    'react/prop-types': 'off',
  },
};
