import { createWebHistory, createRouter } from 'vue-router';
import adminRoutes from './AdminRoutes';
import authRoutes from './authRoutes';

const routes = [
  {
    name: 'admin',
    path: '/',
    component: () => import(/* webpackChunkName: "admin" */ '@/layout/withAdminLayout.vue'),
    children: [...adminRoutes],
  },
  {
    name: 'auth',
    path: '/auth',
    component: () => import(/* webpackChunkName: "auth" */ '@/layout/withAuthLayout.vue'),
    children: [...authRoutes],
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes,
});

export default router;
