# 2022.10.17

vue+node+mongodb



## 初始化项目 
vue init webpack proShopCart

## 优雅引入第三方库和插件
npm i babel-plugin-import -save-dev
在babaelrc文件下，按需引入vant组件库

```javascript
{
  "presets": [
    [
      "env",
      {
        "modules": false,
        "targets": {
          "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
        }
      }
    ],
    "stage-2"
  ],
  "plugins": [
    "transform-vue-jsx",
    "transform-runtime",
    [
      "import",
      {
        //引入vant组件
        "libraryName": "vant",
        "style": true
      }
    ]
  ]
}


## 安装express，创建nodejs接口

### 创建和安装

创建服务端文件夹

创建依赖文件

创建express服务

解决跨域的问题 （网上可查跨域代码，使用cors也可）

创建测试页面，运用ref绑定节点，创建点击事件，点击打印输入的内容

# 2022.10.18

创建接口配置文件

搭建注册页面路由实现跳转

注册页面简单验证

创建注册信息提交接口，将数据传入中间件