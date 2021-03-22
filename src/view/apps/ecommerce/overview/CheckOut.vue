<template>
  <CheckoutWrapper>
    <Steps
      isSwitch
      :current="0"
      :status="status"
      :steps="[]"
      @onNext="next"
      @onPrev="prev"
      @onDone="done"
      :isFinished="isFinished"
    />
  </CheckoutWrapper>
</template>
<script>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import Steps from '../../../../components/steps/steps';
import { BasicFormWrapper } from '../../../styled';
import { FigureCart, CheckoutWrapper, ProductTable, OrderSummary } from '../Style';

const columns = [
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
];

const CheckOut = {
  name: 'Checkout',
  components: { BasicFormWrapper, FigureCart, CheckoutWrapper, ProductTable, OrderSummary, Steps },
  setup(_, { emit }) {
    const { state, dispatch } = useStore();
    const cartData = computed(() => state.cart.data);
    const isLoading = computed(() => state.cart.loading);
    const rtl = computed(() => state.ChangeLayoutMode.rtlData);

    const status = ref('process');
    const isFinished = ref(false);
    const current = ref(1);

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

    const PlaceOrder = (
      <sdButton class="btn-proceed" type="secondary" size="large">
        <a to="#">Place Order</a>
      </sdButton>
    );

    const next = () => {
      emit('onCurrentChange', current, PlaceOrder);
      status.value = 'process';
      current.value = current.value + 1;
    };

    const prev = () => {
      emit('onCurrentChange', current, PlaceOrder);
      status.value = 'process';
      current.value = current.value - 1;
    };

    const done = () => {
      const confirm = window.confirm('Are sure to submit order?');
      emit('onCurrentChange', current, PlaceOrder);
      if (confirm) {
        status.value = 'finish';
        isFinished.value = true;
        current.value = 0;
      }
    };
    const month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    let subtotal = 0;
    const dataSource = computed(() =>
      cartData.value.map(data => {
        const { id, img, name, quantity, price, size, color } = data;
        subtotal += parseInt(quantity, 10) * parseInt(price, 10);
        return {
          key: id,
          product: (
            <div class="cart-single">
              <FigureCart>
                <img style={{ width: 80 }} src={require(`@/${img}`)} alt="" />
                <figcaption>
                  <div class="cart-single__info">
                    <sdHeading as="h6">{name}</sdHeading>
                    <ul class="info-list">
                      <li>
                        <span class="info-title">Size :</span>
                        <span>{size}</span>
                      </li>
                      <li>
                        <span class="info-title"> Color :</span>
                        <span>{color}</span>
                      </li>
                    </ul>
                  </div>
                </figcaption>
              </FigureCart>
            </div>
          ),
          price: <span class="cart-single-price">${price}</span>,
          quantity: (
            <div class="cart-single-quantity">
              <sdButton onClick={() => decrementUpdate(id, quantity)} class="btn-dec" type="default">
                <FeatherIcon icon="minus" size={12} />
              </sdButton>
              {quantity}
              <sdButton onClick={() => incrementUpdate(id, quantity)} class="btn-inc" type="default">
                <FeatherIcon icon="plus" size={12} />
              </sdButton>
            </div>
          ),
          total: <span class="cart-single-t-price">${quantity * price}</span>,
          action: (
            <div class="table-action">
              <sdButton
                onClick={() => cartDeleted(id)}
                class="btn-icon"
                to="#"
                size="default"
                type="danger"
                shape="circle"
                transparented
              >
                <sdFeatherIcons type="trash-2" size={16} />
              </sdButton>
            </div>
          ),
        };
      }),
    );

    return {
      prev,
      dataSource,
      next,
      done,
      month,
      subtotal,
      PlaceOrder,
      cartData,
      isLoading,
      rtl,
      status,
      isFinished,
      current,
      cartDeleted,
      decrementUpdate,
      incrementUpdate,
      columns,
    };
  },
};

export default CheckOut;
</script>
