module.exports = {
  runtimeCompiler: true,
  devServer: {
    port: 8080, // 端口号
    // host: "localhost",
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器
    proxy: {
      "/api": {
        target: process.env.VUE_APP_ROOT,
        ws: true,
        bypass: function(req, res, proxyOptions) {},
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api"
        }
      },
      "/foo": {
        target: "http://192.168.53.254:8081",
        ws: true,
        bypass: function(req, res, proxyOptions) {},
        changeOrigin: true,
        pathRewrite: {
          "^/foo": "/foo"
        }
      }
    } // 配置多个代理
  }
};
