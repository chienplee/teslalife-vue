import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [ 
        {
          path: '/',
          name: 'dashboard',
          component: () => import("@/view/pages/BlankPage.vue"),
        },
        {
          path: '/components/alerts',
          name: 'alerts',
          component: () => import("@/view/uiElements/Alerts.vue"),
        },
        {
          path: '/components/avatar',
          name: 'avatar',
          component: () => import("@/view/uiElements/Avatar.vue"),
        },
        {
          path: '/components/autoComplete',
          name: 'autoComplete',
          component: () => import("@/view/uiElements/AutoComplete"),
        },        
        {
          path: '/components/button',
          name: 'button',
          component: () => import("@/view/uiElements/Button.vue"),
        },
        {
          path: '/components/badge',
          name: 'badge',
          component: () => import("@/view/uiElements/Badge.vue"),
        },
        {         
          path: '/components/calendar',
          name: 'calendar',
          component: () => import("@/view/uiElements/Calendar"),
        },      
        {
          path: '/starter',
          name: 'starter',
          component: () => import("@/view/pages/BlankPage.vue"),
        },        
      ]
  });