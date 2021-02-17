<template>
  <div>
    <sdPageHeader title="Form">
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
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Elements of Form" caption="The simplest use of Form">
            <BasicFormWrapper>
              <a-form :form="form" layout="vertical" name="basicforms" @submit="handleSubmit">
                <a-form-item label="Username" name="username">
                  <a-input placeholder="Username" />
                </a-form-item>

                <a-form-item label="Email" name="email">
                  <a-input
                    v-decorator="[
                      'email',
                      {
                        rules: [
                          {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                          },
                          {
                            required: true,
                            message: 'Please input your E-mail!',
                          },
                        ],
                      },
                    ]"
                  />
                </a-form-item>

                <a-form-item label="Age" name="age">
                  <a-input-number style="width: 100%"
                    v-decorator="[
                      'age',
                      {
                        rules: [
                          {
                            type: 'number',
                            message: 'Please input your age!',
                          },
                          {
                            required: true,
                            message: 'Please input your age!',
                          },
                        ],
                      },
                    ]"
                  />
                </a-form-item>
                <a-form-item label="Website" name="website">
                  <a-input placeholder="http://website.com" />
                </a-form-item>
                <a-form-item label="Textarea" name="textarea">
                  <a-textarea
                    placeholder="Controlled autosize"
                    :auto-size="{ minRows: 3, maxRows: 5 }"
                  />
                </a-form-item>

                <a-form-item label="Website" name="website">
                  <a-input placeholder="http://website.com" />
                </a-form-item>
                <a-form-item label="Casecader" name="casecader">
                  <a-cascader
                    :options="options"
                    :default-value="['zhejiang', 'hangzhou', 'xihu']"
                    @change="onChange(value)"
                  />
                </a-form-item>
                <a-form-item label="Select" name="select">
                  <a-select
                    show-search
                    placeholder="Select a person"
                    option-filter-prop="children"
                    :filter-option="filterOption"
                  >
                    <a-select-option value="jack"> Jack </a-select-option>
                    <a-select-option value="lucy"> Lucy </a-select-option>
                    <a-select-option value="tom"> Tom </a-select-option>
                  </a-select>
                </a-form-item>
                <a-form-item>
                    <sdButton htmlType="submit" size="default" type="primary">
                      Submit
                    </sdButton>
                  </a-form-item>
              </a-form>
            </BasicFormWrapper>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main, BasicFormWrapper } from "../styled";
import { PlusIcon } from "vue-feather-icons";
export default {
  name: "Form",
  components: {
    PlusIcon,
    Main,
    BasicFormWrapper,
  },

  data() {
    return {
      form: this.$form.createForm(this, { name: 'coordinated' }),
      options: [
        {
          value: "zhejiang",
          label: "Zhejiang",
          children: [
            {
              value: "hangzhou",
              label: "Hangzhou",
              children: [
                {
                  value: "xihu",
                  label: "West Lake",
                },
              ],
            },
          ],
        },
        {
          value: "jiangsu",
          label: "Jiangsu",
          children: [
            {
              value: "nanjing",
              label: "Nanjing",
              children: [
                {
                  value: "zhonghuamen",
                  label: "Zhong Hua Men",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    onChange(value) {
      console.log(value);
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    },
  },
};
</script>
