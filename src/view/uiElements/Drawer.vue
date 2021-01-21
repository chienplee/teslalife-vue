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
          <a-col :lg="12" :xs="24">
            <div class="atbd-drawer">
              <sdCards title="Basic" caption="The simplest use of Drawer">
                <Drawer title="Basic Drawer" placement="right">
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Drawer>
              </sdCards>
            </div>
          </a-col>
          <a-col :lg="12" :xs="24">
            <div class="atbd-drawer">
              <sdCards title="Custom placement" caption="The simplest use of Drawer">
                <div class="drawer-placement">
                  <Drawer customPlacement title="Basic Drawer">
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                  </Drawer>
                </div>
              </sdCards>
            </div>
          </a-col>
          <a-col :lg="12" :xs="24">
            <sdCards title="Render in current dom" caption="The simplest use of Drawer">
              <div
                style={{
                  height: 200,
                  overflow: 'hidden',
                  position: 'relative',
                  padding: 48,
                  textAlign: 'center',
                }}
              >
                <Drawer render title="Basic Drawer">
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Drawer>
              </div>
            </sdCards>
          </a-col>
          <a-col :lg="12" :xs="24">
            <div class="atbd-drawer">
              <sdCards title="Submit form in drawer" caption="The simplest use of Drawer">
                <Drawer btnText="+ New account" title="Basic Drawer">
                  <Form layout="vertical" hideRequiredMark>
                    <a-row gutter={16}>
                      <a-col lg={12} sm={24} xs={24}>
                        <Form.Item
                          name="name"
                          label="Name"
                          rules={[{ required: true, message: 'Please enter user name' }]}
                        >
                          <Input placeholder="Please enter user name" />
                        </Form.Item>
                      </a-col>
                      <a-col lg={12} sm={24} xs={24}>
                        <Form.Item name="url" label="Url" rules={[{ required: true, message: 'Please enter url' }]}>
                          <Input
                            style={{ width: '100%' }}
                            addonBefore="http://"
                            addonAfter=".com"
                            placeholder="Please enter url"
                          />
                        </Form.Item>
                      </a-col>
                    </a-row>
                    <a-row gutter={16}>
                      <a-col lg={12} sm={24} xs={24}>
                        <Form.Item
                          name="owner"
                          label="Owner"
                          rules={[{ required: true, message: 'Please select an owner' }]}
                        >
                          <Select placeholder="Please select an owner">
                            <Option value="xiao">Xiaoxiao Fu</Option>
                            <Option value="mao">Maomao Zhou</Option>
                          </Select>
                        </Form.Item>
                      </a-col>
                      <a-col lg={12} sm={24} xs={24}>
                        <Form.Item
                          name="type"
                          label="Type"
                          rules={[{ required: true, message: 'Please choose the type' }]}
                        >
                          <Select placeholder="Please choose the type">
                            <Option value="private">Private</Option>
                            <Option value="public">Public</Option>
                          </Select>
                        </Form.Item>
                      </a-col>
                    </a-row>
                    <a-row gutter={16}>
                      <a-col lg={12} sm={24} xs={24}>
                        <Form.Item
                          name="approver"
                          label="Approver"
                          rules={[{ required: true, message: 'Please choose the approver' }]}
                        >
                          <Select placeholder="Please choose the approver">
                            <Option value="jack">Jack Ma</Option>
                            <Option value="tom">Tom Liu</Option>
                          </Select>
                        </Form.Item>
                      </a-col>
                      <a-col lg={12} sm={24} xs={24}>
                        <Form.Item
                          name="dateTime"
                          label="DateTime"
                          rules={[{ required: true, message: 'Please choose the dateTime' }]}
                        >
                          <DatePicker.RangePicker
                            style={{ width: '100%' }}
                            getPopupContainer={trigger => trigger.parentNode}
                          />
                        </Form.Item>
                      </a-col>
                    </a-row>
                    <a-row gutter={16}>
                      <a-col lg={24} sm={24} xs={24}>
                        <Form.Item
                          name="description"
                          label="Description"
                          rules={[
                            {
                              required: true,
                              message: 'please enter url description',
                            },
                          ]}
                        >
                          <Input.TextArea a-rows={4} placeholder="please enter url description" />
                        </Form.Item>
                      </a-col>
                    </a-row>
                  </Form>
                </Drawer>
              </sdCards>
            </div>
          </a-col>
          <a-col :lg="12" :xs="24">
            <div class="atbd-drawer">
              <sdCards title="Multi Label Drawer" caption="The simplest use of Drawer">
                <Drawer
                  title="Basic Drawer"
                  childTitle="Lavel Two"
                  childDrawer={
                    <>
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                    </>
                  }
                >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Drawer>
              </sdCards>
            </div>
          </a-col>
        </a-row>
    </Main>
  </div>
</template>

<script>
const { Option } = Select;
import { Main } from "../styled";
import { PlusIcon } from "vue-feather-icons";
import { Drawer } from '../../components/drawer/drawer';
export default {
  name: "Badge",
  components: {
    PlusIcon,
    Main,
    Drawer
  },
};
</script>
