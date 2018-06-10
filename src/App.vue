<template>
  <div id="app">
    <todo-navbar @changeTab="changeTab" class="mb-3"></todo-navbar>
    <div class="container">
      <todo-board :list="list" :currentTab="currentTab"></todo-board>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import TodoBoard from "./components/TodoBoard";

export default {
  name: "App",
  data() {
    return {
      list: [
        {
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
    TodoNavbar: Navbar,
    TodoBoard
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
