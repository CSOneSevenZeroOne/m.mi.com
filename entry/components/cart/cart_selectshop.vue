<template>
    <div class="cart-selectshop" @touchmove.prevent>
        <div class="mask"></div>
        <div class="interface">
            <div class="close">
                <i></i>
            </div>
            <div class="title">购买服务</div>
            <div class="content">
                <div class="service">
                    <span>保证服务</span>
                    <a href="https://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/4a15d767c1fe.html">
                        <img :src="require('../../images/cart/problem.png')">
                    </a>
                </div>
                <div class="service-price border">意外保障服务 41 元</div>
                <div class="choosebox">
                    <div class="choose checked"></div>
                    <span>我已阅读</span>
                    <a href="javascript:void(0);">保险条款 | </a>
                    <a href="javascript:void(0);">投保须知 | </a>
                    <a href="javascript:void(0);">常见问题</a>
                </div>
            </div>
            <div class="button">
                <p>已选择1项服务</p>
                <div class="determine">确定</div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .cart-selectshop {
        .mask {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, .8);
            z-index: 100;
        }
        .interface {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            box-sizing: border-box;
            background-color: #fff;
            color: #000;
            padding: 0.16rem 0.16rem 0.635rem;
            z-index: 300;
            min-height: 2.5rem;
            max-height: 4.8rem;
            text-align: left;
            .close {
                position: absolute;
                top: 0.08rem;
                right: 0.08rem;
                width: 0.25rem;
                height: 0.25rem;
                i {
                    width: 0.2rem;
                    height: 0.2rem;
                    background-image: url("../../images/cart/close.png");
                    display: inline-block;
                    background-color: transparent;
                    background-repeat: no-repeat;
                    background-position: 50%;
                    background-size: cover;
                }
            }
            .title {
                color: rgba(0, 0, 0, .87);
                font-size: 0.16rem;
                text-align: center;
                padding: 0.12rem 0;
            }
            .content {
                padding-top: 0.1rem;
                position: relative;
            }
            .service {
                position: relative;
                padding-bottom: 0.08rem;
                line-height: 0.12rem;
                font-size: 0.12rem;
                color: rgba(0, 0, 0, .87);
                a {
                    display: inline-block;
                    width: 0.14rem;
                    height: 0.14rem;
                    margin-left: 0.05rem;
                    img {
                        width: auto;
                        height: 90%;
                    }
                }
            }
            .service-price {
                color: #f56600;
                height: 0.36rem;
                line-height: 0.36rem;
                width: 49%;
                box-sizing: border-box;
                padding: 0 0.04rem;
                text-align: center;
                margin: 0.08rem 0.08rem 0 0;
            }
            .border {
                border-top: 1px solid rgba(245, 102, 0, 0.6);
                border-left: 1px solid rgba(245, 102, 0, 0.6);
                border-bottom: 1px solid rgba(245, 102, 0, 0.3);
                border-right: 1px solid rgba(245, 102, 0, 0.3);
                border-radius: 2px;
            }
            .choosebox {
                margin-top: 0.08rem;
                line-height: 0.2rem;
                text-align: left;
                .choose {
                    display: inline-block;
                    width: 0.3rem;
                    height: 0.2rem;
                    position: relative;
                    top: 0.05rem;
                }
                .unchecked {
                    background: url("../../images/cart/unchecked.png") 50% 50% no-repeat;
                    background-size: 0.2rem 0.2rem;
                }
                .checked {
                    background: url("../../images/cart/checked.png") 50% 50% no-repeat;
                    background-size: 0.2rem 0.2rem;
                }
                a {
                    color: #f56600;
                }
            }
            .button {
                display: flex;
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                line-height: 0.5rem;
                p {
                    padding-left: 0.16rem;
                    color: rgba(0, 0, 0, .54);
                    flex: auto;
                }
                .determine {
                    width: 50%;
                    background-color: #f56600;
                    color: #fff;
                    font-size: 0.16rem;
                    text-align: center;
                }
            }
        }
    }
</style>

<script>
    export default {

    }
</script>