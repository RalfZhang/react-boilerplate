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
  plugins: [
    'react',
  ],
  rules: {
    'no-console': 0,
    'linebreak-style': 0,
    "react/jsx-uses-react": 2,
    // "react/jsx-uses-vars": 2,
  }
}