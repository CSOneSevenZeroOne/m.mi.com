// 购物车入口文件

// 导入模块
import Vue from "vue";
require("./css/base.css");
import xheader from "./components/module/header.vue";
import xfooter from "./components/module/footer.vue";

import xcart_unlogin from "./components/cart_unlogin.vue";//未登录状态
import xcart_empty from "./components/cart_empty.vue";//空购物车



// 创建实例
new Vue({
    el: "#cart",
    template:`
        <div style="height:100%; width:100%" id="cart_page">
            <xheader />
            <xcart_unlogin />
            <xcart_empty />
            <xfooter />
        </div>
    `,
    components:{
        xheader,
        xfooter,
        xcart_unlogin,
        xcart_empty

    },
    methods:{
        
    },
    mounted(){
        
    }

});