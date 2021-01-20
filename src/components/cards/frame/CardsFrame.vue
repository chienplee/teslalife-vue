<template>
  <CardFrame
    v-if="!headless"
    :size="size"
    :title="title"
    :bodyStyle="bodyStyle && bodyStyle"
    :headStyle="headStyle && headStyle"
    :bordered="border"
    :bodypadding="bodypadding && bodypadding"
    :style="{ width: '100%' }"
  >
    <template slot="extra">
      <Dropdown v-if="more" :action="['click']" placement="bottomCenter">
        <template slot="overlay">
          <slot name="more"></slot>
        </template>
        <router-link v-if="!moreText" to="#"
          ><MoreHorizontalIcon
        /></router-link>
        <router-link v-else to="#">More</router-link>
      </Dropdown>
      <slot name="button"></slot>
    </template>
    <slot></slot>
  </CardFrame>

  <CardFrame
    :bodypadding="bodypadding && bodypadding"
    :bodyStyle="bodyStyle && bodyStyle"
    :size="size"
    :style="{ width: '100%' }"
    :bordered="border"
    v-else
  >
    <Heading v-if="title" as="h4">{{ title }}</Heading>
    <p v-if="caption">{{ caption }}</p>
    <slot></slot>
  </CardFrame>
</template>

<script>
import { CardFrame } from "./style";
import Heading from "../../heading/Heading";
import Dropdown from "../../dropdown/Dropdown";
import VueTypes from "vue-types";
import { MoreHorizontalIcon } from "vue-feather-icons";
export default {
  name: "Cards",
  components: {
    CardFrame,
    Heading,
    Dropdown,
    MoreHorizontalIcon,
  },
  props: {
    title: VueTypes.oneOfType([
      VueTypes.string,
      VueTypes.object,
      VueTypes.node,
    ]),
    size: VueTypes.oneOf(["default", "small"]).def("default"),
    more: VueTypes.bool.def(false),
    bodyStyle: VueTypes.object,
    headStyle: VueTypes.object,
    headless: VueTypes.bool.def(false),
    border: VueTypes.bool.def(false),
    caption: VueTypes.string,
    bodypadding: VueTypes.string,
    moreText: VueTypes.bool.def(false),
  },
};
</script>
