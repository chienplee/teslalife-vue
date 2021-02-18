<template>
  <div>
    <sdPageHeader title="Tables">
    </sdPageHeader>
    <Main>
        <a-row :gutter="15">
          <a-col :xs="24">
            <sdCards title="Basic Usage">
                <BasicTable />
            </sdCards>
          </a-col>
          <!-- <a-col :xs="24">
            <SocialTrafficMetrics />
          </a-col>
          <a-col :xs="24">
            <TrafficChannel />
          </a-col>
          <a-col :xs="24">
            <TopLandingPages />
          </a-col>
          <a-col xs={12}>
            <TopSellingProduct />
          </a-col>
          <a-col xs={12}>
            <RevenueGenerated />
          <a-coll>
          <a-col :xs="24">
            <DragAndDropTable />
          </a-col> -->
        </a-row>
    </Main>
  </div>
</template>

<script>

import { Main } from "../styled";
import BasicTable from "./overview/BasicTable";
export default {
  name: "Tables",
  components: {
    Main,
    BasicTable,
  },
};
</script>
