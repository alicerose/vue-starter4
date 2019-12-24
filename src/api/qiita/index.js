import api from "@/api";
import { QIITA_API_ENDPOINT, QIITA_API_HOST } from "@/constants/api";

export const Qiita = new (class QiitaApi extends api {
  HOST = QIITA_API_HOST + QIITA_API_ENDPOINT;
  ITEMS = "/authenticated_user/items";

  /**
   *
   * @param params
   * @returns {Promise<unknown>}
   */
  getItems(params) {
    return super.get(this.HOST, this.ITEMS, params);
  }
})();
