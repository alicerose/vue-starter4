import api from "@/api";

/**
 * https://reqres.in/
 * @type {ReqresApi}
 */
export const Reqres = new (class ReqresApi extends api {
  HOST = "https://reqres.in/api/";
  USERS = "users";
  USER = "users/";

  /**
   * User list
   * @param params
   * @returns {Promise<unknown>}
   */
  getUserList(params) {
    return super.get(this.HOST, this.USERS, params);
  }

  /**
   * User
   * @param params
   * @returns {Promise<unknown>}
   */
  getUser(params) {
    return super.get(this.HOST, this.USER + params);
  }
})();
