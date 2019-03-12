module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    es6: true,
    jest: true,
    commonjs: true,
  },
  plugins: ['react', 'jsx-a11y', 'prettier'],
  globals: {
    graphql: false,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  rules: {
    quotes: ['error', 'single'],
    'max-len': ['error', 120],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js'],
      },
    ],
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
  },
};
