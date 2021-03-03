<template>
  <div>
    <sdPageHeader title="Calendar">
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
        <a-col :md="24">
          <sdCards title="Basic">
            <CalendarWrapper
              ><a-calendar @panelChange="onPanelChange"
            /></CalendarWrapper>
          </sdCards>
        </a-col>
        <a-col :md="24">
          <sdCards title="Notice Calendar">
            <CalendarWrapper>
              <a-calendar>
                <template v-slot:dateCellRender:value>
                  <ul class="events">
                    <li v-for="item in getListData(value)" :key="item.content">
                      <a-badge :status="item.type" :text="item.content" />
                    </li>
                  </ul>
                </template>

                <template v-slot:monthCellRender:value>
                  <div v-if="getMonthData(value)" class="notes-month">
                    <section>{{ getMonthData(value) }}</section>
                    <span>Backlog number</span>
                  </div>
                </template>
              </a-calendar>
            </CalendarWrapper>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main, CalendarWrapper } from "../styled";

export default {
  name: "Calendar",
  components: {
    Main,
    CalendarWrapper,
  },
  data() {
    return {};
  },
  methods: {
    onPanelChange(value, mode) {
      console.log(value, mode);
    },
    getListData(value) {
      let listData;
      switch (value.date()) {
        case 8:
          listData = [
            { type: "warning", content: "This is warning event." },
            { type: "success", content: "This is usual event." },
          ];
          break;
        case 10:
          listData = [
            { type: "warning", content: "This is warning event." },
            { type: "success", content: "This is usual event." },
            { type: "error", content: "This is error event." },
          ];
          break;
        case 15:
          listData = [
            { type: "warning", content: "This is warning event" },
            {
              type: "success",
              content: "This is very long usual event。。....",
            },
            { type: "error", content: "This is error event 1." },
            { type: "error", content: "This is error event 2." },
            { type: "error", content: "This is error event 3." },
            { type: "error", content: "This is error event 4." },
          ];
          break;
        default:
      }
      return listData || [];
    },

    getMonthData(value) {
      if (value.month() === 8) {
        return 1394;
      }
    },
  },
};
</script>
