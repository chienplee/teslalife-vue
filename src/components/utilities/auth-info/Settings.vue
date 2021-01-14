<template>
  <div class="settings">
    <Popover placement="bottomRight" action="click">
      <SettingDropdwon slot="content">
        <div class="setting-dropdwon">
          <a-row :gutter="10">
            <a-col :sm="12">
              <figure class="setting-dropdwon__single d-flex">
                <img
                  :src="require('../../../static/img/icon/014-document.png')"
                  alt=""
                />
                <figcaption>
                  <Heading as="h5">All Features</Heading>
                  <p>Introducing Increment subscriptions</p>
                </figcaption>
              </figure>
            </a-col>
            <a-col :sm="12">
              <figure class="setting-dropdwon__single d-flex">
                <img
                  :src="
                    require('../../../static/img/icon/015-color-palette.png')
                  "
                  alt=""
                />
                <figcaption>
                  <Heading as="h5">Themes</Heading>
                  <p>Third party themes that are compatible</p>
                </figcaption>
              </figure>
            </a-col>
            <a-col :sm="12">
              <figure class="setting-dropdwon__single d-flex">
                <img
                  :src="require('../../../static/img/icon/010-home.png')"
                  alt=""
                />
                <figcaption>
                  <Heading as="h5">Payments</Heading>
                  <p>We handle billions of dollars</p>
                </figcaption>
              </figure>
            </a-col>
            <a-col :sm="12">
              <figure class="setting-dropdwon__single d-flex">
                <img
                  :src="
                    require('../../../static/img/icon/017-video-camera.png')
                  "
                  alt=""
                />
                <figcaption>
                  <Heading as="h5">Design Mockups</Heading>
                  <p>Share planning visuals with clients</p>
                </figcaption>
              </figure>
            </a-col>
            <a-col :sm="12">
              <figure class="setting-dropdwon__single d-flex">
                <img
                  :src="require('../../../static/img/icon/013-document-1.png')"
                  alt=""
                />
                <figcaption>
                  <Heading as="h5">Content Planner</Heading>
                  <p>Centralize content gathering and editing</p>
                </figcaption>
              </figure>
            </a-col>
            <a-col :sm="12">
              <figure class="setting-dropdwon__single d-flex">
                <img
                  :src="
                    require('../../../static/img/icon/007-microphone-1.png')
                  "
                  alt=""
                />
                <figcaption>
                  <Heading as="h5">Diagram Maker</Heading>
                  <p>Plan user flows & test scenarios</p>
                </figcaption>
              </figure>
            </a-col>
          </a-row>
        </div>
      </SettingDropdwon>
      <router-link to="#" class="head-example">
        <SettingsIcon size="20" />
      </router-link>
    </Popover>
  </div>
</template>

<script>
import { SettingDropdwon } from "./auth-info-style";
import Popover from "../../popup/Popup";
import { SettingsIcon } from "vue-feather-icons";
import Heading from "../../heading/Heading";

export default {
  name: "Settings",
  components: {
    Heading,
    Popover,
    SettingDropdwon,
    SettingsIcon,
  },
};
</script>
