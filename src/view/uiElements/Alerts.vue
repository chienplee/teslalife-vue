<template>
  <div>
    <PageHeader title="Blank Page">
      <div slot="buttons" class="page-header-actions">
        <CalendarButton />
        <ExportButton />
        <ShareButton />
        <Button size="small" type="primary">
          <PlusIcon size="14" />
          Add New
        </Button>
      </div>
    </PageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :xs="24">
          <Cards title="Basic" size="default">
            <AlertList>
              <div class="alert-empty-message">
                <Alert
                  :outlined="false"
                  :closable="false"
                  :showIcon="false"
                  description="Success Text"
                  type="success"
                />
              </div>
            </AlertList>
          </Cards>
          <Cards title="Closable" size="default">
            <AlertList>
              <div class="alert-empty-message">
                <Alert
                  :outlined="false"
                  :closable="true"
                  :showIcon="false"
                  description="Warning Text Warning Text Warning Text Warning Text Warning Text Warning TextWarning Text"
                  type="warning"
                />
              </div>
              <Alert
                :outlined="false"
                :closable="true"
                :showIcon="false"
                message="Error Text"
                description="Error Text Error Text Warning TextW Error Text Error Text Error TextError Text"
                type="error"
              />
            </AlertList>
          </Cards>
          <Cards title="Icon" size="default">
            <AlertList>
              <div class="alert-empty-message">
                <Alert
                  :outlined="false"
                  :closable="false"
                  :showIcon="true"
                  message=""
                  description="Success Tips"
                  type="success"
                />
                <Alert
                  :outlined="false"
                  :closable="false"
                  :showIcon="true"
                  message=""
                  description="Informational Notes"
                  type="info"
                />
                <Alert
                  :outlined="false"
                  :closable="false"
                  :showIcon="true"
                  message=""
                  description="Warning"
                  type="warning"
                />
                <Alert
                  :outlined="false"
                  :closable="false"
                  :showIcon="true"
                  message=""
                  description="Error"
                  type="error"
                />
              </div>
              <Alert
                :outlined="false"
                :closable="false"
                :showIcon="true"
                message="Success Tips"
                description="Detailed description and advice about successful copywriting."
                type="success"
              />
              <Alert
                :outlined="false"
                :closable="false"
                :showIcon="true"
                message="Informational Notes"
                description="Additional description and information about copywriting."
                type="info"
              />
              <Alert
                :outlined="false"
                :closable="false"
                :showIcon="true"
                message="Warning"
                description="This is a warning notice about copywriting."
                type="warning"
              />
              <Alert
                :outlined="false"
                :closable="false"
                :showIcon="true"
                message="Error"
                description="This is an error message about
              copywriting."
                type="error"
              />
            </AlertList>
          </Cards>
        </a-col>
        <a-col :md="12" :xs="24">
          <Cards title="More Types" size="default">
            <AlertList>
              <div class="alert-empty-message">
                <Alert
                  :outlined="false"
                  :closable="false"
                  :showIcon="false"
                  message=""
                  description="Success Text"
                  type="success"
                />
                <Alert
                  :outlined="false"
                  :closable="false"
                  :showIcon="false"
                  message=""
                  description="Info Text"
                  type="info"
                />
                <Alert
                  :outlined="false"
                  :closable="false"
                  :showIcon="false"
                  message=""
                  description="Warning Text"
                  type="warning"
                />
                <Alert
                  :outlined="false"
                  :closable="false"
                  :showIcon="false"
                  message=""
                  description="Error Text"
                  type="error"
                />
              </div>
            </AlertList>
          </Cards>
          <Cards title="Description" size="default">
            <AlertList>
              <Alert
                :outlined="false"
                :closable="false"
                :showIcon="false"
                message="Success Text"
                description="Success Description Success Description Success Description"
                type="success"
              />
              <Alert
                :outlined="false"
                :closable="false"
                :showIcon="false"
                message="Info Text"
                description="Info Description Info Description Info Description Info Description"
                type="info"
              />
              <Alert
                :outlined="false"
                :closable="false"
                :showIcon="false"
                message="Warning Text"
                description="Warning Description Warning Description Warning Description Warning Description"
                type="warning"
              />
              <Alert
                :outlined="false"
                :closable="false"
                :showIcon="false"
                message="Error Text"
                description="Error Description Error Description Error Description Error Description"
                type="error"
              />
            </AlertList>
          </Cards>
          <Cards title="Customized Close Text" size="default">
            <AlertList>
              <div class="alert-empty-message">
                <Alert
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
          </Cards>
          <Cards title="Smoothly Unmount" size="default">
            <AlertList>
              <div class="alert-empty-message">
                <Alert
                  :outlined="false"
                  :closable="true"
                  :showIcon="false"
                  message=""
                  description="Alert Message Text"
                  type="success"
                />
              </div>
            </AlertList>
          </Cards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Button } from "../../components/buttons/Buttons";
import CalendarButton from "../../components/buttons/CalendarButton";
import ExportButton from "../../components/buttons/ExportButton";
import ShareButton from "../../components/buttons/ShareButton";
import { Main, AlertList } from "../styled";
import { PageHeader } from "../../components/pageHeaders/PageHeaders";
import { PlusIcon } from "vue-feather-icons";
import config from "../../config/config";
import Cards from "../../components/cards/frame/CardsFrame";
import Alert from "../../components/alerts/Alerts";
const { theme } = config;

export default {
  name: "Buttons",
  components: {
    PlusIcon,
    Button,
    CalendarButton,
    ExportButton,
    ShareButton,
    Main,
    PageHeader,
    AlertList,
    Cards,
    Alert,
  },
  data() {
    return {
      theme,
    };
  },
};
</script>
