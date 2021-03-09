import { forcastOverview, youtubeSubscribe } from '../../../demoData/dashboardChartContent.json';
import Mutations from './mutations';

const state = () => ({
  forcastOverviewState: null,
  foLoading: false,
  youtubeSubscribeData: null,
  yuLoading: false,
  error: null,
});

const mutations = {
  ...Mutations,
};

const actions = {
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
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
};
