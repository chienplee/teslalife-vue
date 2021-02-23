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
        <a-col :md="12" :xs="24">
          <sdCards title="Google Map Basic">
            <div>
              <google-map
                class="map-wrapper"
                id="map"
                :center="position"
                ref="Map"
              >
                <google-map-marker :position="position"></google-map-marker>
              </google-map>
            </div>
          </sdCards>
        </a-col>

        <a-col :md="12" :xs="24">
          <sdCards title="Google Map Custom Marker with info window">
            <div>
              <google-map
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
              </google-map>
            </div>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Google Map light style">
            <div>
              <google-map
                class="map-wrapper"
                id="map2"
                :center="position"
                ref="Map"
                :options="style.light"
              >
                <google-map-marker :position="position"></google-map-marker>
              </google-map>
            </div>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Google Map dark style">
            <div>
              <google-map
                class="map-wrapper"
                id="map3"
                :center="position"
                ref="Map"
                :options="style.dark"
              >
                <google-map-marker :position="position"></google-map-marker>
              </google-map>
            </div>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Google Map theme color">
            <div>
              <google-map
                class="map-wrapper"
                id="map3"
                :center="position"
                ref="Map"
                :options="style.theme"
                :zoom="15"
              >
                <google-map-marker :position="position"></google-map-marker>
              </google-map>
            </div>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Google Map style map">
            <div>
              <google-map
                class="map-wrapper"
                id="map4"
                :center="position"
                ref="Map"
                :options="style.styleMap"
              >
                <google-map-marker :position="position"></google-map-marker>
              </google-map>
            </div>
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
// import GMaps from "../../components/maps/googleMaps";
import mapData from "../../config/map/google-maps-styles";

export default {
  name: "GoogleMaps",
  components: {
    PlusIcon,
    Button,
    CalendarButton,
    ExportButton,
    ShareButton,
    Main,
  },
  data() {
    console.log(mapData.mapOneStyles);
    return {
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
};
</script>

<style scoped>
.map-wrapper {
  height: 600px;
}
</style>
