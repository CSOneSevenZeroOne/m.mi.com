var express = require('express');
var router = express.Router();
const url = require('url');
var querystring = require('querystring');//字符串转对象
var createConnection = require("../createConnection.js")
router.post('/addcart', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");//允许跨域
    res.setHeader("Content-Type", "text/plain;charset=UTF-8");//字符编码
    createConnection(`insert into cart set cart_name='${req.body.cart_name}',user_name='${req.body.user_name}',num='${req.body.num}',price='${req.body.price}',type='${req.body.type}',imgsrc='${req.body.imgsrc}'`, function (results) {
        res.send("添加成功");
    });
});
router.post('/selectcart', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");//允许跨域
    res.setHeader("Content-Type", "text/plain;charset=UTF-8");//字符编码
    createConnection(`select * from cart where user_name='${req.body.user_name}'`, function (results) {
        res.send(results);
    });
});
module.exports = router;