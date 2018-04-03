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

import cart from "./components/cart.vue"; //导入购物车


import xindex from "./components/index-all.vue"; //导入主页


import xorder from "./components/order.vue";
import xuser from "./components/user.vue";
import xfooter from "./components/module/footer.vue";
import xvipcenter from "./components/module/vip/vipcenter.vue";
import aftersale from "./components/module/aftersale/aftersale.vue";
import coupon from "./components/module/coupon.vue";
import services from "./components/module/services.vue";
import mihome from "./components/module/mihome.vue";
import fcodepipe from "./components/module/fcodepipe.vue";
import setting from "./components/module/setting.vue";
const router = new VueRouter({
	routes: [{
			path: '/user', //用户
			component: xuser,
		}, {
			path: "/order", //订单
			component: xorder
		}, {
			path: "/vipcenter", //用户会员中心
			component: xvipcenter
		}, {
			path: "/userafter", //用户售后
			component: aftersale
		}, {
			path: "/cart", //购物车
			component: cart
		}, {
			path: "/",
			component: xindex
		}, {
			path: "/mihome", //mihome
			component: mihome
		},
		{
			path: "/fcodepipe", //fcode通道
			component: fcodepipe
		},
		{
			path: "/setting", //设置
			component: setting
		}, {
			path: "/coupon", //我的优惠
			component: coupon
		}, {
			path: "/services", //服务
			component: services
		}
	]
	// （缩写）相当于 routes: routes
})
const store = new Vuex.Store({
	//消息
	state: {
		order_tab_title: "商品订单",
		index: true, //footer组件隐藏
		order_tab_active: {
			"all": true,
			"wait": false,
			"take": false
		},
		discounts_active: true, //user页面
		index_page: 0,
		header_title: "购物车",
		bMax: false, //默认隐藏遮罩层
		foottab: {
			home_src: require("./images/foottab/home_curr.jpg"),
			home_curr: true,
			classify_src: require("./images/foottab/classify.jpg"),
			classify_curr: false,
			cart_src: require("./images/foottab/cart.jpg"),
			cart_curr: false,
			user_src: require("./images/foottab/user.jpg"),
			user_curr: false
		},//footer组件图片请求和切换
	},
	//获取值得方法
	getters: {}
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