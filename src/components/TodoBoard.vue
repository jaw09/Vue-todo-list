<template>
  <div class="row">
    <div class="col-md-8 offset-md-2">
      <todo-item v-for="item in list" :key="item.id" :item="item" v-if="currentTab === 'tasks' || currentTab === item.status"></todo-item>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  props: ["list", "currentTab"],
  components: {
    TodoItem
  }
};
</script>

