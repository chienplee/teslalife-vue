<template>
  <div v-if="isLoading" class="spin">
    <a-spin />
  </div>

  <AllPosts v-else>
    <sdCards more>
      <template #more>
        <a @click="() => onPostDelete(postId)" to="#">
          Delete
        </a>
      </template>
      <template #title>
        <Title>
          <img :src="require(`@/${author}`)" alt="" />
          <p>
            {{ from }} <span>{{ moment(parseInt(time, 10)).fromNow() }}</span>
          </p>
        </Title>
      </template>

      <div class="post-content">
        <div v-if="img.length" class="gallery">
          <div :cols="img.length <= 2 ? img.length : 2">
            <div v-masonry="containerId" transition-duration="0.3s" item-selector=".item">
              <a-row>
                <a-col
                  :md="12"
                  :sm="12"
                  :xs="24"
                  v-masonry-tile
                  class="item"
                  v-for="(src, key) in img"
                  :key="key + 1"
                  @click="showImage(key)"
                >
                  <a href="#">
                    <img v-if="key <= 1" :key="key + 1" style="width: 100%" :src="require(`@/${src}`)" alt="" />
                  </a>
                </a-col>
              </a-row>
            </div>
            <vue-easy-lightbox
              v-if="img.length <= 2"
              escDisabled
              moveDisabled
              :visible="visible"
              :imgs="imagePath"
              :index="index"
              @hide="handleHide"
            ></vue-easy-lightbox>
          </div>
          <div v-if="img.length > 2" :cols="img.length <= 2 ? img.length : 3">
            <div v-masonry="containerId" transition-duration="0.3s" item-selector=".item">
              <a-row>
                <a-col
                  :md="8"
                  :sm="12"
                  :xs="24"
                  v-masonry-tile
                  class="item"
                  v-for="(src, key) in img"
                  :key="key + 1"
                  @click="showImage(key)"
                >
                  <a href="#"
                    ><img v-if="key <= 2" :key="key + 1" style="width: 100%" :src="require(`@/${src}`)" alt=""
                  /></a>
                </a-col>
              </a-row>
            </div>

            <vue-easy-lightbox
              v-if="img.length > 2"
              escDisabled
              moveDisabled
              :visible="visible"
              :imgs="imagePath"
              :index="index"
              @hide="handleHide"
            ></vue-easy-lightbox>
          </div>
        </div>
        <div class="post-text">
          <p>{{ content }}</p>
        </div>
        <div class="post-actions">
          <span>
            <a @click="() => onLikeUpdate(postId)" to="#">
              <sdFeatherIcons type="thumbs-up" size="14" />
            </a>
            {{ like }}
          </span>
          <span>
            <a to="#">
              <sdFeatherIcons type="message-square" size="14" />
            </a>
            {{ comment.length }}
          </span>
          <a to="#">
            <sdFeatherIcons type="share-2" size="14" />
            Share
          </a>
        </div>

        <div class="post-comments">
          <div class="commentArea">
            <div class="comment-form">
              <img :src="require('@/static/img/chat-author/t2.jpg')" alt="" />
              <a-textarea @change="onTextChange" v-model:value="textValue" placeholder="Write comment...." />
              <div class="chatbox-reply-action d-flex">
                <span class="smile-icon">
                  <template v-if="pickerShow">
                    <BackShadowEmoji @click="onPickerShow" />
                    <EmojiPicker :emojiClick="onEmojiClick" v-if="pickerShow" />
                  </template>
                  <a @click="onPickerShow" to="#">
                    <sdFeatherIcons type="smile" size="24" />
                  </a>
                </span>
                <a to="#">
                  <a-upload v-bind="props">
                    <sdFeatherIcons type="image" size="18" />
                  </a-upload>
                </a>
                <a to="#">
                  <a-upload v-bind="attachment">
                    <sdFeatherIcons type="paperclip" size="18" />
                  </a-upload>
                </a>
              </div>
            </div>
            <sdButton
              @click="() => (textValue === '' ? alert('Please input your comment...') : onCommentUpdate(postId))"
              type="primary"
              class="btn-send"
            >
              <sdFeatherIcons type="send" size="18" />
            </sdButton>
          </div>
        </div>
        <div class="commentReplay">
          <div v-if="isPostLoading" class="spin">
            <a-spin />
          </div>
          <template v-else>
            <ExampleComment
              v-if="comment.length"
              :replay="{
                time: comment[0].time,
                name: comment[0].from,
                text: comment[0].text,
              }"
            >
              <template v-if="comment.length > 1">
                <ExampleComment
                  v-for="(item, key) in comment"
                  :key="key + 1"
                  v-if="key >= 1"
                  :replay="{
                    time: item.time,
                    name: item.name,
                    text: item.text,
                  }"
                />
              </template>
            </ExampleComment>
          </template>
        </div>
      </div>
    </sdCards>
  </AllPosts>
