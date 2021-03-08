# cucumber-components

Vue component library example for Digit Koodikerho.  
This simple project was set up using Vue CLI 3 and Vue Styleguidist plugin.

## Getting started

You should be fine running the styleguide with just npm. However Vue CLI (requires Node.js) is needed to run the build script. It is also recommended to install Vue.js dev tools browser extension for better development experience.

### Tools

If you have npm and Node.js installed, install Vue CLI 3

```
npm install -g @vue/cli@3.12.1
```

### Install dependencies

```
npm install
```

### Start Styleguidist server
```
npm run styleguide
```

## Configuring Styleguidist

Styleguidist environment can be configured in `./styleguide.config.js`
[Vue Styleguidist documentation](https://vue-styleguidist.github.io/Configuration.html)

## Publishing

You need Vue CLI 3 to run the build script. Make sure you are logged in to npm and the `package.json` is set up [properly](https://docs.npmjs.com/cli/v7/configuring-npm/package-json).
If you are publishing a new version, remember to up the version number.

1. Import and register your components globally in `./src/index.js`
2. Build as library `npm run build`
3. Publish to npm `npm publish`
