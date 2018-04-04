var express = require('express');
var router = express.Router();
const url = require('url');
var querystring = require('querystring');//字符串转对象
// var body=
var createConnection = require("../createConnection.js")

router.post('/', function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");//允许跨域
  res.setHeader("Content-Type", "text/plain;charset=UTF-8");//字符编码
  createConnection(`insert into productlike(image_url,name,path,type,price) values('${req.body.image_url}','${req.body.name}','${req.body.path}','${req.body.type}','${req.body.price}')`, function (results) {
    res.send("success")
  });
});
module.exports = router;