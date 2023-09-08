const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData : `
          @import "@/styles/normalize.scss";
          @import "@/styles/_global.scss";
        `
      }
    }
  }
})
