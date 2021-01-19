<template>
  <div>
    <sdPageHeader title="Blank Page">
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
        <a-col :md="12" :sm="12" :xs="24">
          <sdCards title="Basic">
            <BadgeWraperStyle>
              <a-badge count="5">
                <router-link to="#" class="head-example" />
              </a-badge>
              <a-badge count="0" showZero>
                <router-link to="#" class="head-example" />
              </a-badge>
              <a-badge>
                <a-icon
                  slot="count"
                  type="clock-circle"
                  style="color: #f5222d"
                />
                <router-link to="#" class="head-example" />
              </a-badge>
            </BadgeWraperStyle>
          </sdCards>

          <sdCards title="Overflow Count">
            <BadgeWraperStyle>
              <BadgeOverflowStyle>
                <a-badge count="99">
                  <router-link to="#" class="head-example" />
                </a-badge>
                <a-badge count="100">
                  <router-link to="#" class="head-example" />
                </a-badge>
                <a-badge count="99" :overflowCount="10">
                  <router-link to="#" class="head-example" />
                </a-badge>
                <a-badge count="1000" :overflowCount="999">
                  <router-link to="#" class="head-example" />
                </a-badge>
              </BadgeOverflowStyle>
            </BadgeWraperStyle>
          </sdCards>

          <sdCards title="Clickable">
            <BadgeWraperStyle>
              <router-link to="#">
                <a-badge :count="5">
                  <span class="head-example" />
                </a-badge>
              </router-link>
            </BadgeWraperStyle>
          </sdCards>

          <sdCards title="Status">
            <BadgeWraperStyle>
              <div :style="{ marginBottom: 10 }">
                <a-badge v-for="color in colors" :key="color" :color="color" />
              </div>
              <div>
                <div v-for="color in colors" :key="color">
                  <a-badge :color="color" :text="color" />
                </div>
              </div>
            </BadgeWraperStyle>
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="12" :xs="24">
          <sdCards title="Standalone">
            <BadgeWraperStyle>
              <BadgeStandAloneStyle>
                <a-badge count="25" />
                <a-badge
                  count="4"
                  :number-style="{
                    backgroundColor: '#fff',
                    color: '#999',
                    boxShadow: '0 0 0 1px #d9d9d9 inset',
                  }"
                />
                <a-badge
                  count="109"
                  :number-style="{ backgroundColor: '#52c41a' }"
                />
              </BadgeStandAloneStyle>
            </BadgeWraperStyle>
          </sdCards>

          <sdCards title="Red badge">
            <BadgeWraperStyle>
              <BadgeRedStyle>
                <a-badge dot>
                  <a-icon type="bell" />
                </a-badge>
                <a-badge count="0" dot>
                  <a-icon type="bell" />
                </a-badge>
                <a-badge dot>
                  <router-link to="#">something</router-link>
                </a-badge>
              </BadgeRedStyle>
            </BadgeWraperStyle>
          </sdCards>

          <sdCards title="Dynamic">
            <BadgeWraperStyle>
              <BadgeDynamicStyle>
                <div
                  class="badge-dynamic"
                  :style="{ display: 'flex', alignItems: 'flex-start' }"
                >
                  <a-badge :count="count">
                    <router-link to="#" class="head-example" />
                  </a-badge>
                  <sdBtnGroup>
                    <sdButton type="white" @click.native="decline">
                      <a-icon type="minus" />
                    </sdButton>
                    <sdButton type="white" @click.native="increase">
                      <a-icon type="plus" />
                    </sdButton>
                  </sdBtnGroup>
                </div>
                <div
                  :style="{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '10',
                  }"
                >
                  <a-badge :dot="show">
                    <router-link to="#" class="head-example" />
                  </a-badge>
                  <a-switch @change="onChange" :checked="show" />
                </div>
              </BadgeDynamicStyle>
            </BadgeWraperStyle>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from "../styled";
import { PlusIcon } from "vue-feather-icons";
import {
  BadgeWraperStyle,
  BadgeStandAloneStyle,
  BadgeOverflowStyle,
  BadgeRedStyle,
  BadgeDynamicStyle,
} from "./ui-elements-styled";
import { mapGetters } from "vuex";
export default {
  name: "Badge",
  components: {
    PlusIcon,
    Main,
    BadgeWraperStyle,
    BadgeStandAloneStyle,
    BadgeOverflowStyle,
    BadgeRedStyle,
    BadgeDynamicStyle,
  },
  data() {
    return {
      colors: [
        "pink",
        "red",
        "yellow",
        "orange",
        "cyan",
        "green",
        "blue",
        "purple",
        "geekblue",
        "magenta",
        "volcano",
        "gold",
        "lime",
      ],
      count: 5,
      show: true,
    };
  },

  methods: {
    increase() {
      this.count = this.count + 1;
    },
    decline() {
      let count = this.count - 1;
      if (count < 0) {
        count = 0;
      }
      this.count = count;
    },
    onChange(show) {
      this.show = show;
    },
  },
  computed: {
    ...mapGetters(["rtl"]),
  },
};
</script>
