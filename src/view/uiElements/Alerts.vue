<template>
  <div>
    <sd-PageHeader title="Blank Page">
      <div slot="buttons" class="page-header-actions">
        <sd-CalendarButton />
        <sd-ExportButton />
        <sd-ShareButton />
        <sd-Button size="small" type="primary">
          <PlusIcon size="14" />
          Add New
        </sd-Button>
      </div>
    </sd-PageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :xs="24">
          <sd-Cards title="Basic">
            <AlertList>
              <div class="alert-empty-message">
                <sd-Alerts
                  :outlined="false"
                  :closable="false"
                  :showIcon="false"
                  description="Success Text"
                  type="success"
                />
              </div>
            </AlertList>
          </sd-Cards>
          <sd-Cards title="Closable">
            <AlertList>
              <div class="alert-empty-message">
                <sd-Alerts
                  :outlined="false"
                  :closable="true"
                  :showIcon="false"
                  description="Warning Text Warning Text Warning Text Warning Text Warning Text Warning TextWarning Text"
                  type="warning"
                />
              </div>
              <sd-Alerts
                :outlined="false"
                :closable="true"
                :showIcon="false"
                message="Error Text"
                description="Error Text Error Text Warning TextW Error Text Error Text Error TextError Text"
                type="error"
              />
            </AlertList>
          </sd-Cards>
          <sd-Cards title="Icon">
            <AlertList>
              <div class="alert-empty-message">
                <sd-Alerts
                  :outlined="false"
                  :closable="false"
                  :showIcon="true"
                  message=""
                  description="Success Tips"
                  type="success"
                />
                <sd-Alerts
                  :outlined="false"
                  :closable="false"
                  :showIcon="true"
                  message=""
                  description="Informational Notes"
                  type="info"
                />
                <sd-Alerts
                  :outlined="false"
                  :closable="false"
                  :showIcon="true"
                  message=""
                  description="Warning"
                  type="warning"
                />
                <sd-Alerts
                  :outlined="false"
                  :closable="false"
                  :showIcon="true"
                  message=""
                  description="Error"
                  type="error"
                />
              </div>
              <sd-Alerts
                :outlined="false"
                :closable="false"
                :showIcon="true"
                message="Success Tips"
                description="Detailed description and advice about successful copywriting."
                type="success"
              />
              <sd-Alerts
                :outlined="false"
                :closable="false"
                :showIcon="true"
                message="Informational Notes"
                description="Additional description and information about copywriting."
                type="info"
              />
              <sd-Alerts
                :outlined="false"
                :closable="false"
                :showIcon="true"
                message="Warning"
                description="This is a warning notice about copywriting."
                type="warning"
              />
              <sd-Alerts
                :outlined="false"
                :closable="false"
                :showIcon="true"
                message="Error"
                description="This is an error message about
              copywriting."
                type="error"
              />
            </AlertList>
          </sd-Cards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sd-Cards title="More Types">
            <AlertList>
              <div class="alert-empty-message">
                <sd-Alerts
                  :outlined="false"
                  :closable="false"
                  :showIcon="false"
                  message=""
                  description="Success Text"
                  type="success"
                />
                <sd-Alerts
                  :outlined="false"
                  :closable="false"
                  :showIcon="false"
                  message=""
                  description="Info Text"
                  type="info"
                />
                <sd-Alerts
                  :outlined="false"
                  :closable="false"
                  :showIcon="false"
                  message=""
                  description="Warning Text"
                  type="warning"
                />
                <sd-Alerts
                  :outlined="false"
                  :closable="false"
                  :showIcon="false"
                  message=""
                  description="Error Text"
                  type="error"
                />
              </div>
            </AlertList>
          </sd-Cards>
          <sd-Cards title="Description">
            <AlertList>
              <sd-Alerts
                :outlined="false"
                :closable="false"
                :showIcon="false"
                message="Success Text"
                description="Success Description Success Description Success Description"
                type="success"
              />
              <sd-Alerts
                :outlined="false"
                :closable="false"
                :showIcon="false"
                message="Info Text"
                description="Info Description Info Description Info Description Info Description"
                type="info"
              />
              <sd-Alerts
                :outlined="false"
                :closable="false"
                :showIcon="false"
                message="Warning Text"
                description="Warning Description Warning Description Warning Description Warning Description"
                type="warning"
              />
              <sd-Alerts
                :outlined="false"
                :closable="false"
                :showIcon="false"
                message="Error Text"
                description="Error Description Error Description Error Description Error Description"
                type="error"
              />
            </AlertList>
          </sd-Cards>
          <sd-Cards title="Customized Close Text">
            <AlertList>
              <div class="alert-empty-message">
                <sd-Alerts
                  closeText="Close Now"
                  :outlined="false"
                  :closable="true"
                  :showIcon="false"
                  message=""
                  description="Info Text"
                  type="info"
                />
              </div>
            </AlertList>
          </sd-Cards>
          <sd-Cards title="Smoothly Unmount">
            <AlertList>
              <div class="alert-empty-message">
                <sd-Alerts
                  :outlined="false"
                  :closable="true"
                  :showIcon="false"
                  message=""
                  description="Alert Message Text"
                  type="success"
                />
              </div>
            </AlertList>
          </sd-Cards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { PlusIcon } from "vue-feather-icons";
import config from "../../config/config";
import { Main, AlertList } from "../styled";
const { theme } = config;

export default {
  name: "Buttons",
  components: {
    PlusIcon,
    Main,
    AlertList,
  },
  data() {
    return {
      theme,
    };
  },
};
</script>
