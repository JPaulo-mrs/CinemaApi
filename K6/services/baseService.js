export class BaseService {
  constructor(base_uri) {
    this.base_uri = base_uri;
    this.response = null;
  }

  getResponse() {
    return this.response;
  }
}
