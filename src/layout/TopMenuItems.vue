<template>
  <TopMenuStyle>
    <div class="strikingDash-top-menu">
      <ul>
        <li class="has-subMenu">
          <a to="#" class="parent">
            Dashboard
          </a>
          <ul class="subMenu">
            <li @click="addParentActive">
              <router-link to="/" :click="addParentActive">
                Social Media
              </router-link>
            </li>
            <li @click="addParentActive">
              <router-link to="/business" :click="addParentActive">
                Business
              </router-link>
            </li>
            <li @click="addParentActive">
              <router-link to="/performance" :click="addParentActive">
                Site Perfomence
              </router-link>
            </li>
            <li @click="addParentActive">
              <router-link to="/eco" :click="addParentActive">
                Ecomerce
              </router-link>
            </li>
            <li @click="addParentActive">
              <router-link to="/crm" :click="addParentActive">
                CRM
              </router-link>
            </li>
            <li @click="addParentActive">
              <router-link to="/sales" :click="addParentActive">
                Sales Performance
              </router-link>
            </li>
          </ul>
        </li>
        <li class="has-subMenu">
          <a class="parent">Firestore Crud</a>
          <ul class="subMenu">
            <li @click="addParentActive">
              <router-link to="/">
                View all
              </router-link>
            </li>
            <li @click="addParentActive">
              <router-link to="/">
                Add new
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </TopMenuStyle>
</template>
<script>
import { onMounted } from 'vue';
import { TopMenuStyle } from './style';
export default {
  name: 'TopMenu',
  components: {
    TopMenuStyle,
  },
  setup() {
    onMounted(() => {
      const active = document.querySelector('.strikingDash-top-menu a.active');
      const activeDefault = () => {
        const megaMenu = active.closest('.megaMenu-wrapper');
        const hasSubMenuLeft = active.closest('.has-subMenu-left');
        if (!megaMenu) {
          active.closest('ul').previousSibling.classList.add('active');
          if (hasSubMenuLeft) hasSubMenuLeft.closest('ul').previousSibling.classList.add('active');
        } else {
          active.closest('.megaMenu-wrapper').previousSibling.classList.add('active');
        }
      };
      window.addEventListener('load', active && activeDefault);
      // return () => window.removeEventListener('load', activeDefault);
    });

    const addParentActive = event => {
      document.querySelectorAll('.parent').forEach(element => {
        element.classList.remove('active');
      });

      const hasSubMenuLeft = event.currentTarget.closest('.has-subMenu-left');
      const megaMenu = event.currentTarget.closest('.megaMenu-wrapper');
      if (!megaMenu) {
        event.currentTarget.closest('ul').previousSibling.classList.add('active');
        if (hasSubMenuLeft) hasSubMenuLeft.closest('ul').previousSibling.classList.add('active');
      } else {
        event.currentTarget.closest('.megaMenu-wrapper').previousSibling.classList.add('active');
      }
    };

    return { addParentActive };
  },
};
</script>
