import moment from "moment";

export class QiitaPosts {
  /**
   *
   * @param post
   */
  constructor(post) {
    for (let key in post) {
      this[key] = post[key];
    }
  }

  /**
   *
   * @param post
   * @returns {QiitaPosts}
   */
  static create(post) {
    return new QiitaPosts(post);
  }

  /**
   *
   * @param posts
   * @returns {[]}
   */
  static creates(posts) {
    if (Array.isArray(posts)) {
      const arr = [];
      for (const post of posts) {
        arr.push(QiitaPosts.create(post));
      }
      return arr;
    } else {
      console.error("Non array given.");
    }
  }

  /**
   *
   * @returns {string}
   */
  get postTime() {
    const date = moment(new Date(this.created_at));
    return date.format("YYYY年MM月DD日 HH:mm");
  }
}
