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


var inserthome = require('./router/inserthome.js');
app.use('/inserthome', inserthome);//猜你喜欢
var insertdata = require('./router/insertData.js');
app.use('/insertdata', insertdata);//插入信息
var services = require('./router/services.js');
app.use('/services', services);//服务
var recommend = require('./router/recommend.js');
app.use('/recommend', recommend);//猜你喜欢

app.set('jsonp callback name', 'JSON_CALLBACK');
app.listen(6789);
console.log("开启服务器");