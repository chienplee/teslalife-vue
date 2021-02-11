<template>
  <div>
    <BasicFormWrapper>
      <VerticalFormStyleWrap>
        <sdCards title="Vertical Form With Icons">
          <a-form name="sDash_vertical-form-with-icon" layout="vertical">
            <a-form-item label="Name">
              <a-input value="Duran Clayton" placeholder="input placeholder">
                <UserIcon slot="prefix" size="14" />
              </a-input>
            </a-form-item>
            <a-form-item label="Email Address">
              <a-input
                name="email"
                value="username@email.com"
                placeholder="input placeholder"
              >
                <MailIcon slot="prefix" size="14" />
              </a-input>
            </a-form-item>

            <a-form-item label="Password">
              <a-input-password
                name="password"
                value="12345678"
                placeholder="with input password"
              >
                <LockIcon slot="prefix" size="14" />
              </a-input-password>
            </a-form-item>
            <div class="sDash_form-action">
              <sdButton
                className="btn-signin"
                htmlType="submit"
                type="light"
              >
                Cancel
              </sdButton>
              <sdButton class="btn-signin" type="primary">
                Save
              </sdButton>
            </div>
          </a-form>
        </sdCards>
      </VerticalFormStyleWrap>
    </BasicFormWrapper>
  </div>
</template>

<script>
import { UserIcon, MailIcon, LockIcon } from "vue-feather-icons";
import { VerticalFormStyleWrap } from "./Style";
import { BasicFormWrapper } from "../../styled";
export default {
  name: "VerticalIconForm",
  components: {
    BasicFormWrapper,
    VerticalFormStyleWrap,
    UserIcon,
    MailIcon,
    LockIcon,
  },
};
</script>