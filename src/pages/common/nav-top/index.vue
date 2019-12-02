<template>
  <div class="nav-top">
    <h1>XXXX | 管理系统</h1>
    <div class="user-infor animated swing">大白</div>
  </div>
</template>
<script>
export default {
  name: 'nav-top',
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  mounted() {
  },
  methods: {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.nav-top{
  width: 1200px;
  margin: 0 auto;
  position: relative;
  h1{
    color: $main-font-color;
    font-size: 20px;
    line-height: 60px;
    font-family: 'YouYuan';
  }
  & > .user-infor{
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0;
    font-size: 16px;
    line-height: 60px;
  }
}
</style>
