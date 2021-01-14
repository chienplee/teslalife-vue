<template>
  <InfoWraper>
    <Message />
    <Notification />
    <Settings />
    <Support />
    <div class="nav-author">
      <Dropdown placement="bottomRight" :action="['click']">
        <NavAuth slot="overlay">
          <router-link
            @click.native="() => onFlagChangeHandle('english')"
            to="#"
          >
            <img
              :src="require('../../../static/img/flag/english.png')"
              alt=""
            />
            <span>English</span>
          </router-link>
          <router-link
            @click.native="() => onFlagChangeHandle('germany')"
            to="#"
          >
            <img
              :src="require('../../../static/img/flag/germany.png')"
              alt=""
            />
            <span>Germany</span>
          </router-link>
          <router-link @click.native="() => onFlagChangeHandle('spain')" to="#">
            <img :src="require('../../../static/img/flag/spain.png')" alt="" />
            <span>Spain</span>
          </router-link>
          <router-link @click.native="() => onFlagChangeHandle('turky')" to="#">
            <img :src="require('../../../static/img/flag/turky.png')" alt="" />
            <span>Turky</span>
          </router-link>
        </NavAuth>
        <router-link to="#" class="head-example">
          <img :src="require(`../../../static/img/flag/${flag}.png`)" alt="" />
        </router-link>
      </Dropdown>
    </div>

    <div class="nav-author">
      <Popover placement="bottomRight" action="click">
        <UserDropDwon slot="content">
          <div class="user-dropdwon">
            <figure class="user-dropdwon__info">
              <img
                :src="require('../../../static/img/avatar/chat-auth.png')"
                alt=""
              />
              <figcaption>
                <Heading as="h5">Abdullah Bin Talha</Heading>
                <p>UI Expert</p>
              </figcaption>
            </figure>
            <ul class="user-dropdwon__links">
              <li>
                <router-link to="#"> <UserIcon /> Profile </router-link>
              </li>
              <li>
                <router-link to="#"> <SettingsIcon /> Settings </router-link>
              </li>
              <li>
                <router-link to="#"> <DollarSignIcon /> Billing </router-link>
              </li>
              <li>
                <router-link to="#"> <UsersIcon /> Activity </router-link>
              </li>
              <li>
                <router-link to="#"> <BellIcon /> Help </router-link>
              </li>
            </ul>
            <router-link class="user-dropdwon__bottomAction" to="#">
              <LogOutIcon /> Sign Out
            </router-link>
          </div>
        </UserDropDwon>
        <router-link to="#" class="head-example">
          <a-avatar
            src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png"
          />
        </router-link>
      </Popover>
    </div>
  </InfoWraper>
</template>

<script>
import { InfoWraper, NavAuth, UserDropDwon } from "./auth-info-style";
import Dropdown from "../../dropdown/Dropdown";
import Popover from "../../popup/Popup";
import Support from "./Support";
import Settings from "./Settings";
import Notification from "./Notification";
import Message from "./Message";
import Heading from "../../heading/Heading";
import {
  UsersIcon,
  BellIcon,
  SettingsIcon,
  LogOutIcon,
  DollarSignIcon,
  UserIcon,
} from "vue-feather-icons";

export default {
  name: "AuthInfo",
  components: {
    InfoWraper,
    Dropdown,
    Popover,
    Heading,
    NavAuth,
    UserDropDwon,
    Support,
    Settings,
    Notification,
    Message,
    UsersIcon,
    BellIcon,
    SettingsIcon,
    LogOutIcon,
    DollarSignIcon,
    UserIcon,
  },
  data() {
    return {
      flag: "english",
    };
  },
  methods: {
    onFlagChangeHandle: function(value) {
      this.flag = value;
    },
  },
};
</script>
