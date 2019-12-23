import {
  GIT_COMMIT_HASH,
  SITE_DESCRIPTION,
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
  computed: {},
  methods: {}
};
