<template>
  <div class="support">
    <Popover placement="bottomLeft" action="click">
      <NestedDropdwon slot="content">
        <div class="support-dropdwon">
          <ul>
            <Heading as="h5">Documentation</Heading>
            <li>
              <router-link to="#">How to customize admin</router-link>
            </li>
            <li>
              <router-link to="#">How to use</router-link>
            </li>
            <li>
              <router-link to="#">The relation of vertical spacing</router-link>
            </li>
          </ul>
          <ul>
            <Heading as="h5">Payments</Heading>
            <li>
              <router-link to="#">How to customize admin</router-link>
            </li>
            <li>
              <router-link to="#">How to use</router-link>
            </li>
          </ul>
          <ul>
            <Heading as="h5">Content Planner</Heading>
            <li>
              <router-link to="#">How to customize admin</router-link>
            </li>
            <li>
              <router-link to="#">How to use</router-link>
            </li>
          </ul>
        </div>
      </NestedDropdwon>
      <router-link to="#" class="head-example">
        <HelpCircleIcon size="20" />
      </router-link>
    </Popover>
  </div>
</template>

<script>
import { NestedDropdwon } from "./auth-info-style";
import Popover from "../../popup/Popup";
import { HelpCircleIcon } from "vue-feather-icons";
import Heading from "../../heading/Heading";

export default {
  name: "Support",
  components: {
    Popover,
    NestedDropdwon,
    HelpCircleIcon,
    Heading,
  },
};
</script>
