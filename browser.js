module.exports = {
    extends: '@jitesoft',
    globals: {
        window: true,
        document: true,
        navigator: true
    },
    env: {
        node: false,
        browser: true,
        commonjs: true,
        'shared-node-browser': false
    }
};
