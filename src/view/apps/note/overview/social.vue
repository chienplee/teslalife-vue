<template>
  <sdCards title="Note Lists">
    <NoteCardWrap>
      <draggable
        v-model="dragAbleData"
        tag="a-row"
        :component-data="getComponentData()"
        handle=".handle"
        item-key="key"
      >
        <template #item="{element}">
          <a-col :xxl="8" :xl="12" :lg="12" :sm="12" :xs="24">
            <NoteCard :data="element" />
          </a-col>
        </template>
      </draggable>
    </NoteCardWrap>
  </sdCards>
</template>
<script>
import { NoteCardWrap } from '../style';
import NoteCard from '@/components/note/Card';
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import draggable from 'vuedraggable';

const Social = {
  name: 'Social',
  components: { NoteCardWrap, NoteCard, draggable },
  setup() {
    const { state } = useStore();
    const noteData = computed(() => state.note.data.filter(item => item.label === 'social'));
    const dragAbleData = ref(noteData.value);
    function getComponentData() {
      return {
        gutter: 24,
      };
    }
    return {
      dragAbleData,
      getComponentData,
    };
  },
};

export default Social;
</script>
