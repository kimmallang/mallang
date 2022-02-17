const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/mallang',
        createProxyMiddleware({
            // target: 'http://localhost:8080',
            target: 'https://bobby-djk.herokuapp.com',
            changeOrigin: true,
        })
    );
};