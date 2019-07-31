# @jitesoft/eslint-config

[![Known Vulnerabilities](https://dev.snyk.io/test/npm/@jitesoft/eslint-config/badge.svg)](https://dev.snyk.io/test/npm/@jitesoft/eslint-config)
[![pipeline status](https://gitlab.com/jitesoft/open-source/javascript/eslint-config/badges/master/pipeline.svg)](https://gitlab.com/jitesoft/open-source/javascript/eslint-config/commits/master)

Semi-standard shareable config to make it easier to modify by Jitesoft organization.

Installation:

```bash
npm i --save-dev @jitesoft/eslint-config

yarn add --dev @jitesoft/eslint-config
```

## Configurations

There are four configurations available:

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
