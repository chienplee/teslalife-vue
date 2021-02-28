<template>
  <GalleryCard :style="{ marginBottom: '25px' }">
    <figure>
      <img
        :style="{ width: '100%' }"
        :src="require(`../../../${item.img}`)"
        alt=""
      />
      <figcaption>
        <div class="gallery-single-content">
          <sdHeading class="gallery-single-title" as="h4">
            {{ item.name }}
          </sdHeading>
          <p>{{ item.category }}</p>
        </div>
      </figcaption>
    </figure>
  </GalleryCard>
</template>
<script>
import { GalleryCard } from "../style";
import VueType from "vue-types";

const GalleryCards = {
  name: "GalleryCards",
  props: { item: VueType.object },
  components: { GalleryCard },
};

export default GalleryCards;
</script>
