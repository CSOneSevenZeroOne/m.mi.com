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
import xfooter from "./components/module/footer.vue";
import xvipcenter from "./components/module/vip/vipcenter.vue"
import aftersale from "./components/module/aftersale/aftersale.vue"
import coupon from "./components/module/coupon.vue"
const router = new VueRouter({
	routes: [{
		path: '/user',//用户
		component: xuser,
		children:[{
			path:"coupon",
			component: coupon
		}]
	}, {
		path: "/order",//订单
		component: xorder
	}, {
		path: "/vipcenter",//用户会员中心
		component: xvipcenter
	}, {
		path: "/userafter",//用户售后
		component: aftersale
	}]
	// （缩写）相当于 routes: routes
})
const store = new Vuex.Store({
	//消息
	state: {
		order_tab_title: "商品订单",
		index:true,
		order_tab_active:{"all":true,"wait":false,"take":false},
		discounts_active:true
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
			<xfooter />
			<router-view></router-view>
		</div>
	`,
	data: {

	},
	store,
	router,
	methods: {},
	components: {
		xfooter,
	}
})