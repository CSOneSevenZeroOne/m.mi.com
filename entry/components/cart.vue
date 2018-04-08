<template>
    <div id="cart">
        <xheader/>
        <cart-max v-if="this.$store.state.bMax"/>
        <cart-unlogin/>
        <cart-empty v-if="this.$store.state.bEmpty"/>
        <cart-list v-show="!this.$store.state.bEmpty"/>
        <cart-recommend/>
        <cart-checkout v-if="!this.$store.state.bEmpty"/>
        <cart-selectshop/>
    </div>
</template>

<style lang="less" scoped>
</style>

<script>
    import xheader from "./module/header.vue"; //公共头
    import cart_unlogin from "./cart/cart_unlogin.vue"; //未登录状态
    import cart_empty from "./cart/cart_empty.vue"; //空购物车
    import cart_list from "./cart/cart_list.vue"; //购物车列表
    import cart_recommend from "./cart/cart_recommend.vue"; //推荐列表
    import cart_max from "./cart/cart_max.vue"; //物品超出上限
    import cart_checkout from "./cart/cart_checkout.vue"; //物品总价
    import cart_selectshop from "./cart/cart_selectshop.vue"; //选购

    export default {
        components: {
            xheader,
            "cart-unlogin": cart_unlogin,
            "cart-empty": cart_empty,
            "cart-list": cart_list,
            "cart-recommend": cart_recommend,
            "cart-max":cart_max,
            "cart-checkout":cart_checkout,
            "cart-selectshop":cart_selectshop
        },
    }
</script>