import {
  GIT_COMMIT_HASH,
  SITE_DESCRIPTION,
  SITE_HOST,
  SITE_TITLE,
  SITE_TITLE_SEPARATOR
} from "@/constants";

/**
 * Update title from router
 * @param title
 */
export const updateTitle = title => {
  const formatted =
    !title || title === SITE_TITLE
      ? SITE_TITLE
      : title + SITE_TITLE_SEPARATOR + SITE_TITLE;
  window.document.title = formatted;
};

/**
 * Update description from router
 * @param description
 */
export const updateDescription = description => {
  document
    .querySelector("meta[name='description']")
    .setAttribute("content", description ? description : SITE_DESCRIPTION);
};

/**
 * Update canonical url from router
 * @param path
 */
export const updateCanonical = path => {
  document
    .querySelector("link[rel='canonical']")
    .setAttribute("href", path ? path : SITE_HOST);
};

/**
 * Get Query params from current path
 * @returns {{}|boolean}
 */
export const getUrlQueries = () => {
  const url = new URL(location.href);
  if (!url.search) {
    return false;
  }
  const q = url.search.substring(1).split("&");
  const queries = {};
  for (let query of q) {
    const que = query.split("=");
    queries[que[0]] = que[1];
  }
  return queries;
};

/**
 * Global Mixin
 * @type {{components: {}, data(): {commitHash: string}, computed: {API_COUNT(): computed.$store.getters.GETTER_API_LOADING}, methods: {getUrlQueries: getUrlQueries}}}
 */
export const mixin = {
  data() {
    return {
      commitHash: GIT_COMMIT_HASH
    };
  },
  components: {},
  computed: {
    API_COUNT() {
      return this.$store.getters.GETTER_API_LOADING;
    }
  },
  methods: {
    getUrlQueries
  }
};
