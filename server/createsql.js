var mysql = require('mysql');

//创建连接对象
function createConnection() {
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'xiaomi'
	});
	connection.connect();
	return connection
}
module.exports = createConnection