import { createWebHistory, createRouter } from 'vue-router';
import FeaturesRoutes from './FeaturesRoutes';
import PageRoutes from './PageRoutes';
import Components from './Components';
import Apps from './Applications';

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "Home" */ '@/view/dashboard'),
  },
  {
    path: '/business',
    name: 'business',
    component: () => import(/* webpackChunkName: "Business" */ '@/view/dashboard/Business.vue'),
  },
  {
    path: '/eco',
    name: 'eco',
    component: () => import(/* webpackChunkName: "Business" */ '@/view/dashboard/Ecommerce.vue'),
  },
  {
    path: '/performance',
    name: 'performance',
    component: () => import(/* webpackChunkName: "Performance" */ '@/view/dashboard/Performance.vue'),
  },
  {
    path: '/crm',
    name: 'crm',
    component: () => import(/* webpackChunkName: "CRM" */ '@/view/dashboard/CRM.vue'),
  },
  {
    path: '/sales',
    name: 'sales',
    component: () => import(/* webpackChunkName: "sales" */ '@/view/dashboard/Sales.vue'),
  },
  {
    path: '/crud/axios-view',
    name: 'axios-view',
    component: () => import(/* webpackChunkName: "axios-view" */ '@/view/crud/axios/View.vue'),
  },
  {
    path: '/crud/axios-edit/:id',
    name: 'axios-edit',
    component: () => import(/* webpackChunkName: "axios-edit" */ '@/view/crud/axios/edit.vue'),
  },
  {
    path: '/crud/axios-add',
    name: 'axios-add',
    component: () => import(/* webpackChunkName: "axios-add" */ '@/view/crud/axios/addNew.vue'),
  },
  ...PageRoutes,
  ...FeaturesRoutes,
  ...Components,
  ...Apps,
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes,
});

export default router;
