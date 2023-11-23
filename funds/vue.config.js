const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    host: 'localhost',
    port:8080,
    proxy: {
      '/proxy': {
        target: "http://localhost:8888/api/",
        changeOrigin: true,
        pathRewrite: {
          '^/proxy': '/'
        }
      }
    }
  }
})
