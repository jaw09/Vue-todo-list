<template>
  <div id="app">
    <todo-navbar></todo-navbar>
    <div class="container my-4">
      <todo-board ></todo-board>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import TodoBoard from "./components/TodoBoard";

export default {
  name: "App",
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
  color: #e1e1e1;
}
</style>
