<template>
  <sdCards v-if="youtubeSubscribeState !== null" title="Youtube Subscribers">
    <template #button>
      <div class="card-nav">
        <ul>
          <li :class="youtubeSubscribeTabActive === 'week' ? 'active' : 'deactivate'">
            <router-link @click="e => handleActiveChangeYoutube(e, 'week')" to="#">
              Week
            </router-link>
          </li>
          <li :class="youtubeSubscribeTabActive === 'month' ? 'active' : 'deactivate'">
            <router-link @click="e => handleActiveChangeYoutube(e, 'month')" to="#">
              Month
            </router-link>
          </li>
          <li :class="youtubeSubscribeTabActive === 'year' ? 'active' : 'deactivate'">
            <router-link @click="e => handleActiveChangeYoutube(e, 'year')" to="#">
              Year
            </router-link>
          </li>
        </ul>
      </div>
    </template>

    <div v-if="yuIsLoading" class="sd-spin">
      <a-spin />
    </div>

    <CardBarChart v-else>
      <div
        :style="{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }"
      >
        <div class="card-bar-top">
          <p>Subscribers</p>
          <sdHeading as="h3">
            {{ youtubeSubscribeState.Subscribe }}
            <sub>
              <sdFeatherIcons icon="arrow-up" size="14" />
              {{ youtubeSubscribeState.percent }}%
            </sub>
          </sdHeading>
        </div>
        <ul v-if="youtubeSubscribeDatasets">
          <li v-for="(item, key) in youtubeSubscribeDatasets" :key="key + 1" class="custom-label">
            <span
              :style="{
                backgroundColor: item.hoverBackgroundColor,
              }"
            />
            {{ item.label }}
          </li>
        </ul>
      </div>
      <sdChartContainer class="parentContainer">
        <Chart
          type="bar"
          className="youtubeSubscribe"
          :labels="youtubeSubscribeState.labels"
          :datasets="youtubeSubscribeDatasets"
          :options="chartOptions"
        />
      </sdChartContainer>
    </CardBarChart>
  </sdCards>
</template>
<script>
import { CardBarChart } from '../../style';
import Chart from '../../../../components/utilities/chartjs';
import { customTooltips } from '../../../../components/utilities/utilities';

const YoutubeSubscribers = {
  name: 'YoutubeSubscribers',
  components: {
    CardBarChart,
    Chart,
  },
  data() {
    return {
      youtubeSubscribeTabActive: 'year',
    };
  },
  computed: {
    youtubeSubscribeState() {
      return this.$store.state.chartContent.youtubeSubscribeData;
    },
    yuIsLoading() {
      return this.$store.state.chartContent.yuLoading;
    },
    youtubeSubscribeDatasets() {
      return [
        {
          data: this.$store.state.chartContent.youtubeSubscribeData.gained,
          backgroundColor: '#5F63F280',
          hoverBackgroundColor: '#5F63F2',
          label: 'Gained',
          maxBarThickness: 10,
          barThickness: 12,
        },
        {
          data: this.$store.state.chartContent.youtubeSubscribeData.lost,
          backgroundColor: '#FF4D4F80',
          hoverBackgroundColor: '#FF4D4F',
          label: 'Lost',
          maxBarThickness: 10,
          barThickness: 12,
        },
      ];
    },
    chartOptions() {
      return {
        maintainAspectRatio: true,
        responsive: true,
        layout: {
          padding: {
            top: 20,
          },
        },
        legend: {
          display: false,
          position: 'top',
          align: 'end',
          labels: {
            boxWidth: 6,
            display: true,
            usePointStyle: true,
          },
        },

        scales: {
          yAxes: [
            {
              gridLines: {
                color: '#e5e9f2',
                borderDash: [3, 3],
                zeroLineColor: '#e5e9f2',
                zeroLineWidth: 1,
                zeroLineBorderDash: [3, 3],
              },
              ticks: {
                beginAtZero: true,
                fontSize: 12,
                fontColor: '#182b49',
                max: Math.max(...this.$store.state.chartContent.youtubeSubscribeData.gained),
                stepSize: Math.max(...this.$store.state.chartContent.youtubeSubscribeData.gained) / 5,
                display: true,
                min: 0,
                padding: 10,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: true,
                zeroLineWidth: 2,
                zeroLineColor: '#fff',
                color: 'transparent',
                z: 1,
              },
              ticks: {
                beginAtZero: true,
                fontSize: 12,
                fontColor: '#182b49',
                min: 0,
              },
            },
          ],
        },
        tooltips: {
          mode: 'label',
          intersect: false,
          position: 'average',
          enabled: false,
          custom: customTooltips,
          callbacks: {
            label(t, d) {
              const dstLabel = d.datasets[t.datasetIndex].label;
              const { yLabel } = t;
              return `<span class="chart-data">${yLabel}</span> <span class="data-label">${dstLabel}</span>`;
            },
            labelColor(tooltipItem, chart) {
              const dataset = chart.config.data.datasets[tooltipItem.datasetIndex];
              return {
                backgroundColor: dataset.backgroundColor,
                borderColor: 'transparent',
                usePointStyle: true,
              };
            },
          },
        },
      };
    },
  },
  mounted() {
    this.$store.dispatch('youtubeSubscribeGetData');
  },
  methods: {
    handleActiveChangeYoutube(e, value) {
      e.preventDefault();
      this.youtubeSubscribeTabActive = value;
      this.$store.dispatch('youtubeSubscribeFilterData', value);
    },
  },
};

export default YoutubeSubscribers;
</script>
