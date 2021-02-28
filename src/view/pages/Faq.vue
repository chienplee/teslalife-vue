<template>
  <div>
    <sdPageHeader title="Frequently Asked Questions">
      <div slot="buttons" class="page-header-actions">
        <CalendarButton />
        <ExportButton />
        <ShareButton />
        <Button size="small" type="primary">
          <PlusIcon size="14" />
          Add New
        </Button>
      </div>
    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :xxl="6" :lg="8" :md="10" :sm="11">
          <a-row>
            <a-col :xs="24">
              <FaqCategoryBox>
                <sdCards headless>
                  <Badge class="faq-badge" type="light">
                    Browse by Topic
                  </Badge>
                  <ul>
                    <li>
                      <router-link
                        class="active primary"
                        @click.native="handleChange"
                        to="#"
                      >
                        Using Applications
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        class="secondary"
                        @click.native="handleChange"
                        to="#"
                      >
                        UI Elements
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        class="success"
                        @click.native="handleChange"
                        to="#"
                      >
                        Components
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        class="warning"
                        @click.native="handleChange"
                        to="#"
                      >
                        Build Process
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        class="info"
                        @click.native="handleChange"
                        to="#"
                      >
                        Support Policy
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        class="danger"
                        @click.native="handleChange"
                        to="#"
                      >
                        Accounts & Billing
                      </router-link>
                    </li>
                  </ul>
                </sdCards>
              </FaqCategoryBox>
            </a-col>

            <a-col :xs="24">
              <FaqSupportBox>
                <sdCards headless>
                  <figure>
                    <img
                      :src="require('../../static/img/pages/support.svg')"
                      alt=""
                    />
                  </figure>
                  <figcaption>
                    <sdHeading as="h5"
                      >Not finding the help you need?</sdHeading
                    >
                    <sdButton size="default" type="primary">
                      Contact Support
                    </sdButton>
                  </figcaption>
                </sdCards>
              </FaqSupportBox>
            </a-col>
          </a-row>
        </a-col>
        <a-col :xxl="18" :lg="16" :md="14" :sm="13">
          <FaqWrapper>
            <sdCards headless title="Using Applications">
              <a-collapse :bordered="false" default-active-key="1">
                <template #expandIcon="props">
                  <PlusIcon v-if="props.isActive" size="14" />
                  <MinusIcon v-else size="14" />
                </template>
                <a-collapse-panel
                  header="How long does it take to download updates?"
                  key="1"
                  :style="customPanelStyle"
                >
                  <p>
                    Many support queries and technical questions will already be
                    answered in supporting documentation such as FAQ&rsquo;s and
                    comments from previous buyers. Anim pariatur cliche
                    reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch
                    et.
                  </p>
                  <sdHeading as="h4">Was this article helpful?</sdHeading>
                  <div class="panel-actions">
                    <sdButton :outlined="true" type="success">
                      <SmileIcon size="14" />
                      Yes
                    </sdButton>
                    <sdButton :outlined="true" type="warning">
                      <FrownIcon size="14" />
                      No
                    </sdButton>
                  </div>
                </a-collapse-panel>
                <a-collapse-panel
                  header="How to use SCSS variables to build custom color?"
                  key="2"
                  :style="customPanelStyle"
                >
                  <p>
                    Many support queries and technical questions will already be
                    answered in supporting documentation such as FAQ&rsquo;s and
                    comments from previous buyers. Anim pariatur cliche
                    reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch
                    et.
                  </p>
                  <sdHeading as="h4">Was this article helpful?</sdHeading>
                  <div class="panel-actions">
                    <sdButton :outlined="true" type="success">
                      <SmileIcon size="14" />
                      Yes
                    </sdButton>
                    <sdButton :outlined="true" type="warning">
                      <FrownIcon size="14" />
                      No
                    </sdButton>
                  </div>
                </a-collapse-panel>
                <a-collapse-panel
                  header="How long does it take to download updates?"
                  key="3"
                  :style="customPanelStyle"
                >
                  <p>
                    Many support queries and technical questions will already be
                    answered in supporting documentation such as FAQ&rsquo;s and
                    comments from previous buyers. Anim pariatur cliche
                    reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch
                    et.
                  </p>
                  <sdHeading as="h4">Was this article helpful?</sdHeading>
                  <div class="panel-actions">
                    <sdButton :outlined="true" type="success">
                      <SmileIcon size="14" />
                      Yes
                    </sdButton>
                    <sdButton :outlined="true" type="warning">
                      <FrownIcon size="14" />
                      No
                    </sdButton>
                  </div>
                </a-collapse-panel>
                <a-collapse-panel
                  header="What is the flex layout?"
                  key="4"
                  :style="customPanelStyle"
                >
                  <p>
                    Many support queries and technical questions will already be
                    answered in supporting documentation such as FAQ&rsquo;s and
                    comments from previous buyers. Anim pariatur cliche
                    reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch
                    et.
                  </p>
                  <sdHeading as="h4">Was this article helpful?</sdHeading>
                  <div class="panel-actions">
                    <sdButton :outlined="true" type="success">
                      <SmileIcon size="14" />
                      Yes
                    </sdButton>
                    <sdButton :outlined="true" type="warning">
                      <FrownIcon size="14" />
                      No
                    </sdButton>
                  </div>
                </a-collapse-panel>
                <a-collapse-panel
                  header="How long does it take to download updates?"
                  key="5"
                  :style="customPanelStyle"
                >
                  <p>
                    Many support queries and technical questions will already be
                    answered in supporting documentation such as FAQ&rsquo;s and
                    comments from previous buyers. Anim pariatur cliche
                    reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch
                    et.
                  </p>
                  <sdHeading as="h4">Was this article helpful?</sdHeading>
                  <div class="panel-actions">
                    <sdButton :outlined="true" type="success">
                      <SmileIcon size="14" />
                      Yes
                    </sdButton>
                    <sdButton :outlined="true" type="warning">
                      <FrownIcon size="14" />
                      No
                    </sdButton>
                  </div>
                </a-collapse-panel>
                <a-collapse-panel
                  header="Where to buy this UI dashboard?"
                  key="6"
                  :style="customPanelStyle"
                >
                  <p>
                    Many support queries and technical questions will already be
                    answered in supporting documentation such as FAQ&rsquo;s and
                    comments from previous buyers. Anim pariatur cliche
                    reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch
                    et.
                  </p>
                  <sdHeading as="h4">Was this article helpful?</sdHeading>
                  <div class="panel-actions">
                    <sdButton :outlined="true" type="success">
                      <SmileIcon size="14" />
                      Yes
                    </sdButton>
                    <sdButton :outlined="true" type="warning">
                      <FrownIcon size="14" />
                      No
                    </sdButton>
                  </div>
                </a-collapse-panel>
                <a-collapse-panel
                  header="How long does it take to download updates?"
                  key="7"
                  :style="customPanelStyle"
                >
                  <p>
                    Many support queries and technical questions will already be
                    answered in supporting documentation such as FAQ&rsquo;s and
                    comments from previous buyers. Anim pariatur cliche
                    reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch
                    et.
                  </p>
                  <sdHeading as="h4">Was this article helpful?</sdHeading>
                  <div class="panel-actions">
                    <sdButton :outlined="true" type="success">
                      Yes
                    </sdButton>
                    <sdButton :outlined="true" type="warning">
                      <FrownIcon size="14" />
                      No
                    </sdButton>
                  </div>
                </a-collapse-panel>
              </a-collapse>
            </sdCards>
          </FaqWrapper>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import CalendarButton from "../../components/buttons/CalendarButton";
import ExportButton from "../../components/buttons/ExportButton";
import ShareButton from "../../components/buttons/ShareButton";
import { Main } from "../styled";
import { PlusIcon, MinusIcon, SmileIcon, FrownIcon } from "vue-feather-icons";
import { Badge, FaqCategoryBox, FaqSupportBox, FaqWrapper } from "./style";

export default {
  name: "Faqs",
  components: {
    PlusIcon,
    CalendarButton,
    ExportButton,
    ShareButton,
    Main,
    Badge,
    FaqCategoryBox,
    FaqWrapper,
    FaqSupportBox,
    MinusIcon,
    SmileIcon,
    FrownIcon,
  },
  data() {
    return {
      customPanelStyle: {
        background: "#ffffff",
        borderRadius: 5,
        marginBottom: 5,
        border: "1px solid #F1F2F6",
      },
    };
  },
  methods: {
    handleChange(e) {
      e.preventDefault();
      e.target
        .closest("ul")
        .querySelector("a.active")
        .classList.remove("active");
      e.target.classList.add("active");
    },
  },
};
</script>
