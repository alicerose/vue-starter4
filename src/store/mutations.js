/**
 * @type {{}}
 */
const mutations = {
  API_COUNT_ADD: state => {
    state.API.LOADING++;
  },
  API_COUNT_SUB: state => {
    state.API.LOADING--;
  }
};

export default mutations;
