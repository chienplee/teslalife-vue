export default {
  /* loginBegin(state) {
    state.login = true;
    state.isLoggedIn = true
  }, */
  loginSuccess(state, data) {
    /*  state.loading = false;
     state.login = data; */
    state.isLoggedIn = true
    window.localStorage.setItem('token', data.token)
    window.localStorage.setItem('username', data.user_display_name)
  },
  setUser(state, data) {
    state.username = data;
  },
  loginErr(state, err) {
    /* state.loading = false; */
    state.error = err;
  },

 /*  logoutBegin(state) {
    state.loading = true;
  }, */

  logoutSuccess(state) {
    state.username = null;
    /*  state.loading = false; */
    state.isLoggedIn = false;
    /*  state.login = data; */
    window.localStorage.clear();
  },

  logoutErr(state, err) {
    /*  state.loading = false; */
    state.error = err;
  },
};
