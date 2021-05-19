<template>
  <div :id="id"></div>
</template>

<script>
import svgMap from 'svgmap';
import 'svgmap/dist/svgMap.min.css';
import { onMounted, toRefs } from 'vue';
import VueTypes from 'vue-types';
import svgMapDataGPD from '@/demoData/vectorMap.js';

export default {
  name: 'WorldMap',
  props: {
    id: VueTypes.string.def('svgMap'),
    options: VueTypes.object.def(svgMapDataGPD),
  },
  setup(props) {
    const { id, options } = toRefs(props);
    onMounted(() => {
      new svgMap({
        targetElementID: id.value,
        data: { ...options.value },
      });
    });
  },
};
</script>
