<template>

    <div class="nologin">
        <a href="javascript:void(0);">
            <span>登录后享受更多优惠</span>
            <em>去登录</em>
        </a>
    </div>

</template>

<style lang="less">
    .nologin {
        a {
            display: flex;
            height: 0.52rem;
            padding: 0 .28rem 0 .16rem;
            position: relative;
            color: rgba(0, 0, 0, .54);
            span {
                font-size: .16rem;
                color: rgba(0, 0, 0, .87);
                display: block;
                text-align: left;
                line-height: 0.52rem;
                flex: auto;
            }
            em {
                font-style: normal;
                font-size: .12rem;
                line-height: 0.52rem;
                text-align: right;
                flex: auto;
            }
            &::after {
                content: "";
                position: absolute;
                right: 0.16rem;
                top: 50%;
                width: 0.09rem;
                height: 0.09rem;
                border-left: 1px solid currentColor;
                border-top: 1px solid currentColor;
                transform: translate3d(0, -50%, 0) rotate(135deg);
                -webkit-transform: translate3d(0, -50%, 0) rotate(135deg);
            }
        }
    }
</style>

<script>
    export default {

    }
</script>