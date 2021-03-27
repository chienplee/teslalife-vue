export default {
  profileFriendsBegin(state) {
    state.sLoading = true;
  },

  profileFriendsSuccess(state, data) {
    state.sLoading = false;
    state.friends = data;
  },

  profileFriendsErr(state, err) {
    state.sLoading = false;
    state.error = err;
  },

  postDataBegin(state) {
    state.postLoading = true;
  },

  postDataSuccess(state, data) {
    state.postLoading = false;
    state.posts = data;
  },

  postDataErr(state, err) {
    state.postLoading = false;
    state.error = err;
  },
};
