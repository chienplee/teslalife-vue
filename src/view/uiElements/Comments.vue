/* eslint-disable vue/require-v-for-key */ /* eslint-disable
vue/require-v-for-key */
<template>
  <div>
    <sdPageHeader title="Comments">
      <div slot="buttons" class="page-header-actions">
        <sdCalendarButton />
        <sdExportButton />
        <sdShareButton />
        <sdButton size="small" type="primary">
          <PlusIcon size="14" />
          Add New
        </sdButton>
      </div>
    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :xs="24">
          <sdCards title="Basic comment">
            <a-comment>
              <template slot="actions">
                <span key="comment-basic-like">
                  <a-tooltip title="Like">
                    <a-icon
                      type="like"
                      :theme="action === 'liked' ? 'filled' : 'outlined'"
                      @click="like"
                    />
                  </a-tooltip>
                  <span style="padding-left: '8px';cursor: 'auto'">
                    {{ likes }}
                  </span>
                </span>
                <span key="comment-basic-dislike">
                  <a-tooltip title="Dislike">
                    <a-icon
                      type="dislike"
                      :theme="action === 'disliked' ? 'filled' : 'outlined'"
                      @click="dislike"
                    />
                  </a-tooltip>
                  <span style="padding-left: '8px';cursor: 'auto'">
                    {{ dislikes }}
                  </span>
                </span>
                <span key="comment-basic-reply-to">Reply to</span>
              </template>
              <a slot="author">Han Solo</a>
              <a-avatar
                slot="avatar"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
              <p slot="content">
                We supply a series of design principles, practical patterns and
                high quality design resources (Sketch and Axure), to help people
                create their product prototypes beautifully and efficiently.
              </p>
              <a-tooltip
                slot="datetime"
                :title="moment().format('YYYY-MM-DD HH:mm:ss')"
              >
                <span>{{ moment().fromNow() }}</span>
              </a-tooltip>
            </a-comment>
          </sdCards>
        </a-col>
        <a-col :xs="24">
          <sdCards title="Usage with list">
            <a-list
              class="comment-list"
              :header="`${data.length} replies`"
              item-layout="horizontal"
              :data-source="data"
            >
              <a-list-item slot="renderItem" slot-scope="item">
                <a-comment :author="item.author" :avatar="item.avatar">
                  <template slot="actions">
                    <span v-for="(action, key) in data.actions" :key="key">{{
                      action
                    }}</span>
                  </template>
                  <p slot="content">
                    {{ item.content }}
                  </p>
                  <a-tooltip
                    slot="datetime"
                    :title="item.datetime.format('YYYY-MM-DD HH:mm:ss')"
                  >
                    <span>{{ item.datetime.fromNow() }}</span>
                  </a-tooltip>
                </a-comment>
              </a-list-item>
            </a-list>
          </sdCards>
        </a-col>
        <a-col :xs="24">
          <sdCards title="Nested comments">
            <a-comment>
              <span slot="actions" key="comment-nested-reply-to">Reply to</span>
              <a slot="author">Han Solo</a>
              <a-avatar
                slot="avatar"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
              <p slot="content">
                We supply a series of design principles, practical patterns and
                high quality design resources (Sketch and Axure).
              </p>
              <a-comment>
                <span slot="actions">Reply to</span>
                <a slot="author">Han Solo</a>
                <a-avatar
                  slot="avatar"
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt="Han Solo"
                />
                <p slot="content">
                  We supply a series of design principles, practical patterns
                  and high quality design resources (Sketch and Axure).
                </p>
                <a-comment>
                  <span slot="actions">Reply to</span>
                  <a slot="author">Han Solo</a>
                  <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                  />
                  <p slot="content">
                    We supply a series of design principles, practical patterns
                    and high quality design resources (Sketch and Axure).
                  </p>
                </a-comment>
                <a-comment>
                  <span slot="actions">Reply to</span>
                  <a slot="author">Han Solo</a>
                  <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                  />
                  <p slot="content">
                    We supply a series of design principles, practical patterns
                    and high quality design resources (Sketch and Axure).
                  </p>
                </a-comment>
              </a-comment>
            </a-comment>
          </sdCards>
        </a-col>
        <a-col :xs="24">
          <sdCards title="Reply Editor">
            <a-list
              v-if="comments.length"
              :data-source="comments"
              :header="
                `${comments.length} ${
                  comments.length > 1 ? 'replies' : 'reply'
                }`
              "
              item-layout="horizontal"
            >
              <a-list-item slot="renderItem" slot-scope="item">
                <a-comment
                  :author="item.author"
                  :avatar="item.avatar"
                  :content="item.content"
                  :datetime="item.datetime"
                />
              </a-list-item>
            </a-list>
            <a-comment>
              <a-avatar
                slot="avatar"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
              <div slot="content">
                <a-form-item>
                  <a-textarea :rows="4" :value="value" @change="handleChange" />
                </a-form-item>
                <a-form-item>
                  <sdButton
                    html-type="submit"
                    :load="true"
                    type="primary"
                    @click.native="handleSubmit"
                  >
                    Add Comment
                  </sdButton>
                </a-form-item>
              </div>
            </a-comment>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { PlusIcon } from "vue-feather-icons";
import { Main } from "../styled";
import moment from "moment";

export default {
  name: "Comments",
  components: {
    PlusIcon,
    Main,
  },
  data() {
    return {
      comments: [],
      submitting: false,
      value: "",
      likes: 0,
      dislikes: 0,
      action: null,
      moment,
      data: [
        {
          actions: ["Reply to"],
          author: "Han Solo",
          avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          content:
            "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
          datetime: moment().subtract(1, "days"),
        },
        {
          actions: ["Reply to"],
          author: "Han Solo",
          avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          content:
            "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
          datetime: moment().subtract(2, "days"),
        },
      ],
    };
  },
  methods: {
    like() {
      this.likes = 1;
      this.dislikes = 0;
      this.action = "liked";
    },
    dislike() {
      this.likes = 0;
      this.dislikes = 1;
      this.action = "disliked";
    },
    handleSubmit() {
      if (!this.value) {
        return;
      }

      this.submitting = true;

      setTimeout(() => {
        this.submitting = false;
        this.comments = [
          {
            author: "Han Solo",
            avatar:
              "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            content: this.value,
            datetime: moment().fromNow(),
          },
          ...this.comments,
        ];
        this.value = "";
      }, 1000);
    },
    handleChange(e) {
      this.value = e.target.value;
    },
  },
};
</script>
