// 推荐列表组件
<template>
    <div class="recommend">
        <div class="recommend-top">
            <img src="../../images/cart/recommendtop.jpg">
        </div>
        <div class="recommend-content">
            <div v-for="item in goods" :key="item.id" class="goods-item">
                <a href="javascript:void(0);">
                    <div class="goods-img-box">
                        <img :src="item.img">
                    </div>
                    <div class="goods-info">
                        <div class="goods-name" v-text="item.name"></div>
                        <div class="goods-price" v-text="item.price"></div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    .recommend {
        text-align: left;
        padding-bottom: 0.45rem;
        .recommend-top {
            img {
                width: 100%;
                height: 0.6rem;
            }
        }
        .recommend-content {
            display: flex;
            justify-content: space-between; 
            flex-wrap: wrap;
            .goods-item {
                flex: 0 1 49.5%;
                a {
                    display: block;
                    .goods-img-box {
                        position: relative;
                        img {
                            display: block;
                            width: 100%;
                            min-height: 1.78rem;
                        }
                    }
                    .goods-info {
                        padding: 0.09rem 0.13rem 0.11rem;
                        .goods-name {
                            font-size: 0.14rem;
                            white-space: nowrap;
                            color: #3c3c3c;
                        }
                        .goods-price {
                            font-size: 0.16rem;
                            display: inline-block;
                            color: #ff6700;
                            margin-top: 0.05rem;
                            position: relative;
                            padding-left: 0.5em;
                            line-height: 0.5em;
                            &::before {
                                content: "\A5";
                                position: absolute;
                                left: 0;
                                top: 0;
                                font-size: 0.38em;
                                text-decoration: none;
                            }
                        }
                    }
                }
            }
        }
    }
</style>

<script>
    export default {
        data() {
            return {
                goods:[
                    {
                        img:require("../../images/cart/test.webp"),
                        name:"米家运动鞋 男款",
                        price:199
                    },
                    {
                        img:require("../../images/cart/test2.webp"),
                        name:"小米Note 3 128GB",
                        price:2599
                    },
                    {
                        img:require("../../images/cart/test3.webp"),
                        name:"小米6",
                        price:2299
                    },
                    {
                        img:require("../../images/cart/test4.webp"),
                        name:"小米MIX 2 128GB",
                        price:3299
                    }
                ]

            }
        },
    }
</script>