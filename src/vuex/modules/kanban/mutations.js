export default {
  toAddBoardReadBegin(state) {
    state.loading = true;
  },

  toAddBoardReadSuccess(state, data) {
    state.loading = false;
    state.data = data;
  },

  toAddBoardReadErr(state, err) {
    state.loading = false;
    state.error = err;
  },
  toAddTaskBegin(state) {
    state.loading = true;
  },

  toAddTaskSuccess(state, data) {
    state.loading = false;
    state.data = data;
  },

  toAddTaskErr(state, err) {
    state.loading = false;
    state.error = err;
  },

  toDeleteTaskBegin(state) {
    state.loading = true;
  },

  toDeleteTaskSuccess(state, data) {
    state.loading = false;
    state.data = data;
  },

  toDeleteTaskErr(state, err) {
    state.loading = false;
    state.error = err;
  },
};
