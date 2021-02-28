<template>
  <sdCards>
    <div slot="caption" class="setting-card-title">
      <sdHeading as="h4">Social Profiles</sdHeading>
      <span>Add elsewhere links to your profile </span>
    </div>
    <SocialProfileForm>
      <a-row type="flex" justify="center">
        <a-col :xxl="12" :xl="14" :sm="18" :xs="24">
          <BasicFormWrapper>
            <a-form @submit="handleSubmit">
              <a-form-item label="Facebook">
                <a-input
                  v-decorator="['facebook']"
                  class="facebook"
                  placeholder="URL"
                >
                  <font-awesome-icon
                    slot="prefix"
                    class="super-crazy-colors"
                    :icon="faFacebookF"
                    size="1x"
                    :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
                  />
                </a-input>
              </a-form-item>
              <a-form-item label="Twitter">
                <a-input
                  v-decorator="['twitter']"
                  class="twitter"
                  placeholder="URL"
                >
                  <font-awesome-icon
                    slot="prefix"
                    class="super-crazy-colors"
                    :icon="faTwitter"
                    size="1x"
                    :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
                  />
                </a-input>
              </a-form-item>
              <a-form-item label="Dribbble">
                <a-input
                  v-decorator="['dribbble']"
                  class="dribbble"
                  placeholder="URL"
                >
                  <font-awesome-icon
                    slot="prefix"
                    class="super-crazy-colors"
                    :icon="faDribbble"
                    size="1x"
                    :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
                  />
                </a-input>
              </a-form-item>
              <a-form-item label="Instagram">
                <a-input
                  v-decorator="['instagram']"
                  class="instagram"
                  placeholder="URL"
                >
                  <font-awesome-icon
                    slot="prefix"
                    class="super-crazy-colors"
                    :icon="faInstagram"
                    size="1x"
                    :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
                  />
                </a-input>
              </a-form-item>

              <a-form-item label="Github">
                <a-input
                  v-decorator="['github']"
                  class="github"
                  placeholder="URL"
                >
                  <font-awesome-icon
                    slot="prefix"
                    class="super-crazy-colors"
                    :icon="faGithub"
                    size="1x"
                    :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
                  />
                </a-input>
              </a-form-item>

              <a-form-item label="Medium">
                <a-input
                  v-decorator="['medium']"
                  class="medium"
                  placeholder="URL"
                >
                  <font-awesome-icon
                    slot="prefix"
                    class="super-crazy-colors"
                    :icon="faMediumM"
                    size="1x"
                    :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
                  />
                </a-input>
              </a-form-item>

              <div class="setting-form-actions">
                <sdButton
                  @click.native="handleSubmit"
                  size="default"
                  htmlType="submit"
                  type="primary"
                >
                  Update Social Profile
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
    </SocialProfileForm>
  </sdCards>
</template>

<script>
import { SocialProfileForm } from "./style";
import { BasicFormWrapper } from "../../../styled";
import {
  faFacebookF,
  faDribbble,
  faTwitter,
  faInstagram,
  faGithub,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";

const SocialProfile = {
  name: "SocialProfile",
  data() {
    return {
      values: null,
      form: this.$form.createForm(this, { name: "social" }),
      faFacebookF,
      faDribbble,
      faTwitter,
      faInstagram,
      faGithub,
      faMediumM,
    };
  },
  components: { SocialProfileForm, BasicFormWrapper },
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

export default SocialProfile;
</script>
