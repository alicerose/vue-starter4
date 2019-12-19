import api from "@/api";

/**
 * https://reqres.in/
 * @type {ReqresApi}
 */
export const Reqres = new (class ReqresApi extends api {
  HOST = "https://reqres.in/api/";
  USERS = "users";

  /**
   * GET
   * @returns {*}
   */
  getUserList(params) {
    return super.get(this.HOST, this.USERS, params);
  }
})();
