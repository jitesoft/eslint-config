module.exports = {
    extends: './node_modules/eslint-config-standard/index.js',
    rules: {
        semi: [
            2,
            'always'
        ],
        'no-extra-semi': 2
    },
    env: {
        'shared-node-browser': true,
        es6: true
    }
};
