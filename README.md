# @jitesoft/eslint-config

[![npm (scoped)](https://img.shields.io/npm/v/@jitesoft/eslint-config)](https://www.npmjs.com/package/@jitesoft/eslint-config)
[![Known Vulnerabilities](https://dev.snyk.io/test/npm/@jitesoft/eslint-config/badge.svg)](https://dev.snyk.io/test/npm/@jitesoft/eslint-config)
[![npm](https://img.shields.io/npm/dt/@jitesoft/eslint-config)](https://www.npmjs.com/package/@jitesoft/eslint-config)
[![Back project](https://img.shields.io/badge/Open%20Collective-Tip%20the%20devs!-blue.svg)](https://opencollective.com/jitesoft-open-source)

Semi-standard shareable config to make it easier to modify by Jitesoft organization.

Installation:

```bash
npm i --save-dev @jitesoft/eslint-config

yarn add --dev @jitesoft/eslint-config
```

## Configurations

There are four configurations available:

`default`, `node`, `browser`, `jsx` and `jest`.  
 
As expected, the Node and Browser configurations are set to use globals for the environment.
The `default` configuration is a mixed node/web configuration, while the `jest` configuration
is created for code which uses the `jest` test framework.  
 
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
