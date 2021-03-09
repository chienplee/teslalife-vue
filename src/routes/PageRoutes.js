export default [
  {
    path: '/starter',
    name: 'starter',
    component: () => import(/* webpackChunkName: "Blank" */ '@/view/pages/BlankPage.vue'),
  },
  {
    path: '/page/testimonials',
    name: 'testimonials',
    component: () => import(/* webpackChunkName: "Testimonials" */ '@/view/pages/Testimonials.vue'),
  },
  {
    path: '/page/faqs',
    name: 'faq`s',
    component: () => import(/* webpackChunkName: "Faq" */ '@/view/pages/Faq.vue'),
  },
  {
    path: '/page/gallery',
    name: 'gallery',
    component: () => import(/* webpackChunkName: "Gallery" */ '@/view/pages/Gallery.vue'),
  },
  {
    path: '/page/pricing',
    name: 'pricing',
    component: () => import(/* webpackChunkName: "PricingTable" */ '@/view/pages/PricingTable.vue'),
  },
  {
    path: '/page/banners',
    name: 'banners',
    component: () => import(/* webpackChunkName: "Banners" */ '@/view/pages/Banners.vue'),
  },
  {
    path: '/page/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '@/view/pages/404.vue'),
  },
  {
    path: '/page/comingSoon',
    name: 'comingSoon',
    component: () => import(/* webpackChunkName: "comingSoon" */ '@/view/pages/ComingSoon.vue'),
  },
  {
    path: '/:catchAll(.*)',
    component: () => import(/* webpackChunkName: "404" */ '@/view/pages/404.vue'),
  },
  {
    path: '/page/profile-settings',
    name: 'profileSettings',
    component: () => import(/* webpackChunkName: "Settings" */ '@/view/pages/settings/Settings.vue'),
    children: [
      {
        path: '/page/profile-settings',
        component: () => import(/* webpackChunkName: "Profile" */ '@/view/pages/settings/overview/Profile.vue'),
      },
      {
        path: '/page/profile-settings/profile',
        component: () => import(/* webpackChunkName: "Profile" */ '@/view/pages/settings/overview/Profile.vue'),
      },
      {
        path: '/page/profile-settings/account',
        component: () => import(/* webpackChunkName: "Account" */ '@/view/pages/settings/overview/Account.vue'),
      },
      {
        path: '/page/profile-settings/password',
        component: () => import(/* webpackChunkName: "Password" */ '@/view/pages/settings/overview/Password.vue'),
      },
      {
        path: '/page/profile-settings/social',
        component: () => import(/* webpackChunkName: "Social" */ '@/view/pages/settings/overview/SocialProfile.vue'),
      },
      {
        path: '/page/profile-settings/notification',
        component: () =>
          import(/* webpackChunkName: "Notification" */ '@/view/pages/settings/overview/Notification.vue'),
      },
    ],
  },
];
