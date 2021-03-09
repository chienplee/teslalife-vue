export default {
  socialTrafficBegin(state) {
    state.soLoading = true;
  },

  socialTrafficSuccess(state, data) {
    state.soLoading = false;
    state.socialTrafficData = data;
  },

  socialTrafficErr(state, err) {
    state.soLoading = false;
    state.error = err;
  },

  linkdinOverviewBegin(state) {
    state.liLoading = true;
  },

  linkdinOverviewSuccess(state, data) {
    state.liLoading = false;
    state.linkdinOverviewData = data;
  },

  linkdinOverviewErr(state, err) {
    state.liLoading = false;
    state.error = err;
  },

  instagramOverviewBegin(state) {
    state.inLoading = true;
  },

  instagramOverviewSuccess(state, data) {
    state.inLoading = false;
    state.instagramOverviewData = data;
  },

  instagramOverviewErr(state, err) {
    state.inLoading = false;
    state.error = err;
  },

  twitterOverviewBegin(state) {
    state.twLoading = true;
  },

  twitterOverviewSuccess(state, data) {
    state.twLoading = false;
    state.twitterOverviewData = data;
  },

  twitterOverviewErr(state, err) {
    state.twLoading = false;
    state.error = err;
  },

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
