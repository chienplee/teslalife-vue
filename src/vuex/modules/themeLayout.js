import staticData from '../../config/config';
const { darkMode, rtl, topMenu } = staticData;

const state = ()=>({
    darkMode,
    rtl,
    topMenu,      
  });

  const getters = {
      darkMode: state => state.darkMode,
      rtl: state => state.rtl,
      topMenu: state => state.topMenu
  }

  export default {
    namespaced: false,
    state,
    getters,    
  }