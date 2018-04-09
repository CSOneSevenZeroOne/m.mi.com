var express = require('express');
var router = express.Router();
const url = require('url');
var querystring = require('querystring');//字符串转对象
var createConnection = require("../createConnections.js")

router.post('/', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");//允许跨域
    res.setHeader("Content-Type", "text/plain;charset=UTF-8");//字符编码
    //console.log(req,req.body)
    var obj=JSON.parse(req.body.action);
    //console.log(obj);
    for (var key in obj) {
        if(typeof(obj[key])=='object'){
            obj[key]=JSON.stringify(obj[key])
        }
    }
    createConnection(`insert into goodsinfo set ?`,obj,function (results) {
        res.send("success")
    });
});
module.exports = router;