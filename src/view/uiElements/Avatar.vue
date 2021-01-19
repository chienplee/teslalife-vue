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
        <a-col :md="12" :sm="12" :xs="24">
          <Cards title="Basic">
            <AvatarWraperStyle :style="{ marginBottom: 10 }">
              <a-avatar :size="64" icon="user" />
              <a-avatar size="large" icon="user" />
              <a-avatar icon="user" />
              <a-avatar size="small" icon="user" />
            </AvatarWraperStyle>
            <AvatarWraperStyle>
              <a-avatar shape="square" :size="64" icon="user" />
              <a-avatar shape="square" size="large" icon="user" />
              <a-avatar shape="square" icon="user" />
              <a-avatar shape="square" size="small" icon="user" />
            </AvatarWraperStyle>
          </Cards>
          <Cards title="Autoset Font Size">
            <AvatarWraperStyle>
              <div>
                <a-avatar
                  :style="{ backgroundColor: color, verticalAlign: 'middle' }"
                  size="large"
                >
                  {{ user }}
                </a-avatar>
                <Button
                  size="small"
                  class="btn-outlined"
                  type="light"
                  :outlined="true"
                  :style="{
                    margin: '0 10px',
                    verticalAlign: 'middle',
                    color: '#ADB4D2',
                  }"
                  @click.native="changeUser"
                >
                  Change
                </Button>
              </div>
            </AvatarWraperStyle>
          </Cards>
        </a-col>
        <a-col :md="12" :sm="12" :xs="24">
          <Cards title="Type">
            <AvatarWraperStyle>
              <a-avatar icon="user" />
              <a-avatar icon="user" />
              <a-avatar>U</a-avatar>
              <a-avatar>USER</a-avatar>
              <a-avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
              <a-avatar
                :style="{ color: '#f56a00', backgroundColor: '#fde3cf' }"
                >U</a-avatar
              >
              <a-avatar :style="{ backgroundColor: '#20C997' }" icon="user" />
            </AvatarWraperStyle>
          </Cards>
          <Cards title="with badge">
            <AvatarWraperStyle>
              <span :style="{ [!rtl ? 'marginRight' : 'marginLeft']: 10 }">
                <a-badge :count="1">
                  <a-avatar shape="square" icon="user" />
                </a-badge>
              </span>
              <span>
                <a-badge dot>
                  <a-avatar shape="square" icon="user" />
                </a-badge>
              </span>
            </AvatarWraperStyle>
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
import { Main } from "../styled";
import { PageHeader } from "../../components/pageHeaders/PageHeaders";
import { PlusIcon } from "vue-feather-icons";
import config from "../../config/config";
import Cards from "../../components/cards/frame/CardsFrame";
import { AvatarWraperStyle } from "./ui-elements-styled";
import { mapGetters } from "vuex";

const { theme } = config;
const UserList = ["U", "Lucy", "Tom", "Edward"];
const ColorList = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];

export default {
  name: "Avatar",
  components: {
    PlusIcon,
    Button,
    CalendarButton,
    ExportButton,
    ShareButton,
    Main,
    PageHeader,
    Cards,
    AvatarWraperStyle,
  },
  data() {
    return {
      theme,
      user: UserList[0],
      color: ColorList[0],
    };
  },
  methods: {
    changeUser() {
      const index = UserList.indexOf(this.user);
      this.user =
        index < UserList.length - 1 ? UserList[index + 1] : UserList[0];
      this.color =
        index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0];
    },
  },
  computed: {
    ...mapGetters(["rtl"]),
  },
};
</script>
