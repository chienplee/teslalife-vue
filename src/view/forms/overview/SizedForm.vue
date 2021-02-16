<template>
  <div>
    <BasicFormWrapper class="mb-25">
      <sdCards title="Sizes">
        <a-form name="sDash_sized-form" layout="horizontal">
          <a-row :gutter="30">
            <a-col :xs="24">
              <a-form-item label="Large Input">
                <a-input
                  name="size-large"
                  size="large"
                  placeholder="size='large'"
                />
              </a-form-item>
              <a-form-item class="small-input" label="Default Input">
                <a-input
                  name="size-default"
                  size="default"
                  placeholder="size='Default'"
                />
              </a-form-item>

              <a-form-item class="mb-25" label="Small Input">
                <a-input
                  name="size-small"
                  size="small"
                  placeholder="size='small'"
                />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </sdCards>
    </BasicFormWrapper>
  </div>
</template>

<script>
import { BasicFormWrapper } from "../../styled";
export default {
  name: "SizedForm",
  components: {
    BasicFormWrapper,
  },
};
</script>

