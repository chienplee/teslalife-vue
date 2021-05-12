<template>
  <div :id="id"></div>
</template>

<script>
import svgMap from 'svgmap';
import 'svgmap/dist/svgMap.min.css';
import { onMounted, toRefs } from 'vue';
import VueTypes from 'vue-types';

export default {
  name: 'WorldMap',
  props: {
    id: VueTypes.string.def('svgMap'),
    options: VueTypes.object.def({
      data: {
        gdp: {
          name: 'GDP per capita',
          format: '{0} USD',
          thousandSeparator: ',',
          thresholdMax: 50000,
          thresholdMin: 1000,
        },
        change: {
          name: 'Change to year before',
          format: '{0} %',
        },
      },
      applyData: 'gdp',
      values: {
        AF: { gdp: 587, change: 4.73 },
        AL: { gdp: 4583, change: 11.09 },
        DZ: { gdp: 4293, change: 10.01 },
        // ...
      },
    }),
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
