var mysql = require('mysql');
function createConnection(sql,json,callback) {
	//创建连接对象
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'xiaomi'
	});
	//执行连接
	connection.connect();
	//执行sql语句查询
	connection.query(sql,json,function(error, results, fields) {
		//执行关闭
		connection.end();
		if(error) throw error;
		//console.log('The solution is: ', results);
		callback(results)
	});
	return connection
}
module.exports = createConnection