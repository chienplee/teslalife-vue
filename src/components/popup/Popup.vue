<template>
  <a-popover
    v-model="visible"
    :placement="placement"
    :title="title && title"
    :trigger="action"
  >
    <template v-if="title" slot="title">
      <Title>{{ title }}</Title>
    </template>
    <Content slot="content">
      <slot name="content">
        <router-link to="#">
          <CheckIcon size="16" />
          <span>Btn Dropdown one</span>
        </router-link>
        <router-link to="#">
          <CheckIcon size="16" />
          <span>Btn Dropdown two</span>
        </router-link>
        <router-link to="#">
          <CheckIcon size="16" />
          <span>Btn Dropdown three</span>
        </router-link>
      </slot>
    </Content>
    <slot></slot>
  </a-popover>
</template>

<script>
import { Content, Title } from "./style";
import VueTypes from "vue-types";
import { CheckIcon } from "vue-feather-icons";

export default {
  name: "Popover",
  props: {
    placement: VueTypes.string.def("bottomCenter"),
    title: VueTypes.string,
    action: VueTypes.string.def("hover"),
  },
  data() {
    return {
      visible: false,
    };
  },
  components: {
    Content,
    Title,
    CheckIcon,
  },
};
</script>
<style>
@import "./style.css";
</style>
