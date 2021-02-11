<template>
  <div>
    <BasicFormWrapper>
      <HorizontalFormStyleWrap>
        <sdCards title="Horizontal Form With Icons">
          <a-form name="horizontal-form-with-icon" layout="horizontal">
            <a-row align="middle">
              <a-col :lg="8" :md="9" :xs="24">
                <a-form-item label="Name"> </a-form-item>
              </a-col>
              <a-col :lg="16" :md="15" :xs="24">
                <a-input value="Duran Clayton" placeholder="input placeholder">
                  <UserIcon slot="prefix" size="14" />
                </a-input>
              </a-col>
            </a-row>
            <a-row align="middle">
              <a-col :lg="8" :md="9" :xs="24">
                <a-form-item label="Email Address"> </a-form-item>
              </a-col>
              <a-col :lg="16" :md="15" :xs="24">
                <a-input
                  name="email"
                  value="username@email.com"
                  placeholder="input placeholder"
                >
                  <MailIcon slot="prefix" size="14" />
                </a-input>
              </a-col>
            </a-row>
            <a-row align="middle">
              <a-col :lg="8" :md="9" :xs="24">
                <a-form-item label="Password"> </a-form-item>
              </a-col>
              <a-col :lg="16" :md="15" :xs="24">
                <a-input-password
                  name="password"
                  value="12345678"
                  placeholder="with input password"
                >
                  <LockIcon slot="prefix" size="14" />
                </a-input-password>
              </a-col>
            </a-row>
            <a-row>
              <a-col
                :lg="{ span: 16, offset: 8 }"
                :md="{ span: 15, offset: 9 }"
                :xs="{ span: 24, offset: 0 }"
              >
                <div class="sDash_form-action">
                  <sdButton
                    class="btn-signin"
                    html-type="submit"
                    type="light"
                  >
                    Cancel
                  </sdButton>
                  <sdButton class="btn-signin" type="primary">
                    Save
                  </sdButton>
                </div>
              </a-col>
            </a-row>
          </a-form>
        </sdCards>
      </HorizontalFormStyleWrap>
    </BasicFormWrapper>
  </div>
</template>

<script>
import { UserIcon, MailIcon, LockIcon } from "vue-feather-icons";
import { HorizontalFormStyleWrap } from "./Style";
import { BasicFormWrapper } from "../../styled";
export default {
  name: "HorizontalIconForm",
  components: {
    BasicFormWrapper,
    HorizontalFormStyleWrap,
    UserIcon,
    MailIcon,
    LockIcon,
  },
};
</script>