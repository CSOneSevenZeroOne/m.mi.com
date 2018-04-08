<template>
    <div class="cart-checkout">
        <div class="left-price">
            <span v-text="'共'+this.$store.state.total+'件 金额：'"></span>
            <br/>
            <strong v-text="this.$store.state.prices"></strong>
            <span>元</span>
        </div>
        <a href="#/classfiy" @click="()=>{this.$store.state.bFooter=true}">继续购物</a>
        <a href="javascript:void(0);">去结算</a>
    </div>
</template>

<style lang="less">
    .cart-checkout {
        position: fixed;
        bottom: 0;
        width: 100%;
        background: #fff;
        z-index: 300;
        box-shadow: 0 3px 14px 2px rgba(0, 0, 0, .12);
        display: flex;
        .left-price {
            font-size: 0.13rem;
            color: #999;
            width: 100%;
            text-align: center;
            padding-top: 0.075rem;
            flex: auto;
            strong {
                font-size: 0.2rem;
                color: #ff5722;
                margin-right: 0.2em;
            }
        }
        a {
            display: block;
            width: 100%;
            text-align: center;
            height: 0.5rem;
            line-height: 0.5rem;
            font-size: 0.14rem;
            flex: auto;
        }
        a:first-of-type {
            background: #f4f4f4;
            color: #333;

        }
        a:last-of-type {
            background: #ff6700;
            color: #fff;
        }
    }
</style>

<script>
    export default {

    }
</script>