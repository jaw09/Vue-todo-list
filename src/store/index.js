import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import map from 'lodash/map'

Vue.use(Vuex);

const state = {
  list: [],
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
  },
  'UPDATE_DATA' (state, list) {
    map(list, (item, id) => {
      item.id = id
    });
    state.list = {
      ...list
    };
  }
};

const actions = {
  changeTab({
    commit
  }, tab) {
    commit('CHANGE_TAB', tab);
  },
  changeStatus({
    commit
  }, item) {
    axios.put(
        `https://vue-todolist-273f9.firebaseio.com/todos/${item.id}.json`, item
      )
      .then(response => {})
      .catch(err => {
        commit("UPDATE_DATA", response.data);
      });
  },
  updateData({
    commit
  }) {
    axios.get('https://vue-todolist-273f9.firebaseio.com/todos.json')
      .then(function (response) {
        commit("UPDATE_DATA", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
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
