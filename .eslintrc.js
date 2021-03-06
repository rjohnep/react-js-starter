module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  plugins: ['react', 'react-hooks'],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: require('./package.json').dependencies.react
    }
  },
  rules: {
    'max-len': ['error', { code: 80 }],
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    'comma-dangle': ['error', 'never'],
    'object-curly-newline': ['error', {
      'ObjectExpression': 'always',
      'ObjectPattern': { 'multiline': true },
      // 'ImportDeclaration': 'never',
      'ExportDeclaration': { 'multiline': true, 'minProperties': 3 }
    }],
    'no-unused-vars': 2,
    'arrow-body-style': [2, 'as-needed'],
    'arrow-parens': ['error', 'always'],
    'jsx-a11y/label-has-associated-control': 0,
    // 'import/no-named-as-default': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'import/extensions': ['error', 'never', { 'svg': 'always' }],
    // 'react/jsx-closing-bracket-location': [1, 'line-aligned'],
    'react/jsx-uses-vars': 2,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/sort-comp': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-fragments': [2, 'element'],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }]
  }
};
