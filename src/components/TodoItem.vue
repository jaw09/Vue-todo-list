<template>
  <div class="todo-item mb-4" :class="{ 'mark-up': item.markUp}">
    <div class="checkbox-group todo-control flex-1">
      <label class="control control--checkbox">
        <input type="checkbox"
              :checked="item.status === 'completed'"
              v-model="item.status"
              :true-value="'completed'"
              :false-value="'progress'"
              @change="changeStatus"/>
        <div class="control__indicator"></div>
      </label>
    </div>
    <div class="content todo-control flex-4">
      <p class="title" :class="{completed: item.status === 'completed'}">{{item.title}}</p>
      <div class="info-font-group">
        <i class="far fa-calendar-alt" v-if="item.startDat || item.endDate"></i>
        <span>{{ item.startDate }}</span>
        <span v-if="item.startDate && item.endDate"> ~ </span>
        <span>{{ item.endDate }}</span>
        <i class="far fa-file" v-if="item.file"></i>
        <i class="far fa-comment-dots" v-if="item.comment"></i>
      </div>
    </div>
    <div class="font-icon-group todo-control flex-2">
      <a href="#" class="text-muted" @click.prevent="changeMarkUp">
        <i class="far fa-star" v-if="!item.markUp"></i>
        <i class="fas fa-star text-success" v-else></i>
      </a>
      <a href="#" class="text-muted" @click.prevent="openEdit">
        <i class="fas fa-pencil-alt"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    changeStatus() {
      console.log(this.item.id);
    },
    changeMarkUp() {
      console.log(this.item.id);
    },
    openEdit() {
      console.log(this.item.id);
      this.$emit("openEdit", this.item.id);
    }
  }
};
</script>

<style lang="scss">
@import "bootstrap/scss/_functions.scss";
@import "../assets/helpers/_variables.scss";

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
</style>


