export default [
  {
    path: "/forms/form-layout",
    name: "formLayout",
    component: () => import(/* webpackChunkName: "FormLayout" */"@/view/forms/FormLayout.vue"),
  },
  {
    path: "/forms/form-elements",
    name: "formElements",
    component: () => import(/* webpackChunkName: "FormElements" */"@/view/forms/FormElements.vue"),
  },
  {
    path: "/forms/form-components",
    name: "formComponents",
    component: () => import(/* webpackChunkName: "FormComponents" */"@/view/forms/FormComponents.vue"),
  },
  {
    path: "/chart/chart-js",
    name: "chartJs",
    component: () => import(/* webpackChunkName: "ChartJs" */"@/view/charts/ChartJs.vue"),
  },
  {
    path: "/icons/featherIcons",
    name: "featherIcons",
    component: () => import(/* webpackChunkName: "FeatherIcons" */"@/view/icons/FeatherIcons.vue"),
  },
  {
    path: "/icons/antdIcons",
    name: "antdIcons",
    component: () => import(/* webpackChunkName: "AntdIcons" */"@/view/icons/AntdIcons.vue"),
  },
  {
    path: "/icons/fa",
    name: "fa",
    component: () => import(/* webpackChunkName: "FaIcons" */"@/view/icons/FaIcons.vue"),
  },
  {
    path: "/maps/google",
    name: "google",
    component: () => import(/* webpackChunkName: "GoogleMaps" */"@/view/maps/GoogleMaps.vue"),
  },
  {
    path: "/maps/leaflet",
    name: "leaflet",
    component: () => import(/* webpackChunkName: "Leaflet" */"@/view/maps/Leaflet.vue"),
  },
  /*
  {
    path: "/maps/vector",
    name: "vector",
    component: () => import("@/view/maps/Vector.vue"),
  }
  {
    path: "/forms/form-validation",
    name: "formValidation",
    component: () => import("@/view/forms/FormValidation.vue"),
  },
  
  {
    path: "/chart/google-chart",
    name: "googleChart",
    component: () => import("@/view/charts/GoogleCharts.vue"),
  },
  */
];
