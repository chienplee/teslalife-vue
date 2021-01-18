<template>
  <Style
    :message="message"
    :type="type"
    :description="description"
    :closable="closable && closable"
    :showIcon="showIcon && showIcon"
    :outlined="outlined"
    :closeText="closeText && closeText"
  />
</template>

<script>
import { Style } from "./styled";
import VueTypes from "vue-types";

export default {
  name: "Alerts",
  components: {
    Style,
  },
  props: {
    type: VueTypes.oneOf(["success", "info", "warning", "error"]).def(
      "success"
    ),
    message: VueTypes.oneOfType([VueTypes.string, VueTypes.node]).def(
      "Hello there! A simple success alert—check it out!"
    ),
    description: VueTypes.oneOfType([VueTypes.string, VueTypes.node]),
    showIcon: VueTypes.bool,
    outlined: VueTypes.bool,
    closable: VueTypes.bool,
    closeText: VueTypes.oneOfType([VueTypes.string, VueTypes.node]),
    icon: VueTypes.node,
  },
};
</script>
