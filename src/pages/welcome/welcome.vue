<template>
  <div class="welcome">
    <h1 class="title">{{msg}}</h1>
    <div class="option">
      <van-button type="primary" @click="loginBtn">登录</van-button>
      <van-button type="info" @click="registerBtn">注册</van-button>
    </div>
    <!-- <div></div>
    <input type="text" placeholder="请输入数据" ref="inputValue" />
    <input type="text" v-model="this.getData" />
    <button @click="sendValue">发送</button>
    <button @click="getValue">获取</button>-->
  </div>
</template>

<script>
export default {
  name: "welcome",
  data() {
    return {
      msg: "现代军备大全",
      getData: ""
    };
  },
  methods: {
    //登录页面
    loginBtn() {
      this.$router.push({ path: "/login" });
    },
    //注册页面
    registerBtn() {
      this.$router.push({ path: "/register" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome {
  position: fixed;
  width: 100%;
  height: 100%;
  background: url("../../assets/Img/welcome/welcomeBg.jpg");
  background-size: cover;
}
.title {
  text-align: center;
}
.option {
  position: absolute;
  left: 130px;
  top: 246px;
}
</style>
