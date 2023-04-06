var proxy = require("express-http-proxy");
var ApiGateway = /** @class */ (function () {
    function ApiGateway(app) {
        this.app = app;
    }
    ApiGateway.prototype.setPath = function (path) {
        this.path = path;
        return this;
    };
    ApiGateway.prototype.setUrl = function (url) {
        this.url = url;
        return this;
    };
    ApiGateway.prototype.builder = function () {
        this.app.use(this.path, proxy(this.url));
    };
    return ApiGateway;
}());
module.exports = ApiGateway;
