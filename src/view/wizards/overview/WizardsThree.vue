<template>
  <WizardWrapper>
    <WizardThree>
      <Steps
        isSwitch
        :current="0"
        :status="status"
        :steps="steps"
        @onNext="next"
        @onPrev="prev"
        @onDone="done"
        :isFinished="isFinished"
      >
        <template #start>
          <BasicFormWrapper class="basic-form-inner">
            <div class="atbd-form-checkout">
              <a-row justify="center">
                <a-col :sm="22" :xs="24">
                  <div class="create-account-form">
                    <sdHeading as="h4">1. Please Create Your Account</sdHeading>

                    <a-form name="account">
                      <a-form-item name="username" label="Username">
                        <a-input placeholder="Username" />
                      </a-form-item>
                      <a-form-item name="password" label="Password">
                        <a-input-password type="password" v-model:value="password" placeholder="Password" />
                        <span class="input-message">Enter a valid password. Min 6 characters long</span>
                      </a-form-item>
                      <a-form-item name="confirm_password" label="Confirm Password">
                        <a-input-password type="password" v-model:value="confirm_password" placeholder="Password" />
                        <span class="input-message">Enter a valid password. Min 6 characters long</span>
                      </a-form-item>
                    </a-form>
                  </div>
                </a-col>
              </a-row>
            </div>
          </BasicFormWrapper>
        </template>
        <template #profile>
          <BasicFormWrapper class="basic-form-inner">
            <div class="atbd-form-checkout">
              <a-row justify="center">
                <a-col :sm="22" :xs="24">
                  <div class="shipping-form">
                    <sdHeading as="h4">2. Please setup your profile</sdHeading>
                    <a-form :model="profile" name="address">
                      <a-form-item name="fname" label="First Name">
                        <a-input v-model:value="profile.fname" placeholder="First Name" />
                      </a-form-item>
                      <a-form-item name="lname" label="Last Name">
                        <a-input v-model:value="profile.lname" placeholder="Last Name" />
                      </a-form-item>
                      <a-form-item name="email" label="Email Address">
                        <a-input type="email" v-model:value="profile.email" placeholder="name@gmail.com" />
                      </a-form-item>
                      <a-form-item name="street" label="Street Address">
                        <a-input v-model:value="profile.address" placeholder="Address" />
                      </a-form-item>
                    </a-form>
                  </div>
                </a-col>
              </a-row>
            </div>
          </BasicFormWrapper>
        </template>
        <!-- 
        <template #method>
          <BasicFormWrapper class="basic-form-inner">
            <div class="atbd-form-checkout">
              <a-row justify="center">
                <a-col :sm="22" :xs="24">
                  <div class="payment-method-form">
                    <sdHeading as="h4">3. Please Please Select Your Payment Method</sdHeading>
                    <div class="shipping-selection">
                      <a-radio-group :style="{ width: '100%' }">
                        <div class="shipping-selection__card">
                          <a-radio :style="{ width: '100%' }" value="card">
                            <sdCards
                              headless
                              :bodyStyle="{
                                backgroundColor: '#F8F9FB',
                                borderRadius: '20px',
                                border: '1px solid #F1F2F6',
                              }"
                            >
                              <div class="supported-card d-flex">
                                <span>Credit/Debit Card</span>
                                <div class="supported-card_logos">
                                  <img
                                    :style="{ width: '50px' }"
                                    :src="require('@/static/img/cards-logo/ms.png')"
                                    alt=""
                                  />
                                  <img
                                    :style="{ width: '50px' }"
                                    :src="require('@/static/img/cards-logo/american-express.png')"
                                    alt=""
                                  />
                                  <img
                                    :style="{ width: '50px' }"
                                    :src="require('@/static/img/cards-logo/visa.png')"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <sdCards headless :style="{ marginBottom: 0 }">
                                <a-form @finish="handleMethodSubmit" :model="stateMethod" name="info">
                                  <a-form-item name="number" label="Card Number">
                                    <a-input placeholder="6547-8702-6987-2527" />
                                  </a-form-item>
                                  <a-form-item name="name" label="Name on Card">
                                    <a-input placeholder="Full name" />
                                  </a-form-item>
                                  <a-form-item name="month" initialValue="" label="Expiration Date">
                                    <a-select :style="{ width: '100%' }">
                                      <a-select-option value="">MM</a-select-option>

                                      <a-select-option v-for="value in month" :key="value" :value="value">
                                        {value}
                                      </a-select-option>
                                    </a-select>
                                  </a-form-item>
                                  <a-form-item name="year">
                                    <a-select :style="{ width: '100%' }">
                                      <a-select-option value="">YY</a-select-option>
                                      <a-select-option :value="new Date().getFullYear()">{{
                                        new Date().getFullYear()
                                      }}</a-select-option>

                                      <a-select-option
                                        v-for="value in month"
                                        :key="value"
                                        :value="parseInt(new Date().getFullYear(), 10) + parseInt(value, 10)"
                                      >
                                        {{ parseInt(new Date().getFullYear(), 10) + parseInt(value, 10) }}
                                      </a-select-option>
                                    </a-select>
                                  </a-form-item>
                                  <a-form-item name="cvv" label="CVV">
                                    <div class="cvv-wrap">
                                      <a-input :style="{ width: '60%' }" placeholder="XXX" />
                                      <a class="input-leftText" to="#">
                                        What is this?
                                      </a>
                                    </div>
                                  </a-form-item>
                                </a-form>
                              </sdCards>
                            </sdCards>
                          </a-radio>
                        </div>
                        <div class="shipping-selection__paypal">
                          <a-radio value="payPal" :style="{ width: '100%' }">
                            Pay With PayPal
                            <img :src="require('@/static/img/PayPalLogo.png')" alt="paypal" />
                          </a-radio>
                        </div>
                        <div class="shipping-selection__cash">
                          <a-radio value="cash" :style="{ width: '100%' }">
                            Cash on delivery
                          </a-radio>
                        </div>
                      </a-radio-group>
                    </div>
                  </div>
                </a-col>
              </a-row>
            </div>
          </BasicFormWrapper>
        </template>
        <template #review>
          <BasicFormWrapper v-if="status !== 'finish'" :style="{ width: '100%' }">
            <div class="atbd-review-order" :style="{ width: '100%' }">
              <sdHeading as="h4">4. Review and confirm Order</sdHeading>
              <sdCards :bodyStyle="{ backgroundColor: '#F8F9FB', borderRadius: 10 }" headless>
                <div class="atbd-review-order__single">
                  <sdCards headless>
                    <div class="atbd-review-order__shippingTitle">
                      <sdHeading as="h5">
                        Shipping Information
                        <a to="#">
                          <sdFeatherIcons type="edit" />
                          Edit
                        </a>
                      </sdHeading>
                    </div>
                    <article class="atbd-review-order__shippingInfo">
                      <a-radio-group :style="{ width: '100%' }">
                        <a-radio value="ms" :style="{ width: '100%' }">
                          <div class="shipping-info-text">
                            <sdHeading as="h6">Ibn Adam</sdHeading>
                            <sdHeading as="h6">Phone: +61412345678</sdHeading>
                            <p>
                              795 Folsom Ave, Suite 600 <br />
                              San Francisco, CA 94107 <br />
                              United States
                            </p>
                          </div>
                        </a-radio>
                      </a-radio-group>
                      <a class="btn-addNew" to="#">
                        + Add New Address
                      </a>
                    </article>
                  </sdCards>
                </div>
                <div class="atbd-review-order__single">
                  <sdCards headless>
                    <div>
                      <sdHeading as="h5">Payment Method</sdHeading>
                    </div>
                    <a-radio-group :style="{ width: '100%' }">
                      <a-radio value="ms" :style="{ width: '100%' }">
                        <div class="method-info">
                          <img :src="require('@/static/img/ms.svg')" alt="" />
                          **** **** **** 2597
                        </div>
                      </a-radio>
                    </a-radio-group>
                    <a class="btn-addCard" to="#">
                      + Add New Card
                    </a>
                  </sdCards>
                </div>

                <div class="atbd-review-order__single">
                  <sdCards headless> </sdCards>
                </div>
              </sdCards>
            </div>
          </BasicFormWrapper>

          <a-row v-else justify="start" :style="{ width: '100%' }">
            <a-col :xl="20" :xs="24">
              <div class="checkout-successful">
                <sdCards
                  headless
                  :bodyStyle="{
                    backgroundColor: '#F8F9FB',
                    borderRadius: '20px',
                  }"
                >
                  <sdCards headless>
                    <span class="icon-success">
                      <sdFeatherIcons type="check" />
                    </span>
                    <sdHeading as="h3">Payment Successful</sdHeading>
                    <p>Thank you! We have received your Payment</p>
                  </sdCards>
                </sdCards>
              </div>
            </a-col>
          </a-row>
        </template> -->
      </Steps>
    </WizardThree>
  </WizardWrapper>
