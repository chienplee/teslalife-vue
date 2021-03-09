<template>
  <div>
    <sdPageHeader title="Banners">
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
                <!-- <Countdown date={Date.now() + 1606546460} renderer={renderer} /> -->
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
export default {
  name: '404',
  components: {
    Main,
    ComingsoonStyleWrapper,
  },
  data() {
    return {
      faFacebookF,
      faTwitter,
      faGithub,
    };
  },
};
</script>
