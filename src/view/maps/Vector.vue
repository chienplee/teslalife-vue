<template>
  <div>
    <sdPageHeader title="Google Map">
      <template v-slot:buttons>
        <div class="page-header-actions">
          <sdCalendarButton />
          <sdExportButton />
          <sdShareButton />
          <sdButton size="small" type="primary">
            <sdFeatherIcons type="plus" size="14" />
            Add New
          </sdButton>
        </div>
      </template>
    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="24" :xs="24">
          <sdCards title="Leaflet Basic Map">
            <Map class="map-wrapper" v-if="mapData" :data="mapData" :projection="projection" :key="1">
              <MapFeatures
                fill="#DBE1E8"
                stroke="#FFF"
                strokeWidth="{0.5}"
                :style="{
                  default: {
                    fill: '#DBE1E8',
                    outline: 'none',
                  },
                  hover: {
                    fill: '#5F63F2',
                    outline: 'none',
                  },
                  pressed: {
                    fill: '#5F63F2',
                    outline: 'none',
                  },
                }"
                :key="2"
              />
            </Map>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from '../styled';
import { geoEqualEarth } from 'd3-geo';

export default {
  name: 'vector',
  components: {
    Main,
  },
  data: () => ({
    mapData: undefined,
    projection: geoEqualEarth,
  }),
  mounted() {
    fetch('https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json')
      .then(r => r.json())
      .then(d => (this.mapData = d));
  },
};
</script>

<style scoped>
.map-wrapper {
  height: 600px;
}
</style>
