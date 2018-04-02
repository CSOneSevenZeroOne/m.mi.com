//npm
//import Vue from "vue";
//手动下载
import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex)
//路由管理
import VueRouter from 'vue-router'
Vue.use(VueRouter)
require("./css/base.css");

import xorder from "./components/order.vue";
import xuser from "./components/user.vue";
import xuser_pannel from "./components/user_pannel.vue";
import xuser_header from "./components/user_header.vue";
import xuser_order from "./components/user_order.vue";
import xfooter from "./components/module/footer.vue";

const router = new VueRouter({
	routes: [{
		path: '/xuser',
		component: xuser
	}, {
		path: "/order",
		component: xorder
	}]
	// （缩写）相当于 routes: routes
})
const store = new Vuex.Store({
	//消息
	state: {
		count: 0,
		bool: false,
		src: "",
		order_tab: 1
	},
	//获取值得方法
	getters: {

	}
})

new Vue({
	//容器作用域
	el: "#user",
	//容器内容
	template: `
		<div style="height:100%; width:100%" id="user_page">
			<router-view></router-view>
		</div>
	`,
	data: {

	},
	store,
	router,
	methods: {},
	components: {
		xuser_pannel,
		xuser_header,
		xuser_order,
		xfooter,
		xuser
	}
})