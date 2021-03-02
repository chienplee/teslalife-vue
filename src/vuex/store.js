import { createStore } from 'vuex'
import themeLayout from './modules/themeLayout';
import gallery from './modules/gallery';

export default createStore({
    modules: {
        themeLayout,
        gallery      
    },
    
});