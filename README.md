# @jitesoft/eslint-config

Semi-standard shareable config to make it easier to modify by Jitesoft organization.

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

Due to the nature of ESLint and the way it loads plugins it is currently required that the user 
installs all the plugins manually for now.

## Configurations

There are four configurations abailable:

`default`, `node`, `browser` and `jest`. Each of the exposes some extra globals and 
sets the environment to the expected values.

## Usage

To extend the base/default config, just use the scoped name as such:

```json
{
  "extends": "@jitesoft"  
}
```

To be able to use the other configurations, the whole name have to be included:

```json
{
  "extends": "@jitesoft/eslint-config/jest"
}
```
