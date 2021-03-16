<template>
  <div>
    <sdPageHeader title="Radar Charts">
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
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Basic Radialbar Chart">
            <basic />
          </sdCards>
          <sdCards title="Custom Angle Circle Chart">
            <radar-multiple-series />
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Gradient Circle Chart">
            <!-- <gradient /> -->
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import Basic from '../../../components/apexcharts/radar-charts/Basic';
import RadarMultipleSeries from '../../../components/apexcharts/radar-charts/RadarMultipleSeries';
export default {
  name: 'RadarCharts',
  components: {
    Basic,
    RadarMultipleSeries,
  },
};
</script>
