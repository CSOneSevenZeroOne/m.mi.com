<template>
    <div class="comm-footer">
        <a href="#/" class="btn-home">
            <i></i>
            <span>首页</span>
        </a>
        <a href="#/cart" class="btn-cart">
            <i></i>
            <span>购物车</span>
        </a>
        <a href="javascript:void(0);" class="btn-buy">加入购物车</a>
    </div>
</template>

<style lang="less" scoped>
    .comm-footer {
        height: 0.52rem;
        background: #fff;
        box-shadow: 0 3px 14px 2px rgba(0, 0, 0, .12);
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 500;
        display: flex;
        flex-wrap: nowrap;
        .btn-home,
        .btn-cart {
            display: block;
            text-decoration: none;
            width: 1.3rem;
            color: rgba(0, 0, 0, .54);
            text-align: center;
            i {
                background-image: url("../../images/commodity/comm-home.png");
                display: block;
                width: 0.2rem;
                height: 0.2rem;
                margin: 0.05rem auto 0.05rem;
                background-color: transparent;
                background-repeat: no-repeat;
                background-position: 50%;
                background-size: cover;
            }
        }
        .btn-cart {
            i {
                background-image: url("../../images/commodity/comm-cart.png")
            }
        }
        .btn-buy {
            flex: auto;
            display: block;
            outline: 0;
            background: #ff6700;
            color: #fff;
            text-align: center;
            width: 100%;
            line-height: 0.5rem;
            font-size: 0.14rem;
        }
    }
</style>

<script>
    export default {

    }
</script>