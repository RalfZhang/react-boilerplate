module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    }
  },
  env: {
    "browser": true
  },
  extends: 'airbnb-base',
  rules: {
    'no-console': 0,
    'linebreak-style': 0
  }
}