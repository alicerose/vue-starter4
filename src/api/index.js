import axios from "axios";
import { API_CONFIGS } from "@/constants/configs";

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
    console.log("[API] configs: ", api.defaults);
    console.log("[API] request: ", request);
    return request;
  },
  error => {
    console.error("[API] request error: ", error);
    return Promise.reject(error);
  }
);

/**
 * Response Interceptors
 */
api.interceptors.response.use(
  response => {
    console.log("[API] response: ", response);
    return response;
  },
  error => {
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
   * @param callMethod
   * @param path
   * @param params
   * @returns {Promise<unknown>}
   */
  request(callMethod, path, params) {
    return api[callMethod](path, params);
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
