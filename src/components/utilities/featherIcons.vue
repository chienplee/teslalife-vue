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
  },
  data() {
    return {
      myClass: this.class,
      activity: icons[this.type].toSvg({
        'stroke-width': this.stroke,
        width: this.size,
        height: this.size,
        class: this.class,
      }),
    };
  },
};
</script>

<style lang="scss" scoped></style>
