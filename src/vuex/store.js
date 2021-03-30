import { createStore } from 'vuex';
import themeLayout from './modules/themeLayout';
import gallery from './modules/gallery';
import users from './modules/users';
import chartContent from './modules/chartContent/actionCreator';
import email from './modules/email/actionCreator';
import headerSearchData from './modules/headerSearch/actionCreator';
import chat from './modules/chat/actionCreator';
import ecommerce from './modules/ecommerce/product/actionCreator';
import orders from './modules/ecommerce/orders/actionCreator';
import cart from './modules/ecommerce/cart/actionCreator';
import profile from './modules/profile/actionCreator';
import project from './modules/project/actionCreator';
import calendar from './modules/calendar/actionCreator';
import team from './modules/team/actionCreator';
import contact from './modules/contact/actionCreator';
import note from './modules/note/actionCreator';
import todo from './modules/todo/actionCreator';
import task from './modules/task/actionCreator';

export default createStore({
  modules: {
    themeLayout,
    gallery,
    users,
    chartContent,
    email,
    headerSearchData,
    chat,
    ecommerce,
    orders,
    cart,
    profile,
    project,
    calendar,
    team,
    contact,
    note,
    todo,
    task,
  },
});
