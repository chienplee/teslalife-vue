<template>
  <div>
    <sdPageHeader title="Gallery">
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
        <a-col :sm="24" :xs="24">
          <GalleryNav>
            <ul>
              <li>
                <router-link
                  :class="state.activeClass === '' ? 'active' : 'deactivate'"
                  @click="() => handleChange('')"
                  to="#"
                >
                  All
                </router-link>
              </li>
              <li>
                <router-link
                  :class="state.activeClass === 'webDesign' ? 'active' : 'deactivate'"
                  @click="() => handleChange('webDesign')"
                  to="#"
                >
                  Web Design
                </router-link>
              </li>
              <li>
                <router-link
                  :class="state.activeClass === 'uiDesign' ? 'active' : 'deactivate'"
                  @click="() => handleChange('uiDesign')"
                  to="#"
                >
                  UI Design
                </router-link>
              </li>
              <li>
                <router-link
                  :class="state.activeClass === 'wireframe' ? 'active' : 'deactivate'"
                  @click="() => handleChange('wireframe')"
                  to="#"
                >
                  Wireframe
                </router-link>
              </li>
              <li>
                <router-link
                  :class="state.activeClass === 'Presentation' ? 'active' : 'deactivate'"
                  @click="() => handleChange('Presentation')"
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
        <a-col v-else v-for="(item, index) in gallery" :key="index + 1" :xxl="6" :lg="8" :sm="12" :xs="24">
          <GalleryCards :item="item" />
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from '../styled';
import { GalleryNav } from './style';
import GalleryCards from './overview/GalleryCards';

export default {
  name: 'Gallery',
  components: {
    Main,
    GalleryNav,
    GalleryCards,
  },
  data() {
    return {
      state: {
        activeClass: '',
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
      this.$store.dispatch('galleryFilter', {
        column: 'category',
        value,
      });
    },
  },
};
</script>
