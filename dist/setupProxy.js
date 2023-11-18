"use strict";
var createProxyMiddleware = require('http-proxy-middleware').createProxyMiddleware;
module.exports = function () {
    app.use(createProxyMiddleware('/ttb', {
        target: 'http://www.aladin.co.kr',
        changeOrigin: true,
    }));
};
