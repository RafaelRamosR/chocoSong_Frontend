const { defineConfig } = require('@vue/cli-service')

// Inside vue.config.js
module.exports = defineConfig({
  transpileDependencies: true,
  // ...other vue-cli plugin options...
  pwa: {
    name: 'song-app',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      skipWaiting: true
      // ...other Workbox options...
    }
  }
})
