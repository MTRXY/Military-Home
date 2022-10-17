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
      age: 24
    },
    {
      id: 2,
      name: "james",
      age: 22
    },
    {
      id: 3,
      name: "curry",
      age: 18
    }
  ]
};
var filterRes = null;
//过滤方法
function filter(value) {
  return val2.data.filter(item => {
    return item.age === value;
  });
}

//创建测试接口
app.get("/send", function(req, res) {
  console.log(req.query._val);
  let result = filter(req.query._val);
  filterRes =
    result.length !== 0 ? result : [{ id: "未知", name: "未找到数据" }];
  res.end();
});

app.get("/get", function(req, res) {
  res.send(filterRes);
});

app.listen(8686, function() {
  console.log("8686,端口已经启动");
});
