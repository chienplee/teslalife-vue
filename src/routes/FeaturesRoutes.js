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
    name: "FormComponents",
    component: () => import("@/view/forms/FormComponents.vue"),
  },
  {
    path: "/forms/form-validation",
    name: "FormValidation",
    component: () => import("@/view/forms/FormValidation.vue"),
  },
  {
    path: "/chart/chart-js",
    name: "chartJs",
    component: () => import("@/view/charts/ChartJs.vue"),
  },
  {
    path: "/chart/google-chart",
    name: "googleChart",
    component: () => import("@/view/charts/GoogleCharts.vue"),
  },
];
