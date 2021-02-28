import Vue from "vue";
import Vuex from "vuex";
import themeLayout from './modules/themeLayout';
import gallery from './modules/gallery';

Vue.use(Vuex);
// const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
    modules: {
        themeLayout,
        gallery      
    },
    
});