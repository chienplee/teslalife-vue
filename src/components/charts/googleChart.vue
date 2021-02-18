<script>
import { GChart } from "vue-google-charts";
import VueTypes from "vue-types";

export const GoogleBasicBarChart = {
  name: "GoogleBasicBarChart",
  components: {
    GChart,
  },
  data() {
    return {
      chartOptions: {
        title: this.title,
        width: this.width,
        height: this.height,
        chartArea: { width: this.chartArea },
        hAxis: {
          title: "Total",
          minValue: 0,
        },
        vAxis: {
          title: "City",
        },
      },
    };
  },
  methods: {},
  props: {
    width: VueTypes.string.def("100%"),
    height: VueTypes.number.def(300),
    data: VueTypes.array,
    title: VueTypes.string.def("Chart"),
    chartArea: VueTypes.string.def("50%"),
  },
  render() {
    return (
      <GChart
        type="BarChart"
        data={this.data}
        options={this.chartOptions}
        rootProps={{ "data-testid": "1" }}
      />
    );
  },
};

export const GoogleMaterialBarChart = {
  name: "GoogleMaterialBarChart",
  components: {
    GChart,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          title: this.title,
          subtitle: this.subtitle,
        },
        width: this.width,
        height: this.height,
        chartArea: { width: this.chartArea },
      },
    };
  },
  methods: {},
  props: {
    width: VueTypes.string.def("100%"),
    height: VueTypes.number.def(300),
    data: VueTypes.array,
    title: VueTypes.string.def("Chart"),
    chartArea: VueTypes.string.def("50%"),
    subtitle: VueTypes.string.def("subtitle"),
  },
  render() {
    return (
      <GChart
        type="ColumnChart"
        data={this.data}
        options={this.chartOptions}
        rootProps={{ "data-testid": "2" }}
        height={this.height}
      />
    );
  },
};

export default GoogleBasicBarChart;
</script>
