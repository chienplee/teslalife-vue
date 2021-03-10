import {
  forcastOverview,
  youtubeSubscribe,
  twitterOverview,
  instagramOverview,
  linkdinOverview,
  SocialTrafficMetrics,
  cashFlow,
  income,
  device,
  region,
  trafficChanel,
  performance,
} from '../../../demoData/dashboardChartContent.json';
import mutations from './mutations';

const state = () => ({
  forcastData: null,
  foLoading: false,
  youtubeSubscribeData: null,
  yuLoading: false,
  closeDealData: null,
  cdLoading: false,
  recentDealData: null,
  recLoading: false,
  socialTrafficData: null,
  soLoading: false,
  twitterOverviewData: null,
  twLoading: false,
  instagramOverviewData: null,
  inLoading: false,
  linkdinOverviewData: null,
  liLoading: false,
  cashFlowData: null,
  cfLoading: false,
  incomeData: null,
  icLoading: false,
  performanceData: null,
  perLoading: false,
  trafficChanelData: null,
  tcLoading: false,
  deviceData: null,
  dvLoading: false,
  landingPageData: null,
  lpLoading: false,
  regionData: null,
  reLoading: false,
  generatedData: null,
  geLoading: false,
  topSaleData: null,
  tsLoading: false,
  locationData: null,
  loLoading: false,
  error: null,
});

