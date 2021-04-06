<template>
  <div>
    <sdPageHeader title="Widgets Cards">
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
        <a-col v-for="item in cardOne" :key="item.id" :xxl="6" :md="12" :sm="12" :xs="24" class="mb-25">
          <SampleCardOne :item="item" />
        </a-col>
        <a-col v-for="item in cardTwo" :key="item.id" :xxl="6" :md="12" :sm="12" :xs="24" class="mb-25">
          <SampleCardTwo :item="item" />
        </a-col>
        <a-col v-for="item in cardThree" :key="item.id" :xxl="6" :md="12" :sm="12" :xs="24" class="mb-25">
          <SampleCardThree :item="item" />
        </a-col>
        <a-col v-for="item in cardOne" :key="item.id" :xxl="6" :md="12" :sm="12" :xs="24" class="mb-25">
          <SampleCardFour :item="item" />
        </a-col>
        <a-col v-for="item in cardFive" :key="item.id" :xxl="6" :md="12" :sm="12" :xs="24" class="mb-25">
          <SampleCardFive :item="item" />
        </a-col>
        <a-col v-for="item in cardSix" :key="item.id" :xxl="6" :md="12" :sm="12" :xs="24" class="mb-25">
          <SampleCardSix :item="item" />
        </a-col>
        <a-col v-for="item in cardSeven" :key="item.id" :xxl="6" :md="12" :sm="12" :xs="24" class="mb-25">
          <SampleCardSeven :item="item" />
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Main } from '../styled';
import SampleCardOne from '../../components/cards/sampleCard/SampleCardOne';
import SampleCardTwo from '../../components/cards/sampleCard/SampleCardTwo';
import SampleCardThree from '../../components/cards/sampleCard/SampleCardThree';
import SampleCardFour from '../../components/cards/sampleCard/SampleCardFour';
import SampleCardFive from '../../components/cards/sampleCard/SampleCardFive';
import SampleCardSix from '../../components/cards/sampleCard/SampleCardSix';
import SampleCardSeven from '../../components/cards/sampleCard/SampleCardSeven';
import { cardOne, cardTwo, cardThree, cardFive, cardSix, cardSeven } from '../../demoData/sampleCards.json';
export default defineComponent({
  name: 'WidgetCard',
  components: {
    Main,
    SampleCardOne,
    SampleCardTwo,
    SampleCardThree,
    SampleCardFour,
    SampleCardFive,
    SampleCardSix,
    SampleCardSeven,
  },
  setup() {
    return { cardOne, cardTwo, cardThree, cardFive, cardSix, cardSeven };
  },
});
</script>
