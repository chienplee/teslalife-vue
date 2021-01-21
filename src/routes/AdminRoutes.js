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
          path: '/components/breadcrumb',
          name: 'breadcrumb',
          component: () => import("@/view/uiElements/Breadcrumb.vue"),
        },
        {         
          path: '/components/calendar',
          name: 'calendar',
          component: () => import("@/view/uiElements/Calendar"),
        },
        {
          path: '/components/cards',
          name: 'cards',
          component: () => import("@/view/uiElements/Cards"),
        },
        {
          path: '/components/carousel',
          name: 'carousel',
          component: () => import("@/view/uiElements/Carousel"),
        },
        {
          path: '/components/cascader',
          name: 'cascader',
          component: () => import("@/view/uiElements/Cascader"),
        },
        {
          path: '/components/checkbox',
          name: 'checkbox',
          component: () => import("@/view/uiElements/Checkbox"),
        },
        {
          path: '/components/collapse',
          name: 'collapse',
          component: () => import("@/view/uiElements/Collapse"),
        },
        {
          path: '/components/comments',
          name: 'comments',
          component: () => import("@/view/uiElements/Comments"),
        },
        {
          path: '/components/dash-base',
          name: 'dash-base',
          component: () => import("@/view/uiElements/DashboardBase"),
        },
        {
          path: '/components/datePicker',
          name: 'datePicker',
          component: () => import("@/view/uiElements/DatePicker"),
        },
        {
          path: '/components/drawer',
          name: 'drawer',
          component: () => import("@/view/uiElements/Drawer"),
        },
        {
          path: '/starter',
          name: 'starter',
          component: () => import("@/view/pages/BlankPage.vue"),
        },        
      ]
  });