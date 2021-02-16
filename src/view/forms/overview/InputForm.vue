<template>
  <div>
    <BasicFormWrapper>
      <HorizontalFormStyleWrap class="sDash_input-form">
        <sdCards title="Basic Inputs">
          <a-form name="input-form" layout="horizontal">
            <a-row align="middle">
              <a-col :md="6" :xs="24">
                <a-form-item label="Text" html-for="input-text"> </a-form-item>
              </a-col>
              <a-col :md="18" :xs="24">
                <a-input name="input-text" placeholder="Duran Clayton" />
              </a-col>
            </a-row>
            <a-row align="middle">
              <a-col :md="6" :xs="24">
                <a-form-item label="Email Address" html-for="input-email">
                </a-form-item>
              </a-col>
              <a-col :md="18" :xs="24">
                <a-input name="input-email" placeholder="username@email.com" />
              </a-col>
            </a-row>
            <a-row align="middle">
              <a-col :md="6" :xs="24">
                <a-form-item label="URL" html-for="input-url"> </a-form-item>
              </a-col>
              <a-col :md="18" :xs="24">
                <a-input
                  name="input-url"
                  placeholder="https://strikingdash-vue-admin-dashboard-template"
                />
              </a-col>
            </a-row>
            <a-row align="middle">
              <a-col :md="6" :xs="24">
                <a-form-item label="Phone" html-for="input-phone">
                </a-form-item>
              </a-col>
              <a-col :md="18" :xs="24">
                <a-input name="input-phone" placeholder="017123456789" />
              </a-col>
            </a-row>
            <a-row align="middle">
              <a-col :md="6" :xs="24">
                <a-form-item label="Password" html-for="input-pass">
                </a-form-item>
              </a-col>
              <a-col :md="18" :xs="24">
                <a-input-password
                  name="input-pass"
                  placeholder="Enter Password"
                />
              </a-col>
            </a-row>
            <a-row align="middle">
              <a-col :md="6" :xs="24">
                <a-form-item label="Number" html-for="input-number">
                </a-form-item>
              </a-col>
              <a-col :md="18" :xs="24">
                <a-input name="input-number" placeholder="12457485" />
              </a-col>
            </a-row>
            <a-row align="middle">
              <a-col :md="6" :xs="24">
                <a-form-item label="Date" html-for="input-date"> </a-form-item>
              </a-col>
              <a-col :md="18" :xs="24">
                <a-date-picker name="input-date" />
              </a-col>
            </a-row>
            <a-row align="middle">
              <a-col :md="6" :xs="24">
                <a-form-item label="Month" html-for="input-month"> </a-form-item>
              </a-col>
              <a-col :md="18" :xs="24">
                <a-month-picker name="input-month" placeholder="Select month" />
              </a-col>
            </a-row>
            <a-row align="middle">
              <a-col :md="6" :xs="24">
                <a-form-item label="Time" html-for="input-time"> </a-form-item>
              </a-col>
              <a-col :md="18" :xs="24">
                <a-time-picker :default-value="moment('12:08:23', 'HH:mm:ss')" name="input-time" />
              </a-col>
            </a-row>
            <a-row align="middle">
              <a-col :md="6" :xs="24">
                <a-form-item label="Color" html-for="input-time"> </a-form-item>
              </a-col>
              <a-col :md="18" :xs="24">
                <a-form-item name="input-color">
                  <div class="sDash_color-picker">
                    <input type="color" value="#5F63F2" />
                  </div>
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </sdCards>
      </HorizontalFormStyleWrap>
    </BasicFormWrapper>
  </div>
</template>

<script>
import { HorizontalFormStyleWrap } from "./Style";
import { BasicFormWrapper } from "../../styled";
import moment from 'moment';
export default {
  name: "InputForm",
  components: {
    BasicFormWrapper,
    HorizontalFormStyleWrap,
  },
  methods: {
    moment,
  },
};
</script>

