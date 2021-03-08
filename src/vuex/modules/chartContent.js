import {
    forcastOverview,
    
  } from '../../demoData/dashboardChartContent.json';

const state = ()=>({
  forcastOverviewState: null,
  foLoading: false,
  error: null,
});

  
  const mutations = {
    forcastOverviewBegin(state) {
      state.foLoading = true;
    },
    forcastOverviewSuccess(state, data) {      
      state.foLoading = false;
      state.forcastOverviewState = data;
    },
    forcastOverviewErr(state, err){
      state.foLoading = false;
      state.error = err;
    }
  }

  const actions = {
    async forcastOverviewGetData ({commit}) {
        const { today } = forcastOverview;
        try {
          commit('forcastOverviewBegin');          
          commit('forcastOverviewSuccess', today);          
        } catch (err) {
          commit('forcastOverviewErr', err);
        }
      
    },
    async forcastOverviewFilterData ({commit}, value) {      
      try {
        commit('forcastOverviewBegin');  
        setTimeout(() => {
          commit('forcastOverviewSuccess', forcastOverview[value]);
        }, 100);       
                  
      } catch (err) {
        commit('forcastOverviewErr', err);
      }
    
  }
  }

  export default {
    namespaced: false,
    state,    
    actions,
    mutations  
  }