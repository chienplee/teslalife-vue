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
                  <img :style="{ width: '100%' }" :src="product && require(`../../../../${product[0].img}`)" alt="" />
                </figure>
                <div class="pdbl__slider pdbs">
                  <a-row v-if="filterData.length" :gutter="0">
                    <a-col v-for="(value, index) in filterData" :md="4" :key="value.id">
                      <div class="pdbl__image" v-if="index <= 3">
                        <figure>
                          <router-link target="_blank" :to="`/app/ecommerce/productDetails/${value.id}`">
                            <img :style="{ width: '100%' }" :src="require(`../../../../${value.img}`)" alt="" />
                          </router-link>
                        </figure>
                      </div>
                    </a-col>
                  </a-row>
                </div>
              </div>
            </a-col>
            <a-col :xs="24" :lg="14">
              <DetailsRight :product="product[0]" />
            </a-col>
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
import DetailsRight from './overview/DetailsRight';

const ProductDetails = {
  name: 'ProductDetails',
  components: { Main, ProductDetailsWrapper, DetailsRight },
  setup() {
    const { state, dispatch } = useStore();
    const product = computed(() => state.ecommerce.product);
    const products = computed(() => product.value && state.ecommerce.products);
    const filterData = computed(() =>
      products.value.filter(value => {
        return value.category === product.value[0].category;
      }),
    );
    const { params, matched } = useRoute();
    const { path } = matched;
    onMounted(() => dispatch('filterSinglePage', { paramsId: parseInt(params.id, 10), currentState: products.value }));

    return {
      product,
      path,
      filterData,
    };
  },
};

export default ProductDetails;
</script>
