<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose">
    <router-link to="/home">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
    </router-link>
    <router-link tag="a" to="/decorate">
      <el-menu-item index="2">
        <i class="el-icon-document-copy"></i>
        <span slot="title">装修</span>
      </el-menu-item>
    </router-link>
  </el-menu>
</template>
<script>
export default {
  name: 'nav-left',
  components: {},
  props: {},
  data() {
    return {
      isCollapse: false
    };
  },
  watch: {},
  computed: {},
  mounted() {
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
