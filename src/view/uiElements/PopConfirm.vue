<template>
  <div>
    <sdPageHeader title="PopConfirm">
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
        <a-col :md="12" :xs="24">
          <sdCards title="Basic">
            <a-popconfirm
              title="Are you sure delete this task?"
              ok-text="Yes"
              cancel-text="No"
              @confirm="confirm"
              @cancel="cancel"
            >
              <a href="#">Delete</a>
            </a-popconfirm>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Placement">
            <div id="components-a-popconfirm-demo-placement">
              <div
                :style="{
                  [!rtl ? 'marginLeft' : 'marginRight']: `${buttonWidth}px`,
                  whiteSpace: 'nowrap',
                }"
              >
                <a-popconfirm placement="topLeft" ok-text="Yes" cancel-text="No" @confirm="confirm">
                  <template v-slot:title>
                    <p>{{ text }}</p>
                    <p>{{ text }}</p>
                  </template>
                  <a-button>TL</a-button>
                </a-popconfirm>
                <a-popconfirm placement="top" ok-text="Yes" cancel-text="No" @confirm="confirm">
                  <template v-slot:title>
                    <p>{{ text }}</p>
                    <p>{{ text }}</p>
                  </template>
                  <a-button>Top</a-button>
                </a-popconfirm>
                <a-popconfirm placement="topRight" ok-text="Yes" cancel-text="No" @confirm="confirm">
                  <template v-slot:title>
                    <p>{{ text }}</p>
                    <p>{{ text }}</p>
                  </template>
                  <a-button>TR</a-button>
                </a-popconfirm>
              </div>
              <div
                :style="{
                  width: `${buttonWidth}px`,
                  float: !rtl ? 'left' : 'right',
                }"
              >
                <a-popconfirm placement="leftTop" ok-text="Yes" cancel-text="No" @confirm="confirm">
                  <template v-slot:title>
                    <p>{{ text }}</p>
                    <p>{{ text }}</p>
                  </template>
                  <a-button>LT</a-button>
                </a-popconfirm>
                <a-popconfirm placement="left" ok-text="Yes" cancel-text="No" @confirm="confirm">
                  <template v-slot:title>
                    <p>{{ text }}</p>
                    <p>{{ text }}</p>
                  </template>
                  <a-button>Left</a-button>
                </a-popconfirm>
                <a-popconfirm placement="leftBottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
                  <template v-slot:title>
                    <p>{{ text }}</p>
                    <p>{{ text }}</p>
                  </template>
                  <a-button>LB</a-button>
                </a-popconfirm>
              </div>
              <div
                :style="{
                  width: `${buttonWidth}px`,
                  [!rtl ? 'marginLeft' : 'marginRight']: `${buttonWidth * 4 + 24}px`,
                }"
              >
                <a-popconfirm placement="rightTop" ok-text="Yes" cancel-text="No" @confirm="confirm">
                  <template v-slot:title>
                    <p>{{ text }}</p>
                    <p>{{ text }}</p>
                  </template>
                  <a-button>RT</a-button>
                </a-popconfirm>
                <a-popconfirm placement="right" ok-text="Yes" cancel-text="No" @confirm="confirm">
                  <template v-slot:title>
                    <p>{{ text }}</p>
                    <p>{{ text }}</p>
                  </template>
                  <a-button>Right</a-button>
                </a-popconfirm>
                <a-popconfirm placement="rightBottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
                  <template v-slot:title>
                    <p>{{ text }}</p>
                    <p>{{ text }}</p>
                  </template>
                  <a-button>RB</a-button>
                </a-popconfirm>
              </div>
              <div
                :style="{
                  [!rtl ? 'marginLeft' : 'marginRight']: `${buttonWidth}px`,
                  clear: 'both',
                  whiteSpace: 'nowrap',
                }"
              >
                <a-popconfirm placement="bottomLeft" ok-text="Yes" cancel-text="No" @confirm="confirm">
                  <template v-slot:title>
                    <p>{{ text }}</p>
                    <p>{{ text }}</p>
                  </template>
                  <a-button>BL</a-button>
                </a-popconfirm>
                <a-popconfirm placement="bottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
                  <template v-slot:title>
                    <p>{{ text }}</p>
                    <p>{{ text }}</p>
                  </template>
                  <a-button>Bottom</a-button>
                </a-popconfirm>
                <a-popconfirm placement="bottomRight" ok-text="Yes" cancel-text="No" @confirm="confirm">
                  <template v-slot:title>
                    <p>{{ text }}</p>
                    <p>{{ text }}</p>
                  </template>
                  <a-button>BR</a-button>
                </a-popconfirm>
              </div>
            </div>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from '../styled';
import { message } from 'ant-design-vue';
import { mapGetters } from 'vuex';

export default {
  name: 'PopConfirm',
  components: {
    Main,
  },
  data() {
    return {
      buttonWidth: 70,
      text: 'Are you sure to delete this task?',
    };
  },
  computed: {
    ...mapGetters(['rtl']),
  },
  methods: {
    confirm(e) {
      console.log(e);
      message.success('Click on Yes');
    },
    cancel(e) {
      console.log(e);
      message.error('Click on No');
    },
  },
};
</script>
<style scoped>
#components-a-popconfirm-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
