export default [
  {
    path: "/forms/form-layout",
    name: "formLayout",
    component: () => import("@/view/forms/FormLayout.vue"),
  },
  {
    path: "/forms/form-elements",
    name: "formElements",
    component: () => import("@/view/forms/FormElements.vue"),
  },
  {
    path: "/forms/form-components",
    name: "formComponents",
    component: () => import("@/view/forms/FormComponents.vue"),
  },
  {
    path: "/chart/chart-js",
    name: "chartJs",
    component: () => import("@/view/charts/ChartJs.vue"),
  },
  {
    path: "/icons/featherIcons",
    name: "featherIcons",
    component: () => import("@/view/icons/FeatherIcons.vue"),
  },
  {
    path: "/icons/antdIcons",
    name: "antdIcons",
    component: () => import("@/view/icons/AntdIcons.vue"),
  },
  {
    path: "/icons/fa",
    name: "fa",
    component: () => import("@/view/icons/FaIcons.vue"),
  },
  {
    path: "/maps/google",
    name: "google",
    component: () => import("@/view/maps/GoogleMaps.vue"),
  },
  {
    path: "/maps/leaflet",
    name: "leaflet",
    component: () => import("@/view/maps/Leaflet.vue"),
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
