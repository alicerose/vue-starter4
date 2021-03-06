import axios from "axios";
import { API_CONFIGS, QIITA_API_HOST, QIITA_API_TOKEN } from "@/constants/api";
import store from "@/store/";

/**
 * add api loading count when connection begin
 * @returns {undefined|Promise<any>}
 * @constructor
 */
const API_LOADING_START = () => store.dispatch("API_LOADING_BEGIN");

/**
 * subtract api loading count when connection end
 * @returns {undefined|Promise<any>}
 * @constructor
 */
const API_LOADING_END = () => store.dispatch("API_LOADING_DONE");

/**
 * Axios
 * @type {AxiosInstance}
 */
const api = axios.create({
  ...API_CONFIGS
});

/**
 * Request Interceptors
 */
api.interceptors.request.use(
  request => {
    API_LOADING_START().then(() => {});

    const host = new URL(request.url);

    /**
     * @todo: avoid conditional in interceptor
     */
    if (host.origin === QIITA_API_HOST) {
      request.headers.Authorization = "Bearer " + QIITA_API_TOKEN;
    }
    // console.log("[API] configs: ", api.defaults);
    console.log("[API] request: ", request);
    return request;
  },
  error => {
    API_LOADING_END().then(() => {});
    console.error("[API] request error: ", error);
    return Promise.reject(error);
  }
);

/**
 * Response Interceptors
 */
api.interceptors.response.use(
  response => {
    API_LOADING_END().then(() => {});
    console.log("[API] response: ", response);
    return response;
  },
  error => {
    API_LOADING_END().then(() => {});
    console.error("[API] response error: ", error);
    return Promise.reject(error);
  }
);

/**
 * @todo: cancel token
 */
export default class {
  /**
   * API Request
   * @param method
   * @param path
   * @param params
   * @returns {Promise<unknown>}
   */
  request(method, path, params) {
    return api[method](path, params);
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
  patch(endpoint, path, params) {
    return this.request("patch", endpoint + path, params);
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
