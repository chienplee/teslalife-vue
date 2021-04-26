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
          <sdCards title="World Map">
            <WorldMap :options="options" />
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from '../styled';
import WorldMap from '@/components/utilities/VectorMap.vue';

export default {
  name: 'vector',
  components: {
    Main,
    WorldMap,
  },
  data: () => ({
    options: {
      width: 960,
      height: 480,
      zoom: true,
      hideAntarctic: true,
      landsColor: '#ddd',
      landsBorder: '#fff',
    },
  }),
};
</script>

<style scoped>
.map-wrapper {
  height: 600px;
}
</style>
