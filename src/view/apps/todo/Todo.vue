<template>
  <sdPageHeader title="To Do">
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
    <a-row :gutter="30">
      <a-col :md="24">
        <TodoStyleWrapper>
          <sdCards title="Task Lists">
            <TableWrapper class="table-responsive">
              <a-table
                :rowSelection="{
                  type: 'checkbox',
                  ...rowSelection,
                }"
                :columns="columns"
                :dataSource="dataSource"
                :pagination="false"
                rowKey="index"
                :components="{
                  body: {
                    wrapper: DraggableContainer,
                    row: DraggableBodyRow,
                  },
                }"
              />
            </TableWrapper>
            <div class="new-todo-wrap">
              <sdButton @click="showModal" class="btn-toDoAdd" transparented type="primary" size="large">
                + Add New Task
              </sdButton>
            </div>
          </sdCards>
        </TodoStyleWrapper>
      </a-col>
    </a-row>
    <sdModal :type="modalType" title="Add New Todo" :visible="visible" :footer="null" :onCancel="handleCancel">
      <div class="todo-modal">
        <BasicFormWrapper>
          <a-form class="adTodo-form" name="todoAdd" :model="formState" @finish="onSubmitHandler">
            <a-input v-model:value="formState.todoAdd" placeholder="Input Item Name......." />
            <br />
            <br />

            <sdButton @click="showModal" htmlType="submit" class="btn-adTodo" type="primary" size="large">
              Add New
            </sdButton>
          </a-form>
        </BasicFormWrapper>
      </div>
    </sdModal>
  </Main>
</template>
<script>
import { Span, TodoStyleWrapper } from './style';
import { Main, TableWrapper, BasicFormWrapper } from '../../styled';
import { useStore } from 'vuex';
import { computed, reactive, ref } from 'vue';

const columns = [
  {
    title: '',
    dataIndex: 'item',
  },
  {
    title: '',
    dataIndex: 'action',
    width: 120,
  },
];

const ToDo = {
  name: 'ToDo',
  components: { Span, TodoStyleWrapper, Main, TableWrapper, BasicFormWrapper },
  setup() {
    const { state, dispatch } = useStore();
    const todoData = computed(() => state.todo.data);
    const visible = ref(false);
    const selectedRowKeys = ref([]);
    const onHandleDelete = key => {
      const data = todoData.value.filter(item => item.key !== key);
      dispatch('ToDoDeleteData', data);
    };
    const formState = reactive({
      todoAdd: '',
    });
    const dataSource = computed(() =>
      todoData.value.map((item, index) => {
        return {
          key: index + 1,
          index,
          item: (
            <Span class={selectedRowKeys.value.includes(index) ? 'todo-title active' : 'todo-title inactive'}>
              {item.item}
            </Span>
          ),
          action: (
            <div class="todos-action">
              <sdFeatherIcons size={16} style={{ cursor: 'pointer', color: '#999' }} type="move" />
              <a
                class={item.favorite ? 'star active' : 'star'}
                onClick={() => dispatch('onStarUpdate', { data: todoData.value, id: item.key })}
                to="#"
              >
                <sdFeatherIcons type="star" style={{ color: item.favorite ? 'gold' : '#888' }} size={16} />
              </a>
              <a onClick={() => onHandleDelete(item.key)} to="#">
                <sdFeatherIcons type="trash-2" size={16} />
              </a>
            </div>
          ),
        };
      }),
    );
    const onSelectChange = selectedRowKey => {
      selectedRowKeys.value = selectedRowKey;
    };

    const rowSelection = {
      onChange: onSelectChange,
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };

    const onSubmitHandler = () => {
      const arrayData = [];
      todoData.value.map(data => {
        return arrayData.push(data.key);
      });
      const max = Math.max(...arrayData);
      if (formState.todoAdd !== '') {
        dispatch('ToDoAddData', [
          ...todoData.value,
          {
            key: max + 1,
            item: formState.todoAdd,
            time: new Date().getTime(),
            favorite: false,
          },
        ]);

        formState.todoAdd = '';
        visible.value = false;
      } else {
        alert('Please Give a Task Title...');
      }
    };

    const showModal = () => {
      visible.value = true;
    };

    const onCancel = () => {
      visible.value = false;
    };

    const handleCancel = () => {
      onCancel();
    };

    return {
      handleCancel,
      onCancel,
      showModal,
      onSubmitHandler,
      // onInputChange,
      rowSelection,
      dataSource,
      columns,
      formState,
      visible,
    };
  },
};

export default ToDo;
</script>
