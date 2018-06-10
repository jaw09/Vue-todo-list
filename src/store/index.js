import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  list: [{
      id: 1,
      title: "第一事件",
      startDate: "2018-06-10",
      endDate: "2018-06-11",
      comment: "",
      status: "progress",
      markUp: false,
      file: ""
    },
    {
      id: 2,
      title: "第二事件",
      startDate: "2018-06-11",
      endDate: "2018-06-12",
      comment: "",
      status: "completed",
      markUp: true,
      file: ""
    }
  ],
  currentTab: 'tasks'
};

const mutations = {
  'CHANGE_TAB' (state, tab) {
    if (tab === "My Tasks") {
      state.currentTab = "tasks";
    } else if (tab === "Completed") {
      state.currentTab = "completed";
    } else {
      state.currentTab = "progress";
    }
  }
};

const actions = {
  changeTab({
    commit
  }, tab) {
    commit('CHANGE_TAB', tab);
  }
};

const getters = {
  getList(state) {
    return state.list;
  },
  getCurrentTab(state) {
    return state.currentTab;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
