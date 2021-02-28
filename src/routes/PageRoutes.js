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
        children: [
            {
                path: "/page/profile-settings",
                component: () => import("@/view/pages/settings/overview/Profile.vue")
            },
            {
                path: "/page/profile-settings/profile",
                component: () => import("@/view/pages/settings/overview/Profile.vue")
            },
            {
                path: "/page/profile-settings/account",
                component: () => import("@/view/pages/settings/overview/Account.vue")
            },
            {
                path: "/page/profile-settings/password",
                component: () => import("@/view/pages/settings/overview/Password.vue")
            },
            {
                path: "/page/profile-settings/social",
                component: () => import("@/view/pages/settings/overview/SocialProfile.vue")
            },
            {
                path: "/page/profile-settings/notification",
                component: () => import("@/view/pages/settings/overview/Notification.vue")
            }
        ]
    },
  ];
  