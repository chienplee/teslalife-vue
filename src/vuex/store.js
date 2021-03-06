import { createStore } from 'vuex'
import themeLayout from './modules/themeLayout';
import gallery from './modules/gallery';
import users from './modules/users';

export default createStore({
    modules: {
        themeLayout,
        gallery,
        users    
    },
    
});