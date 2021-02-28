<template>
  <div>
    <PageHeader title="Chart Js">
      <div slot="buttons" class="page-header-actions">
        <CalendarButton />
        <ExportButton />
        <ShareButton />
        <Button size="small" type="primary">
          <PlusIcon size="14" />
          Add New
        </Button>
      </div>
    </PageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Bar Chart">
            <sdGoogleBasicBarChart
              :data="barChartData"
              width="100%"
              :height="300"
              title="Population of Largest U.S. Cities"
              chartArea="50%"
            />
          </sdCards>
          <sdCards title="Stacked bar chart with multiple series">
            <sdGoogleStackedChart
              :data="barChartData"
              width="100%"
              :height="300"
              title="Population of Largest U.S. Cities"
              chartArea="50%"
            />
          </sdCards>
          <sdCards title="Combo Chart">
            <sdGoogleComboChart
              :data="comboChartData"
              width="100%"
              :height="300"
              title="Monthly Coffee Production by Country"
              chartArea="50%"
              :colors="['#b0120a', '#ffab91', '#e0120a', '#afab91']"
            />
          </sdCards>
          <sdCards title="Multiple Line Chart">
            <sdGoogleMultiLineChart
              :data="MultilineChartData"
              width="100%"
              :height="300"
            />
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Bar Chart">
            <sdGoogleMaterialBarChart
              :data="materialDesignChart"
              width="100%"
              :height="300"
              title="Population of Largest U.S. Cities"
              subtitle="Sales, Expenses, and Profit: 2014-2017"
              chartArea="50%"
            />
          </sdCards>
          <sdCards title="Custom Colors Bar Chart">
            <sdGoogleCustomColorChart
              :data="barChartData"
              width="100%"
              :height="300"
              title="Population of Largest U.S. Cities"
              subtitle="Sales, Expenses, and Profit: 2014-2017"
              chartArea="50%"
              :colors="['#b0120a', '#ffab91']"
            />
          </sdCards>
          <sdCards title="Line Chart">
            <sdGoogleLineChart
              :data="lineChartData"
              width="100%"
              :height="300"
            />
          </sdCards>
          <sdCards title="Organization Chart">
            <sdGoogleBasicPieChart
              :data="pieChartData"
              width="100%"
              :height="300"
              chartArea="100%"
            />
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
import { PageHeader } from "../../components/pageHeaders/PageHeaders";
import { PlusIcon } from "vue-feather-icons";
import {
  barChartData,
  materialDesignChart,
  comboChartData,
  lineChartData,
  MultilineChartData,
  pieChartData,
} from "../../demoData/google-charts.json";

export default {
  name: "GoogleCharts",
  components: {
    PlusIcon,
    Button,
    CalendarButton,
    ExportButton,
    ShareButton,
    Main,
    PageHeader,
  },
  data() {
    return {
      barChartData,
      materialDesignChart,
      comboChartData,
      lineChartData,
      MultilineChartData,
      pieChartData,
    };
  },
};
</script>
