// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    'browser': true,
    'node': true,
    'es6': true,
    'jquery': true
  },
  extends: [
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    'standard',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      'webpack': {
        'config': 'webpack.config.babel.js'
      }
    }
  },
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never'
    }],
    'arrow-parens': 1,
    'no-multi-spaces': 1,
    'key-spacing': 1,
    'no-unused-vars': 1,
    'no-undef': 1,
    'indent': 1,
    'no-console': 1,
    'no-new': 1,
    'object-curly-spacing': 1,
    'arrow-body-style': [2, 'as-needed'],
    'no-param-reassign': [2, { 'props' : false }],
    'func-names': 1,
    'space-before-function-paren': 1
  }
}
