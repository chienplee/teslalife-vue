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
          <sdCards title="Google Basic Map">
            <BasicMap :apiKey="apiKey" />
          </sdCards>
        </a-col>

        <a-col :md="12" :xs="24">
          <sdCards title="Google Polyline Map">
            <PolylineMap :apiKey="apiKey" />
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Google Polygon Map">
            <PolygonMap :apiKey="apiKey" />
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Google Rectangle Map">
            <RectangleMap :apiKey="apiKey" />
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Google Rectangle Map">
            <CircleMap :apiKey="apiKey" />
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Google Advanced Map">
            <AdvancedMap :apiKey="apiKey" />
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from '../styled';
import { defineComponent } from 'vue';
import BasicMap from './googleMaps/BasicMap';
import PolylineMap from './googleMaps/PolylineMap';
import PolygonMap from './googleMaps/PolygonMap';
import RectangleMap from './googleMaps/RectangleMap';
import CircleMap from './googleMaps/CircleMap';
import AdvancedMap from './googleMaps/AdvancedMap';

export default defineComponent({
  name: 'GoogleMaps',
  components: {
    Main,
    BasicMap,
    PolylineMap,
    PolygonMap,
    RectangleMap,
    CircleMap,
    AdvancedMap,
  },
  setup() {
    return { apiKey: 'AIzaSyCWLSu-IIz-TNFJ7oGbgbP7FXiW14SWk08' };
  },
});
</script>

<style scoped>
.map-wrapper {
  height: 600px;
}
</style>
