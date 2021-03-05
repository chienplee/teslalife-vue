<template>
  <div>
    <sdPageHeader title="Grid">
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
      <a-row :gutter="15">
        <a-col :xs="24">
          <sdCards headless title="Basic Grid" size="default">
            <GridStyle>
              <a-row>
                <a-col :span="12">col-12</a-col>
                <a-col :span="12">col-12</a-col>
              </a-row>
              <a-row>
                <a-col :span="8">col-8</a-col>
                <a-col :span="8">col-8</a-col>
                <a-col :span="8">col-8</a-col>
              </a-row>
              <a-row>
                <a-col :span="6">col-6</a-col>
                <a-col :span="6">col-6</a-col>
                <a-col :span="6">col-6</a-col>
                <a-col :span="6">col-6</a-col>
              </a-row>
            </GridStyle>
          </sdCards>
        </a-col>
      </a-row>
      <a-row :gutter="15">
        <a-col :xs="24">
          <sdCards headless title="Grid Gutter" size="default">
            <GridStyleGutter>
              <a-row :gutter="16">
                <a-col class="gutter-row" :span="6">
                  <div class="gutter-box">col-6</div>
                </a-col>
                <a-col class="gutter-row" :span="6">
                  <div class="gutter-box">col-6</div>
                </a-col>
                <a-col class="gutter-row" :span="6">
                  <div class="gutter-box">col-6</div>
                </a-col>
                <a-col class="gutter-row" :span="6">
                  <div class="gutter-box">col-6</div>
                </a-col>
              </a-row>
              <a-row :gutter="[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]">
                <a-col class="gutter-row" :span="6">
                  <div class="gutter-box">col-6</div>
                </a-col>
                <a-col class="gutter-row" :span="6">
                  <div class="gutter-box">col-6</div>
                </a-col>
                <a-col class="gutter-row" :span="6">
                  <div class="gutter-box">col-6</div>
                </a-col>
                <a-col class="gutter-row" :span="6">
                  <div class="gutter-box">col-6</div>
                </a-col>
              </a-row>
            </GridStyleGutter>
          </sdCards>
        </a-col>
      </a-row>
      <a-row :gutter="15">
        <a-col :xs="24">
          <sdCards headless title="Column offset" size="default">
            <GridStyleOffset>
              <a-row>
                <a-col :span="8">col-8</a-col>
                <a-col :span="8" offset="8"> col-8 </a-col>
              </a-row>
              <a-row>
                <a-col :span="6" offset="6"> col-6 col-offset-6 </a-col>
                <a-col :span="6" offset="6"> col-6 col-offset-6 </a-col>
              </a-row>
              <a-row>
                <a-col :span="12" offset="6"> col-12 col-offset-6 </a-col>
              </a-row>
            </GridStyleOffset>
          </sdCards>
        </a-col>
      </a-row>
      <a-row :gutter="15">
        <a-col :xs="24">
          <sdCards headless title="Grid sort" size="default">
            <GridStyle>
              <a-row>
                <a-col :span="18" push="6"> col-18 col-push-6 </a-col>
                <a-col :span="6" pull="18"> col-6 col-pull-18 </a-col>
              </a-row>
            </GridStyle>
          </sdCards>
        </a-col>
      </a-row>
      <a-row :gutter="15">
        <a-col :xs="24">
          <sdCards headless title="sub-element align" size="default">
            <GridStyle>
              <p>sub-element align left</p>
              <a-row type="flex" justify="start">
                <a-col :span="4">col-4</a-col>
                <a-col :span="4">col-4</a-col>
                <a-col :span="4">col-4</a-col>
                <a-col :span="4">col-4</a-col>
              </a-row>

              <p>sub-element align center</p>
              <a-row type="flex" justify="center">
                <a-col :span="4">col-4</a-col>
                <a-col :span="4">col-4</a-col>
                <a-col :span="4">col-4</a-col>
                <a-col :span="4">col-4</a-col>
              </a-row>

              <p>sub-element align right</p>
              <a-row type="flex" justify="end">
                <a-col :span="4">col-4</a-col>
                <a-col :span="4">col-4</a-col>
                <a-col :span="4">col-4</a-col>
                <a-col :span="4">col-4</a-col>
              </a-row>

              <p>sub-element monospaced arrangement</p>
              <a-row type="flex" justify="space-between">
                <a-col :span="4">col-4</a-col>
                <a-col :span="4">col-4</a-col>
                <a-col :span="4">col-4</a-col>
                <a-col :span="4">col-4</a-col>
              </a-row>

              <p>sub-element align full</p>
              <a-row type="flex" justify="space-around">
                <a-col :span="4">col-4</a-col>
                <a-col :span="4">col-4</a-col>
                <a-col :span="4">col-4</a-col>
                <a-col :span="4">col-4</a-col>
              </a-row>
            </GridStyle>
          </sdCards>
        </a-col>
      </a-row>
      <a-row :gutter="15">
        <a-col :xs="24">
          <sdCards headless title="Responsive" size="default">
            <GridStyle>
              <a-row>
                <a-col xs="2" sm="4" md="6" lg="8" xl="{10}"> Col </a-col>
                <a-col xs="20" sm="16" md="12" lg="8" xl="4"> Col </a-col>
                <a-col xs="2" sm="4" md="6" lg="8" xl="{10}"> Col </a-col>
              </a-row>
            </GridStyle>
          </sdCards>
        </a-col>
      </a-row>
      <a-row :gutter="15">
        <a-col :xs="24">
          <sdCards headless title="More Responsive" size="default">
            <GridStyle>
              <a-row>
                <a-col
                  :xs="{ span: 5, offset: 1 }"
                  :lg="{ span: 6, offset: 2 }"
                >
                  Col
                </a-col>
                <a-col
                  :xs="{ span: 11, offset: 1 }"
                  :lg="{ span: 6, offset: 2 }"
                >
                  Col
                </a-col>
                <a-col
                  :xs="{ span: 5, offset: 1 }"
                  :lg="{ span: 6, offset: 2 }"
                >
                  Col
                </a-col>
              </a-row>
            </GridStyle>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from "../styled";
import { GridStyle, GridStyleGutter, GridStyleOffset } from "./GridStyled";
export default {
  name: "Grid",
  components: {
    Main,
    GridStyle,
    GridStyleGutter,
    GridStyleOffset,
  },
};
</script>
