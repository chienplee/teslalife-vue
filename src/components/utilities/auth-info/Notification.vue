<template>
  <div class="notification">
    <Popover placement="bottomLeft" action="click">
      <AtbdTopDropdwon slot="content" class="atbd-top-dropdwon">
        <Heading as="h5" class="atbd-top-dropdwon__title">
          <span class="title-text">Notifications</span>
          <a-badge class="badge-success" count="3" />
        </Heading>
        <ul class="atbd-top-dropdwon__nav notification-list">
          <li>
            <router-link to="#">
              <div class="atbd-top-dropdwon__content notifications">
                <div class="notification-icon bg-primary">
                  <HardDriveIcon />
                </div>
                <div class="notification-content d-flex">
                  <div class="notification-text">
                    <Heading as="h5">
                      <span>James</span> sent you a message
                    </Heading>
                    <p>5 hours ago</p>
                  </div>
                  <div class="notification-status">
                    <a-badge dot />
                  </div>
                </div>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <div class="atbd-top-dropdwon__content notifications">
                <div class="notification-icon bg-secondary">
                  <ShareIcon />
                </div>
                <div class="notification-content d-flex">
                  <div class="notification-text">
                    <Heading as="h5">
                      <span>James</span> sent you a message
                    </Heading>
                    <p>5 hours ago</p>
                  </div>

                  <div class="notification-status">
                    <a-badge dot />
                  </div>
                </div>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <div class="atbd-top-dropdwon__content notifications">
                <div class="notification-icon bg-secondary">
                  <ShareIcon />
                </div>
                <div class="notification-content d-flex">
                  <div class="notification-text">
                    <Heading as="h5">
                      <span>James</span> sent you a message
                    </Heading>
                    <p>5 hours ago</p>
                  </div>

                  <div class="notification-status">
                    <a-badge dot />
                  </div>
                </div>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <div class="atbd-top-dropdwon__content notifications">
                <div class="notification-icon bg-secondary">
                  <ShareIcon />
                </div>
                <div class="notification-content d-flex">
                  <div class="notification-text">
                    <Heading as="h5">
                      <span>James</span> sent you a message
                    </Heading>
                    <p>5 hours ago</p>
                  </div>

                  <div class="notification-status">
                    <a-badge dot />
                  </div>
                </div>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <div class="atbd-top-dropdwon__content notifications">
                <div class="notification-icon bg-secondary">
                  <ShareIcon />
                </div>
                <div class="notification-content d-flex">
                  <div class="notification-text">
                    <Heading as="h5">
                      <span>James</span> sent you a message
                    </Heading>
                    <p>5 hours ago</p>
                  </div>

                  <div class="notification-status">
                    <a-badge dot />
                  </div>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
        <router-link class="btn-seeAll" to="#">
          See all incoming activity
        </router-link>
      </AtbdTopDropdwon>
      <a-badge dot :offset="[-8, -5]">
        <router-link to="#" class="head-example">
          <BellIcon size="20" />
        </router-link>
      </a-badge>
    </Popover>
  </div>
</template>
<script>
import { AtbdTopDropdwon } from "./auth-info-style";
import Popover from "../../popup/Popup";
import Heading from "../../heading/Heading";
import { BellIcon, HardDriveIcon, ShareIcon } from "vue-feather-icons";

export default {
  name: "Notification",
  components: {
    AtbdTopDropdwon,
    Popover,
    Heading,
    BellIcon,
    HardDriveIcon,
    ShareIcon,
  },
};
</script>
