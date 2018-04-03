var express = require('express');
var router = express.Router();
const url = require('url');
var querystring = require('querystring');//字符串转对象
var createConnection = require("../createConnection.js")

router.post('/', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");//允许跨域
    res.setHeader("Content-Type", "text/plain;charset=UTF-8");//字符编码
    var obj=JSON.parse(req.body.obj);
    obj.action=JSON.stringify(obj.action);
    createConnection(`insert into homegoods set ?`,obj,function (results) {
        res.send("success")
    });
});
module.exports = router;