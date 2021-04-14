import mutations from './mutations';
import { DataService } from '@/config/dataService/dataService';
import { notification } from 'ant-design-vue';

const addNotificationSuccess = () => {
  notification.success({
    message: 'Your Record hasbeen Submited',
  });
};

const addNotificationError = err => {
  notification.error({
    message: err,
  });
};

// const deleteNotificationSuccess = () => {
//   notification.success({
//     message: 'Your Record hasbeen Deleted',
//   });
// };

// const deleteNotificationError = err => {
//   notification.error({
//     message: err,
//   });
// };

// const updateNotificationSuccess = () => {
//   notification.success({
//     message: 'Your Record hasbeen updated',
//   });
// };

// const updateNotificationError = err => {
//   notification.error({
//     message: err,
//   });
// };

const state = () => ({
  data: [],
  url: null,
  fileLoading: false,
  loading: false,
  error: null,
});

const actions = {
  async axiosCrudSubmitData({ commit }, data) {
    try {
      await commit('axiosAddBeginBegin');
      const response = await DataService.post('/create', data);
      console.log(response);
      await commit('axiosAddBeginSuccess', JSON.parse(response.data));
      addNotificationSuccess();
    } catch (err) {
      await commit('axiosAddBeginErr', err);
      addNotificationError(err);
    }
  },

  async axiosCrudGetData({ commit }) {
    try {
      await commit('axiosReadBegin');
      const query = await DataService.get('/view-all');
      await commit('axiosReadSuccess', query.data.data);
    } catch (err) {
      console.log(err);
      await commit('axiosReadErr', err);
    }
  },
  async axiosFileClear({ commit }) {
    try {
      await commit('axiosUploadBegin');
      commit('axiosUploadSuccess', null);
    } catch (err) {
      await commit('axiosUploadErr', err);
    }
  },

  async axiosFileUploader({ commit }, imageAsFile) {
    try {
      await commit('axiosUploadBegin');
      commit('axiosUploadSuccess', imageAsFile);
    } catch (err) {
      await commit('axiosUploadErr', err);
    }
  },

  async axiosSingleDataGet({ commit }, id) {
    try {
      await commit('axiosSingleDataBegin');
      const query = await DataService.get(`/view/${id}`);
      commit('axiosSingleDataSuccess', query.data.data);
    } catch (err) {
      await commit('axiosSingleDataErr', err);
    }
  },
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
};
