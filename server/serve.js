const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

//用来临时存数据
let val1 = null;

let val2 = {
  data: [
    {
      id: 1,
      name: "kobe",
      age: "24"
    },
    {
      id: 2,
      name: "james",
      age: "22"
    },
    {
      id: 3,
      name: "curry",
      age: "18"
    }
  ]
};
var filterRes = null;
console.log(`val2`, val2.data[0].age);
//过滤方法
function filter(_val) {
  return val2.data.filter(item => {
    return item.age === _val;
  });
}

//创建测试接口

//发送
app.get("/send", function(req, res) {
  //query后面的参数必须与前端params所传递的参数名一致
  console.log(req.query._val);
  let result = filter(req.query._val);
  console.log(`result`, result);
  filterRes =
    result.length !== 0 ? result : [{ id: "未知", name: "未找到数据" }];
  res.end();
});
//获取
app.get("/get", function(req, res) {
  res.send(filterRes);
});
//提交注册信息
app.post("/reg", function(req, res) {
  let data = "";
  //获取数据时候的回调
  req.on("data", function(res) {
    data += res;
  });
  // 数据接收完毕的回调
  req.on("end", function() {
    console.log(`data`, data);
  });
});

app.listen(8686, function() {
  console.log("8686,端口已经启动");
});
