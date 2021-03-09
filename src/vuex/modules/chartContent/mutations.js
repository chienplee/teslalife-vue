export default {
  forcastOverviewBegin(state) {
    state.foLoading = true;
  },

  forcastOverviewSuccess(state, data) {
    state.foLoading = false;
    state.forcastOverviewState = data;
  },

  forcastOverviewErr(state, err) {
    state.foLoading = false;
    state.error = err;
  },

  youtubeSubscribeBegin(state) {
    state.yuLoading = true;
  },

  youtubeSubscribeSuccess(state, data) {
    state.yuLoading = false;
    state.youtubeSubscribeData = data;
  },

  youtubeSubscribeErr(state, err) {
    state.yuLoading = false;
    state.error = err;
  },
};
