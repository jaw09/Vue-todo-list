<template>
  <header class="bg-primary">
    <div class="container">
      <div class="row">
        <div class="col-4 text-center">
          <a href="#" class="cnav-item"  :class="{ active: tab === 'My Tasks'}" @click.prevent="changeTab">My Tasks
            <i class="line"></i>
          </a>
        </div>
        <div class="col-4 text-center">
          <a href="#" class="cnav-item" :class="{ active: tab === 'In Progress'}" @click.prevent="changeTab">In Progress
            <i class="line"></i>
          </a>
        </div>
        <div class="col-4 text-center">
          <a href="#" class="cnav-item" :class="{ active: tab === 'Completed'}" @click.prevent="changeTab">Completed
            <i class="line"></i>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      tab: "My Tasks"
    };
  },
  methods: {
    changeTab(e) {
      const vm = this;
      vm.tab = e.target.innerText;
      this.$emit("changeTab", vm.tab);
    }
  }
};
</script>

<style lang="scss">
header {
  height: 76px;
}

.cnav-item {
  position: relative;
  display: block;
  padding: 20px 0;
  color: #00408b;
  font-size: 24px;
  transition: all 0.3s;
  &:hover,
  &:focus,
  &.active {
    color: white;
    text-decoration: none;
    outline: 0;
    .line {
      position: absolute;
      left: 25%;
      bottom: 0;
      width: 50%;
      height: 5px;
      background-color: #00408b;
    }
  }
}
</style>


