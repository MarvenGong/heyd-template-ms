<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  methods: {},
  mounted() {
    window.onpopstate = () => {
      if (!this.$store.state.allowBack) {    //    这个allowBack 是存在vuex里面的变量
        history.go(1);
        return false;
      }
    };
  }
};
</script>
<style lang="scss">
  #app {
    position: relative;
    width: 100%;
    height: 100%;
    .cube-btn{
      padding: 14px 16px;
      border-radius: 4px;
    }
    .ads-slide .cube-slide-item>a, .cube-slide-item>a>img{
      width: 100%;
    }
    .v-enter-active, .v-leave-active { transition: all 0.3s; }
    // .v-enter, .v-leave-to { transform: translateX(100%); }
  }
</style>
