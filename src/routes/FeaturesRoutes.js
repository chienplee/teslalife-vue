export default [
  {
    path: '/forms/form-layout',
    name: 'formLayout',
    component: () => import(/* webpackChunkName: "FormLayout" */ '@/view/forms/FormLayout.vue'),
  },
  {
    path: '/forms/form-elements',
    name: 'formElements',
    component: () => import(/* webpackChunkName: "FormElements" */ '@/view/forms/FormElements.vue'),
  },
  {
    path: '/forms/form-components',
    name: 'formComponents',
    component: () => import(/* webpackChunkName: "FormComponents" */ '@/view/forms/FormComponents.vue'),
  },
  {
    path: '/chart/google-chart',
    name: 'googleChart',
    component: () => import('@/view/charts/GoogleCharts.vue'),
  },
  {
    path: '/chart/chart-js',
    name: 'chartJs',
    component: () => import(/* webpackChunkName: "ChartJs" */ '@/view/charts/ChartJs.vue'),
  },
  {
    path: '/chart/line-chart',
    name: 'lineChart',
    component: () => import(/* webpackChunkName: "LineChart" */ '@/view/charts/apexcharts/LineCharts.vue'),
  },
  {
    path: '/chart/area-chart',
    name: 'areaChart',
    component: () => import(/* webpackChunkName: "AreaChart" */ '@/view/charts/apexcharts/AreaCharts.vue'),
  },
  {
    path: '/chart/column-chart',
    name: 'columChart',
    component: () => import(/* webpackChunkName: "ColumChart" */ '@/view/charts/apexcharts/ColumnCharts.vue'),
  },
  {
    path: '/chart/bar-chart',
    name: 'barChart',
    component: () => import(/* webpackChunkName: "BarCharts" */ '@/view/charts/apexcharts/BarCharts.vue'),
  },
  {
    path: '/chart/pie-chart',
    name: 'pieChart',
    component: () => import(/* webpackChunkName: "PieCharts" */ '@/view/charts/apexcharts/PicCharts.vue'),
  },
  {
    path: '/chart/radialbar-chart',
    name: 'radialbarChart',
    component: () => import(/* webpackChunkName: "RadialbarCharts" */ '@/view/charts/apexcharts/RadialbarCharts.vue'),
  },
  {
    path: '/chart/radar-charts',
    name: 'radarChart',
    component: () => import(/* webpackChunkName: "RadarCharts" */ '@/view/charts/apexcharts/RadarCharts.vue'),
  },
  {
    path: '/icons/featherIcons',
    name: 'featherIcons',
    component: () => import(/* webpackChunkName: "FeatherIcons" */ '@/view/icons/FeatherIcons.vue'),
  },
  {
    path: '/icons/antdIcons',
    name: 'antdIcons',
    component: () => import(/* webpackChunkName: "AntdIcons" */ '@/view/icons/AntdIcons.vue'),
  },
  {
    path: '/icons/fa',
    name: 'fa',
    component: () => import(/* webpackChunkName: "FaIcons" */ '@/view/icons/FaIcons.vue'),
  },
  {
    path: '/maps/google',
    name: 'google',
    component: () => import(/* webpackChunkName: "GoogleMaps" */ '@/view/maps/GoogleMaps.vue'),
  },
  {
    path: '/maps/leaflet',
    name: 'leaflet',
    component: () => import(/* webpackChunkName: "Leaflet" */ '@/view/maps/Leaflet.vue'),
  },
  {
    path: '/forms/form-validation',
    name: 'formValidation',
    component: () => import(/* webpackChunkName: "FormValidation" */ '@/view/forms/FormValidation.vue'),
  },
  {
    path: '/maps/vector',
    name: 'vector',
    component: () => import(/* webpackChunkName: "Vector" */ '@/view/maps/Vector.vue'),
  },
  {
    path: '/wizard',
    name: 'wizard',
    component: () => import(/* webpackChunkName: "wizard" */ '@/view/wizards/Wizards.vue'),
    children: [
      {
        name: 'wizard1',
        path: 'wizard1',
        components: {
          default: () => import(/* webpackChunkName: "wizard" */ '@/view/wizards/Wizards.vue'),
          child: () => import(/* webpackChunkName: "wizard1" */ '@/view/wizards/overview/WizardsOne.vue'),
        },
      },
      {
        name: 'wizard2',
        path: 'wizard2',
        components: {
          default: () => import(/* webpackChunkName: "wizard" */ '@/view/wizards/Wizards.vue'),
          child: () => import(/* webpackChunkName: "wizard2" */ '@/view/wizards/overview/WizardsTwo.vue'),
        },
      },
    ],
  },
  {
    path: '/widgets/chart',
    name: 'widgetCharts',
    component: () => import(/* webpackChunkName: "widgetsChart" */ '@/view/widgets/Charts.vue'),
  },
  {
    path: '/widgets/card',
    name: 'widgetCards',
    component: () => import(/* webpackChunkName: "widgetsCard" */ '@/view/widgets/Cards.vue'),
  },
  {
    path: '/widgets/mixed',
    name: 'widgetMixed',
    component: () => import(/* webpackChunkName: "widgetsMixed" */ '@/view/widgets/Mixed.vue'),
  },
];
