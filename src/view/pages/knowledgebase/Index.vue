<template>
  <div>
    <sdPageHeader title="Knowledgebase">
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
      <KnowledgeBaseTop />
      <KnowledgebaseArticleWrap>
        <div class="knowledgebase-article-container">
          <ArticleTabWrap class="sDash_article-tab">
            <div class="sDash_article-tab__menu">
              <nav>
                <ul>
                  <li>
                    <router-link to="/page/knowledgebase/plugins">Plugins</router-link>
                  </li>
                  <li>
                    <router-link to="/page/knowledgebase/themes">Themes</router-link>
                  </li>
                  <li>
                    <router-link to="/page/knowledgebase/extensions">Extensions</router-link>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <router-view></router-view>
            </div>
          </ArticleTabWrap>
          <PopularArticleWrap>
            <div class="sDash_popular-article sDash_popular-article-container">
              <h2 class="sDash_popular-article__title">Popular articles</h2>
              <div transition-duration="0.3s" item-selector=".item">
                <div class="sDash_popular-article__box">
                  <a-row>
                    <a-col
                      :md="8"
                      :sm="12"
                      :xs="24"
                      class="item"
                      v-for="article in articles"
                      :key="article.id"
                      :class="`sDash_popular-article__single theme-${article.type}`"
                    >
                      <h4 class="single-article-title">{{ article.title }}</h4>
                      <p>{{ article.text }}</p>
                      <router-link class="btn-link" to="/page/knowledgebase/single/1">
                        Read more
                        <ArrowRightOutlined />
                      </router-link>
                    </a-col>
                  </a-row>
                </div>
              </div>
            </div>
          </PopularArticleWrap>
          <CtaWrap>
            <div class="sDash_knowledgebase-cta">
              <h2 class="sDash_knowledgebase-cta__title">Still no luck? We can help!</h2>
              <p>Contact us and we’ll get back to you as soon as possible.</p>
              <sdButton class="btn-rqSubmit" type="primary" size="large">
                Submit a Request
              </sdButton>
            </div>
          </CtaWrap>
        </div>
      </KnowledgebaseArticleWrap>
    </Main>
  </div>
</template>

<script>
import { Main } from '../../styled';
import { ArrowRightOutlined } from '@ant-design/icons-vue';
import KnowledgeBaseTop from './overview/knowledgebase/KnowledgeTop';
import { KnowledgebaseArticleWrap, ArticleTabWrap, PopularArticleWrap, CtaWrap } from './style';
import articles from '../../../demoData/article.json';
export default {
  name: 'KnowledgeBase',
  components: {
    Main,
    ArrowRightOutlined,
    KnowledgeBaseTop,
    KnowledgebaseArticleWrap,
    ArticleTabWrap,
    PopularArticleWrap,
    CtaWrap,
  },
  setup() {
    return {
      articles,
    };
  },
};
</script>
