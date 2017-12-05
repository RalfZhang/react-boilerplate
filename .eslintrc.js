module.exports = {
  root: true,
  "parser": "babel-eslint",
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    }
  },
  env: {
      "browser": true
  },
  rules: {
    'no-console': 2
  }
}