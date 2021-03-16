<template>
  <MailBox>
    <div class="body">
      <div
        v-if="!text"
        :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }"
        class="group"
      >
        <div class="reply-inner" :style="{ display: 'flex', alignItems: 'center' }">
          <span v-if="replay" class="reply-title">Replay To</span>
          <tags-input
            element-id="tags"
            :placeholder="replay ? null : 'To'"
            :existing-tags="selectedTags"
            v-model="selectedTags"
            ><template v-slot:selected-tag="{ tag, index, removeTag }">
              <span class="tagsinput-tag">
                <span v-html="tag.value"></span>
                <a v-show="!disabled" href="#" class="tags-input-remove" @click.prevent="removeTag(index)"
                  ><sdFeatherIcons type="x" size="14"
                /></a>
              </span>
            </template>
          </tags-input>
        </div>
        <span class="mail-cc">Cc</span>
      </div>
      <div class="group">
        <editor v-if="api" :apiKey="api" :init="{ height: 320, menubar: false }" />
      </div>
    </div>

    <div v-if="!text" class="footer">
      <div class="left d-flex align-items-center">
        <sdButton size="default" type="primary" @click="onSubmit" raised>
          Send
        </sdButton>
        <router-link to="#">
          <a-upload v-bind="antProps">
            <sdFeatherIcons type="paperclip" size="16" />
          </a-upload>
        </router-link>
        <router-link to="#">
          <sdFeatherIcons type="alert-circle" size="16" />
        </router-link>
      </div>
      <div class="right">
        <router-link to="#">
          <sdFeatherIcons type="trash-2" size="16" />
        </router-link>
      </div>
    </div>
  </MailBox>
</template>
<script>
import VoerroTagsInput from '@voerro/vue-tagsinput';
import Editor from '@tinymce/tinymce-vue';

import { MailBox } from './style';
import { onMounted, ref } from 'vue';
import VueTypes from 'vue-types';

const antProps = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      // message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      // message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const MailComposer = {
  name: 'mailComposer',
  components: { MailBox, 'tags-input': VoerroTagsInput, editor: Editor },
  props: {
    onChange: VueTypes.func.def(() => {}),
    onSend: VueTypes.func.def(() => {}),
    defaultTag: VueTypes.string,
    replay: VueTypes.bool.def(false),
    text: VueTypes.bool.def(false),
  },
  setup({ defaultTag }) {
    const tags = ref(defaultTag ? [defaultTag] : []);
    const api = ref(false);
    const handleChange = tag => {
      tags.value = [...tags.value, tag];
    };
    onMounted(() => {
      api.value = process.env.VUE_APP_TINYMCE_API_KEY;
    });
    return {
      handleChange,
      tags,
      antProps,
      api,
      selectedTags: [
        { key: 'web-development', value: 'Web Development' },
        { key: 'php', value: 'PHP' },
        { key: 'javascript', value: 'JavaScript' },
      ],
    };
  },
};
export default MailComposer;
</script>
