<template>
  <div class="page-loading">
    <div class="loader-08"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.page-loading{
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.loader-08 {
    position: relative;
    width: px2rem(200);
    height: px2rem(200);
    display: inline-block;
    margin: 0 auto;
    color: #C79446
}
.loader-08:before,
.loader-08:after {
    content: '';
    width: inherit;
    height: inherit;
    border-radius: 50%;
    background-color: currentcolor;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-animation: loader-08 2.0s infinite ease-in-out;
    animation: loader-08 2.0s infinite ease-in-out;
}
.loader-08:after {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
}
@-webkit-keyframes loader-08 {
    0%, 100% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    50% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}
@keyframes loader-08 {
    0%, 100% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    50% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}
</style>