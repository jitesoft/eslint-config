module.exports = {
  extends: ['@jitesoft', 'plugin:jest/recommended', 'plugin:jest/style'],
  plugins: [
    'jest'
  ],
  globals: {
    'describe': true,
    'test': true,
    'it': true,
    'expect': true,
  },
  env: {
    'jest/globals': true
  }
};
