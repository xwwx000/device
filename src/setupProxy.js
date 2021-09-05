const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports=function (app){
    app.use(createProxyMiddleware("/api",{
        target:"http://localhost:8888",
        changeOrigin:true,
        pathRewrite:{
            "^/api":""
        }
    }))
    app.use(createProxyMiddleware("/manage/api",{
        target:"http://localhost:8000",
        changeOrigin:true,
    }))
}