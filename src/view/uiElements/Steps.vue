<template>
  <div>
    <sdPageHeader title="Steps">
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
        <a-col :xs="24">
          <sdCards title="Basic">
            <basic size="small" :title="['Finished', 'In Progress', 'Waiting']" :current="1" />
          </sdCards>
          <sdCards title="With Icon">
            <basic step="withIcon" size="small" :data="data" />
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from '../styled';
import Basic from '../../components/steps/Basic';
import { data } from '../../demoData/step-data.json';
export default {
  name: 'Steps',
  components: {
    Main,
    Basic,
  },
  setup() {
    return { data };
  },
};
</script>