</template>
<script>
import { WizardWrapper, WizardThree } from '../Style';
import { BasicFormWrapper } from '../../styled';
import Steps from '@/components/steps/steps';
import { useStore } from 'vuex';
import { computed, onMounted, ref, reactive } from 'vue';

const WizardsThree = {
  name: 'WizardsThree',
  components: {
    Steps,
    WizardWrapper,
    WizardThree,
    BasicFormWrapper,
  },
  setup() {
    const { state, dispatch } = useStore();
    const cartData = computed(() => state.cart.data);
    const isLoading = computed(() => state.cart.loading);
    const rtl = computed(() => state.themeLayout.rtlData);
    const status = ref('process');
    const isFinished = ref(false);
    const current = ref(1);
    const password = ref(123456);
    const confirm_password = ref();
    onMounted(() => {
      dispatch('cartGetData');
    });

    const profile = reactive({
      fname: '',
      lname: '',
      email: '',
      address: '',
    });

    const stateAddress = reactive({
      name: '',
      company: '',
      street: '',
      street2: '',
      country: '',
      city: '',
      phone: '',
      zip: '',
    });

    const next = () => {
      status.value = 'process';
      current.value = current.value + 1;
    };

    const prev = () => {
      status.value = 'process';
      current.value = current.value - 1;
    };

    const done = () => {
      const confirm = window.confirm('Are sure to submit order?');
      if (confirm) {
        status.value = 'finish';
        isFinished.value = true;
        current.value = 0;
      }
    };

    return {
      done,
      prev,
      next,
      cartData,
      isLoading,
      rtl,
      status,
      isFinished,
      current,
      password,
      confirm_password,
      steps: [
        {
          title: 'Start',
          content: 'start',
        },
        {
          title: 'Profile',
          content: 'profile',
        },
        {
          title: 'Hints',
          content: 'hints',
        },
        {
          title: 'Finish',
          content: 'finish',
        },
      ],
      profile,
      stateAddress,
    };
  },
};

export default WizardsThree;
</script>
