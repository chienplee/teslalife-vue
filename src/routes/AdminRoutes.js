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
          component: () => import("@/container/ui-elements/Home.vue"),
        },        
      ]
  });