const actions = {
  async performanceGetData({ commit }) {
    const { year } = performance;
    try {
      commit('performanceBegin');
      commit('performanceSuccess', year);
    } catch (err) {
      commit('performanceErr', err);
    }
  },
  async performanceFilterData({ commit }, value) {
    try {
      commit('performanceBegin');
      setTimeout(() => {
        commit('performanceSuccess', performance[value]);
      }, 100);
    } catch (err) {
      commit('performanceErr', err);
    }
  },
  async trafficChanelGetData({ commit }) {
    const { year } = trafficChanel;
    try {
      commit('trafficChanelBegin');
      commit('trafficChanelSuccess', year);
    } catch (err) {
      commit('trafficChanelErr', err);
    }
  },
  async trafficChanelFilterData({ commit }, value) {
    try {
      commit('trafficChanelBegin');
      setTimeout(() => {
        commit('trafficChanelSuccess', trafficChanel[value]);
      }, 100);
    } catch (err) {
      commit('trafficChanelErr', err);
    }
  },
  async landingPageGetData({ commit }) {
    const { year } = trafficChanel;
    try {
      commit('landingPageBegin');
      commit('landingPageSuccess', year);
    } catch (err) {
      commit('landingPageErr', err);
    }
  },
  async landingPageFilterData({ commit }, value) {
    try {
      commit('landingPageBegin');
      setTimeout(() => {
        commit('landingPageSuccess', trafficChanel[value]);
      }, 100);
    } catch (err) {
      commit('landingPageErr', err);
    }
  },
  async regionGetData({ commit }) {
    const { year } = region;
    try {
      commit('regionBegin');
      commit('regionSuccess', year);
    } catch (err) {
      commit('regionErr', err);
    }
  },
  async regionFilterData({ commit }, value) {
    try {
      commit('regionBegin');
      setTimeout(() => {
        commit('regionSuccess', region[value]);
      }, 100);
    } catch (err) {
      commit('regionErr', err);
    }
  },
  async deviceGetData({ commit }) {
    const { year } = device;
    try {
      commit('deviceBegin');
      commit('deviceSuccess', year);
    } catch (err) {
      commit('deviceErr', err);
    }
  },
  async deviceFilterData({ commit }, value) {
    try {
      commit('deviceBegin');
      setTimeout(() => {
        commit('deviceSuccess', device[value]);
      }, 100);
    } catch (err) {
      commit('deviceErr', err);
    }
  },
  async incomeGetData({ commit }) {
    const { year } = income;
    try {
      commit('incomeBegin');
      commit('incomeSuccess', year);
    } catch (err) {
      commit('incomeErr', err);
    }
  },
  async incomeFilterData({ commit }, value) {
    try {
      commit('incomeBegin');
      setTimeout(() => {
        commit('incomeSuccess', income[value]);
      }, 100);
    } catch (err) {
      commit('incomeErr', err);
    }
  },
  async cashFlowGetData({ commit }) {
    const { year } = cashFlow;
    try {
      commit('cashFlowBegin');
      commit('cashFlowSuccess', year);
    } catch (err) {
      commit('cashFlowErr', err);
    }
  },
  async cashFlowFilterData({ commit }, value) {
    try {
      commit('cashFlowBegin');
      setTimeout(() => {
        commit('cashFlowSuccess', cashFlow[value]);
      }, 100);
    } catch (err) {
      commit('cashFlowErr', err);
    }
  },
  async socialTrafficGetData({ commit }) {
    const { today } = SocialTrafficMetrics;
    try {
      commit('socialTrafficBegin');
      commit('socialTrafficSuccess', today);
    } catch (err) {
      commit('socialTrafficErr', err);
    }
  },
  async socialTrafficFilterData({ commit }, value) {
    try {
      commit('socialTrafficBegin');
      setTimeout(() => {
        commit('socialTrafficSuccess', SocialTrafficMetrics[value]);
      }, 100);
    } catch (err) {
      commit('socialTrafficErr', err);
    }
  },
  async linkdinOverviewGetData({ commit }) {
    const { month } = linkdinOverview;
    try {
      commit('linkdinOverviewBegin');
      commit('linkdinOverviewSuccess', month);
    } catch (err) {
      commit('linkdinOverviewErr', err);
    }
  },

  async linkdinOverviewFilterData({ commit }, value) {
    try {
      commit('linkdinOverviewBegin');
      setTimeout(() => {
        commit('linkdinOverviewSuccess', linkdinOverview[value]);
      }, 100);
    } catch (err) {
      commit('linkdinOverviewErr', err);
    }
  },

  async instagramOverviewGetData({ commit }) {
    const { month } = instagramOverview;
    try {
      commit('instagramOverviewBegin');
      commit('instagramOverviewSuccess', month);
    } catch (err) {
      commit('instagramOverviewErr', err);
    }
  },

  async instagramOverviewFilterData({ commit }, value) {
    try {
      commit('instagramOverviewBegin');
      setTimeout(() => {
        commit('instagramOverviewSuccess', instagramOverview[value]);
      }, 100);
    } catch (err) {
      commit('instagramOverviewErr', err);
    }
  },

  async forcastOverviewGetData({ commit }) {
    const { today } = forcastOverview;
    try {
      commit('forcastOverviewBegin');
      commit('forcastOverviewSuccess', today);
    } catch (err) {
      commit('forcastOverviewErr', err);
    }
  },

  async forcastOverviewFilterData({ commit }, value) {
    try {
      commit('forcastOverviewBegin');
      setTimeout(() => {
        commit('forcastOverviewSuccess', forcastOverview[value]);
      }, 100);
    } catch (err) {
      commit('forcastOverviewErr', err);
    }
  },

  async youtubeSubscribeGetData({ commit }) {
    const { year } = youtubeSubscribe;

    try {
      commit('youtubeSubscribeBegin');
      commit('youtubeSubscribeSuccess', year);
    } catch (err) {
      commit('youtubeSubscribeErr', err);
    }
  },

  async youtubeSubscribeFilterData({ commit }, value) {
    try {
      commit('youtubeSubscribeBegin');
      setTimeout(() => {
        commit('youtubeSubscribeSuccess', youtubeSubscribe[value]);
      }, 100);
    } catch (err) {
      commit('youtubeSubscribeErr', err);
    }
  },
  async twitterOverviewGetData({ commit }) {
    const { month } = twitterOverview;
    try {
      commit('twitterOverviewBegin');
      commit('twitterOverviewSuccess', month);
    } catch (err) {
      commit('twitterOverviewErr', err);
    }
  },

  async twitterOverviewFilterData({ commit }, value) {
    try {
      commit('twitterOverviewBegin');
      setTimeout(() => {
        commit('twitterOverviewSuccess', twitterOverview[value]);
      }, 100);
    } catch (err) {
      commit('twitterOverviewErr', err);
    }
  },
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
};
