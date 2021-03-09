<template>
  <div class="notification">
    <sdPopover placement="bottomLeft" action="click">
      <template v-slot:content>
        <AtbdTopDropdwon class="atbd-top-dropdwon">
          <sdHeading as="h5" class="atbd-top-dropdwon__title">
            <span class="title-text">Notifications</span>
            <a-badge class="badge-success" count="3" />
          </sdHeading>
          <ul class="atbd-top-dropdwon__nav notification-list">
            <li>
              <a to="#">
                <div class="atbd-top-dropdwon__content notifications">
                  <div class="notification-icon bg-primary">
                    <sdFeatherIcons type="hard-drive" />
                  </div>
                  <div class="notification-content d-flex">
                    <div class="notification-text">
                      <sdHeading as="h5"> <span>James</span> sent you a message </sdHeading>
                      <p>5 hours ago</p>
                    </div>
                    <div class="notification-status">
                      <a-badge dot />
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a to="#">
                <div class="atbd-top-dropdwon__content notifications">
                  <div class="notification-icon bg-secondary">
                    <sdFeatherIcons type="share-2" />
                  </div>
                  <div class="notification-content d-flex">
                    <div class="notification-text">
                      <sdHeading as="h5"> <span>James</span> sent you a message </sdHeading>
                      <p>5 hours ago</p>
                    </div>

                    <div class="notification-status">
                      <a-badge dot />
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a to="#">
                <div class="atbd-top-dropdwon__content notifications">
                  <div class="notification-icon bg-secondary">
                    <sdFeatherIcons type="share-2" />
                  </div>
                  <div class="notification-content d-flex">
                    <div class="notification-text">
                      <sdHeading as="h5"> <span>James</span> sent you a message </sdHeading>
                      <p>5 hours ago</p>
                    </div>

                    <div class="notification-status">
                      <a-badge dot />
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a to="#">
                <div class="atbd-top-dropdwon__content notifications">
                  <div class="notification-icon bg-secondary">
                    <sdFeatherIcons type="share-2" />
                  </div>
                  <div class="notification-content d-flex">
                    <div class="notification-text">
                      <sdHeading as="h5"> <span>James</span> sent you a message </sdHeading>
                      <p>5 hours ago</p>
                    </div>

                    <div class="notification-status">
                      <a-badge dot />
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a to="#">
                <div class="atbd-top-dropdwon__content notifications">
                  <div class="notification-icon bg-secondary">
                    <sdFeatherIcons type="share-2" />
                  </div>
                  <div class="notification-content d-flex">
                    <div class="notification-text">
                      <sdHeading as="h5"> <span>James</span> sent you a message </sdHeading>
                      <p>5 hours ago</p>
                    </div>

                    <div class="notification-status">
                      <a-badge dot />
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <router-link class="btn-seeAll" to="#">
            See all incoming activity
          </router-link>
        </AtbdTopDropdwon>
      </template>
      <a-badge dot :offset="[-8, -5]">
        <a to="#" class="head-example">
          <sdFeatherIcons type="bell" size="20" />
        </a>
      </a-badge>
    </sdPopover>
  </div>
</template>
<script>
import { AtbdTopDropdwon } from './auth-info-style';

export default {
  name: 'Notification',
  components: {
    AtbdTopDropdwon,
  },
};
</script>
