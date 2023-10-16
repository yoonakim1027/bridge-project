module.exports = {
  env: {
    browser: true,
  },
  parser: '@typscript-eslint/parser',
  es6: true,
  node: false,
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typecript-eslint/recommended',
    'prettier'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    "prettier/prettier": "error",
    // 'react/react-in-jsx-scope': 'off',
  },
};