</template>
<script>
import moment from 'moment';
import PropTypes from 'vue-types';
import { AllPosts, BackShadowEmoji, Title } from './style';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import VueEasyLightbox from 'vue-easy-lightbox';
import EmojiPicker from '@/components/utilities/Emoji.vue';

const ExampleComment = {
  name: 'ExampleComment',
  props: {
    replay: PropTypes.object,
  },
  render() {
    return (
      <a-comment
        actions={[
          <span class="com-like" key="comment-nested-reply-to">
            Like{' '}
          </span>,
          <span class="com-reply" key="comment-nested-reply-to">
            Reply{' '}
          </span>,
          <span class="com-time" key="comment-nested-reply-to">
            {moment(parseInt(this.replay.time, 10)).fromNow()}
          </span>,
        ]}
        author={<span>{this.replay.name}</span>}
        avatar={<a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />}
        content={<p>{this.replay.text}</p>}
      >
        {this.$slots.default()}
      </a-comment>
    );
  },
};

const Posts = {
  name: 'Posts',
  components: { AllPosts, BackShadowEmoji, Title, ExampleComment, VueEasyLightbox, EmojiPicker },
  props: {
    postId: PropTypes.number,
    from: PropTypes.string,
    time: PropTypes.string,
    img: PropTypes.array,
    like: PropTypes.number,
    comment: PropTypes.array,
    content: PropTypes.string,
    author: PropTypes.string,
  },

  setup(prop) {
    const { state, dispatch } = useStore();
    const posts = computed(() => state.profile.posts);
    const isLoading = computed(() => state.profile.loading);
    const isPostLoading = computed(() => state.profile.postLoading);
    const imagePath = ref([]);
    const inputValue = ref('');
    const visible = ref(false);
    const index = ref(0);
    const fileList = ref([]);
    const fileList2 = ref([]);

    const pickerShow = ref(false);
    const textValue = ref('');

    const showImage = imgIndex => {
      prop.img.map(data => {
        imagePath.value.push(window.location.origin + require(`@/${data}`));
      }),
        (index.value = imgIndex); // index of imgList
      show();
    };
    const show = () => {
      visible.value = true;
    };
    const handleHide = () => {
      visible.value = false;
    };
    const onEmojiClick = emojiObject => {
      console.log(emojiObject);
      textValue.value = textValue.value + emojiObject;
    };

    const onPickerShow = () => {
      pickerShow.value = !pickerShow.value;
    };

    const onTextChange = e => {
      textValue.value = e.target.value;
    };
    const props = {
      name: 'file',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text',
      },
      listType: 'picture-card',
      onChange(info) {
        if (info.file.status !== 'uploading') {
          // console.log(info.file, info.fileList);
          fileList.value = info.fileList;
        }
        if (info.file.status === 'done') {
          // message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          // message.error(`${info.file.name} file upload failed.`);
        }
      },
    };

    const attachment = {
      name: 'file',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          // console.log(info.file, info.fileList);
          fileList2.value = info.fileList;
        }
        if (info.file.status === 'done') {
          // message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          // message.error(`${info.file.name} file upload failed.`);
        }
      },
    };
    const onLikeUpdate = id => {
      return dispatch('likeUpdate', { posts, id });
    };

    const onCommentUpdate = id => {
      dispatch('commentUpdate', { posts, id, textValue });
      textValue.value = '';
    };

    const onPostDelete = id => {
      dispatch('postDelete', { posts, id });
    };
    return {
      onPostDelete,
      onEmojiClick,
      inputValue,
      fileList,
      fileList2,
      onCommentUpdate,
      onLikeUpdate,
      attachment,
      props,
      onTextChange,
      onPickerShow,
      moment,
      isLoading,
      posts,
      isPostLoading,
      textValue,
      pickerShow,
      visible,
      index,
      showImage,
      show,
      handleHide,
      imagePath,
    };
  },
};

export default Posts;
</script>
