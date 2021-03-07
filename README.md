# cucumber-components

Vue component library example for Digit Koodikerho.  
This simple project was set up using Vue CLI 3 and Vue Styleguidist plugin.

## Getting started

### Install dependencies

```
npm install
```

### Start Styleguidist server
```
npm run styleguide
```

## Configuring Styleguidist

Styleguidist environment can be configured in `styleguide.config.js`   
[Vue Styleguidist documentation](https://vue-styleguidist.github.io/Configuration.html)

## Publishing

You need Vue CLI 3 to run the build script.

1. Import and register your components globally in `./src/index.js`
2. Build as library `npm run build`
3. Publish to npm `npm publish`