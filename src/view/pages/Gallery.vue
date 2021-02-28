<template>
  <div>
    <sdPageHeader title="Gallery">
      <div slot="buttons" class="page-header-actions">
        <CalendarButton />
        <ExportButton />
        <ShareButton />
        <Button size="small" type="primary">
          <PlusIcon size="14" />
          Add New
        </Button>
      </div>
    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :sm="24" :xs="24">
          <GalleryNav>
            <ul>
              <li>
                <router-link
                  :class="state.activeClass === '' ? 'active' : 'deactivate'"
                  @click.native="() => handleChange('')"
                  to="#"
                >
                  All
                </router-link>
              </li>
              <li>
                <router-link
                  :class="
                    state.activeClass === 'webDesign' ? 'active' : 'deactivate'
                  "
                  @click.native="() => handleChange('webDesign')"
                  to="#"
                >
                  Web Design
                </router-link>
              </li>
              <li>
                <router-link
                  :class="
                    state.activeClass === 'uiDesign' ? 'active' : 'deactivate'
                  "
                  @click.native="() => handleChange('uiDesign')"
                  to="#"
                >
                  UI Design
                </router-link>
              </li>
              <li>
                <router-link
                  :class="
                    state.activeClass === 'wireframe' ? 'active' : 'deactivate'
                  "
                  @click.native="() => handleChange('wireframe')"
                  to="#"
                >
                  Wireframe
                </router-link>
              </li>
              <li>
                <router-link
                  :class="
                    state.activeClass === 'Presentation'
                      ? 'active'
                      : 'deactivate'
                  "
                  @click.native="() => handleChange('Presentation')"
                  to="#"
                >
                  Presentation
                </router-link>
              </li>
            </ul>
          </GalleryNav>
        </a-col>
        <a-col v-if="isLoading" :xs="24">
          <div class="spin">
            <a-spin />
          </div>
        </a-col>
        <a-col
          v-else
          v-for="item in gallery"
          :key="item.id"
          :xxl="6"
          :lg="8"
          :sm="12"
          :xs="24"
        >
          <GalleryCards :item="item" />
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
import { PlusIcon } from "vue-feather-icons";
import { GalleryNav } from "./style";
import GalleryCards from "./overview/GalleryCard";

export default {
  name: "Sidebar",
  components: {
    PlusIcon,
    Button,
    CalendarButton,
    ExportButton,
    ShareButton,
    Main,
    GalleryNav,
    GalleryCards,
  },
  data() {
    return {
      state: {
        activeClass: "",
      },
    };
  },
  computed: {
    gallery() {
      return this.$store.state.gallery.data;
    },
    isLoading() {
      return this.$store.state.gallery.isLoading;
    },
  },
  methods: {
    handleChange(value) {
      this.state = {
        ...this.state,
        activeClass: value,
      };
      this.$store.dispatch("galleryFilter", {
        column: "category",
        value,
      });
    },
  },
};
</script>
