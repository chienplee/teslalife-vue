<template>
  <div>
    <sdPageHeader title="Coming Soon">
      <template v-slot:buttons>
        <div class="page-header-actions">
          <sdCalendarButton />
          <sdExportButton />
          <sdShareButton />
          <sdButton size="small" type="primary">
            <sdFeatherIcons type="plus" size="14" />
            Add New
          </sdButton>
        </div>
      </template>
    </sdPageHeader>
    <Main>
      <Row gutter="25">
        <a-col :sm="24" :xs="24">
          <ComingsoonStyleWrapper>
            <sdCards headless>
              <div class="strikingDash-logo">
                <img style="{ width: '120px' }" :src="require(`../../static/img/Logo_Dark.svg`)" alt="" />
              </div>
              <div class="coming-soon-content">
                <h1>We are coming soon</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry's standard dummy text ever
                  since the 1500s,
                </p>
              </div>
              <div class="strikingDash-countdown">
                <p v-if="!isFinished">
                  Time Remaining：{{ days }} days, {{ hours }} hours, {{ minutes }} minutes, {{ seconds }} seconds.
                </p>
                <p v-else>Event Has Been Successfully Completed</p>
              </div>
              <div class="subscription-form">
                <a-form name="basic">
                  <div class="subscription-form-inner">
                    <a-form-item>
                      <a-input name="email" value="username@email.com" placeholder="input placeholder" />
                    </a-form-item>
                    <sdButton size="large" type="primary" html-type="submit">
                      Subscribe
                    </sdButton>
                  </div>
                </a-form>
              </div>
              <div class="coming-soon-social">
                <ul>
                  <li>
                    <router-link to="#" class="facebook">
                      <font-awesome-icon :icon="faFacebookF" size="1x" />
                    </router-link>
                  </li>
                  <li>
                    <router-link to="#" class="twitter">
                      <font-awesome-icon :icon="faTwitter" size="1x" />
                    </router-link>
                  </li>
                  <li>
                    <router-link to="#" class="globe">
                      <font-awesome-icon icon="globe" size="1x" />
                    </router-link>
                  </li>
                  <li>
                    <router-link to="#" class="github">
                      <font-awesome-icon :icon="faGithub" size="1x" />
                    </router-link>
                  </li>
                </ul>
                <p>2020 © AazzTech</p>
              </div>
            </sdCards>
          </ComingsoonStyleWrapper>
        </a-col>
      </Row>
    </Main>
  </div>
</template>

<script>
import { Main } from '../styled';
import { ComingsoonStyleWrapper } from './style';
import { faFacebookF, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import Countdown from 'countdown-js';
import { ref } from 'vue';

export default {
  name: '404',
  components: {
    Main,
    ComingsoonStyleWrapper,
  },
  setup() {
    const ten_days = 1000 * 60 * 60 * 24 * 10;
    const end = new Date(new Date().getTime() + ten_days);

    const days = ref(0);
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);
    const isFinished = ref(false);

    const timer = Countdown.timer(
      end,
      function(timeLeft) {
        days.value = timeLeft.days;
        hours.value = timeLeft.hours;
        minutes.value = timeLeft.minutes;
        seconds.value = timeLeft.seconds;
      },
      function() {
        isFinished.value = true;
      },
    );
    return {
      timer,
      days,
      hours,
      minutes,
      seconds,
      isFinished,
    };
  },
  data() {
    return {
      faFacebookF,
      faTwitter,
      faGithub,
    };
  },
  methods: {
    transformSlotProps(props) {
      const formattedProps = {};

      Object.entries(props).forEach(([key, value]) => {
        formattedProps[key] = value < 10 ? `0${value}` : String(value);
      });

      return formattedProps;
    },
  },
};
</script>
