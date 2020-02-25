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

## QA

Q:   
Why?
  
A:   
For an organization it's easier to keep a bundle of configurations than using a million little packages in each package.json file.
This package contains all the standards used by Jitesoft.  
Further more, if we wish to change any rules, it's a lot easier to do that in our own package than propagate it through settings files in all
repositories!

Q:  
Why hard versions in the package.json file?

A:  
To make sure that all the packages are in the exact version that we thought they where at each publish, the versions
of the sub-packages have been set to exact versions. It's hard to test and make sure that everything works as intended in case
some users use later or earlier versions (even if it is patch versions!) without knowing.

Q:  
Why semistandard and not just standard?!

A:  
Cause semicolon is best. Thats why!

Q:  
Why spaces instead of tabs?!

A:  
....
