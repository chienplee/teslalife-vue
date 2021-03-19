<template>
  <sdPageHeader title="Product Details"
    ><template v-slot:buttons>
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
    <sdCards headless>
      <ProductDetailsWrapper>
        <div class="product-details-box">
          <a-row :gutter="30">
            <a-col :xs="24" :lg="10">
              <div class="product-details-box__left pdbl">
                <figure>
                  <img :style="{ width: '100%' }" :src="require(`../../../../${img}`)" alt="" />
                </figure>
                <div class="pdbl__slider pdbs">
                  <a-row v-if="products.length" :gutter="5">
                    <a-col v-for="value in products" :md="4" :key="value.id">
                      <div class="pdbl__image">
                        <figure>
                          <router-link :to="`/admin/ecommerce/productDetails/${value.id}`">
                            <img :style="{ width: '100%' }" :src="require(`../../../../${value.img}`)" alt="" />
                          </router-link>
                        </figure>
                      </div>
                    </a-col>
                  </a-row>
                </div>
              </div>
            </a-col>
            <a-col :xs="24" :lg="14"> </a-col>
          </a-row>
        </div>
      </ProductDetailsWrapper>
    </sdCards>
  </Main>
</template>
<script>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { Main } from '../../../styled';
import { ProductDetailsWrapper } from '../Style';

// const DetailsRight = lazy(() => import('./overview/DetailsRight'));

const ProductDetails = {
  name: 'ProductDetails',
  components: { Main, ProductDetailsWrapper },
  setup() {
    const { state, dispatch } = useStore();
    const product = computed(() => state.ecommerce.product);
    const products = computed(() => state.ecommerce.products);
    const { params } = useRoute();
    const { img, category } = product.value[0];
    onMounted(() => dispatch('filterSinglePage', { paramsId: parseInt(params.id, 10), currentState: products.value }));

    return {
      product,
      products,
      img,
      category,
    };
  },
};

export default ProductDetails;
</script>
