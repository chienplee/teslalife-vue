<template>
  <div>
    <sdPageHeader title="Form Validation">
      <div slot="buttons" class="page-header-actions">
        <sdCalendarButton />
        <sdExportButton />
        <sdShareButton />
        <sdButton size="small" type="primary">
          <PlusIcon size="14" />
          Add New
        </sdButton>
      </div>
    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :xs="24">
          <sdCards title="Custom Styles" caption="The simplest use of Form">
            <FormValidationWrap>
              <VerticalFormStyleWrap>
                <a-form
                  :form="form"
                  @submit="handleSubmit"
                  name="sDash_validation-form"
                  layout="vertical"
                >
                  <a-row :gutter="30">
                    <a-col :md="8" :xs="24">
                      <a-form-item label="First Name">
                        <a-input
                          placeholder="First Name"
                          name="fname"
                          v-decorator="[
                            'fname',
                            {
                              rules: [
                                {
                                  required: true,
                                  message: 'Please input your first name!',
                                },
                              ],
                            },
                          ]"
                        />
                      </a-form-item>
                    </a-col>
                    <a-col :md="8" :xs="24">
                      <a-form-item label="Last Name">
                        <a-input
                          placeholder="Last Name"
                          name="lname"
                          v-decorator="[
                            'lname',
                            {
                              rules: [
                                {
                                  required: true,
                                  message: 'Please input your last name!',
                                },
                              ],
                            },
                          ]"
                        />
                      </a-form-item>
                    </a-col>
                    <a-col :md="8" :xs="24">
                      <a-form-item label="Username">
                        <a-input
                          placeholder="Username"
                          name="username"
                          v-decorator="[
                            'username',
                            {
                              rules: [
                                {
                                  required: true,
                                  message: 'Please input your username!',
                                },
                              ],
                            },
                          ]"
                        />
                      </a-form-item>
                    </a-col>
                    <a-col :md="12" :xs="24">
                      <a-form-item label="City">
                        <a-input
                          name="city"
                          placeholder="City"
                          v-decorator="[
                            'city',
                            {
                              rules: [
                                {
                                  required: true,
                                  message: 'Please input your city!',
                                },
                              ],
                            },
                          ]"
                        />
                      </a-form-item>
                    </a-col>
                    <a-col :md="6" :xs="24">
                      <a-form-item label="State">
                        <a-input
                          name="state"
                          placeholder="State"
                          v-decorator="[
                            'state',
                            {
                              rules: [
                                {
                                  required: true,
                                  message: 'Please input your state!',
                                },
                              ],
                            },
                          ]"
                        />
                      </a-form-item>
                    </a-col>
                    <a-col :md="6" :xs="24">
                      <a-form-item label="Zip">
                        <a-input
                          name="zip-code"
                          placeholder="Zip"
                          v-decorator="[
                            'zip-code',
                            {
                              rules: [
                                {
                                  required: true,
                                  message: 'Please input your zip!',
                                },
                              ],
                            },
                          ]"
                        />
                      </a-form-item>
                    </a-col>
                  </a-row>
                  <div class="sDash_agree-check">
                    <a-form-item>
                      <a-checkbox name="checkbox">
                        Agree to terms and conditions
                      </a-checkbox>
                    </a-form-item>
                  </div>
                  <div class="sDash_form-action mt-20">
                    <a-button type="primary" html-type="submit">
                      Submit Form
                    </a-button>
                  </div>
                </a-form>
              </VerticalFormStyleWrap>
            </FormValidationWrap>
          </sdCards>
        </a-col>

        <a-col :xs="24">
          <sdCards title="Server Side">
            <FormValidationWrap>
              <VerticalFormStyleWrap>
                <a-form name="sDash_vertical-form" layout="vertical">
                  <a-row :gutter="30">
                    <a-col :md="8" :xs="24">
                      <a-form-item
                        label="First Name"
                        validate-status="success"
                        help="Looks good!"
                      >
                        <a-input
                          placeholder="First Name"
                          name="fname2"
                          value="Duran"
                        />
                      </a-form-item>
                    </a-col>
                    <a-col :md="8" :xs="24">
                      <a-form-item
                        label="Last Name"
                        validate-status="success"
                        help="Looks good!"
                      >
                        <a-input
                          placeholder="Last Name"
                          name="lname"
                          value="Clayton"
                        />
                      </a-form-item>
                    </a-col>
                    <a-col :md="8" :xs="24">
                      <a-form-item label="Username" validate-status="error">
                        <a-input placeholder="Username" name="username" />
                      </a-form-item>
                    </a-col>
                    <a-col :md="12" :xs="24">
                      <a-form-item
                        label="City"
                        help="Please provide a valid city."
                        validate-status="error"
                      >
                        <a-input name="city" placeholder="City" />
                      </a-form-item>
                    </a-col>
                    <a-col :md="6" :xs="24">
                      <a-form-item
                        label="State"
                        help="Please provide a valid state."
                        validate-status="error"
                      >
                        <a-input name="state" placeholder="State" />
                      </a-form-item>
                    </a-col>
                    <a-col :md="6" :xs="24">
                      <a-form-item
                        label="Zip"
                        help="Please provide a valid zip."
                        validate-status="error"
                      >
                        <a-input name="zip-code" placeholder="Zip" />
                      </a-form-item>
                    </a-col>
                  </a-row>
                  <div class="sDash_agree-check">
                    <a-form-item
                      help="You must agree before submitting."
                      validate-status="error"
                    >
                      <a-checkbox name="checkbox">
                        Agree to terms and conditions
                      </a-checkbox>
                    </a-form-item>
                  </div>
                  <a-row>
                    <a-col :xs="24">
                      <a-form-item
                        help="You must agree before submitting."
                        validate-status="error"
                      >
                        <a-input-password name="password" />
                      </a-form-item>
                    </a-col>
                  </a-row>
                  <div class="sDash_form-action mt-20">
                    <a-button type="primary" html-type="submit">
                      Submit Form
                    </a-button>
                  </div>
                </a-form>
              </VerticalFormStyleWrap>
            </FormValidationWrap>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { FormValidationWrap, VerticalFormStyleWrap } from "./overview/Style";
import { Main } from "../styled";
import { PlusIcon } from "vue-feather-icons";
export default {
  name: "Form",
  components: {
    PlusIcon,
    Main,
    FormValidationWrap,
    VerticalFormStyleWrap,
  },

  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === "male" ? "man" : "lady"}!`,
      });
    },
  },
};
</script>
