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
    name: 'ecommerce',
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

  ...PageRoutes,
  ...FeaturesRoutes,
  ...Components,
  ...Apps,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
