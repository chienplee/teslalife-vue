<template>
  <a-dropdown
    :overlayClassName="className"
    :placement="placement"
    :title="title"
    :trigger="action"
  >
    <Content slot="overlay">
      <slot name="overlay">
        <router-link to="#">
          <span>Export to CSV</span>
        </router-link>
        <router-link to="#">
          <span>Export to XML</span>
        </router-link>
        <router-link to="#">
          <span>Export to Drive</span>
        </router-link>
      </slot>
    </Content>
    <slot></slot>
  </a-dropdown>
</template>

<script>
import VueTypes from "vue-types";
import { Content } from "./dropdown-style";
export default {
  name: "Dropdown",
  components: {
    Content,
  },
  props: {
    placement: VueTypes.string.def("bottomRight"),
    title: VueTypes.string,
    action: VueTypes.array.def(["hover"]),
    className: VueTypes.string.def("strikingDash-dropdown"),
  },
};
</script>
