import proxy from "express-http-proxy";
import { Express } from "express";

class ApiGateway {
  private app: Express;
  private path: string;
  private url: string;

  constructor(app: Express) {
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
