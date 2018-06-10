<template>
  <div class="row">
    <div class="col-md-8 offset-md-2">
      <div v-for="item in list"
          :key="item.id"
          v-if="currentTab === 'tasks' || currentTab === item.status">
        <todo-item :item="item" v-if="false"></todo-item>
        <todo-edit-item :item="item"></todo-edit-item>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
import TodoEditItem from "./TodoEditItem";

export default {
  computed: {
    list() {
      return this.$store.getters.getList;
    },
    currentTab() {
      return this.$store.getters.getCurrentTab;
    }
  },
  components: {
    TodoItem,
    TodoEditItem
  }
};
</script>

<style lang="scss">
</style>


