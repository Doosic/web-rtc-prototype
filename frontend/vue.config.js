const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    port: 8099,
    proxy: {
      '/dtc/': {
        target: 'http://localhost:8098',
        //   ws: true, // proxy websockets
        changeOrigin: true,
        logLevel: 'debug',
        secure: false,
        pathRewrite: {
          '^/dtc/': '/dtc/'
        }
      }
    }
  },
});
