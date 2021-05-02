<template>
  <sdCards title="Note Lists">
    <NoteCardWrap>
      <a-row :gutter="15">
        <a-col v-for="(element, key) in noteData" :key="key" :xxl="8" :xl="12" :lg="12" :sm="12" :xs="24">
          <NoteCard :data="element" />
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

const Work = {
  name: 'Work',
  components: { NoteCardWrap, NoteCard },
  setup() {
    const { state } = useStore();
    const noteData = computed(() => state.note.data.filter(item => item.label === 'work'));

    return {
      noteData,
    };
  },
};

export default Work;
</script>
