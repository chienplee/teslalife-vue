<template>
  <div>
    <sdPageHeader title="Results">
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
          <sdCards title="Success" caption="The simplest use of Results">
            <a-result
              status="success"
              title="Successfully Purchased Cloud Server ECS!"
              sub-title="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
            >
              <template #extra>
                <a-button key="console" type="primary"> Go Console </a-button>
                <a-button key="buy"> Buy Again </a-button>
              </template>
            </a-result>
          </sdCards>
          <sdCards title="Warning" caption="The simplest use of Results">
            <a-result
              status="warning"
              title="There are some problems with your operation."
            >
              <template #extra>
                <a-button key="console" type="primary"> Go Console </a-button>
              </template>
            </a-result>
          </sdCards>
          <sdCards title="404" caption="The simplest use of Results">
            <a-result
              status="404"
              title="404"
              sub-title="Sorry, the page you visited does not exist."
            >
              <template #extra>
                <a-button type="primary"> Back Home </a-button>
              </template>
            </a-result>
          </sdCards>
          <sdCards title="Error" caption="The simplest use of Results">
            <a-result
              status="error"
              title="Submission Failed"
              sub-title="Please check and modify the following information before resubmitting."
            >
              <template #extra>
                <a-button key="console" type="primary"> Go Console </a-button>
                <a-button key="buy"> Buy Again </a-button>
              </template>

              <div class="desc">
                <p style="font-size: 16px">
                  <strong
                    >The content you submitted has the following error:</strong
                  >
                </p>
                <p>
                  <a-icon :style="{ color: 'red' }" type="close-circle" /> Your
                  account has been frozen
                  <a>Thaw immediately &gt;</a>
                </p>
                <p>
                  <a-icon :style="{ color: 'red' }" type="close-circle" /> Your
                  account is not yet eligible to apply <a>Apply Unlock &gt;</a>
                </p>
              </div>
            </a-result>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Info" caption="The simplest use of Results">
            <a-result title="Your operation has been executed">
              <template #extra>
                <a-button key="console" type="primary"> Go Console </a-button>
              </template>
            </a-result>
          </sdCards>
          <sdCards title="403" caption="The simplest use of Results">
            <a-result
              status="403"
              title="403"
              sub-title="Sorry, you are not authorized to access this page."
            >
              <template #extra>
                <a-button type="primary"> Back Home </a-button>
              </template>
            </a-result>
          </sdCards>
          <sdCards title="500" caption="The simplest use of Results">
            <a-result
              status="500"
              title="500"
              sub-title="Sorry, the server is wrong."
            >
              <template #extra>
                <a-button type="primary"> Back Home </a-button>
              </template>
            </a-result>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from "../styled";
import { PlusIcon } from "vue-feather-icons";
import { mapGetters } from "vuex";
export default {
  name: "Result",
  components: {
    PlusIcon,
    Main,
  },
  computed: {
    ...mapGetters(["rtl"]),
  },
};
</script>
<style scoped>
.desc p {
  margin-bottom: 1em;
}
</style>
