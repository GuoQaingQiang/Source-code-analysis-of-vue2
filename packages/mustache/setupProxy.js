const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.use("/", createProxyMiddleware({
        target: "http://10.190.176.147:30666",
        changeOrigin: true,
        headers: {
            Authorization: "Basic YWRtaW4="
        },
        pathRewrite: {
            "^/flows": ""
        },
        onOpen(err, req, res, target){
            console.log("++++++++++++++++++")
            console.log("onOpen");
        },
        onError(err, req, res, target){
            console.log("++++++++++++++++++")
            console.log(err);
        },
        onProxyReq(proxyReq, req, res) {
            console.log("++++++++++++++++++")
            console.log("onProxyReq");
        },
        onOpen(proxySocket){
            console.log("++++++++++++++++++")
            console.log("onOpen");
        }

    }))
}