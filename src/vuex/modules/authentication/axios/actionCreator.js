import mutations from './mutations';
/* import Cookies from 'js-cookie'; */

const state = () => ({
  /* login: Cookies.get('logedIn'),
  loading: false, */
  error: null,
  username: window.localStorage.getItem('username') || null,
  isLoggedIn: window.localStorage.getItem('username') ? true : false
});

const actions = {
  async login({ commit }, userInfo) {
    //console.log(token)
    try {
      //commit('loginBegin');
      //Cookies.set('logedIn', true);
      commit('setUser', userInfo.user_display_name);
      return commit('loginSuccess', userInfo);
    } catch (err) {
      commit('loginErr', err);
    }
  },
  async logOut({ commit }) {
    try {
      /* commit('logoutBegin'); */
      /* Cookies.remove('logedIn'); */
      commit('logoutSuccess');
    } catch (err) {
      commit('logoutErr', err);
    }
  },
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
};
