<template>
  <ProductTable>
    <div v-if="isLoading" class="sd-spin">
      <a-spin />
    </div>
    <div v-else class="table-cart table-responsive">
      <a-table :pagination="false" :dataSource="productTableData" :columns="productTableColumns" />
    </div>
  </ProductTable>
  <CouponForm>
    <a-form :model="formState" @finish="submitCoupon">
      <a-row :gutter="15">
        <a-col :lg="4" :sm="8" :xs="24">
          <a-form-item name="coupon" label="">
            <a-input v-model:value="formState.coupon" placeholder="Coupon Code" />
          </a-form-item>
        </a-col>
        <a-col :lg="4" :sm="8" :xs="24">
          <sdButton htmlType="submit" size="default" type="primary">
            Apply Coupon
          </sdButton>
        </a-col>
      </a-row>
    </a-form>
  </CouponForm>
</template>
<script>
import { computed, onMounted, reactive, ref } from 'vue';
import { useStore } from 'vuex';
import { FigureCart, ProductTable, CouponForm } from '../Style';

const productTableColumns = [
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
  },
  {
    title: '',
    dataIndex: 'action',
    key: 'action',
  },
];

const CartTable = {
  name: 'CartTable',
  components: { FigureCart, ProductTable, CouponForm },
  setup() {
    const { state, dispatch } = useStore();

    const cartData = computed(() => state.cart.data);
    const isLoading = computed(() => state.cart.loading);
    const rtl = computed(() => state.themeLayout.rtlData);

    const formState = reactive({
      coupon: '',
    });

    const coupon = ref(0);
    const promo = ref(0);
    const current = ref(0);

    onMounted(() => dispatch('cartGetData'));

    const incrementUpdate = (id, quantity) => {
      const data = parseInt(quantity, 10) + 1;
      dispatch('cartUpdateQuantity', { id, quantity: data, cartData });
    };

    const decrementUpdate = (id, quantity) => {
      const data = parseInt(quantity, 10) >= 2 ? parseInt(quantity, 10) - 1 : 1;
      dispatch('cartUpdateQuantity', { id, quantity: data, cartData });
    };

    const cartDeleted = id => {
      const confirm = window.confirm('Are you sure to delete this product?');
      if (confirm) dispatch('cartDelete', { id, cartData });
    };

    const productTableData = computed(
      () =>
        cartData.value &&
        cartData.value.map(data => {
          const { id, price, img } = data;
          return {
            key: id,
            product: (
              <div class="cart-single">
                <figure>
                  <img style={{ width: 80 }} src={`../../../../${img}`} alt="" />
                </figure>
              </div>
            ),
            price: <span class="cart-single-price">${price}</span>,
            quantity: <div class="cart-single-quantity">fdfa</div>,
            total: <span class="cart-single-t-price">$fafa</span>,
            action: <div class="table-action">afdf</div>,
          };
        }),
    );
    const submitCoupon = values => {
      coupon.value = values;
    };
    return {
      productTableData,
      productTableColumns,
      cartDeleted,
      decrementUpdate,
      incrementUpdate,
      isLoading,
      rtl,
      coupon,
      promo,
      current,
      submitCoupon,
      formState,
    };
  },
};

export default CartTable;
</script>
