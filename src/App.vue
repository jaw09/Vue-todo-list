<template>
  <div id="app">
    <todo-navbar @changeTab="changeTab"></todo-navbar>
    <div class="container">
      <div v-for="item in list" :key="item.id" v-if="currentTab === 'tasks' || currentTab === item.status">
        {{item.title}}
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  data() {
    return {
      list: [
        {
          id: 1,
          title: "第一事件",
          timestamp: 1528557635,
          comment: "",
          status: "progress",
          markUp: false,
          file: ""
        },
        {
          id: 2,
          title: "第二事件",
          timestamp: 1528559635,
          comment: "",
          status: "completed",
          markUp: false,
          file: ""
        }
      ],
      currentTab: "tasks"
    };
  },
  methods: {
    changeTab(tab) {
      const vm = this;
      if (tab === "My Tasks") {
        this.currentTab = "tasks";
      } else if (tab === "Completed") {
        this.currentTab = "completed";
      } else {
        this.currentTab = "progress";
      }
    }
  },
  components: {
    TodoNavbar: Navbar
  }
};
</script>

<style lang="scss">
body {
  font-family: "Roboto", sans-serif;
  background-color: #e1e1e1;
}

.completed {
  text-decoration: line-through;
}
</style>
