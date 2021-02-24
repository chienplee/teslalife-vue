<template>
  <div>
    <sdPageHeader title="Google Map">
      <div slot="buttons" class="page-header-actions">
        <CalendarButton />
        <ExportButton />
        <ShareButton />
        <Button size="small" type="primary">
          <PlusIcon size="14" />
          Add New
        </Button>
      </div>
    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="24" :xs="24">
          <sdCards title="Leaflet Basic Map">
            <Map
              class="map-wrapper"
              v-if="mapData"
              :data="mapData"
              :projection="projection"
              :key="1"
            >
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
import { Button } from "../../components/buttons/Buttons";
import CalendarButton from "../../components/buttons/CalendarButton";
import ExportButton from "../../components/buttons/ExportButton";
import ShareButton from "../../components/buttons/ShareButton";
import { Main } from "../styled";
import { PlusIcon } from "vue-feather-icons";
import { geoEqualEarth } from "d3-geo";

export default {
  name: "vector",
  components: {
    PlusIcon,
    Button,
    CalendarButton,
    ExportButton,
    ShareButton,
    Main,
  },
  data: () => ({
    mapData: undefined,
    projection: geoEqualEarth,
  }),
  mounted() {
    fetch(
      "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"
    )
      .then((r) => r.json())
      .then((d) => (this.mapData = d));
  },
};
</script>

<style scoped>
.map-wrapper {
  height: 600px;
}
</style>
