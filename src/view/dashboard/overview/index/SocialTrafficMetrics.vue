<template>
  <CardGroup>
    <div class="full-width-table">
      <sdCards more title="Social Traffic Metrics">
        <template #button>
          <div class="card-radio">
            <a-radio-group @change="socialTraffic" v-model:value="initValue">
              <a-radio-button value="today">Today</a-radio-button>
              <a-radio-button value="week">Week</a-radio-button>
              <a-radio-button value="month">Month</a-radio-button>
              <a-radio-button value="year">Year</a-radio-button>
            </a-radio-group>
          </div>
        </template>
        <template #more>
          <router-link to="#">
            <span>2 years</span>
          </router-link>
          <router-link to="#">
            <span>3 years</span>
          </router-link>
          <router-link to="#">
            <span>4 years</span>
          </router-link>
        </template>
        <div class="traffic-table table-responsive">
          <a-table :columns="trafficTableColumns" :dataSource="trafficTableData" :pagination="false" />
        </div>
      </sdCards>
    </div>
  </CardGroup>
</template>
<script>
import { CardGroup } from '../../style';

const trafficTableColumns = [
  {
    dataIndex: 'network',
    key: 'network',
  },
  {
    title: 'Acquisition',
    dataIndex: 'users',
    key: 'users',
  },
  {
    dataIndex: 'newUsers',
    key: 'newUsers',
  },
  {
    dataIndex: 'sessions',
    key: 'sessions',
  },
  {
    title: 'Behavior',
    dataIndex: 'bounceRate',
    key: 'bounceRate',
  },
  {
    dataIndex: 'pages',
    key: 'pages',
  },
  {
    dataIndex: 'avg',
    key: 'avg',
  },
];

const SocialTrafficMetrics = {
  name: 'SocialTrafficMetrics',
  components: { CardGroup },
  computed: {
    socialTrafficState() {
      return this.$store.state.chartContent.socialTrafficData;
    },
    trafficTableData() {
      return this.socialTrafficState !== null
        ? [
            {
              key: '1',
              network: <span class="traffic-title">Social Network</span>,
              users: <span class="traffic-title">Users</span>,
              newUsers: <span class="traffic-title">New Users</span>,
              sessions: <span class="traffic-title">Sessions</span>,
              bounceRate: <span class="traffic-title">Bounce Rate</span>,
              pages: <span class="traffic-title">Pages / Session</span>,
              avg: <span class="traffic-title">Avg. Session Duration</span>,
            },
            {
              key: '2',
              network: (
                <router-view to="#">
                  <span class="social-name">Facebook</span>
                </router-view>
              ),
              users: this.socialTrafficState.facebook.users,
              newUsers: this.socialTrafficState.facebook.newUsers,
              sessions: this.socialTrafficState.facebook.session,
              bounceRate: this.socialTrafficState.facebook.bounceRate,
              pages: this.socialTrafficState.facebook.pagesSession,
              avg: this.socialTrafficState.facebook.avg,
            },
            {
              key: '3',
              network: (
                <router-view to="#">
                  <span class="social-name">Twitter</span>
                </router-view>
              ),
              users: this.socialTrafficState.twitter.users,
              newUsers: this.socialTrafficState.twitter.newUsers,
              sessions: this.socialTrafficState.twitter.session,
              bounceRate: this.socialTrafficState.twitter.bounceRate,
              pages: this.socialTrafficState.twitter.pagesSession,
              avg: this.socialTrafficState.twitter.avg,
            },
            {
              key: '4',
              network: (
                <router-view to="#">
                  <span class="social-name">Linkdin</span>
                </router-view>
              ),
              users: this.socialTrafficState.linkdin.users,
              newUsers: this.socialTrafficState.linkdin.newUsers,
              sessions: this.socialTrafficState.linkdin.session,
              bounceRate: this.socialTrafficState.linkdin.bounceRate,
              pages: this.socialTrafficState.linkdin.pagesSession,
              avg: this.socialTrafficState.linkdin.avg,
            },
            {
              key: '5',
              network: (
                <router-view to="#">
                  <span class="social-name">Youtube</span>
                </router-view>
              ),
              users: this.socialTrafficState.youtube.users,
              newUsers: this.socialTrafficState.youtube.newUsers,
              sessions: this.socialTrafficState.youtube.session,
              bounceRate: this.socialTrafficState.youtube.bounceRate,
              pages: this.socialTrafficState.youtube.pagesSession,
              avg: this.socialTrafficState.youtube.avg,
            },
            {
              key: '6',
              network: (
                <router-view to="#">
                  <span class="social-name">Pinterest</span>
                </router-view>
              ),
              users: this.socialTrafficState.pinterest.users,
              newUsers: this.socialTrafficState.pinterest.newUsers,
              sessions: this.socialTrafficState.pinterest.session,
              bounceRate: this.socialTrafficState.pinterest.bounceRate,
              pages: this.socialTrafficState.pinterest.pagesSession,
              avg: this.socialTrafficState.pinterest.avg,
            },
            {
              key: '7',
              network: (
                <router-view to="#">
                  <span class="social-name">Google+</span>
                </router-view>
              ),
              users: this.socialTrafficState.google.users,
              newUsers: this.socialTrafficState.google.newUsers,
              sessions: this.socialTrafficState.google.session,
              bounceRate: this.socialTrafficState.google.bounceRate,
              pages: this.socialTrafficState.google.pagesSession,
              avg: this.socialTrafficState.google.avg,
            },
          ]
        : [];
    },
  },
  mounted() {
    this.$store.dispatch('socialTrafficGetData');
  },
  data() {
    return {
      initValue: 'today',
      trafficTableColumns,
    };
  },
  methods: {
    socialTraffic(e) {
      e.preventDefault();
      return this.$store.dispatch('socialTrafficFilterData', e.target.value);
    },
  },
};

export default SocialTrafficMetrics;
</script>
