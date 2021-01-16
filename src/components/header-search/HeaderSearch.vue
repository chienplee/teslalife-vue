<template>
  <Div
    class="certain-category-search-wrapper"
    :style="{ width: '100%' }"
    :darkMode="darkMode"
  >
    <a-row class="ant-row-middle">
      <a-col :md="2" :xs="1" :class="rtl ? 'text-left' : 'text-right'">
        <span class="certain-category-icon">
          <SearchIcon size="16" />
        </span>
      </a-col>
      <a-col :md="22" :xs="23">
        <Popover
          :placement="!rtl ? 'bottomLeft' : 'bottomRight'"
          v-model="visible"
          title="Search List"
          action="click"
        >
          <div slot="content">
            <router-link v-for="item in filteredData" :key="item.id" to="#">
              {{ item.title }}
              <span class="certain-search-item-count"
                >{{ item.count }} people</span
              >
            </router-link>
            <router-link v-if="filteredData.length === 0" to="#">
              Data Not Found.....
            </router-link>
          </div>
          <a-input
            placeholder="Search..."
            @input="(e) => search(e, searchData)"
          />
        </Popover>
      </a-col>
    </a-row>
  </Div>
</template>

<script>
import { SearchIcon } from "vue-feather-icons";
import { Div } from "./header-search-style";
import Popover from "../popup/Popup";
import { mapGetters } from "vuex";

export default {
  name: "HeaderSearch",
  props: ["darkMode"],
  components: {
    Div,
    SearchIcon,
    Popover,
  },
  data() {
    return {
      searchData: [
        {
          id: 1,
          title: "AntDesign",
          count: 10000,
        },
        {
          id: 2,
          title: "Design UI",
          count: 10600,
        },

        {
          id: 3,
          title: "Bootstrap Design UI",
          count: 60100,
        },
        {
          id: 4,
          title: "Meterial design",
          count: 30010,
        },

        {
          id: 5,
          title: "AntDesign design language",
          count: 100000,
        },
      ],
      filteredData: [
        {
          id: 1,
          title: "AntDesign",
          count: 10000,
        },
        {
          id: 2,
          title: "Design UI",
          count: 10600,
        },

        {
          id: 3,
          title: "Bootstrap Design UI",
          count: 60100,
        },
        {
          id: 4,
          title: "Meterial design",
          count: 30010,
        },

        {
          id: 5,
          title: "AntDesign design language",
          count: 100000,
        },
      ],
      visible: false,
    };
  },
  computed: {
    ...mapGetters(["rtl"]),
  },
  methods: {
    search: function(e, searchDatas) {
      const data = searchDatas.filter((item) => {
        return item.title.startsWith(e.target.value);
      });
      this.filteredData = data;
    },
    hide() {
      this.visible = false;
    },
  },
};
</script>
