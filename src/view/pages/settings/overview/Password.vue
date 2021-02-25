<template>
  <ChangePasswordWrapper>
    <sdCards>
      <div slot="caption" class="setting-card-title">
        <sdHeading as="h4">Password Settings</sdHeading>
        <span>Change or reset your account password</span>
      </div>
      <a-row type="flex" justify="center">
        <a-col :lg="12" :sm="20" :xs="24">
          <BasicFormWrapper>
            <a-form :form="form" @submit="handleSubmit">
              <a-form-item label="Old Password">
                <a-input v-decorator="['old']" />
              </a-form-item>
              <a-form-item name="new" label="New Password">
                <a-input-password v-decorator="['new']" />
              </a-form-item>
              <p class="input-message">Minimum 6 characters</p>
              <a-form-item>
                <div class="setting-form-actions">
                  <sdButton
                    @click.native="handleSubmit"
                    htmlType="submit"
                    type="primary"
                  >
                    Change Password
                  </sdButton>
                  &nbsp; &nbsp;
                  <sdButton
                    size="default"
                    onClick="{handleCancel}"
                    type="light"
                  >
                    Cancel
                  </sdButton>
                </div>
              </a-form-item>
            </a-form>
          </BasicFormWrapper>
        </a-col>
      </a-row>
    </sdCards>
  </ChangePasswordWrapper>
</template>

<script>
import { ChangePasswordWrapper } from "./style";
import { BasicFormWrapper } from "../../../styled";

const Password = {
  name: "Password",
  data() {
    return {
      values: null,
      form: this.$form.createForm(this, { name: "changePassword" }),
    };
  },
  components: { ChangePasswordWrapper, BasicFormWrapper },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.values = { ...values, tags: this.tags };
          console.log(values);
        }
      });
    },
    handleCancel(e) {
      e.preventDefault();
      //form.resetFields();
    },
  },
};

export default Password;
</script>
