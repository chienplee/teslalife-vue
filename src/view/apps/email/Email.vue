<template>
  <sdPageHeader title="Email"
    ><template v-slot:buttons>
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
  <ComposeMail v-if="isMailEditorOpen" :close="closeMailCompose" />
  <Main>
    <EmailWrapper>
      <a-row class="justify-content-center" :gutter="25">
        <a-col class="trigger-col" :xxl="5" :xl="7" :lg="8" :xs="24">
          <sdButton
            v-if="responsive <= 991"
            type="white"
            class="mail-sidebar-trigger"
            :style="{ marginTop: 0 }"
            @click="toggleCollapsed()"
          >
            <sdFeatherIcons v-if="collapsed" type="align-left" />
            <sdFeatherIcons v-else type="align-right" />
          </sdButton>
          <div v-if="responsive > 991" class="mail-sideabr">
            <sdCards headless>
              <div class="mail-sidebar-top">
                <sdButton @click="toggleMailComposer" shape="round" type="primary" size="default" block>
                  <sdFeatherIcons type="plus" size="18" /> Compose
                </sdButton>
              </div>

              <div class="mail-sidebar-bottom">
                <EmailNavbar :path="path + '/'" />
              </div>
            </sdCards>
          </div>
          <MailSideBar v-else :class="collapsed ? 'mail-sideabr show' : 'mail-sideabr hide'">
            <sdCards headless>
              <sdButton
                type="link"
                class="mail-sidebar-trigger trigger-close"
                :style="{ marginTop: 0 }"
                @click="toggleCollapsed"
              >
                <sdFeatherIcon type="x" />
              </sdButton>
              <div class="mail-sidebar-top">
                <sdButton @click="toggleMailComposer" shape="round" type="primary" size="default" block>
                  + Compose
                </sdButton>
              </div>

              <div class="mail-sidebar-bottom">
                <EmailNavbar :path="path + '/'" :toggleCollapsed="toggleCollapsed" />
              </div>
            </sdCards>
          </MailSideBar>
        </a-col>

        <a-col :xxl="19" :xl="17" :lg="16"> <router-view></router-view> </a-col>
      </a-row>
    </EmailWrapper>
  </Main>
</template>
<script>
import EmailNavbar from './overview/Navbar';
import ComposeMail from './overview/Compose';
import { EmailWrapper, MailSideBar } from './overview/style';
// import { useStore } from 'vuex';
import { Main } from '../../styled';
import { onMounted, ref } from 'vue';

const Email = {
  name: 'Email',
  components: { Main, MailSideBar, EmailNavbar, ComposeMail, EmailWrapper },
  data() {
    return {
      path: this.$route.matched[0].path,
    };
  },
  setup() {
    // const {state, dispatch} = useStore();
    const responsive = ref(0);
    const collapsed = ref(false);
    const isMailEditorOpen = ref(false);

    const toggleMailComposer = () => {
      isMailEditorOpen.value = !isMailEditorOpen.value;
    };

    const closeMailCompose = () => {
      isMailEditorOpen.value = false;
    };

    const toggleCollapsed = () => {
      collapsed.value = !collapsed.value;
    };

    function updateSize() {
      const width = window.innerWidth;
      responsive.value = width;
    }
    onMounted(() => {
      updateSize();
      window.addEventListener('resize', updateSize);
    });

    return { responsive, toggleCollapsed, collapsed, toggleMailComposer, isMailEditorOpen, closeMailCompose };
  },
};

export default Email;
</script>
