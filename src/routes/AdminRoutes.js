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
          path: '/starter',
          name: 'starter',
          component: () => import("@/view/pages/BlankPage.vue"),
        },        
      ]
  });