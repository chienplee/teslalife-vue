<template>
  <sdCards>
    <div slot="caption" class="setting-card-title">
      <sdHeading as="h4">Edit Profile</sdHeading>
      <span>Set Up Your Personal Information</span>
    </div>
    <a-row type="flex" justify="center">
      <a-col :xl="12" :lg="16" :xs="24">
        <BasicFormWrapper>
          <a-form :form="form" @submit="handleSubmit">
            <a-form-Item label="Name">
              <a-input
                v-decorator="[
                  'name',
                  {
                    initialValue: 'Duran Clayton',
                  },
                ]"
              />
            </a-form-Item>

            <a-form-item label="Phone Number">
              <a-input
                v-decorator="[
                  'phone',
                  {
                    initialValue: '01742920502',
                  },
                ]"
              />
            </a-form-item>
            <a-form-item label="Country">
              <a-select
                v-decorator="[
                  'country',
                  {
                    initialValue: '',
                  },
                ]"
                style="width: 100%"
              >
                <a-select-option value="">Please Select</a-select-option>
                <a-select-option value="bangladesh">Bangladesh</a-select-option>
                <a-select-option value="india">India</a-select-option>
                <a-select-option value="pakistan">Pakistan</a-select-option>
              </a-select>
            </a-form-item>

            <a-form-item label="City">
              <a-select
                v-decorator="['city', { initialValue: '' }]"
                style="width: 100%"
              >
                <a-select-option value="">Please Select</a-select-option>
                <a-select-option value="dhaka">Dhaka</a-select-option>
                <a-select-option value="mymensingh">Mymensingh</a-select-option>
                <a-select-option value="khulna">Khulna</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="Company Name">
              <a-input v-decorator="['company', { initialValue: 'Example' }]" />
            </a-form-item>
            <a-form-item label="Website">
              <a-input
                v-decorator="['website', { initialValue: 'www.example.com' }]"
              />
            </a-form-item>
            <a-form-item label="User Bio">
              <a-textarea
                v-decorator="[
                  'userBio',
                  {
                    initialValue:
                      'Nam malesuada dolor tellus pretium amet was hendrerit facilisi id vitae enim sed ornare there suspendisse sed orci neque ac sed aliquet risus faucibus in pretium molestee.',
                  },
                ]"
                :rows="3"
              />
            </a-form-item>
            <a-form-item name="skills" label="Skills">
              <TagInput>
                <div>
                  <template v-for="(tag, index) in tags">
                    <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                      <a-tag
                        :key="tag"
                        :closable="index !== 0"
                        @close="() => handleClose(tag)"
                      >
                        {{ `${tag.slice(0, 20)}...` }}
                      </a-tag>
                    </a-tooltip>
                    <a-tag
                      v-else
                      :key="index + 1"
                      :closable="index !== 0"
                      @close="() => handleClose(tag)"
                    >
                      {{ tag }}
                    </a-tag>
                  </template>
                  <div>
                    <a-input
                      v-if="inputVisible"
                      ref="input"
                      type="text"
                      size="small"
                      :style="{ width: '78px' }"
                      :value="inputValue"
                      @change="handleInputChange"
                      @blur="handleInputConfirm"
                      @keyup.enter="handleInputConfirm"
                    />
                    <a-tag
                      v-else
                      style="background: #fff; borderStyle: dashed;"
                      @click="showInput"
                    >
                      <a-icon type="plus" /> New Tag
                    </a-tag>
                  </div>
                </div>
              </TagInput>
            </a-form-item>

            <div class="setting-form-actions">
              <sdButton
                @click.native="handleSubmit"
                size="default"
                htmlType="submit"
                type="primary"
              >
                Update Profile
              </sdButton>
              &nbsp; &nbsp;
              <sdButton
                size="default"
                @click.native="handleCancel"
                type="light"
              >
                Cancel
              </sdButton>
            </div>
          </a-form>
        </BasicFormWrapper>
      </a-col>
    </a-row>
  </sdCards>
</template>
<script>
import { BasicFormWrapper, TagInput } from "../../../styled";

const Profile = {
  name: "Profile",
  components: { BasicFormWrapper, TagInput },
  data() {
    return {
      tags: ["UI/UX", "Branding", "Product Design", "Web Design"],
      values: null,
      form: this.$form.createForm(this, { name: "coordinated" }),
      inputVisible: false,
      inputValue: "",
    };
  },
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
    handleClose(removedTag) {
      const tags = this.tags.filter((tag) => tag !== removedTag);
      console.log(tags);
      this.tags = tags;
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(function() {
        this.$refs.input.focus();
      });
    },

    handleInputChange(e) {
      this.inputValue = e.target.value;
    },

    handleInputConfirm() {
      const inputValue = this.inputValue;
      let tags = this.tags;
      if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [...tags, inputValue];
      }
      console.log(tags);
      Object.assign(this, {
        tags,
        inputVisible: false,
        inputValue: "",
      });
    },
  },
};

export default Profile;
</script>
