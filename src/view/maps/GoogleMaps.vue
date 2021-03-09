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
        <a-col :md="12" :xs="24">
          <sdCards title="Google Map Basic">
            <GoogleMap :api-key="apiKey" style="width: 100%; height: 500px" :center="position" :zoom="15">
              <Marker :options="{ position }" />
            </GoogleMap>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Google Map Custom Marker with info window">
            <div>
              <GoogleMap :api-key="apiKey" style="width: 100%; height: 500px" :center="position" :zoom="15">
                <Marker :options="{ position }" />
              </GoogleMap>

              <!-- <google-map
                class="map-wrapper"
                id="map1"
                :center="position"
                ref="Map"
              >
                <google-map-marker
                  :icon="require(`../../static/img/map/mpc.png`)"
                  :position="position"
                  @click="toggleInfoWindow()"
                ></google-map-marker>
                <google-map-infowindow
                  :position="position"
                  :show.sync="showInfo"
                  :options="{ maxWidth: 300 }"
                  @info-window-clicked="infoClicked"
                >
                  <h4>Hello</h4>
                  <p>This is most of the beautiful</p>
                </google-map-infowindow>
              </google-map> -->
            </div>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from '../styled';
import mapData from '../../config/map/google-maps-styles';
import { GoogleMap, Marker } from 'vue3-google-map';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GoogleMaps',
  components: {
    Main,
    GoogleMap,
    Marker,
  },
  setup() {
    const center = { lat: 40.689247, lng: -74.044502 };
    return { center };
  },
  data() {
    return {
      apiKey: 'AIzaSyCWLSu-IIz-TNFJ7oGbgbP7FXiW14SWk08',
      showInfo: false,
      position: {
        lat: 50.797897,
        lng: -1.077641,
      },
      style: {
        light: { styles: mapData.mapOneStyles },
        dark: { styles: mapData.mapStyleDark },
        theme: { styles: mapData.mapThreeStyles },
        styleMap: { styles: mapData.mapTwoStyles },
      },
    };
  },
  methods: {
    toggleInfoWindow() {
      this.showInfo = true;
    },
    infoClicked(context) {
      console.log(context);
    },
  },
});
</script>

<style scoped>
.map-wrapper {
  height: 600px;
}
</style>
