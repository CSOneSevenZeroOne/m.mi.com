var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json())
// var inserthome = require('./insert/inserthome.js');
// app.use('/inserthome', inserthome);//
// var insertdata = require('./insert/insertData.js');
// app.use('/insertdata', insertdata);//插入信息
// var insertclassfiy = require('./insert/insertclassfiy.js');
// app.use('/insertclassfiy', insertclassfiy);//插入信息
// var insertproduct = require('./insert/insertproduct.js');
// app.use('/insertproduct', insertproduct);//插入产品类别

var services = require('./router/services.js');
app.use('/services', services);//服务
var recommend = require('./router/recommend.js');
app.use('/recommend', recommend);//猜你喜欢
var classfiy = require('./router/classfiy.js');
app.use('/classfiy', classfiy);//分类商品获取
var classfiytype = require('./router/classfiytype.js');
app.use('/classfiytype', classfiytype);//获取分类
var indexinfo = require('./router/indexinfo.js');
app.use('/indexinfo', indexinfo);//主页信息获取

app.set('jsonp callback name', 'JSON_CALLBACK');
app.listen(6789);
console.log("开启服务器");