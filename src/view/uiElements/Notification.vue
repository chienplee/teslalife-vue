<template>
  <div>
    <sdPageHeader title="Notification">
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
            <a-button type="primary" @click="openNotification">
              Open the notification box
            </a-button>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Custom style">
            <a-button type="primary" @click="openNotificationCustom">
              Open the notification box
            </a-button>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Custom Icon">
            <a-button type="primary" @click="openNotificationIcon">
              Open the notification box
            </a-button>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Notification with icon">
            <a-space>
              <sdButton
                type="success"
                @click.native="() => openNotificationWithIcon('success')"
              >
                Success
              </sdButton>
              <sdButton
                type="info"
                @click.native="() => openNotificationWithIcon('info')"
              >
                Info
              </sdButton>
              <sdButton
                type="warning"
                @click.native="() => openNotificationWithIcon('warning')"
              >
                Warning
              </sdButton>
              <sdButton
                type="error"
                @click.native="() => openNotificationWithIcon('error')"
              >
                Error
              </sdButton>
            </a-space>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Placement">
            <a-space>
              <a-button
                type="primary"
                @click="openNotificationPlacement('topLeft')"
              >
                <a-icon type="radius-upleft" />
                topLeft
              </a-button>
              <a-button
                type="primary"
                @click="openNotificationPlacement('topRight')"
              >
                <a-icon type="radius-upright" />
                topRight
              </a-button>
            </a-space>
            <a-divider />
            <a-space>
              <a-button
                type="primary"
                @click="openNotificationPlacement('bottomLeft')"
              >
                <a-icon type="radius-bottomleft" />
                bottomLeft
              </a-button>
              <a-button
                type="primary"
                @click="openNotificationPlacement('bottomRight')"
              >
                <a-icon type="radius-bottomright" />
                bottomRight
              </a-button>
            </a-space>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { PlusIcon } from "vue-feather-icons";
import { Main } from "../styled";
import { Notification } from "ant-design-vue";

export default {
  name: "Notification",
  components: {
    PlusIcon,
    Main,
  },
  data() {
    return {};
  },
  methods: {
    openNotification() {
      Notification.open({
        message: "Notification Title",
        description:
          "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
        onClick: () => {
          console.log("Notification Clicked!");
        },
      });
    },
    openNotificationCustom() {
      Notification.open({
        message: "Notification Title",
        description:
          "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
        style: {
          width: "600px",
          marginLeft: `${335 - 600}px`,
        },
      });
    },
    openNotificationIcon() {
      Notification.open({
        message: "Notification Title",
        description:
          "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
        icon: <a-icon type="smile" style="color: #108ee9" />,
      });
    },
    openNotificationWithIcon(type) {
      Notification[type]({
        message: "Notification Title",
        description:
          "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      });
    },
    openNotificationPlacement(placement) {
      Notification.open({
        message: `Notification ${placement}`,
        description:
          "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
        placement,
      });
    },
  },
};
</script>
