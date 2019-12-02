<template>
  <section id="login" class="login-box">
    <div class="header-box">
      <h1 class="header">
        XXXX | 管理平台
      </h1>
    </div>
    <div class="main">
      <h2>管理账号登录</h2>
      <div class="main-input">
        <input type="text" v-model="form.username" placeholder="请输入您的账号">
        <i class="el-icon-user"></i>
      </div>
      <div class="main-input">
        <input type="text" v-model="form.password" placeholder="请输入您的密码">
        <i class="el-icon-s-cooperation"></i>
      </div>
      <div class="warn" v-if="!form.password || !form.username">{{ warnText }}</div>
      <el-button type="primary" class="login-button" @click="warn">登录</el-button>
      <h4>建议使用 Chrome 谷歌浏览器</h4>
    </div>
  </section>
</template>
<script>
export default {
  name: 'login',
  computed: {
  },
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      warnText: ''
    };
  },
  methods: {
    warn() {
      this.$data.warnText = '';
      if (!this.$data.form.username) {
        this.$data.warnText = '请输入您的账号';
      } else if (!this.$data.form.password) {
        this.$data.warnText = '请输入您的密码';
      } else {
        this.$router.push('/home');
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#login{
  &.login-box{
    margin: 0 auto;
    margin-top: 174px;
    & > .header-box{
      border-bottom: 1px solid $font-color-ddd;
      & > .header{
        width: 1000px;
        margin: 0 auto;
        height: 68px;
        line-height: 68px;
        font-size: 18px;
        color: $main-font-color;
      }
    }
    & > .main{
      margin: 0 auto;
      margin-top: 80px;
      border: 1px solid $font-color-ddd;
      width: 380px;
      padding: 35px 46px 16px 46px;
      & > h2 {
        color: $font-color-666;
        font-size: 20px;
        color: #666666;
      }
      & > .main-input{
        margin-top: 20px;
        color: $font-color-ddd;
        border: 1px solid $font-color-ddd;
        padding: 10px 10px 10px 40px;
        position: relative;
        & > i {
          position: absolute;
          left: 12px;
          top: 8px;
          font-size: 18px;
        }
        &:hover{
          border: 1px solid $main-font-color;
        }
      }
      & > .warn{
        margin-top: 10px;
        font-size: 10px;
        color: $main-font-color;
      }
      & > .login-button{
        margin-top: 20px;
        width: 100%;
        border-radius: 0;
      }
      &> h4{
        color: $font-color-999;
        margin: 20px 0 10px 0;
      }
    }
  }
}
</style>