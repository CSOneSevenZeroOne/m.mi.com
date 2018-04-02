// 空购物车组件
<template>
    <div class="empty-cart">
        <a href="javascript:void(0);">
            <span>购物车还是空的</span>
            <em>去逛逛1</em>
        </a>
    </div>
</template>

<style lang="less">
    .empty-cart {
        background: #ebebeb;
        padding: .1rem;
        display: flex;
        justify-content: center;
        span {
            display: inline-block;
            line-height: .4rem;
            background-size: auto 100%;
            padding: 0 .08rem 0 .48rem;
            color: rgba(0, 0, 0, .27);
            background: url("../images/cart/cartbg.png") no-repeat 0;
            background-size: auto 100%;
        }
        em {
            display: inline-block;
            border: 1px solid rgba(0, 0, 0, .15);
            box-sizing: border-box;
            height: 0.25rem;
            line-height: 0.25rem;
            padding: 0 0.12rem;
            color: rgba(0, 0, 0, .87);
            font-style: normal;
        }
    }
</style>

<script>
    export default {

    }
</script>