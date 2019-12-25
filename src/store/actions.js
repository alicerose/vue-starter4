/**
 * @type {{}}
 */
const actions = {
  API_LOADING_BEGIN(context) {
    context.commit("API_COUNT_ADD");
  },
  API_LOADING_DONE(context) {
    context.commit("API_COUNT_SUB");
  }
};

export default actions;
