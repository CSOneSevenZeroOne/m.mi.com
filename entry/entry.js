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
import commodity from "./components/commodity.vue";//导入详情页
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
import login_phone from "./components/login_or_register/login_phone.vue";
import login_user from "./components/login_or_register/login_user.vue";
import register from "./components/login_or_register/register.vue";

import classfiy from "./components/classfiy.vue"; // 导入分类页

import search from "./components/public/search.vue";
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
        }, {
            path: "/classfiy", //分类
            component: classfiy
        },
        {
            path: "/search", //搜索
            component: search
        }, {
            path: "/commodity", //详情页
            component:commodity,
        }
        , {
            path: "/loginphone", //手机登录
            component: login_phone
        }
        , {
             path: "/loginuser", //用户登录
             component: login_user
         }
         , {
            path: "/register", //注册
            component: register
        }
    ]
    // （缩写）相当于 routes: routes
});
const store = new Vuex.Store({
    //消息
    state: {
        order_tab_title: "商品订单",
        order_tab_active: {
            "all": true,
            "wait": false,
            "take": false
        },
        discounts_active: true,
		index:true,//底部显示
        index_page: 0,
        header_title: "购物车",
        bMax: false, //默认隐藏遮罩层
        bEmpty: true, //默认空购物车
        bFooter: true, //默认底部为导航
        total: 0, //购入商品总数，默认为0
        prices: 0, //所购商品总价，默认为0
        foottab: { //footer组件图片请求和切换
            home_src: require("./images/foottab/home_curr.jpg"),
            home_curr: true,
            classify_src: require("./images/foottab/classify.jpg"),
            classify_curr: false,
            cart_src: require("./images/foottab/cart.jpg"),
            cart_curr: false,
            user_src: require("./images/foottab/user.jpg"),
            user_curr: false
        },
        bClose: true, //默认不显示选购窗口
		homedata:[],//主页数据
		navlist:[],
        homeimg:[],
        goodsinfo:{},
        pages:[],
        successbool:false,//加入购物车成功,
        searchlist:[],//所有搜索
        searchres:[],//搜索结果
        searchstatus:true,//搜索状态
    },
    //获取值得方法
    getters: {}
})

new Vue({
    //容器作用域
    el: "#app",
    //容器内容
    template: `
		<div style="height:100%; width:100%" id="user_page">
            <router-view></router-view>
            <xfooter v-show='this.$store.state.bFooter'/>
		</div>
	`,
    data: {

    },
    store,
    router,
    methods: {
	},
	mounted() {
		var str = window.location.href;
		if (str.split("#")[1] == "/") {
			this.$store.state.foottab = {
				home_src: require("./images/foottab/home_curr.jpg"),
				home_curr: true,
				classify_src: require("./images/foottab/classify.jpg"),
				classify_curr: false,
				cart_src: require("./images/foottab/cart.jpg"),
				cart_curr: false,
				user_src: require("./images/foottab/user.jpg"),
				user_curr: false
			}
		} else if (str.split("#")[1] == "/cart") {
			this.$store.state.foottab = {
				home_src: require("./images/foottab/home.jpg"),
				home_curr: false,
				classify_src: require("./images/foottab/classify.jpg"),
				classify_curr: false,
				cart_src: require("./images/foottab/cart_curr.jpg"),
				cart_curr: true,
				user_src: require("./images/foottab/user.jpg"),
				user_curr: false
			}
		} else if (str.split("#")[1] == "/classfiy") {
			this.$store.state.foottab = {
				home_src: require("./images/foottab/home.jpg"),
				home_curr: false,
				classify_src: require("./images/foottab/classify_curr.jpg"),
				classify_curr: true,
				cart_src: require("./images/foottab/cart.jpg"),
				cart_curr: false,
				user_src: require("./images/foottab/user.jpg"),
				user_curr: false
			}
		} else {
			this.$store.state.foottab = {
				home_src: require("./images/foottab/home.jpg"),
				home_curr: false,
				classify_src: require("./images/foottab/classify.jpg"),
				classify_curr: false,
				cart_src: require("./images/foottab/cart.jpg"),
				cart_curr: false,
				user_src: require("./images/foottab/user_curr.jpg"),
				user_curr: true
			}
		}
	},
	components: {
		xfooter
	}
});
