<template>
  <div>
    <sdPageHeader title="Cards">
      <div slot="buttons" class="page-header-actions">
        <sdCalendarButton />
        <sdExportButton />
        <sdShareButton />
        <sdButton size="small" type="primary">
          <PlusIcon size="14" />
          Add New
        </sdButton>
      </div>
    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :xs="24">
          <sdCards title="Basic card" size="default">
            <a-col :lg="8" :md="10" :xs="24" :style="{ padding: 0 }">
              <CardStyleWrapper>
                <sdCards
                  title="Default Size Card"
                  :border="true"
                  size="default"
                  :moreText="true"
                  :more="true"
                  :style="{ width: 400 }"
                >
                  <MoreContent slot="more" />
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </sdCards>
                <sdCards
                  title="Default Size Card"
                  :border="true"
                  size="small"
                  :moreText="true"
                  :more="true"
                  :style="{ width: 400 }"
                >
                  <MoreContent slot="more" />
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </sdCards>
              </CardStyleWrapper>
            </a-col>
          </sdCards>
        </a-col>
        <a-col :xs="24">
          <sdCards title="Basic card" size="default">
            <a-col :lg="8" :md="10" :xs="24" :style="{ padding: 0 }">
              <CardStyleWrapper>
                <sdCards
                  title="No border"
                  :border="false"
                  size="default"
                  :moreText="true"
                  :more="true"
                  :style="{ width: 400 }"
                >
                  <MoreContent slot="more" />
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </sdCards>
              </CardStyleWrapper>
            </a-col>
          </sdCards>
        </a-col>
        <a-col :xs="24">
          <sdCards title="Basic card" size="default">
            <a-col :lg="8" :md="10" :xs="24" :style="{ padding: 0 }">
              <CardStyleWrapper>
                <sdCards
                  :headless="true"
                  :border="true"
                  :style="{ width: 400 }"
                >
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </sdCards>
              </CardStyleWrapper>
            </a-col>
          </sdCards>
        </a-col>
        <a-col :xs="24">
          <sdCards title="Card In Column" size="default">
            <div class="columnCardsWrapper">
              <a-row :gutter="16">
                <a-col :sm="8" :xs="24">
                  <CardStyleWrapper>
                    <sdCards :border="false" title="Card title">
                      <p>Card content</p>
                    </sdCards>
                  </CardStyleWrapper>
                </a-col>
                <a-col :sm="8" :xs="24">
                  <CardStyleWrapper>
                    <sdCards :border="false" title="Card title">
                      <p>Card content</p>
                    </sdCards>
                  </CardStyleWrapper>
                </a-col>
                <a-col :sm="8" :xs="24">
                  <CardStyleWrapper>
                    <sdCards :border="false" title="Card title">
                      <p>Card content</p>
                    </sdCards>
                  </CardStyleWrapper>
                </a-col>
              </a-row>
            </div>
          </sdCards>
        </a-col>
        <a-col :xs="24">
          <div class="card-grid-wrap">
            <sdCards title="Grid Card" size="default">
              <a-card-grid
                :style="{ width: '25%', textAlign: 'center', padding: 24 }"
                >Content</a-card-grid
              >
              <a-card-grid
                :style="{ width: '25%', textAlign: 'center', padding: 24 }"
                >Content</a-card-grid
              >
              <a-card-grid
                :style="{ width: '25%', textAlign: 'center', padding: 24 }"
                >Content</a-card-grid
              >
              <a-card-grid
                :style="{ width: '25%', textAlign: 'center', padding: 24 }"
                >Content</a-card-grid
              >
              <a-card-grid
                :style="{ width: '25%', textAlign: 'center', padding: 24 }"
                >Content</a-card-grid
              >
              <a-card-grid
                :style="{ width: '25%', textAlign: 'center', padding: 24 }"
                >Content</a-card-grid
              >
              <a-card-grid
                :style="{ width: '25%', textAlign: 'center', padding: 24 }"
                >Content</a-card-grid
              >
              <a-card-grid
                :style="{ width: '25%', textAlign: 'center', padding: 24 }"
                >Content</a-card-grid
              >
            </sdCards>
          </div>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { PlusIcon } from "vue-feather-icons";
import { Main } from "../styled";
import { CardStyleWrapper } from "./ui-elements-styled";
import {
  PrinterIcon,
  BookOpenIcon,
  FileTextIcon,
  XIcon,
  FileIcon,
} from "vue-feather-icons";

const MoreContent = () => {
  return (
    <div>
      <router-link to="#">
        <PrinterIcon size="16" />
        <span>Printer</span>
      </router-link>
      <router-link to="#">
        <BookOpenIcon size="16" />
        <span>PDF</span>
      </router-link>
      <router-link to="#">
        <FileTextIcon size="16" />
        <span>Google Sheets</span>
      </router-link>
      <router-link to="#">
        <XIcon size="16" />
        <span>Excel (XLSX)</span>
      </router-link>
      <router-link to="#">
        <FileIcon size="16" />
        <span>CSV</span>
      </router-link>
    </div>
  );
};

export default {
  name: "Cards",
  components: {
    PlusIcon,
    Main,
    CardStyleWrapper,
    MoreContent,
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
