<template>
  <div>
    <h1>{{msg}}</h1>
    <van-button type="primary" @click="loginBtn">登录</van-button>
    <van-button type="info" @click="registerBtn">注册</van-button>
    <div></div>
    <input type="text" placeholder="请输入数据" ref="inputValue" />
    <input type="text" v-model="this.getData" />
    <button @click="sendValue">发送</button>
    <button @click="getValue">获取</button>
  </div>
</template>

<script>
import axios from "axios";
import apiList from "../../apiserveconfig";
export default {
  name: "ProShopDemo",
  data() {
    return {
      msg: "mt",
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
    },
    sendValue() {
      let value = this.$refs.inputValue.value;
      console.log(`value`, value);
      axios.get(apiList.send, {
        params: { _val: value }
      });
    },
    getValue() {
      axios.get(apiList.get).then(res => {
        console.log(`res.data`, res.data);
        this.getData = res.data[0].name;
        console.log(`this,getData`, this.getData);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
