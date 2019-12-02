<template>
  <section id="">
    <header>
      <nav-top></nav-top>
    </header>
    <article>
      <aside>
        <nav-left></nav-left>
      </aside>
      <div class="content">
        <router-view></router-view>
      </div>
    </article>
  </section>
</template>
<script>
import navLeft from '@/pages/common/nav-left';
import navTop from '@/pages/common/nav-top';

export default {
  name: 'home',
  components: {
    navLeft,
    navTop
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
section{
  width: 100vw;
  height: 100vh;
  header{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 60px;
    border-bottom: 1px solid $font-color-e5;
    box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.1);
  }
  article{
    position: absolute;
    top: 85px;
    bottom: 0;
    width: 1200px;
    left: 50%;
    transform: translate(-50%, 0);
    background: #ffffff;
    aside{
      display: inline-block;
      border:  1px solid $font-color-e5;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 200px;
      background: #ffffff;
    }
    & > .content{
      padding-left: 200px;
    }
  }
}
</style>