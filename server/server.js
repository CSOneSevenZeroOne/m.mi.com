var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: false
}))
// parse application/json
app.use(bodyParser.json())

var insertdata = require('./router/insertData.js');
app.use('/insertdata', insertdata);//插入信息
var services = require('./router/services.js');
app.use('/services', services);//服务

app.set('jsonp callback name', 'JSON_CALLBACK');
app.listen(9000);
console.log("开启服务器");