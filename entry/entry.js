//npm
//import Vue from "vue";
//手动下载
import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex)
//路由管理
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Mint from 'mint-ui';
Vue.use(Mint);

require("./css/base.css");

import cart from "./components/cart.vue";//导入购物车


import xindex from "./components/index-all.vue";//导入主页


import xorder from "./components/order.vue";
import xuser from "./components/user.vue";
import xfooter from "./components/module/footer.vue";
import xvipcenter from "./components/module/vip/vipcenter.vue";
import aftersale from "./components/module/aftersale/aftersale.vue";
import coupon from "./components/module/coupon.vue";
import services from "./components/module/services.vue";
import mihome from "./components/module/mihome.vue"
const router = new VueRouter({
	routes: [{
		path: '/user',//用户
		component: xuser,
		children:[{
			path:"coupon",
			component: coupon
		},{
			path:"services",
			component: services
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
	},{
		path: "/cart",//购物车
        component: cart
    },{
		path:"/",
		component:xindex
	},{
		path:"/mihome",
		component:mihome
	}]
	// （缩写）相当于 routes: routes
})
const store = new Vuex.Store({
	//消息
	state: {
		order_tab_title: "商品订单",
		index:true,//显示user页面
		order_tab_active:{"all":true,"wait":false,"take":false},
		discounts_active:true,
		index_page: 0
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
            <xfooter />
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