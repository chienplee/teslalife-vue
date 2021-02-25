export default [
    {
        path: "/starter",
        name: "starter",
        component: () => import("@/view/pages/BlankPage.vue"),
    },
    {
        path: "/page/pricing",
        name: "pricing",
        component: () => import("@/view/pages/PricingTable.vue"),
    },
    {
        path: "/page/banners",
        name: "banners",
        component: () => import("@/view/pages/Banners.vue"),
    },
    {
        path: "/page/testimonials",
        name: "testimonials",
        component: () => import("@/view/pages/Testimonials.vue"),
    },
    {
        path: "/page/profile-settings",
        name: "profileSettings",
        component: () => import("@/view/pages/settings/Settings.vue"),
    },
  ];
  