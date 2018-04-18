var express = require('express');
var router = express.Router();
const url = require('url');
var querystring = require('querystring');//字符串转对象
var createConnection = require("../createConnection.js")
router.post('/limit', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");//允许跨域
    res.setHeader("Content-Type", "text/plain;charset=UTF-8");//字符编码
    createConnection(`SELECT info,COUNT(*) AS NUM FROM search GROUP BY info ORDER BY NUM DESC LIMIT 3`, function (results) {
        res.send(results);
    });
});
router.post('/info', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");//允许跨域
    res.setHeader("Content-Type", "text/plain;charset=UTF-8");//字符编码
    createConnection(`insert into search set info='${req.body.info}'`, function (results) {
        res.send("");
    });
});
module.exports = router;