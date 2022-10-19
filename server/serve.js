const express = require("express");

const cors = require("cors");

//引入mongodb模块，获得它的客户端对象
const MongoClient = require("mongodb").MongoClient;

//连接mongodb本地服务域名端口
const DB_CONN_STR =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0";

const app = express();

//cors解决跨域问题
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
    //将取得数据字符串
    let registerMsg = JSON.parse(data);
    findSameUsername(registerMsg, res);
  });
});
//查询注册同名信息
function findSameUsername(registerMsg, res) {
  //连接mongodb数据库端口
  MongoClient.connect(DB_CONN_STR, function(err, db) {
    //数据库名：Modern
    var _db = db.db("Modern");
    //集合名：userInfo
    const _table = _db.collection("userInfo");
    //查询数据库中是否存在相同用户名注册信息
    _table.findOne({ username: registerMsg.username }, {}, function(
      err,
      result
    ) {
      //如果没有
      if (result === null) {
        console.log("没有同名用户");
        insertNewUsername(registerMsg, res);
        //否则
      } else if (result.username === registerMsg.username) {
        console.log("用户名已存在");
        res.send({
          regInfo: "用户名已存在",
          reg_code: 2
        });
      }
      //发送提示成功

      //关闭数据库
      db.close();
    });
  });
}

//插入新用户注册的数据
function insertNewUsername(registerMsg, res) {
  //连接mongodb数据库端口
  MongoClient.connect(DB_CONN_STR, function(err, db) {
    //数据库名：Modern
    var _db = db.db("Modern");
    //集合名：userInfo
    const _table = _db.collection("userInfo");
    //插入数据命令
    _table.insertOne(registerMsg, function(err, result) {
      //如果出现错误则将错误抛出
      if (err) throw err;
      console.log("注册成功");
      //发送提示成功
      res.send({
        regInfo: "注册成功！",
        reg_code: 1
      });
      //关闭数据库
      db.close();
    });
  });
}
app.listen(8686, function() {
  console.log("8686,端口已经启动");
});
