import { createStore } from 'vuex';
import themeLayout from './modules/themeLayout';
import gallery from './modules/gallery';
import users from './modules/users';
import chartContent from './modules/chartContent/actionCreator';
import email from './modules/email/actionCreator';
import headerSearchData from './modules/headerSearch/actionCreator';
import chat from './modules/chat/actionCreator';

export default createStore({
  modules: {
    themeLayout,
    gallery,
    users,
    chartContent,
    email,
    headerSearchData,
    chat,
  },
});
