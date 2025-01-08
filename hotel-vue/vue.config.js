const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 9001 ,
    client: {
      overlay: false
    }
  },
  lintOnSave: false //关闭eslint
})
