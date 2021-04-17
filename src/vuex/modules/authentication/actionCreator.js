import mutations from './mutations';

const state = () => ({
  login: null,
  loading: false,
  error: null,
});

const actions = {};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
};
