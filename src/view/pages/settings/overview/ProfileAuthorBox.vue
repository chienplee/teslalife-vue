<template>
  <ProfileAuthorBox>
    <sdCards headless>
      <div class="author-info">
        <figure>
          <img :src="require('../../../../static/img/users/1.png')" alt="" />

          <a-upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
            <router-link to="#">
              <CameraIcon size="16" />
            </router-link>
          </a-upload>
        </figure>
        <figcaption>
          <div class="info">
            <sdHeading as="h4">Duran Clayton</sdHeading>
            <p>UI/UX Designer</p>
          </div>
        </figcaption>
      </div>
      <nav class="settings-menmulist">
        <ul>
          <li>
            <router-link :to="`${path}/profile`">
              <UserIcon size="14" />
              Edit Profile
            </router-link>
          </li>
          <li>
            <router-link :to="`${path}/account`">
              <SettingsIcon size="14" />
              Account Settings
            </router-link>
          </li>
          <li>
            <router-link :to="`${path}/password`">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                class="feather feather-key"
              >
                <path
                  d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
                />
              </svg>
              Change Password
            </router-link>
          </li>
          <li>
            <router-link :to="`${path}/social`">
              <UsersIcon size="14" />
              Social Profile
            </router-link>
          </li>
          <li>
            <router-link :to="`${path}/notification`">
              <BellIcon size="14" />
              Notification
            </router-link>
          </li>
        </ul>
      </nav>
    </sdCards>
  </ProfileAuthorBox>
</template>
<script>
import { ProfileAuthorBox } from "./style";
import {
  BellIcon,
  SettingsIcon,
  UsersIcon,
  UserIcon,
  CameraIcon,
} from "vue-feather-icons";

const AuthorBox = {
  name: "AuthorBox",
  components: {
    ProfileAuthorBox,
    BellIcon,
    SettingsIcon,
    UsersIcon,
    UserIcon,
    CameraIcon,
  },
  data() {
    return {
      path: this.$route.path,
    };
  },
};

export default AuthorBox;
</script>
