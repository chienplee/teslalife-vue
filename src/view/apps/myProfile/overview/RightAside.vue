<template>
  <RightAsideWrapper>
    <!-- <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} /> -->
    <sdCards title="Friends">
      <ul class="ff-widget">
        <li v-for="{ name, key, designation, status, img } in friends" :key="key">
          <div class="ff-info">
            <img :src="require(`@/${img}`)" alt="" />
            <p>
              {{ name }} <span>{{ designation }}</span>
            </p>
          </div>
          <sdButton
            class="btn-ff"
            @click="() => dispatch(profileFriendsChangeStatus(key))"
            :outlined="!status"
            :type="status ? 'primary' : 'white'"
          >
            <span v-if="!status">Follow</span>

            <span v-else>
              <sdFeatherIcons type="check" />
              Following
            </span>
          </sdButton>
        </li>
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
            <a v-if="id <= 6" @click="() => setOpen(true)" class="video" to="#">
              <img style="width: 100%" :src="require(`@/${img}`)" alt="" />
              <span>
                <sdFeatherIcons type="play" />
              </span>
            </a>
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

const RightAside = {
  name: 'RightAside',
  components: { RightAsideWrapper },
  setup() {
    const { state, dispatch } = useStore();
    const isOpen = ref(false);
    const friends = computed(() => state.profile.friends);
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
    };
  },
};

export default RightAside;
</script>
