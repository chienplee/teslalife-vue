span<template>
  <RightAsideWrapper>
    <!-- <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} /> -->
    <sdCards title="Friends">
      <ul class="ff-widget">
        <template v-if="!isLoading">
          <li v-for="{ name, key, designation, status, img } in friends" :key="key">
            <div class="ff-info">
              <img :src="require(`@/${img}`)" alt="" />
              <p>
                {{ name }} <span>{{ designation }}</span>
              </p>
            </div>
            <sdButton
              :class="status ? 'btn-ff btn-following' : 'btn-ff'"
              @click="() => dispatch('profileFriendsChangeStatus', key)"
              :outlined="!status"
              :type="status ? 'primary' : 'white'"
            >
              <template v-if="!status">Follow</template>

              <template v-else>
                <sdFeatherIcons type="check" />
                Following
              </template>
            </sdButton>
          </li>
        </template>
        <p v-else>loading</p>
        <a to="#" class="btn-loadMore">
          Load more friends
        </a>
      </ul>
    </sdCards>
    <sdCards title="Photos">
      <template #button>
        <router-link class="btn-seeAll" to="/page/gallery">
          See All
        </router-link>
      </template>
      <div class="widget-photo-list">
        <a-row :gutter="10">
          <a-col v-for="({ img, id }, imageIndex) in gallery" :key="imageIndex" :xxl="8" :md="24" :sm="6" :xs="8">
            <router-link to="#" v-if="id <= 6" @click="() => showImg(imageIndex)">
              <img style="width: 100%" :src="require(`../../../../${img}`)" alt="" />
            </router-link>
          </a-col>
          <vue-easy-lightbox :visible="visible" :imgs="images" :index="index" @hide="handleHide"></vue-easy-lightbox>
        </a-row>
      </div>
    </sdCards>
    <sdCards title="Videos">
      <template #button>
        <a class="btn-seeAll" to="#">
          See All
        </a>
      </template>
      <div class="widget-video-list">
        <a-row :gutter="10">
          <a-col v-for="{ img, id } in gallery" :key="id" :xxl="8" :md="24" :sm="6" :xs="8">
            <VideoModal src="https://vimeo.com/115041822" v-if="id <= 6" class="video">
              <img style="width: 100%" :src="require(`@/${img}`)" alt="" />
              <span>
                <sdFeatherIcons type="play" />
              </span>
            </VideoModal>
          </a-col>
        </a-row>
      </div>
    </sdCards>
  </RightAsideWrapper>
</template>
<script>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { RightAsideWrapper } from './style';
import VideoModal from '@/components/utilities/VideoModal.vue';

const RightAside = {
  name: 'RightAside',
  components: { RightAsideWrapper, VideoModal },
  setup() {
    const { state, dispatch } = useStore();
    const isOpen = ref(false);
    const friends = computed(() => state.profile.friends);
    const isLoading = computed(() => state.profile.isLoading);
    const gallery = computed(() => state.gallery.data);
    const setOpen = value => {
      isOpen.value = value;
    };

    const visible = ref(false);
    const index = ref(0);
    const images = ref([]);

    const showImg = ind => {
      index.value = ind;
      visible.value = true;
    };

    const handleHide = () => {
      visible.value = false;
    };

    onMounted(() => {
      gallery.value.map(({ img }) => {
        return images.value.push({ src: require(`../../../../${img}`) });
      });
    });

    return {
      showImg,
      handleHide,
      index,
      friends,
      gallery,
      isOpen,
      dispatch,
      setOpen,
      images,
      visible,
      isLoading,
    };
  },
};

export default RightAside;
</script>
