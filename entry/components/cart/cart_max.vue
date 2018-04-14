<template>
    <div class="overlayer" @touchmove.prevent>
        <div class="warning-box">
            <div class="warning">!</div>
            <div class="warning-text">已达到最大购买数量</div>
        </div>
    </div>
</template>

<style lang="less">
    .overlayer {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 200;
        .warning-box {
            width: 1.6rem;
            height: 1.25rem;
            background: rgba(0, 0, 0, 0.6);
            border-radius: 0.1rem;
            position: fixed;
            top:2.5rem;
            left: 0;
            right: 0;
            margin: auto;
            .warning {
                width: 0.40rem;
                height: 0.40rem;
                border: 0.02rem solid #fff;
                border-radius: 50%;
                position: absolute;
                top: 0.2rem;
                left: 0;
                right: 0;
                margin: auto;
                font-size: 0.2rem;
                color:#fff;
                text-align: center;
                line-height: 0.42rem;
            }
            .warning-text {
                width: 100%;
                font-size: 0.16rem;
                color:#fff;
                text-align: center;
                position: absolute;
                bottom: 0.25rem;
            }
        }
    }
</style>

<script>
    export default {

    }
</script>