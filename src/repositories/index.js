import axios from "axios";

/**
 * Axios default configs
 * @type {{withCredentials: boolean, timeout: number}}
 */
const configs = {
  withCredentials: false,
  timeout: 5000
};
const api = axios.create({
  ...configs
});

/**
 * @todo: interceptors
 * @todo: cancel token
 */
export default class {
  /**
   * API Request
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

  /**
   *
   * @param endpoint
   * @param path
   * @param params
   * @returns {Promise<unknown>}
   */
  post(endpoint, path, params) {
    return this.request("post", endpoint + path, params);
  }

  /**
   *
   * @param endpoint
   * @param path
   * @param params
   * @returns {Promise<unknown>}
   */
  get(endpoint, path, params) {
    return this.request("get", endpoint + path, { params: params });
  }

  /**
   *
   * @param endpoint
   * @param path
   * @param params
   * @returns {Promise<unknown>}
   */
  put(endpoint, path, params) {
    return this.request("put", endpoint + path, params);
  }

  /**
   *
   * @param endpoint
   * @param path
   * @param params
   * @returns {Promise<unknown>}
   */
  delete(endpoint, path, params) {
    return this.request("delete", endpoint + path, params);
  }
}
