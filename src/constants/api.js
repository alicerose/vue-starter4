/**
 * Axios初期設定
 * @type {{withCredentials: boolean, timeout: number}}
 */
export const API_CONFIGS = {
  withCredentials: false,
  timeout: 10000,
  onUploadProgress: progressEvent => {
    let rate = Math.round((progressEvent.loaded * 100) / progressEvent.total);
    console.log("[PROGRESS]", progressEvent, rate);
  }
};

/**
 *
 * @type {string}
 */
export const QIITA_API_HOST = process.env.VUE_APP_QIITA_API_HOST;

/**
 *
 * @type {string}
 */
export const QIITA_API_ENDPOINT = process.env.VUE_APP_QIITA_API_ENDPOINT;

/**
 *
 * @type {string}
 */
export const QIITA_API_TOKEN = process.env.VUE_APP_QIITA_API_TOKEN;
