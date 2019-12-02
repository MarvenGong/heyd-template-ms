<template>
  <img class="img-logo-loading" src="/static/images/logo-loading.gif" alt="">
  <!-- <img class="spinner-roll" width="32"
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAAC
    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
    Yxf4DRcbcX1otq98AAAAASUVORK5CYII=" alt=""> -->
</template>
<script>
export default {
  name: 'spiner',
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
  .spinner-roll{
    animation: spinnerrotate 1000ms linear infinite;
  }
  .img-logo-loading{
    width: px2rem(200);
  }
  @keyframes spinnerrotate {
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }
</style>