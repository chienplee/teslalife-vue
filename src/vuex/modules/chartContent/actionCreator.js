import {
  forcastOverview,
  youtubeSubscribe,
  twitterOverview,
  instagramOverview,
  linkdinOverview,
  SocialTrafficMetrics,
} from '../../../demoData/dashboardChartContent.json';
import Mutations from './mutations';

const state = () => ({
  forcastOverviewState: null,
  foLoading: false,
  youtubeSubscribeData: null,
  yuLoading: false,
  twitterOverviewData: null,
  twLoading: false,
  instagramOverviewData: null,
  inLoading: false,
  linkdinOverviewData: null,
  liLoading: false,
  socialTrafficData: null,
  soLoading: false,
  error: null,
});

const mutations = {
  ...Mutations,
};

const actions = {
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
