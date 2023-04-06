
const proxy = require("express-http-proxy");

class ApiGateway {
  private app: any;
  private path: string;
  private url: string;

  constructor(app: any) {
    this.app = app;
  }

  setPath(path: string) {
    this.path = path;
    return this;
  }

  setUrl(url: string) {
    this.url = url;
    return this;
  }

  builder() {
    this.app.use(this.path, proxy(this.url));
  }
}

module.exports = ApiGateway;
