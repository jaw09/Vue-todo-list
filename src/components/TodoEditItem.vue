<template>
  <div class="todo-edit-item mb-4">
    <div class="todo-item" :class="{ 'mark-up': item.markUp || false}" v-if="item">
      <div class="checkbox-group todo-control flex-1">
      <label class="control control--checkbox">
        <input type="checkbox"
              :checked="item.status === 'completed'"
              v-model="item.status"
              :true-value="'completed'"
              :false-value="'progress'"
              :change="changeStatus"/>
        <div class="control__indicator"></div>
      </label>
      </div>
      <div class="content todo-control flex-4">
        <input type="text" v-model="cacheTodo.message" class="form-control">
      </div>
      <div class="font-icon-group todo-control flex-2">
        <a href="#" class="text-muted" @click.prevent="changeMarkUp">
          <i class="far fa-star" v-if="!item.markUp"></i>
          <i class="fas fa-star text-success" v-else></i>
        </a>
        <a href="#" class="text-muted" @click.prevent="closeEdit">
          <i class="fas fa-pencil-alt text-primary"></i>
        </a>
      </div>
    </div>
    <div class="todo-item" v-if="!item">
      <div class="content todo-control flex-4">
        <input type="text" v-model="cacheTodo.message" class="form-control">
      </div>
      <div class="font-icon-group todo-control flex-2">
        <a href="#" class="text-muted" @click.prevent="changeMarkUp">
          <i class="far fa-star" v-if="!cacheTodo.markUp"></i>
          <i class="fas fa-star text-success" v-else></i>
        </a>
        <a href="#" class="text-muted" @click.prevent="closeEdit">
          <i class="fas fa-pencil-alt text-primary"></i>
        </a>
      </div>
    </div>
    <div class="todo-edit-content">
      <div class="todo-row">
        <div class="todo-icon">
          <i class="far fa-calendar-alt"></i>
        </div>
        <div class="todo-form-control ml-2">
          <label for="">Deadline</label>
        <div class="form-inline todo-form-control d-flex justify-content-around">
          <input type="date" class="form-control border-0 mt-1" v-model="cacheTodo.startDate">
          <input type="date" class="form-control border-0 mt-1" v-model="cacheTodo.endDate">
        </div>
        </div>
      </div>
      <div class="todo-row mt-4">
        <div class="todo-icon">
          <i class="far fa-comment-dots"></i>
        </div>
        <div class="todo-form-control ml-2">
          <label for="">Comment</label>
          <div>
            <textarea class="form-control w-100 border-0"
              v-model="comment"></textarea>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex">
      <button class="btn text-danger w-50 rectangle animation-danger" @click="closeEdit">
        <i class="fas fa-times"></i> Cancel
      </button>
      <button class="btn btn-primary w-50 rectangle" @click="updateTodo">
        <i class="fas fa-plus"></i> Update Task
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      cacheTodo: {},
      comment: ""
    };
  },
  methods: {
    changeStatus() {},
    changeMarkUp() {},
    closeEdit() {
      this.$emit("closeEdit");
    },
    updateTodo() {}
  }
};
</script>

<style lang="scss">
@import "bootstrap/scss/_functions.scss";
@import "../assets/helpers/_variables.scss";

// todo-item
.todo-item {
  display: flex;
  align-items: center;
  height: 102px;
  margin-bottom: 8px;
  padding: 0 32px;
  background: #f2f2f2;
  &.mark-up {
    background-color: $info;
  }
  .todo-control {
    &.flex-1 {
      flex: 1;
    }
    &.flex-4 {
      flex: 6;
    }
    &.flex-2 {
      flex: 2;
    }
  }
}

.font-icon-group {
  display: flex;
  justify-content: space-around;
  padding-bottom: 24px;
  font-size: 24px;
}

.checkbox-group {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 35px;
}

.control {
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 18px;
  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
}

.control__indicator {
  position: absolute;
  top: 2px;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: $white;
  transition: all 0.3s;
  .control:hover input ~ & {
    background: #c8c8c8;
  }
  .control input:checked ~ & {
    background-color: $primary;
  }
  .control:hover input:checked ~ & {
    background-color: $secondary;
  }
  &:after {
    content: "";
    position: absolute;
    display: none;
    .control input:checked ~ & {
      display: block;
    }
    .control--checkbox & {
      left: 7px;
      top: 2px;
      width: 8px;
      height: 13px;
      border: solid $white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
}

.content {
  .title {
    margin: 0;
    font-size: 24px;
  }
}

.text-muted {
  color: #000;
}

.todo-edit-item {
  .todo-item {
    margin-bottom: 0;
  }
  .font-icon-group {
    display: flex;
    justify-content: space-around;
    font-size: 24px;
    padding-bottom: 0;
  }
  .checkbox-group {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 12px;
  }
}
// todo-edit-content
.todo-edit-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-top: 2px solid $gray-500;
  padding: 24px 0;
  background: #f2f2f2;
  .todo-row {
    display: flex;
    width: 70%;
  }
  .todo-form-control {
    width: 100%;
  }
}
// button-group
.rectangle {
  padding: 10px;
  border-radius: 0;
}

.btn.text-danger:hover {
  background: $danger;
  color: $white !important;
}
</style>


