<template>
  <sdCards title="Note Lists">
    <NoteCardWrap>
      <a-row :gutter="24">
        <a-col v-for="value in noteData" :xxl="8" :xl="12" :lg="12" :sm="12" :xs="24" :key="value.key">
          <NoteCard :data="value" />
        </a-col>
      </a-row>
    </NoteCardWrap>
  </sdCards>
</template>
<script>
import { NoteCardWrap } from '../style';
import NoteCard from '@/components/note/Card';
import { useStore } from 'vuex';
import { computed } from 'vue';

const Important = {
  name: 'Important',
  components: { NoteCardWrap, NoteCard },
  setup() {
    const { state } = useStore();
    const noteData = computed(() => state.note.data.filter(item => item.label === 'important'));
    return {
      noteData,
    };
  },
};

export default Important;
</script>
