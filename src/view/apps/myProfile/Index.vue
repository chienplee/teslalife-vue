<template>
  <sdPageHeader title="My Profile">
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
      <a-col :xxl="6" :lg="8" :md="10" :xs="24">
        <Suspense>
          <template #default>
            <UserCards :user="{ name: 'Duran Clyton', designation: 'UI/UX Designer', img: 'static/img/users/1.png' }" />
          </template>
          <template #fallback>
            <sdCards headless>
              <a-skeleton avatar active :paragraph="{ rows: 3 }" />
            </sdCards>
          </template>
        </Suspense>
        <Suspense>
          <template #default>
            <UserBio />
          </template>
          <template #fallback>
            <sdCards headless>
              <a-skeleton avatar active :paragraph="{ rows: 3 }" />
            </sdCards>
          </template>
        </Suspense>
      </a-col>
      <a-col :xxl="18" :lg="16" :md="14" :xs="24">
        <SettingWrapper> </SettingWrapper>
      </a-col>
    </a-row>
  </Main>
</template>
<script>
import { defineAsyncComponent } from 'vue';
import { Main } from '../../styled';

const UserCards = defineAsyncComponent(() => import('../../pages/overview/UserCard'));
// const CoverSection = lazy(() => import('../overview/CoverSection'));
const UserBio = defineAsyncComponent(() => import('./overview/UserBio'));
// const Overview = lazy(() => import('./overview/Overview'));
// const Timeline = lazy(() => import('./overview/Timeline'));
// const Activity = lazy(() => import('./overview/Activity'));
// const { path } = useRouteMatch();

const MyProfile = {
  name: 'MyProfile',
  components: { Main, UserCards, UserBio },
};

export default MyProfile;
</script>
