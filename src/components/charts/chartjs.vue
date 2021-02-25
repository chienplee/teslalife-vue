<script>
import { Bar, HorizontalBar, Line, Pie } from "vue-chartjs";
import { customTooltips } from "../utilities/utilities";

import VueTypes from "vue-types";
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

const ChartjsLineChartSudo = {
  name: "ChartjsLineChartSudo",
  props: {
    labels: VueTypes.arrayOf(VueTypes.string),
    height: VueTypes.number,
    width: VueTypes.number,
    datasets: VueTypes.arrayOf(VueTypes.object),
    options: VueTypes.object,
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
    height: VueTypes.number.def(450),
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
          left: "-10",
          right: 0,
          top: 0,
          bottom: "-10",
        },
      },
      legend: {
        display: false,
        labels: {
          display: false,
        },
      },
    }),
  },
  render() {
    return (
      <sdChartContainer class="parentContainer">
        <ChartjsLineChartSudo
          labels={this.labels}
          height={this.height}
          width={this.width}
          datasets={this.datasets}
          options={this.options}
        />
      </sdChartContainer>
    );
  },
};

const ChartjsAreaChartSudo = {
  name: "ChartjsAreaChartSudo",
  props: {
    labels: VueTypes.arrayOf(VueTypes.string),
    height: VueTypes.number,
    width: VueTypes.number,
    datasets: VueTypes.arrayOf(VueTypes.object),
    options: VueTypes.object,
    layout: VueTypes.object,
    id: VueTypes.string,
  },
  extends: Line,
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart(
      {
        labels: this.labels,
        datasets: this.datasets,
      },
      {
        tooltips: {
          mode: "nearest",
          intersect: false,
          enabled: false,
          custom: customTooltips,
          callbacks: {
            labelColor() {
              return {
                backgroundColor: this._data.datasets.map(
                  (item) => item.borderColor
                ),
                borderColor: "transparent",
              };
            },
          },
        },
        ...this.options,
        ...this.layout,
      }
    );
  },
};

export const ChartjsAreaChart = {
  name: "ChartjsAreaChart",
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
    width: VueTypes.number,
    datasets: VueTypes.arrayOf(VueTypes.object).def([
      {
        data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
        borderColor: "#001737",
        borderWidth: 1,
        fill: true,
        backgroundColor: "#00173750",
        pointHoverBorderColor: "transparent",
      },
      {
        data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
        borderColor: "#1ce1ac",
        borderWidth: 1,
        fill: true,
        backgroundColor: "#1ce1ac50",
        pointHoverBorderColor: "transparent",
      },
    ]),
    options: VueTypes.object.def({
      maintainAspectRatio: true,
      hover: {
        mode: "nearest",
        intersect: false,
      },
      layout: {
        padding: {
          left: -10,
          right: 0,
          top: 2,
          bottom: -10,
        },
      },
      legend: {
        display: false,
        labels: {
          display: false,
        },
      },
      elements: {
        point: {
          radius: 0,
        },
      },
      scales: {
        yAxes: [
          {
            stacked: true,
            gridLines: {
              display: false,
              color: "#e5e9f2",
            },
            ticks: {
              beginAtZero: true,
              fontSize: 10,
              display: false,
              stepSize: 20,
            },
          },
        ],
        xAxes: [
          {
            stacked: true,
            gridLines: {
              display: false,
            },

            ticks: {
              beginAtZero: true,
              fontSize: 11,
              display: false,
            },
          },
        ],
      },
    }),
    id: VueTypes.string,
  },
  render() {
    return (
      <sdChartContainer class="parentContainer">
        <ChartjsAreaChartSudo
          labels={this.labels}
          height={this.height}
          datasets={this.datasets}
          options={this.options}
          layout={this.layout}
          id={this.id}
        />
      </sdChartContainer>
    );
  },
};

const ChartjsBarChartTransparentSudo = {
  name: "ChartjsBarChartTransparentSudo",
  props: {
    labels: VueTypes.arrayOf(VueTypes.string),
    height: VueTypes.number,
    datasets: VueTypes.arrayOf(VueTypes.object),
    options: VueTypes.object,
    layout: VueTypes.object,
  },
  extends: Bar,
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart(
      {
        labels: this.labels,
        datasets: this.datasets,
      },
      {
        tooltips: {
          mode: "label",
          intersect: false,
          position: "average",
          enabled: false,
          custom: customTooltips,
          callbacks: {
            label(t, d) {
              const dstLabel = d.datasets[t.datasetIndex].label;
              const { yLabel } = t;
              return `<span class="chart-data">${yLabel}</span> <span class="data-label">${dstLabel}</span>`;
            },
            labelColor(tooltipItem, chart) {
              const dataset =
                chart.config.data.datasets[tooltipItem.datasetIndex];
              return {
                backgroundColor: dataset.hoverBackgroundColor,
                borderColor: "transparent",
                usePointStyle: true,
              };
            },
          },
        },
        ...this.options,
        ...this.layout,
      }
    );
  },
};

export const ChartjsBarChartTransparent = {
  name: "ChartjsBarChartTransparent",
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
    height: VueTypes.number.def(176),
    datasets: VueTypes.arrayOf(VueTypes.object).def([
      {
        data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
        backgroundColor: "rgba(0,23,55, .5)",
        label: "Profit",
      },
      {
        data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
        backgroundColor: "rgba(28,225,172, .5)",
        label: "Lose",
      },
    ]),
    options: VueTypes.object.def({
      maintainAspectRatio: true,
      responsive: true,
      legend: {
        display: true,
        position: "bottom",
        align: "start",
        labels: {
          boxWidth: 6,
          display: true,
          usePointStyle: true,
        },
      },
      layout: {
        padding: {
          left: "0",
          right: 0,
          top: 0,
          bottom: "0",
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
              fontSize: 13,
              fontColor: "#182b49",
              max: 80,
              stepSize: 20,
              callback(value) {
                return `${value}k`;
              },
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              display: false,
            },
            barPercentage: 0.6,
            ticks: {
              beginAtZero: true,
              fontSize: 13,
              fontColor: "#182b49",
            },
          },
        ],
      },
    }),
    layout: VueTypes.object,
  },
  render() {
    return (
      <sdChartContainer class="parentContainer">
        <ChartjsBarChartTransparentSudo
          labels={this.labels}
          height={window.innerWidth <= 575 ? 230 : this.height}
          datasets={this.datasets}
          options={this.options}
          layout={this.layout}
        />
      </sdChartContainer>
    );
  },
};

export const ChartjsPieChart = {
  name: "ChartjsPieChart",
  props: {
    labels: VueTypes.arrayOf(VueTypes.string).def([
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
    ]),
    height: VueTypes.number.def(200),
    datasets: VueTypes.arrayOf(VueTypes.object).def([
      {
        data: [20, 20, 30, 5, 25],
        backgroundColor: [
          "#560bd0",
          "#007bff",
          "#00cccc",
          "#cbe0e3",
          "#74de00",
        ],
      },
    ]),
    options: VueTypes.object.def({
      maintainAspectRatio: true,
      responsive: true,
      legend: {
        display: false,
      },
      animation: {
        animateScale: true,
        animateRotate: true,
      },
    }),
  },
  extends: Pie,
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
