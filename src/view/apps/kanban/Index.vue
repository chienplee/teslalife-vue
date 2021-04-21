<template>
  <sdPageHeader title="Kanban">
    <template #buttons>
      <div key="1" class="page-header-actions">
        <CalendarButtonPageHeader />
        <ExportButtonPageHeader />
        <ShareButtonPageHeader />
        <sdButton size="small" type="primary">
          <sdFeatherIcons type="plus" size="14" />
          Add New
        </sdButton>
      </div>
    </template>
  </sdPageHeader>
  <Main>
    <a-row :gutter="15">
      <a-col :xs="24">
        <KanvanBoardWrap>
          <sdCards headless title="Product Design">
            <div class="sDash_kanban-board-list">
              <div v-for="board in boardData" :key="board.boardId" class="sDash_kanban-board-item" ref="{ref}">
                <div
                  :class="
                    board.boardId === titleBoardId
                      ? 'sDash_kanban-board-item__header editable'
                      : 'sDash_kanban-board-item__header'
                  "
                >
                  <h4 class="list-header-title">
                    <span>{{ board.title }}</span>
                    <sdDropdown :action="['click']" class="wide-dropdwon kanbanCard-more">
                      <template #overlay>
                        <a @click="e => onBoardEditable(e, board.boardId, board.title)" href="#">
                          <span>Edit Card Title</span>
                        </a>
                        <a @click="() => deleteColumnHandler(board.boardId)" href="#">
                          <span>Delete Card</span>
                        </a>
                      </template>
                      <a href="#" class="btn-more">
                        <sdFeatherIcons type="more-horizontal" size="14" />
                      </a>
                    </sdDropdown>
                  </h4>
                  <BoardTitleUpdate
                    :boardId="titleBoardId"
                    :boardTitle="boardTitle"
                    :onBoardTitleChange="onBoardTitleChange"
                    :onBlur="onBoardEditableHide"
                  />
                </div>

                <div :class="board.boardId === boardId ? 'sDash_addTask-control add-task-on' : 'sDash_addTask-control'">
                  <a href="#" class="btn-addTask" @click="e => handleOnAddTask(e, board.boardId)">
                    <sdFeatherIcons type="plus" size="12" />
                    <span>Add Task</span>
                  </a>

                  <div class="sDash_addTask-from">
                    <a-input
                      :name="`taskInput-${board.boardId}`"
                      class="sDash_addTask-input"
                      placeholder="Enter a Title"
                      @pressEnter="() => addTaskHandler(board.boardId)"
                    />
                    <div class="sDash_addTask-action">
                      <sdButton
                        @click="() => addTaskHandler(board.boardId)"
                        class="add-column"
                        htmlType="submit"
                        size="small"
                        type="primary"
                      >
                        Add
                      </sdButton>
                      <a href="#" @click="handleOffAddTask">
                        <sdFeatherIcons type="x" size="18" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div :class="addColumn ? 'btn-addColumn add-column-on' : 'btn-addColumn'">
                <div class="btn-addColumn-inner">
                  <a href="#" class="btn-add" @click="activeAddOption">
                    <sdFeatherIcons type="plus" size="12" />
                    <span>Add Column</span>
                  </a>
                  <a-form class="addColumn-form" name="columnAdd" @finish="addColumnHandler">
                    <div class="btn-addColumn-form">
                      <a-input
                        v-model:value="columnTitle"
                        class="sDash-add-column-input"
                        @change="onColumnTitleChange"
                        placeholder="Enter Column Title"
                      />
                      <div class="sDash_add-column-action">
                        <sdButton class="add-column" htmlType="submit" size="small" type="primary">
                          Add
                        </sdButton>
                        <a href="#" @click="diActiveAddOption">
                          <sdFeatherIcons type="x" size="18" />
                        </a>
                      </div>
                    </div>
                  </a-form>
                </div>
              </div>
            </div>
          </sdCards>
        </KanvanBoardWrap>
      </a-col>
    </a-row>
  </Main>
  <!-- <UpdateTask handleCancel={handleCancel} modalVisible={modalVisible} data={checklistData} /> -->
  <BackShadow v-if="backShadow" @click="onBackShadowHide" />
</template>
<script>
import propTypes from 'vue-types';
import { KanvanBoardWrap, BackShadow } from './style';
// import KanbanBoardItem from './overview/KanbanBoardItem';
// import UpdateTask from './overview/UpdateTask';
import { Main } from '../../styled';
import { toRefs, ref, computed, reactive, watchEffect } from 'vue';
import { useStore } from 'vuex';

const BoardTitleUpdate = {
  name: 'BoardTitleUpdate',
  props: {
    boardTitle: propTypes.string,
    boardId: propTypes.string,
    onBlur: propTypes.func,
  },
  data() {
    return { value: this.boardTitle };
  },
  methods: {
    onChangeHandler(e) {
      this.value = e.target.value;
    },
  },
  render() {
    return (
      <a-input
        name={`titile-edit${this.boardId}`}
        class="title-edit"
        placeholder="Enter Title"
        onChange={this.onChangeHandler}
        onBlur={() => this.onBlur(this.boardId)}
        onPressEnter={() => this.onBlur(this.boardId)}
        value={this.value}
      />
    );
  },
};

const Kanban = {
  name: 'Kanban',
  components: { KanvanBoardWrap, BackShadow, Main, BoardTitleUpdate },
  setup() {
    const { state } = useStore();
    const rtl = computed(() => state.themeLayout.rtlData);
    const boardData = computed(() => state.KanbanBoard.boardData);
    const tasks = computed(() => state.KanbanBoard.taskData);
    const addColumn = ref(false);

    const states = reactive({
      columnTitle: '',
      boardTitle: '',
      boardId: '',
      titleBoardId: '',
      checklistData: {
        id: 1,
        boardId: 1,
        checklist: [],
      },
      modalVisible: false,
      boardEditable: false,
      backShadow: false,
      taskId: '',
    });

    const activeAddOption = e => {
      e.preventDefault();
      addColumn.value = true;
    };

    const diActiveAddOption = e => {
      e.preventDefault();
      addColumn.value = false;
    };

    const onColumnTitleChange = e => {
      state.columnTitle = e.target.value;
    };

    const { boardId } = toRefs(states);
    watchEffect(() => console.log(states));
    return {
      activeAddOption,
      rtl,
      boardData,
      tasks,
      addColumn,
      states,
      ...states,
      boardId,
      onColumnTitleChange,
      diActiveAddOption,
    };
  },
};

export default Kanban;
</script>
