var express = require('express');
var router = express.Router();
const url = require('url');
var querystring = require('querystring');//字符串转对象
var createConnection = require("../createConnection.js")

router.post('/login', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");//允许跨域
    res.setHeader("Content-Type", "text/plain;charset=UTF-8");//字符编码
    createConnection(`select * from userinfo where user_name="${req.body.user_name}" and user_pwd="${req.body.user_pwd}"`, function (results) {
        //res.send(results)
        console.log(results);
    });
});
router.post('/register', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");//允许跨域
    res.setHeader("Content-Type", "text/plain;charset=UTF-8");//字符编码
    createConnection(`insert into userinfo(user_name,user_pwd) values('${req.body.user_name}','${req.body.user_pwd}')`, function (results) {
        console.log(results)
    });
});
module.exports = router;