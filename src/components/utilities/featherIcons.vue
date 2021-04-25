<template>
  <i v-html="activity"></i>
</template>

<script>
import { icons } from 'feather-icons';
import VueTypes from 'vue-types';

export default {
  name: 'FeatherIcons',
  props: {
    type: VueTypes.string.def('activity'),
    size: VueTypes.oneOfType([VueTypes.number, VueTypes.string]).def(16),
    stroke: VueTypes.oneOfType([VueTypes.number, VueTypes.string]).def(2),
    class: VueTypes.string,
    color: VueTypes.string,
    fill: VueTypes.string.def('transparent'),
  },
  data() {
    return {
      myClass: this.class,
      activity: icons[this.type].toSvg({
        'stroke-width': this.stroke,
        width: this.size,
        height: this.size,
        class: this.class,
        color: this.color,
        fill: this.fill,
      }),
    };
  },
};
</script>

<style lang="scss" scoped></style>
