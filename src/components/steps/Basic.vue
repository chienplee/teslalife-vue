<template>
  <StepsStyle :current="current" :size="size" v-if="step == 'basic'">
    <a-step v-for="title in title" :title="title" :key="title" />
  </StepsStyle>
  <StepsStyle :size="size" v-if="step == 'withIcon'">
    <a-step v-for="item in data" :title="item.title" :key="item.id" status="item.status">
      <template #icon>
        <sdFeatherIcons :type="item.icon" size="24" />
      </template>
    </a-step>
  </StepsStyle>
</template>

<script>
import VueTypes from 'vue-types';
import { StepsStyle } from './style';
export default {
  name: 'BasicSteps',
  components: { StepsStyle },
  props: {
    step: VueTypes.oneOf(['basic', 'withIcon']).def('basic'),
    size: VueTypes.oneOf(['small', 'bar', 'default']).def('small'),
    current: VueTypes.number.def(12),
    title: VueTypes.arrayOf(VueTypes.string),
    data: VueTypes.arrayOf(VueTypes.object),
  },
};
</script>
