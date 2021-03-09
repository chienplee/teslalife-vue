<template>
  <div>
    <sdPageHeader title="Form Validation">
      <template v-slot:buttons>
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
      <a-row :gutter="25">
        <a-col :xs="24">
          <sdCards title="Custom Styles" caption="The simplest use of Form">
            <FormValidationWrap>
              <VerticalFormStyleWrap>
                <a-form
                  name="sDash_validation-form"
                  ref="formRef"
                  :model="formState"
                  :rules="rules"
                  :layout="formState.layout"
                  @finish="handleFinish"
                  @finishFailed="handleFinishFailed"
                >
                  <a-row :gutter="30">
                    <a-col :md="8" :xs="24">
                      <a-form-item label="First Name">
                        <a-input
                          v-model:value="formState.firstName"
                          placeholder="First Name"
                        />
                      </a-form-item>
                    </a-col>
                    <a-col :md="8" :xs="24">
                      <a-form-item
                        required
                        has-feedback
                        label="Password"
                        name="pass"
                      >
                        <a-input
                          v-model:value="formState.pass"
                          type="password"
                          autocomplete="off"
                        />
                      </a-form-item>
                    </a-col>
                    <a-col :md="8" :xs="24">
                      <a-form-item
                        has-feedback
                        label="Confirm"
                        name="checkPass"
                      >
                        <a-input
                          v-model:value="formState.checkPass"
                          type="password"
                          autocomplete="off"
                        />
                      </a-form-item>
                    </a-col>
                    <a-col :md="8" :xs="24">
                      <a-form-item has-feedback label="Age" name="age">
                        <a-input-number v-model:value="formState.age" />
                      </a-form-item>
                    </a-col>
                  </a-row>
                  <div class="sDash_form-action mt-20">
                        <sdButton type="primary" html-type="submit">
                          Submit Form
                        </sdButton>
                        <sdButton @click="resetForm"
                          >Reset</sdButton
                        >
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

import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: "Form",
  components: {
    Main,
    FormValidationWrap,
    VerticalFormStyleWrap,
  },
  setup() {
    const formState = reactive({
      layout: "vertical",
      firstName: "",
      fieldB: "",
      pass: "",
      checkPass: "",
      age: undefined,
    });
    
    const formRef = ref();

    let checkAge = async (rule, value) => {
      if (!value) {
        return Promise.reject("Please input the age");
      }

      if (!Number.isInteger(value)) {
        return Promise.reject("Please input digits");
      } else {
        if (value < 18) {
          return Promise.reject("Age must be greater than 18");
        } else {
          return Promise.resolve();
        }
      }
    };

    let validatePass = async (rule, value) => {
      if (value === "") {
        return Promise.reject("Please input the password");
      } else {
        if (formState.checkPass !== "") {
          formRef.value.validateField("checkPass");
        }

        return Promise.resolve();
      }
    };

    let validatePass2 = async (rule, value) => {
      if (value === "") {
        return Promise.reject("Please input the password again");
      } else if (value !== formState.pass) {
        return Promise.reject("Two inputs don't match!");
      } else {
        return Promise.resolve();
      }
    };

    const rules = {
      pass: [
        {
          validator: validatePass,
          trigger: "change",
        },
      ],
      checkPass: [
        {
          validator: validatePass2,
          trigger: "change",
        },
      ],
      age: [
        {
          validator: checkAge,
          trigger: "change",
        },
      ],
    };
    const handleFinish = (values) => {
      console.log(values, formState);
    };

    const handleFinishFailed = (errors) => {
      console.log(errors);
    };

    const resetForm = () => {
      formRef.value.resetFields();
    };

    return {
      formState,
      formRef,
      rules,
      handleFinishFailed,
      handleFinish,
      resetForm,
    };
  },
});
</script>
