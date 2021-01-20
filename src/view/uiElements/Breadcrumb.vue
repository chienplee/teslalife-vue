<template>
  <div>
    <sdPageHeader title="Breadcrumb">
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
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Basic">
            <BreadcrumbWrapperStyle>
              <a-breadcrumb>
                <a-breadcrumb-item>Home</a-breadcrumb-item>
                <a-breadcrumb-item>
                  <router-link to="#">Application Center</router-link>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                  <router-link to="#">Application List</router-link>
                </a-breadcrumb-item>
                <a-breadcrumb-item>An Application</a-breadcrumb-item>
              </a-breadcrumb>
            </BreadcrumbWrapperStyle>
          </sdCards>
          <sdCards title="Other Router Integration">
            <BreadcrumbWrapperStyle>
              <a-breadcrumb :routes="routes">
                <template
                  slot="itemRender"
                  slot-scope="{ route, routes, paths }"
                >
                  <span v-if="routes.indexOf(route) === routes.length - 1">
                    {{ route.breadcrumbName }}
                  </span>
                  <router-link v-else :to="`${basePath}/${paths.join('/')}`">
                    {{ route.breadcrumbName }}
                  </router-link>
                </template>
              </a-breadcrumb>
              <br />
              {{ $route.path }}
            </BreadcrumbWrapperStyle>
          </sdCards>
          <sdCards title="Bread crumbs with drop down menu">
            <BreadcrumbWrapperStyle>
              <a-breadcrumb>
                <a-breadcrumb-item>Ant Design Vue</a-breadcrumb-item>
                <a-breadcrumb-item><a href="">Component</a></a-breadcrumb-item>
                <a-breadcrumb-item>
                  <a href="">General</a>
                  <a-menu slot="overlay">
                    <a-menu-item>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.alipay.com/"
                      >
                        General
                      </a>
                    </a-menu-item>
                    <a-menu-item>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.taobao.com/"
                      >
                        Layout
                      </a>
                    </a-menu-item>
                    <a-menu-item>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.tmall.com/"
                      >
                        Navigation
                      </a>
                    </a-menu-item>
                  </a-menu>
                </a-breadcrumb-item>
                <a-breadcrumb-item>Button</a-breadcrumb-item>
              </a-breadcrumb>
            </BreadcrumbWrapperStyle>
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="With Icon">
            <BreadcrumbWrapperStyle>
              <a-breadcrumb>
                <a-breadcrumb-item>
                  <a-icon type="home" />
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                  <router-link to="#">Application Center</router-link>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                  <router-link to="#">
                    <span>Application List</span>
                  </router-link>
                </a-breadcrumb-item>
                <a-breadcrumb-item>An Application</a-breadcrumb-item>
              </a-breadcrumb>
            </BreadcrumbWrapperStyle>
          </sdCards>

          <sdCards title="Configuring the Separator">
            <BreadcrumbWrapperStyle>
              <a-breadcrumb separator=">">
                <a-breadcrumb-item>Home</a-breadcrumb-item>
                <a-breadcrumb-item>
                  <router-link to="#">Application Center</router-link>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                  <router-link to="#">Application List</router-link>
                </a-breadcrumb-item>
                <a-breadcrumb-item>An Application</a-breadcrumb-item>
              </a-breadcrumb>
            </BreadcrumbWrapperStyle>
          </sdCards>

          <sdCards title="Configuring the Separator">
            <BreadcrumbWrapperStyle>
              <a-breadcrumb separator="">
                <a-breadcrumb-item>Location</a-breadcrumb-item>
                <a-breadcrumb-separator>:</a-breadcrumb-separator>
                <a-breadcrumb-item>
                  <router-link to="#">Application Center</router-link>
                </a-breadcrumb-item>
                <a-breadcrumb-separator />
                <a-breadcrumb-item>
                  <router-link to="#">Application List</router-link>
                </a-breadcrumb-item>
                <a-breadcrumb-separator />
                <a-breadcrumb-item>An Application</a-breadcrumb-item>
              </a-breadcrumb>
            </BreadcrumbWrapperStyle>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from "../styled";
import { PlusIcon } from "vue-feather-icons";
import { BreadcrumbWrapperStyle } from "./ui-elements-styled";
export default {
  name: "Badge",
  components: {
    PlusIcon,
    Main,
    BreadcrumbWrapperStyle,
  },
  data() {
    return {
      basePath: "/components/breadcrumb",
      routes: [
        {
          path: "index",
          breadcrumbName: "home",
        },
        {
          path: "first",
          breadcrumbName: "first",
          children: [
            {
              path: "/general",
              breadcrumbName: "General",
            },
            {
              path: "/layout",
              breadcrumbName: "Layout",
            },
            {
              path: "/navigation",
              breadcrumbName: "Navigation",
            },
          ],
        },
        {
          path: "second",
          breadcrumbName: "second",
        },
      ],
    };
  },
};
</script>
