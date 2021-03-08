<template>
  <div>
    <sdPageHeader title="Notification">
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
                @click="() => openNotificationWithIcon('success')"
              >
                Success
              </sdButton>
              <sdButton
                type="info"
                @click="() => openNotificationWithIcon('info')"
              >
                Info
              </sdButton>
              <sdButton
                type="warning"
                @click="() => openNotificationWithIcon('warning')"
              >
                Warning
              </sdButton>
              <sdButton
                type="error"
                @click="() => openNotificationWithIcon('error')"
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
                <RadiusUpleftOutlined />

                topLeft
              </a-button>
              <a-button
                type="primary"
                @click="openNotificationPlacement('topRight')"
              >
                <RadiusUprightOutlined />
                topRight
              </a-button>
            </a-space>
            <a-divider />
            <a-space>
              <a-button
                type="primary"
                @click="openNotificationPlacement('bottomLeft')"
              >
                <RadiusBottomleftOutlined />
                bottomLeft
              </a-button>
              <a-button
                type="primary"
                @click="openNotificationPlacement('bottomRight')"
              >
                <RadiusBottomrightOutlined />
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
import { Main } from "../styled";
import { Notification } from "ant-design-vue";
import {
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
} from "@ant-design/icons-vue";

export default {
  name: "Notification",
  components: {
    Main,
    RadiusUpleftOutlined,
    RadiusUprightOutlined,
    RadiusBottomleftOutlined,
    RadiusBottomrightOutlined,
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
        icon: <sdFeatherIcons type="smile" size="14" style="color: #108ee9" />,
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
