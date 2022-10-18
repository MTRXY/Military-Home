const port = 8686;
const baseUrl = "http://localhost:" + port;

const apiList = {
  //查询条件
  send: baseUrl + "/send",
  //查询结果
  get: baseUrl + "/get",
  //提交注册信息
  postRegInfo: baseUrl + "/reg"
};

module.exports = apiList;
