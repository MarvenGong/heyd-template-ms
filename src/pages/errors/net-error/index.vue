<template>
  <section id="err-404">
    <div class="content_404">
      <div class="img-404">
        <img src="/images/page-error.png"/>
      </div>
    </div>
    <h2>页面加载失败~</h2>
    <p>您可以尝试刷新页面或者返回上一页</p>
    <div class="err-btn-group">
      <el-button type="primary" plain @click="toReturn">上一页</el-button>
      <el-button type="primary"  @click="toIndex">刷新</el-button>
    </div>
  </section>
</template>
<script>
export default {
  name: 'networkError',
  data() {
    return {};
  },
  methods: {
    toReturn() {
      this.$router.go(-1);
    },
    toIndex() {
      location.reload();
    }
  }
};
</script>
<style lang="scss" scoped>
  #err-404 {
    width: 100%;
    height: 100vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    .err-btn-group {
      margin-top: px2rem(80);
      padding: 0 px2rem(30);
      text-align: center;
      .cube-btn {
        width: 45%;
        margin-right: 5%;
        &:last-child{
          margin-bottom: 0;
          margin-right: 0;
          margin-left: 5%;
        }
      }
    }
    &>h2 {
      text-align: center;
      font-size: px2rem(32);
      color: #343646;
      padding: px2rem(30) 0;
    }
    .content_404 {
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      width: px2rem(375);
      overflow: hidden;
      margin: 0 auto;
      position: relative;
      .img-404 {
        width: 100%;
        display: inline-block;
        position: relative;
        padding-top: 45.83%;
        img {
          display: block;
          position: absolute;
          top:0;
          left:0;
          width: 100%;
          height:100%;
        }
      }
    }
  }
</style>