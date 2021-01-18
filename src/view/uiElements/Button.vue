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
    <Main class="button-example">
      <a-row :gutter="25">
        <a-col :md="12">
          <Cards title="Basic" size="default">
            <Button size="default" type="primary">
              Primary
            </Button>
            <Button size="default" type="secondary">
              Secondary
            </Button>
            <Button size="default" type="success">
              Success
            </Button>
            <Button size="default" type="info">
              Info
            </Button>
            <Button size="default" type="warning">
              Warning
            </Button>
            <Button size="default" type="danger">
              Danger
            </Button>
            <Button size="default" type="link">
              Link
            </Button>
            <Button size="default" type="dark">
              Dark
            </Button>
            <Button size="default" type="light">
              Light
            </Button>
            <Button size="default" type="white">
              White
            </Button>
          </Cards>
          <Cards title="Light Color" size="default">
            <Button size="default" :transparented="true" type="primary">
              Primary
            </Button>
            <Button size="default" :transparented="true" type="secondary">
              Secondary
            </Button>
            <Button size="default" :transparented="true" type="success">
              Success
            </Button>
            <Button size="default" :transparented="true" type="info">
              Info
            </Button>
            <Button size="default" :transparented="true" type="warning">
              Warning
            </Button>
            <Button size="default" :transparented="true" type="danger">
              Danger
            </Button>
            <Button size="default" :transparented="true" type="dark">
              Dark
            </Button>
            <Button
              class="btn-transparent"
              size="default"
              :transparented="true"
              type="light"
            >
              Light
            </Button>
          </Cards>
          <Cards title="Rounded" size="default">
            <Button size="default" shape="circle" type="primary">
              Primary
            </Button>
            <Button size="default" shape="circle" type="secondary">
              Secondary
            </Button>
            <Button size="default" shape="circle" type="success">
              Success
            </Button>
            <Button size="default" shape="circle" type="info">
              Info
            </Button>
            <Button size="default" shape="circle" type="warning">
              Warning
            </Button>
            <Button size="default" shape="circle" type="danger">
              Danger
            </Button>
            <Button size="default" shape="circle" type="dark">
              Dark
            </Button>
            <Button size="default" shape="circle" type="light">
              Light
            </Button>
            <Button size="default" shape="circle" type="white">
              White
            </Button>
          </Cards>
          <Cards title="Icon" size="default">
            <Button size="default" type="primary">
              <LayersIcon />
              Default
            </Button>
            <Button size="default" transparented type="primary">
              <LayersIcon />
              Default
            </Button>
            <Button size="default" outlined type="primary">
              <LayersIcon />
              Default
            </Button>
            <Button size="default" outlined type="white">
              <LayersIcon />
              Default
            </Button>
            <Button size="default" type="light">
              <LayersIcon />
              Default
            </Button>
            <Button size="default" raised type="white">
              <LayersIcon />
              Default
            </Button>
            <Button class="btn-icon" size="default" type="primary">
              <LayersIcon />
            </Button>
            <Button class="btn-icon" size="default" outlined type="primary">
              <LayersIcon />
            </Button>
            <Button class="btn-icon" size="default" type="light">
              <LayersIcon />
            </Button>
            <Button
              class="btn-icon btn-outlined"
              size="default"
              :outlined="true"
              type="light"
            >
              <LayersIcon />
            </Button>
          </Cards>
          <Cards title="Size" size="default">
            <a-row>
              <ButtonSizeWrapper>
                <Button size="large" type="primary">
                  Large Button
                </Button>
                <Button size="default" type="secondary">
                  Default
                </Button>
                <Button size="small" type="success">
                  Small
                </Button>
              </ButtonSizeWrapper>
            </a-row>
          </Cards>

          <Cards title="Multiple Buttons" size="default">
            <Button size="default" type="primary">
              Primary
            </Button>

            <Button size="default" type="secondary">
              Secondary
            </Button>

            <Dropdown :action="['click']" placement="bottomLeft">
              <BtnWithIcon>
                <Button size="default" :outlined="true" type="white">
                  Actions
                  <a-icon type="down" />
                </Button>
              </BtnWithIcon>
            </Dropdown>
          </Cards>

          <Cards title="Group Button" size="default">
            <ButtonsGroupWrapper>
              <div class="button-group-single">
                <h4>Basic</h4>
                <a-row>
                  <BtnGroup>
                    <Button size="small" type="primary">
                      Today
                    </Button>
                    <Button size="small" :outlined="true" type="white">
                      Week
                    </Button>
                    <Button size="small" :outlined="true" type="white">
                      Month
                    </Button>
                    <Button size="small" :outlined="true" type="white">
                      Year
                    </Button>
                  </BtnGroup>
                  <BtnGroup>
                    <Button size="small" :outlined="true" type="white">
                      Cancel
                    </Button>
                    <Button size="small" :outlined="true" type="white">
                      Ok
                    </Button>
                  </BtnGroup>
                  <BtnGroup>
                    <Button size="small" type="light">
                      Left
                    </Button>
                    <Button size="small" type="light">
                      Middle
                    </Button>
                    <Button size="small" type="light">
                      Right
                    </Button>
                  </BtnGroup>
                </a-row>
              </div>

              <div class="button-group-single">
                <h4>With Icon</h4>
                <a-row>
                  <BtnWithIcon>
                    <BtnGroup>
                      <Button size="small" type="primary" class="active">
                        <a-icon type="left" />
                        Go Back
                      </Button>
                      <Button size="small" type="primary">
                        Go Forward
                        <a-icon type="right" />
                      </Button>
                    </BtnGroup>
                  </BtnWithIcon>
                </a-row>
              </div>
            </ButtonsGroupWrapper>
          </Cards>

          <Cards title="BlocK" size="default">
            <BlockButtonsWrapper>
              <Button size="large" type="primary" block>
                Large Button
              </Button>
              <Button size="default" type="secondary" block>
                Default
              </Button>
              <Button size="small" type="success" block>
                Small
              </Button>
            </BlockButtonsWrapper>
          </Cards>
        </a-col>
        <a-col :md="12">
          <Cards title="Outline" size="default">
            <Button size="default" :outlined="true" type="primary">
              Primary
            </Button>
            <Button size="default" :outlined="true" type="secondary">
              Secondary
            </Button>
            <Button size="default" :outlined="true" type="success">
              Success
            </Button>
            <Button size="default" :outlined="true" type="info">
              Info
            </Button>
            <Button size="default" :outlined="true" type="warning">
              Warning
            </Button>
            <Button size="default" :outlined="true" type="danger">
              Danger
            </Button>
            <Button size="default" :outlined="true" type="dark">
              Dark
            </Button>
            <Button
              class="btn-outlined"
              size="default"
              :outlined="true"
              type="light"
            >
              Light
            </Button>
            <Button size="default" :outlined="true" type="dash">
              Dashed
            </Button>
          </Cards>

          <Cards title="Raised" size="default">
            <Button size="default" :raised="true" type="primary">
              Primary
            </Button>
            <Button size="default" :raised="true" type="secondary">
              Secondary
            </Button>
            <Button size="default" :raised="true" type="success">
              Success
            </Button>
            <Button size="default" :raised="true" type="info">
              Info
            </Button>
            <Button size="default" :raised="true" type="warning">
              Warning
            </Button>
            <Button size="default" :raised="true" type="danger">
              Danger
            </Button>
            <Button size="default" :raised="true" type="dark">
              Dark
            </Button>
            <Button size="default" :raised="true" type="white">
              White
            </Button>
          </Cards>

          <Cards title="Rounded Outline" size="default">
            <Button
              size="default"
              :outlined="true"
              shape="circle"
              type="primary"
            >
              Primary
            </Button>
            <Button
              size="default"
              :outlined="true"
              shape="circle"
              type="secondary"
            >
              Secondary
            </Button>
            <Button
              size="default"
              :outlined="true"
              shape="circle"
              type="success"
            >
              Success
            </Button>
            <Button size="default" :outlined="true" shape="circle" type="info">
              Info
            </Button>
            <Button
              size="default"
              :outlined="true"
              shape="circle"
              type="warning"
            >
              Warning
            </Button>
            <Button
              size="default"
              :outlined="true"
              shape="circle"
              type="danger"
            >
              Danger
            </Button>
            <Button size="default" :outlined="true" shape="circle" type="dark">
              Dark
            </Button>
            <Button
              class="btn-outlined"
              size="default"
              :outlined="true"
              shape="circle"
              type="light"
            >
              Light
            </Button>
            <Button size="default" :outlined="true" shape="circle" type="dash">
              Dashed
            </Button>
          </Cards>

          <Cards title="Rounded with Icon" size="default">
            <Button size="default" shape="circle" type="primary">
              <LayersIcon />
              Default
            </Button>
            <Button
              size="default"
              shape="circle"
              :transparented="true"
              type="primary"
            >
              <LayersIcon />
              Default
            </Button>
            <Button
              size="default"
              shape="circle"
              :outlined="true"
              type="primary"
            >
              <LayersIcon />
              Default
            </Button>
            <Button
              class="btn-outlined"
              size="default"
              shape="circle"
              :outlined="true"
              type="light"
            >
              <LayersIcon />
              Default
            </Button>
            <Button size="default" shape="circle" type="light">
              <LayersIcon />
              Default
            </Button>
            <Button size="default" shape="circle" :raised="true" type="white">
              <LayersIcon />
              Default
            </Button>
            <Button
              class="btn-icon"
              size="default"
              shape="round"
              type="primary"
            >
              <LayersIcon />
            </Button>
            <Button
              class="btn-icon"
              size="default"
              :outlined="true"
              shape="round"
              type="primary"
            >
              <LayersIcon />
            </Button>
            <Button
              class="btn-icon btn-outlined"
              size="default"
              :outlined="true"
              shape="round"
              type="light"
            >
              <LayersIcon />
            </Button>
            <Button class="btn-icon" size="default" shape="round" type="light">
              <LayersIcon />
            </Button>
          </Cards>

          <Cards title="Disabled" size="default">
            <a-row>
              <Button size="default" type="primary">
                Primary
              </Button>
              <Button size="default" type="primary" disabled>
                Primary(Disabled)
              </Button>
            </a-row>
            <a-row>
              <Button size="default" :outlined="true" type="white">
                Default
              </Button>
              <Button size="default" :outlined="true" type="white" disabled>
                Default(Disabled)
              </Button>
            </a-row>
          </Cards>

          <Cards title="Loading" size="default">
            <Button size="default" shape="circle" type="primary">
              <LayersIcon />
              Default
            </Button>
            <Button
              size="default"
              shape="circle"
              :transparented="true"
              type="primary"
            >
              <LayersIcon />
              Default
            </Button>
            <Button
              size="default"
              shape="circle"
              :outlined="true"
              type="primary"
            >
              <LayersIcon />
              Default
            </Button>
            <Button size="default" shape="circle" :outlined="true" type="white">
              <LayersIcon />
              Default
            </Button>
            <Button size="default" shape="circle" type="light">
              <LayersIcon />
              Default
            </Button>
            <Button size="default" shape="circle" :raised="true" type="white">
              <LayersIcon />
              Default
            </Button>
            <Button
              class="btn-icon"
              size="default"
              shape="round"
              type="primary"
            >
              <LayersIcon />
            </Button>
            <Button
              class="btn-icon"
              size="default"
              :outlined="true"
              shape="round"
              type="primary"
            >
              <LayersIcon />
            </Button>
            <Button
              class="btn-icon btn-outlined"
              size="default"
              :outlined="true"
              shape="round"
              type="light"
            >
              <LayersIcon />
            </Button>
            <Button class="btn-icon" size="default" shape="round" type="light">
              <LayersIcon />
            </Button>
          </Cards>

          <Cards
            :bodyStyle="{
              backgroundImage: `linear-gradient(90deg, ${theme['primary-color']}, ${theme['secondary-color']})`,
              borderRadius: `0 0 10px 10px`,
            }"
            title="Ghost"
            size="default"
          >
            <Button size="default" type="primary" :ghost="true">
              Primary
            </Button>
            <Button size="default" type="secondary" :ghost="true">
              Secondary
            </Button>
            <Button size="default" type="success" :ghost="true">
              Default
            </Button>
          </Cards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Button, BtnGroup } from "../../components/buttons/Buttons";
import CalendarButton from "../../components/buttons/CalendarButton";
import ExportButton from "../../components/buttons/ExportButton";
import ShareButton from "../../components/buttons/ShareButton";
import {
  Main,
  ButtonsGroupWrapper,
  BlockButtonsWrapper,
  ButtonSizeWrapper,
  BtnWithIcon,
} from "../styled";
import { PageHeader } from "../../components/pageHeaders/PageHeaders";
import { PlusIcon, LayersIcon } from "vue-feather-icons";
import Cards from "../../components/cards/frame/CardsFrame";
import config from "../../config/config";
import Dropdown from "../../components/dropdown/Dropdown";

const { theme } = config;

export default {
  name: "Buttons",
  components: {
    PlusIcon,
    LayersIcon,
    Button,
    BtnGroup,
    CalendarButton,
    ExportButton,
    ShareButton,
    Main,
    PageHeader,
    Cards,
    Dropdown,
    ButtonsGroupWrapper,
    BlockButtonsWrapper,
    ButtonSizeWrapper,
    BtnWithIcon,
  },
  data() {
    return {
      theme,
    };
  },
};
</script>
