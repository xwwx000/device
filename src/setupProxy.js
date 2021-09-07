const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports=function (app){
    app.use(createProxyMiddleware("/devApi",{
        target: process.env.REACT_APP_BASE_URL,
        changeOrigin:true,
        pathRewrite:{
            "^/devApi":""
        }
    }))
    app.use(createProxyMiddleware("/proApi",{
        target: process.env.REACT_APP_BASE_URL,
        changeOrigin:true,
        pathRewrite:{
            "^/proApi":""
        }
    }))
}