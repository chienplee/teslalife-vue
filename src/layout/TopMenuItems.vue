<template>
  <TopMenuStyle>
    <div class="strikingDash-top-menu">
      <ul>
        <li class="has-subMenu">
          <a to="#" class="parent">
            Dashboard
          </a>
          <ul class="subMenu">
            <li>
              <router-link to="/social">
                Social Media
              </router-link>
            </li>
            <li>
              <router-link to="/business">
                Business
              </router-link>
            </li>
            <li>
              <router-link to="/performance">
                Site Perfomence
              </router-link>
            </li>
            <li>
              <router-link to="/eco">
                Ecomerce
              </router-link>
            </li>
            <li>
              <router-link to="/crm">
                CRM
              </router-link>
            </li>
            <li>
              <router-link to="/sales">
                Sales Performance
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </TopMenuStyle>
</template>
<script>
import { TopMenuStyle } from './style';
export default {
  name: 'TopMenu',
  data() {
    return {};
  },
  components: {
    TopMenuStyle,
  },
  methods: {},
};
</script>
