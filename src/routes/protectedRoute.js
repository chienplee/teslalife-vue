import { createWebHistory, createRouter } from 'vue-router';
import adminRoutes from './AdminRoutes';
import authRoutes from './authRoutes';
import store from '@/vuex/store';

const routes = [
  {
    name: 'Admin',
    path: '/',
    component: () => import(/* webpackChunkName: "admin" */ '@/layout/withAdminLayout.vue'),
    children: [...adminRoutes],
    meta: { auth: false },
  },
  {
    name: 'Auth',
    path: '/auth',
    component: () => import(/* webpackChunkName: "auth" */ '@/layout/withAuthLayout.vue'),
    children: [...authRoutes],
    meta: { auth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes,
});

router.beforeEach((to, from, next) => {
  // console.log(to, store);
  if (to.meta.auth && store.state.auth.login) {
    next({ to: '/' });
    console.log('login');
  } else if (!to.meta.auth && !store.state.auth.login) {
    next({ name: 'login' });
    console.log('login fail');
  } else {
    next();
    console.log('go ahead');
  }
});

export default router;
