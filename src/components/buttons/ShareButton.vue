<template>
  <Popover placement="bottomLeft" action="click">
    <template slot="content">
      <router-link to="#">
        <FacebookIcon size="16" />
        <span>Facebook</span>
      </router-link>
      <router-link to="#">
        <TwitterIcon size="16" />
        <span>Twitter</span>
      </router-link>
      <router-link to="#">
        <RssIcon size="16" />
        <span>Feed</span>
      </router-link>
      <router-link to="#">
        <LinkedinIcon size="16" />
        <span>Linkedin</span>
      </router-link>
      <router-link to="#">
        <InstagramIcon size="16" />
        <span>Instagram</span>
      </router-link>
    </template>
    <Button size="small" type="white">
      <Share2Icon size="14" />
      Share
    </Button>
  </Popover>
</template>

<script>
import Popover from "../popup/Popup";
import { Button } from "./Buttons";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  RssIcon,
  InstagramIcon,
  Share2Icon,
} from "vue-feather-icons";

export default {
  name: "ShareButton",
  components: {
    Button,
    Popover,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    RssIcon,
    InstagramIcon,
    Share2Icon,
  },
};
</script>
