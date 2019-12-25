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
 * Global Mixin
 * @type {{components: {}, data(): *, computed: {}, methods: {}}}
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
  methods: {}
};
