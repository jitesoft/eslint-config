module.exports = {
    extends: 'standard',
    rules: {
        semi: [
            2,
            'always'
        ],
        'no-extra-semi': 2,
        'lines-between-class-members': 0,
        noInlineConfig: 0
    },
    parserOptions: {
      ecmaVersion: 13,
      sourceType: 'module'
    },
    env: {
        node: true,
        browser: true,
        es2021: true,
        worker: true,
        'shared-node-browser': true
    }
};
