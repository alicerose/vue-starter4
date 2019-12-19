import axios from "axios";

const withCredentials = false;
const api = axios.create({
  withCredentials
});

export default class {
  /**
   * API Call
   * @param callMethod
   * @param path
   * @param params
   * @returns {Promise<unknown>}
   */
  request(callMethod, path, params) {
    console.log("[API]", callMethod, ":", path, params);
    return new Promise(async resolve => {
      resolve(api[callMethod](path, params));
    });
  }
  post(endpoint, path, params) {
    return this.request("post", endpoint + path, params);
  }
  get(endpoint, path, params = null) {
    return this.request("get", endpoint + path, { params: params });
  }
  put(endpoint, path, params) {
    return this.request("put", endpoint + path, params);
  }
  delete(endpoint, path, params) {
    return this.request("delete", endpoint + path, params);
  }
}
