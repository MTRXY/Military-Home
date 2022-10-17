<template>
  <div>
    <h1>{{msg}}</h1>
    <input type="text" placeholder="请输入数据" ref="inputValue" />
    <input type="text" v-model="this.getData" />
    <button @click="sendValue">发送</button>
    <button @click="getValue">获取</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProShopDemo",
  data() {
    return {
      msg: "mt",
      getData: ""
    };
  },
  methods: {
    sendValue() {
      let value = this.$refs.inputValue.value;
      console.log(`value`, value);
      axios.get("http://localhost:8686/send", {
        params: { value: value }
      });
    },
    getValue() {
      axios.get("http://localhost:8686/get").then(res => {
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
