<template>
  <div :id="id"></div>
</template>

<script>
import WorldMap from 'world-map';
import { onMounted, toRefs } from 'vue';
import VueTypes from 'vue-types';

export default {
  name: 'WorldMap',
  props: {
    id: VueTypes.string.def('my-map'),
    options: VueTypes.object.def({
      mapstyle: {
        ocean: '#4A5B62',
        region: '#F3F3F3',
        border: '#ffffff',
      },
      project: {
        name: 'Mercator',
        zoomlevel: 6,
        zoomarea: [-122.417, 37.775],
      },
      showtable: false,
      editpanel: false,
      dataType: 'csv',
      dataurl: 'countriesdata.csv',
      defaultfill: 'steelblue',
      defaultsize: 30,
      player: true,
    }),
  },
  setup(props) {
    const { id, options } = toRefs(props);
    onMounted(() => {
      WorldMap(id.value, options.value);
    });
  },
};
</script>
