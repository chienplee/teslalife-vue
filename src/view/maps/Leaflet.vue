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
          <sdCards title="Leaflet Basic Map">
            <l-map
              :center="[50.797897, -1.077641]"
              :zoom="15"
              class="map-wrapper"
            >
              <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              >
              </l-tile-layer>
              <l-marker :lat-lng="[50.797897, -1.077641]"></l-marker>
            </l-map>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Leaflet MultipleIcon Map">
            <l-map
              :center="[50.797897, -1.077641]"
              :zoom="12"
              class="map-wrapper"
            >
              <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              >
              </l-tile-layer>
              <l-marker
                v-for="item in place"
                :key="item.id"
                :lat-lng="item.position"
              ></l-marker>
            </l-map>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Leaflet Custom Icon Map">
            <l-map
              :center="[50.797897, -1.077641]"
              :zoom="12"
              class="map-wrapper"
            >
              <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              >
              </l-tile-layer>
              <l-marker
                :icon="fontAwesomeIcon"
                :lat-lng="[50.797897, -1.077641]"
              ></l-marker>
            </l-map>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Leaflet WMS Layer">
            <l-map
              :zoom="5"
              :center="[40.797897, -110.077641]"
              class="map-wrapper"
              style="width: 100%"
            >
              <l-control-layer />
              <l-wms-tile-layer
                v-for="layer in layers"
                :key="layer.name"
                :base-url="baseUrl"
                :layers="layer.layers"
                :visible="layer.visible"
                :name="layer.name"
                layer-type="base"
              />
            </l-map>
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
import L, { Icon, latLng } from "leaflet";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const fontAwesomeIcon = L.divIcon({
  html: `<i style="color: #2880CA" class="fa fa-thumb-tack fa-3x"></i>`,
  iconSize: [20, 20],
  className: "myDivIcon",
});

export default {
  name: "Leaflet",
  components: {
    PlusIcon,
    Button,
    CalendarButton,
    ExportButton,
    ShareButton,
    Main,
  },
  data() {
    return {
      center: latLng(50.797897, -1.077641),
      latLng: latLng(50.797897, -1.077641),
      fontAwesomeIcon,
      baseUrl: "http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi",
      layers: [
        {
          name: "Weather Data",
          visible: true,
          format: "image/png",
          layers: "nexrad-n0r-900913",
          transparent: true,
          attribution: "Weather data © 2012 IEM Nexrad",
        },
      ],
      place: [
        {
          id: 1,
          position: [50.797897, -1.077641],
        },
        {
          id: 2,
          position: [50.798897, -1.013641],
        },
        {
          id: 3,
          position: [50.7997799, -1.100641],
        },
      ],
    };
  },
};
</script>

<style scoped>
.map-wrapper {
  height: 600px;
}
</style>
