<template>
  <div class="register">
    <van-nav-bar :title="msg" left-text="返回" right-text="按钮" left-arrow @click-left="goBack" />
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
    <van-field
      type="password"
      v-model="repPassword"
      required
      clearable
      label="确认密码"
      placeholder="请再输入密码"
      :error-message="repPassErr"
    />
    <van-field v-model="favorite" clearable label="喜好说明" placeholder="请输入您的军种喜好" />
    <div class="option">
      <van-button type="primary" @click="registerConfirm">确认注册</van-button>
      <van-button type="danger" @click="registerReset">重置信息</van-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { postRegInfo } from "../../../apiserveconfig";
export default {
  data() {
    return {
      msg: "注册",
      username: "",
      password: "",
      repPassword: "",
      favorite: "",
      userErr: "",
      passErr: "",
      repPassErr: ""
    };
  },
  computed: {},
  watch: {},

  methods: {
    //回到上个页面
    goBack() {
      this.$router.go(-1);
    },
    //注册确认
    registerConfirm() {
      // 每次点击后，重置提示信息
      this.userErr = "";
      this.passErr = "";
      // 创建变量保存表单数据
      const regInfo = {
        username: this.username,
        password: this.password,
        repPassword: this.repPassword,
        favorite: this.favorite
      };
      // 注册输入数据的简单验证
      if (regInfo.username === "") {
        this.userErr = "用户名不能为空";
      }
      if (regInfo.password === "") {
        this.passErr = "密码不能为空";
      }
      if (regInfo.repPassword === "") {
        this.repPassErr = "密码确认不能为空";
      }
      if (regInfo.repPassword !== regInfo.password) {
        this.passErr = "密码输入不一致";
        this.repPassErr = "密码输入不一致";
      }
      this.postRegInfo(regInfo);
      console.log(`regInfo`, regInfo);
    },
    //重置确认信息
    registerReset() {
      (this.username = ""),
        (this.password = ""),
        (this.repPassword = ""),
        (this.favorite = "");
    },
    //提交注册信息
    postRegInfo(regInfo) {
      axios.post(postRegInfo, regInfo).then(res => {
        console.log(`res.data`, res.data);
      });
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