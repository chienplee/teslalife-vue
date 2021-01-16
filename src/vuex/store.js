import Vue from "vue";
import Vuex from "vuex";
import themeLayout from './modules/themeLayout';

Vue.use(Vuex);
// const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
    modules: {
        themeLayout,
        getters :{
            darkMode: state => state.darkMode,
            rtl: state => {
                return state.rtl
            },
            topMenu: state => state.topMenu
        }
    },
    
});