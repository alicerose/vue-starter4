import repositories from "@/repositories";

/**
 * https://reqres.in/
 * @type {ReqresApi}
 */
export const Reqres = new (class ReqresApi extends repositories {
  HOST = "https://reqres.in/api";
  USER = "/users";

  /**
   * GET
   * @returns {*}
   */
  getList(params) {
    return super.get(this.HOST, this.USER, params);
  }
})();
