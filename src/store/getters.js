/**
 *
 * @type {{GETTER_API_LOADING: (function(*, *): number)}}
 */
const getters = {
  GETTER_API_LOADING: state => {
    return state.API.LOADING;
  }
};

export default getters;
