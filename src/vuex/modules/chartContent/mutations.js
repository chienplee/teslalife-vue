export default {
  performanceBegin(state) {
    state.perLoading = true;
  },

  performanceSuccess(state, data) {
    state.perLoading = false;
    state.performanceData = data;
  },

  performanceErr(state, err) {
    state.perLoading = false;
    state.error = err;
  },

  trafficChanelBegin(state) {
    state.tcLoading = true;
  },

  trafficChanelSuccess(state, data) {
    state.tcLoading = false;
    state.trafficChanelData = data;
  },

  trafficChanelErr(state, err) {
    state.tcLoading = false;
    state.error = err;
  },

  landingPageBegin(state) {
    state.lpLoading = true;
  },

  landingPageSuccess(state, data) {
    state.lpLoading = false;
    state.landingPageData = data;
  },

  landingPageErr(state, err) {
    state.lpLoading = false;
    state.error = err;
  },

  regionBegin(state) {
    state.reLoading = true;
  },

  regionSuccess(state, data) {
    state.reLoading = false;
    state.regionData = data;
  },

  regionErr(state, err) {
    state.reLoading = false;
    state.error = err;
  },

  deviceBegin(state) {
    state.dvLoading = true;
  },

  deviceSuccess(state, data) {
    state.dvLoading = false;
    state.deviceData = data;
  },

  deviceErr(state, err) {
    state.dvLoading = false;
    state.error = err;
  },

  incomeBegin(state) {
    state.icLoading = true;
  },

  incomeSuccess(state, data) {
    state.icLoading = false;
    state.incomeData = data;
  },

  incomeErr(state, err) {
    state.icLoading = false;
    state.error = err;
  },

  cashFlowBegin(state) {
    state.cfLoading = true;
  },

  cashFlowSuccess(state, data) {
    state.cfLoading = false;
    state.cashFlowData = data;
  },

  cashFlowErr(state, err) {
    state.cfLoading = false;
    state.error = err;
  },

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
    state.forcastData = data;
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
