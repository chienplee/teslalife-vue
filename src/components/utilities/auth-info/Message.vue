<template>
  <div class="message">
    <Popover placement="bottomLeft" action="click">
      <AtbdTopDropdwon slot="content" class="atbd-top-dropdwon">
        <Heading class="atbd-top-dropdwon__title" as="h5">
          <span class="title-text">Messages</span>
          <a-badge class="badge-success" count="3" />
        </Heading>
        <div class="atbd-top-dropdwon-menu">
          <ul class="atbd-top-dropdwon__nav">
            <li>
              <router-link to="#">
                <figure class="atbd-top-dropdwon__content">
                  <img
                    :src="require('../../../static/img/avatar/NoPath.png')"
                    alt=""
                  />
                  <figcaption>
                    <Heading as="h5">
                      Software <span class="color-success">3 hrs ago</span>
                    </Heading>
                    <div>
                      <span class="atbd-top-dropdwonText"
                        >Lorem ipsum dolor amet cosec...</span
                      >
                      <span>
                        <a-badge class="badge-success" count="3" />
                      </span>
                    </div>
                  </figcaption>
                </figure>
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <figure class="atbd-top-dropdwon__content">
                  <img
                    :src="require('../../../static/img/avatar/NoPath.png')"
                    alt=""
                  />
                  <figcaption>
                    <Heading as="h5">
                      Software <span class="color-success">3 hrs ago</span>
                    </Heading>
                    <div>
                      <span class="atbd-top-dropdwonText"
                        >Lorem ipsum dolor amet cosec...</span
                      >
                      <span>
                        <a-badge class="badge-success" count="3" />
                      </span>
                    </div>
                  </figcaption>
                </figure>
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <figure class="atbd-top-dropdwon__content">
                  <img
                    :src="require('../../../static/img/avatar/NoPath.png')"
                    alt=""
                  />
                  <figcaption>
                    <Heading as="h5">
                      Software <span class="color-success">3 hrs ago</span>
                    </Heading>
                    <div>
                      <span class="atbd-top-dropdwonText"
                        >Lorem ipsum dolor amet cosec...</span
                      >
                      <span>
                        <a-badge class="badge-success" count="3" />
                      </span>
                    </div>
                  </figcaption>
                </figure>
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <figure class="atbd-top-dropdwon__content">
                  <img
                    :src="require('../../../static/img/avatar/NoPath.png')"
                    alt=""
                  />
                  <figcaption>
                    <Heading as="h5">
                      Software <span class="color-success">3 hrs ago</span>
                    </Heading>
                    <div>
                      <span class="atbd-top-dropdwonText"
                        >Lorem ipsum dolor amet cosec...</span
                      >
                      <span>
                        <a-badge class="badge-success" count="3" />
                      </span>
                    </div>
                  </figcaption>
                </figure>
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <figure class="atbd-top-dropdwon__content">
                  <img
                    :src="require('../../../static/img/avatar/NoPath.png')"
                    alt=""
                  />
                  <figcaption>
                    <Heading as="h5">
                      Software <span class="color-success">3 hrs ago</span>
                    </Heading>
                    <div>
                      <span class="atbd-top-dropdwonText"
                        >Lorem ipsum dolor amet cosec...</span
                      >
                      <span>
                        <a-badge class="badge-success" count="3" />
                      </span>
                    </div>
                  </figcaption>
                </figure>
              </router-link>
            </li>
            <ul />
          </ul>
        </div>
        <router-link class="btn-seeAll" to="#">
          See all messages
        </router-link>
      </AtbdTopDropdwon>
      <a-badge dot :offset="[-8, -5]">
        <router-link to="#" class="head-example">
          <MailIcon size="20" />
        </router-link>
      </a-badge>
    </Popover>
  </div>
</template>

<script>
import { AtbdTopDropdwon } from "./auth-info-style";
import Popover from "../../popup/Popup";
import Heading from "../../heading/Heading";
import { MailIcon } from "vue-feather-icons";
export default {
  name: "MessageBox",
  components: {
    AtbdTopDropdwon,
    Popover,
    Heading,
    MailIcon,
  },
};
</script>
