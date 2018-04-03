var express = require('express');
var router = express.Router();
const url = require('url');
var querystring = require('querystring');//字符串转对象
// var body=
var connection = require("../createConnection.js")

router.post('/', function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");//允许跨域
  res.setHeader("Content-Type", "text/plain;charset=UTF-8");//字符编码
  connection().query('select user_head from `userinfo` where user_name=?',[params.user_name], function (error, results, fields) {
    if (error) throw error;
    res.send(results[0].user_head);
  });
});
module.exports = router;