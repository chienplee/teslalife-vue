//
<script>
// import { FigureWizards, WizardWrapper, ProductTable, OrderSummary } from '../Style';
// import Steps from '@/components/steps/steps';
// import { useStore } from 'vuex';
// import { computed, onMounted, ref, watchEffect } from 'vue';

// const month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
// const columns = [
//   {
//     title: 'Product',
//     dataIndex: 'product',
//     key: 'product',
//   },
//   {
//     title: 'Price',
//     dataIndex: 'price',
//     key: 'price',
//   },
//   {
//     title: 'Quantity',
//     dataIndex: 'quantity',
//     key: 'quantity',
//   },
//   {
//     title: 'Total',
//     dataIndex: 'total',
//     key: 'total',
//   },
// ];

// const WizardsOne = {
//   name: 'WizardsOne',
//   components: { Steps, FigureWizards, WizardWrapper, ProductTable, OrderSummary },
//   setup() {
//     const { state, dispatch } = useStore();
//     const cartData = computed(() => state.cart.data);
//     const isLoading = computed(() => state.cart.loading);
//     const rtl = computed(() => state.themeLayout.rtlData);
//     const status = ref('process');
//     const isFinished = ref(false);
//     const current = ref(1);
//     onMounted(() => {
//       dispatch('cartGetData');
//     });

//     const next = () => {
//       status.value = 'process';
//       current.value = current.value + 1;
//     };

//     const prev = () => {
//       status.value = 'process';
//       current.value = current.value - 1;
//     };

//     const done = () => {
//       const confirm = window.confirm('Are sure to submit order?');
//       if (confirm) {
//         status.value = 'finish';
//         isFinished.value = true;
//         current.value = 0;
//       }
//     };

//     let subtotal = ref(0);
//     const dataSource = [];

//     if (cartData.value !== null) {
//       cartData.value.map(data => {
//         const { id, img, name, quantity, price, size, color } = data;
//         subtotal.value += parseInt(quantity, 10) * parseInt(price, 10);
//         return dataSource.push({
//           key: id,
//           product: (
//             <div className="cart-single">
//               <FigureWizards>
//                 <img style={{ width: 80 }} src={require(`../../../../${img}`)} alt="" />
//                 <figcaption>
//                   <div className="cart-single__info">
//                     <Heading as="h6">{name}</Heading>
//                     <ul className="info-list">
//                       <li>
//                         <span className="info-title">Size :</span>
//                         <span>{size}</span>
//                       </li>
//                       <li>
//                         <span className="info-title"> Color :</span>
//                         <span>{color}</span>
//                       </li>
//                     </ul>
//                   </div>
//                 </figcaption>
//               </FigureWizards>
//             </div>
//           ),
//           price: <span className="cart-single-price">${price}</span>,
//           quantity: (
//             <div className="cart-single-quantity">
//               <Button onClick={() => decrementUpdate(id, quantity)} className="btn-dec" type="default">
//                 <FeatherIcon icon="minus" size={12} />
//               </Button>
//               {quantity}
//               <Button onClick={() => incrementUpdate(id, quantity)} className="btn-inc" type="default">
//                 <FeatherIcon icon="plus" size={12} />
//               </Button>
//             </div>
//           ),
//           total: <span className="cart-single-t-price">${quantity * price}</span>,
//           action: (
//             <div className="table-action">
//               <Button
//                 onClick={() => cartDeleted(id)}
//                 className="btn-icon"
//                 to="#"
//                 size="default"
//                 type="danger"
//                 shape="circle"
//                 transparented
//               >
//                 <FeatherIcon icon="trash-2" size={16} />
//               </Button>
//             </div>
//           ),
//         });
//       });
//     }

//     watchEffect(() => {
//       const activeElement = document.querySelectorAll('.ant-steps-item-active');
//       const successElement = document.querySelectorAll('.ant-steps-item-finish');

//       activeElement.forEach(element => {
//         if (element.previousSibling) {
//           const bgImage = element.previousSibling;
//           if (bgImage.classList.contains('success-step-item')) {
//             bgImage.classList.remove('success-step-item');
//           } else {
//             bgImage.classList.remove('wizard-step-item');
//           }
//           bgImage.classList.add('wizard-steps-item-active');
//         }
//       });

//       successElement.forEach(element => {
//         if (element.previousSibling) {
//           const bgImage = element.previousSibling;
//           bgImage.classList.remove('wizard-steps-item-active');
//           bgImage.classList.add('success-step-item');
//         }
//       });
//     });

//     return {
//       done,
//       prev,
//       next,
//       month,
//       columns,
//       cartData,
//       isLoading,
//       rtl,
//       status,
//       isFinished,
//       current,
//     };
//   },
// };

// export default WizardsOne;
//
</script>
