<template>
  <div class="register">
    <van-nav-bar :title="msg" left-text="返回" right-text="注册账户" left-arrow @click-left="goBack" />
    <van-field
      v-model="username"
      required
      clearable
      label="用户名"
      placeholder="请输入用户名"
      :error-message="userErr"
    />
    <van-field
      type="password"
      v-model="password"
      required
      clearable
      label="密码"
      placeholder="请输入密码"
      :error-message="passErr"
    />
    <div class="option">
      <van-button type="primary" @click="LoginConfirm">登录</van-button>
      <van-button type="danger" @click="LoginReset">重置信息</van-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { postRegInfo } from "../../../apiserveconfig";
export default {
  name: "userLogin",
  data() {
    return {
      msg: "登录",
      username: "",
      password: "",
      userErr: "",
      passErr: ""
    };
  },
  computed: {},
  watch: {},

  methods: {
    //回到上个页面
    goBack() {
      this.$router.go(-1);
    },
    //确认登录
    LoginConfirm() {},
    //登录信息重置
    LoginReset() {
      (this.username = ""), (this.password = "");
    }
  },
  created() {},
  mounted() {},
  components: {}
};
</script>
<style scoped lang="">
.option {
  margin-top: 20px;
  text-align: center;
}
</style>