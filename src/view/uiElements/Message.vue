<template>
  <div>
    <sdPageHeader title="Message">
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
        <a-col :md="12" :xs="24">
          <sdCards title="Basic">
            <MessageStyleWrapper>
              <sdButton type="primary" @click.native="info">
                Display normal message
              </sdButton>
            </MessageStyleWrapper>
          </sdCards>
          <sdCards title="Other Message">
            <MessageStyleWrapper>
              <a-space>
                <sdButton :outlined="true" type="white" @click.native="success">
                  Success
                </sdButton>
                <sdButton :outlined="true" type="white" @click.native="error">
                  Error
                </sdButton>
                <sdButton :outlined="true" type="white" @click.native="warning">
                  Warning
                </sdButton>
              </a-space>
            </MessageStyleWrapper>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Custom Message">
            <MessageStyleWrapper>
              <sdButton type="primary" @click.native="displayDuration">
                Customized display duration
              </sdButton>
            </MessageStyleWrapper>
          </sdCards>
          <sdCards title="Custom Message">
            <MessageStyleWrapper>
              <sdButton type="white" :outlined="true" @click.native="loading">
                Display a loading indicator
              </sdButton>
            </MessageStyleWrapper>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { PlusIcon } from "vue-feather-icons";
import { Main, MessageStyleWrapper } from "../styled";
import { message } from "ant-design-vue";
export default {
  name: "Message",
  components: {
    PlusIcon,
    Main,
    MessageStyleWrapper,
  },
  data() {
    return {};
  },
  methods: {
    info() {
      message.info("This is a normal message");
    },
    success() {
      message.success("This is a success message");
    },
    error() {
      message.error("This is an error message");
    },
    warning() {
      message.warning("This is a warning message");
    },
    displayDuration() {
      message.success(
        "This is a prompt message for success, and it will disappear in 10 seconds",
        10
      );
    },
    loading() {
      const hide = message.loading("Action in progress..", 0);
      setTimeout(hide, 2500);
    },
  },
};
</script>
