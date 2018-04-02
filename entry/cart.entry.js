// 购物车入口文件

// 导入模块
import Vue from "vue";
require("./css/base.css");
import xheader from "./components/module/header.vue";
import xfooter from "./components/module/footer.vue";

import cart_unlogin from "./components/cart_unlogin.vue";//未登录状态
import cart_empty from "./components/cart_empty.vue";//空购物车
import cart_list from "./components/cart_list.vue";//购物车列表
import cart_recommend from "./components/cart_recommend.vue";//推荐列表



// 创建实例
new Vue({
    el: "#cart",
    template:`
        <div style="height:100%; width:100%" id="cart_page">
            <xheader />
            <cart_unlogin />
            <cart_list />
            <cart_recommend />
        </div>
    `,
    components:{
        xheader,
        xfooter,
        cart_unlogin,
        cart_empty,
        cart_recommend,
        cart_list
    },
    methods:{
        
    },
    mounted(){
        
    }

});