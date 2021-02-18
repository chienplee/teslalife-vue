<script>
import { Bar, HorizontalBar, Line } from "vue-chartjs";
import VueTypes from "vue-types";
//import { ChartContainer } from "../../view/dashboard/style";
export const ChartJsBarChart = {
  name: "ChartJsBarChart",
  props: {
    labels: VueTypes.arrayOf(VueTypes.string).def([
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ]),
    height: VueTypes.number.def(200),
    datasets: VueTypes.arrayOf(VueTypes.object).def([
      {
        data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
        backgroundColor: "#001737",
        barPercentage: 0.6,
      },
      {
        data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
        backgroundColor: "#1ce1ac",
        barPercentage: 0.6,
      },
    ]),
    options: VueTypes.object.def({
      maintainAspectRatio: true,
      responsive: true,
      legend: {
        display: false,
        labels: {
          display: false,
        },
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              color: "#e5e9f2",
            },
            ticks: {
              beginAtZero: true,
              fontSize: 10,
              fontColor: "#182b49",
              max: 80,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              display: false,
            },
            ticks: {
              beginAtZero: true,
              fontSize: 11,
              fontColor: "#182b49",
            },
          },
        ],
      },
    }),
  },
  extends: Bar,
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart(
      {
        labels: this.labels,
        datasets: this.datasets,
      },
      this.options
    );
  },
};

export const ChartjsHorizontalChart = {
  name: "ChartjsHorizontalChart",
  props: {
    labels: VueTypes.arrayOf(VueTypes.string).def([
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ]),
    height: VueTypes.number.def(210),
    datasets: VueTypes.arrayOf(VueTypes.object).def([
      {
        data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
        backgroundColor: "#001737",
        barPercentage: 0.6,
      },
      {
        data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
        backgroundColor: "#1ce1ac",
        barPercentage: 0.6,
      },
    ]),
    options: VueTypes.object.def({
      maintainAspectRatio: true,
      responsive: true,
      legend: {
        display: false,
        labels: {
          display: false,
        },
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              display: false,
            },
            ticks: {
              beginAtZero: true,
              fontSize: 10,
              fontColor: "#182b49",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              color: "#e5e9f2",
            },

            ticks: {
              beginAtZero: true,
              fontSize: 11,
              fontColor: "#182b49",
              max: 100,
            },
          },
        ],
      },
    }),
  },
  extends: HorizontalBar,
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart(
      {
        labels: this.labels,
        datasets: this.datasets,
      },
      this.options
    );
  },
};

export const ChartjsStackedChart = {
  name: "ChartjsStackedChart",
  props: {
    labels: VueTypes.arrayOf(VueTypes.string).def([
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ]),
    height: VueTypes.number.def(250),
    datasets: VueTypes.arrayOf(VueTypes.object).def([
      {
        data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
        backgroundColor: "#001737",
      },
      {
        data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
        backgroundColor: "#1ce1ac",
      },
    ]),
    options: VueTypes.object.def({
      maintainAspectRatio: true,
      responsive: true,
      legend: {
        display: false,
        labels: {
          display: false,
        },
      },
      scales: {
        yAxes: [
          {
            stacked: true,
            gridLines: {
              color: "#e5e9f2",
            },
            ticks: {
              beginAtZero: true,
              fontSize: 10,
              fontColor: "#182b49",
            },
          },
        ],
        xAxes: [
          {
            stacked: true,
            gridLines: {
              display: false,
            },
            barPercentage: 0.6,
            ticks: {
              beginAtZero: true,
              fontSize: 11,
              fontColor: "#182b49",
            },
          },
        ],
      },
    }),
  },

  extends: Bar,
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart(
      {
        labels: this.labels,
        datasets: this.datasets,
      },
      this.options
    );
  },
};
export const ChartjsLineChart = {
  name: "ChartjsLineChart",
  props: {
    labels: VueTypes.arrayOf(VueTypes.string).def([
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ]),
    height: VueTypes.number.def(479),
    width: VueTypes.number.def(null),
    datasets: VueTypes.arrayOf(VueTypes.object).def([
      {
        data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
        borderColor: "#001737",
        borderWidth: 1,
        fill: false,
      },
      {
        data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
        borderColor: "#1ce1ac",
        borderWidth: 1,
        fill: false,
      },
    ]),
    options: VueTypes.object.def({
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: '-10',
          right: 0,
          top: 0,
          bottom: '-10',
        },
      },
      legend: {
        display: false,
        labels: {
          display: false,
        },
      },
    })
  },

  extends: Line,
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart(
      {
        labels: this.labels,
        datasets: this.datasets,
      },
      this.options
    );
  },
};

export default ChartJsBarChart;
</script>
