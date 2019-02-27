module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "plugin:prettier/recommended"],
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  plugins: ["react", "jsx-a11y", "prettier"],
  globals: {
    graphql: false
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  rules: {
    "max-len": ["error", 120],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js"]
      }
    ],
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "es5",
        semi: true,
        printWidth: 120
      }
    ]
  }
};
