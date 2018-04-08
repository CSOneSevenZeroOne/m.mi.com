var webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
module.exports = {
	//入口
	entry: {
		user: './entry/entry.js',
	},
	//出口
	output: {
		path: path.resolve(__dirname, 'output'),
		filename: 'bundle.js'
	},
	//开发版本
	mode: "development",
	//引入完整版本的vue
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js'
		}
	},
	//配置loader 处理非js类型的文件
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.(png|jpg|gif|svg|eot|woff|ttf|webp)$/,
			use: [{
				loader: 'file-loader',
			}]
		}, {
			test: /\.txt$/,
			use: 'raw-loader'
		}, {
			test: /\.(html)$/,
			use: {
				loader: 'html-loader',
				options: {
					attrs: [':data-src']
				}
			}
		}, {
			test: /\.(vue)$/,
			use: {
				loader: 'vue-loader',
			}
		},
		{
			test: /\.less$/,
			use: [{
				loader: "style-loader" // creates style nodes from JS strings
			}, {
				loader: "css-loader" // translates CSS into CommonJS
			}, {
				loader: "less-loader" // compiles Less to CSS
			}]
		},
			{
				//把高版本的js代码转为ES5代码
				test: /\.js$/,
				//不处理node_modules
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}]
		},
			//开启监听模式
			// watch: true,
			//插件
			plugins: [
			//new UglifyJsPlugin(),
			new HtmlWebpackPlugin({//自动生成html
                template:"./entry/index.html"//模板文件
            }),
            new CleanWebpackPlugin(//清理output
                ['./output']
            )
		],
			//全局安装webpack配置好的服务器 webpack-dev-server
			devServer: {
			contentBase: "./output", //本地服务器所加载的页面所在的目录
			historyApiFallback: true, //不跳转
			port: 7000,
			//port 设置默认监听端口，如果省略，默认为”8080“
			inline: true //实时刷新
		}
}
