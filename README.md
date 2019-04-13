# @jitesoft/eslint-config

Semi-standard config packaged to make it easier to modify by Jitesoft organization.

Installation:

```bash
npm i --save-dev @jitesoft/eslint-config \
                 eslint-plugin-node eslint-plugin-promise \
                 eslint-plugin-standard eslint-plugin-es \
                 eslint-plugin-import eslint-plugin-jest

yarn add --dev @jitesoft/eslint-config \
                 eslint-plugin-node eslint-plugin-promise \
                 eslint-plugin-standard eslint-plugin-es \
                 eslint-plugin-import eslint-plugin-jest
```

Due to the nature of ESLint, the plugins above are required to be installed manually for now.

## Configurations

There are four configurations abailable:

`default`, `node`, `browser` and `jest`. Each of the exposes some extra globals and sets the environment to the expected
values.
