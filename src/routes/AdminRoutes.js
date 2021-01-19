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
          path: "/components/avatar",
          name: "avatar",
          component: () => import("@/view/uiElements/Avatar.vue"),
        },
        {
          path: '/components/button',
          name: 'button',
          component: () => import("@/view/uiElements/Button.vue"),
        },          
        {
          path: '/starter',
          name: 'starter',
          component: () => import("@/view/pages/BlankPage.vue"),
        },        
      ]
  });