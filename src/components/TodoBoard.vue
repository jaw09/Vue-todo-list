<template>
  <div class="row">
    <div class="col-md-8 offset-md-2 input-form" v-if="isNewTodo === false">
      <i class="fas fa-plus fa-lg text-black-50 plus-icon"></i>
      <input type="text" class="form-control form-control-lg pl-5" placeholder="Add Task"
        v-model="message" @focus="addTodo">
    </div>
    <div class="col-md-8 offset-md-2 mt-4">
      <todo-edit-item v-if="isNewTodo && !currentEdit.id" @closeEdit="closeEdit"
          ></todo-edit-item>
      <div v-for="item in list"
          :key="item.id"
          v-if="currentTab === 'tasks' || currentTab === item.status">
        <todo-item :item="item"
                    @openEdit="openEdit"
                    v-if="currentEdit.id !== item.id">
                    </todo-item>
        <todo-edit-item :item="item"
                    @closeEdit="closeEdit"
                    v-if="currentEdit.id === item.id">
                    </todo-edit-item>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
import TodoEditItem from "./TodoEditItem";
import find from "lodash/find";

export default {
  data() {
    return {
      message: "",
      isNewTodo: false,
      currentEdit: {}
    };
  },
  methods: {
    addTodo() {
      this.isNewTodo = true;
      this.currentEdit = {};
    },
    openEdit(id) {
      const vm = this;
      this.isNewTodo = true;
      this.currentEdit = find(this.list, item => item.id === id);
    },
    closeEdit() {
      this.currentEdit = {};
      this.isNewTodo = false;
    }
  },
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
  },
  created() {
    const vm = this;
    vm.$store.dispatch("updateData");
  }
};
</script>

<style lang="scss">
.input-form {
  position: relative;
  .plus-icon {
    position: absolute;
    top: 0.95rem;
    left: 2rem;
  }
}
</style>


