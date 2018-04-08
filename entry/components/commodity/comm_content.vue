<template>
    <div class="comm-content">
        <div class="comm-header">
            <a href="#/cart" class="btn-header">
                <i></i>
            </a>
            <div class="placeholder"></div>
            <a class="btn-header">
                <i></i>
            </a>
        </div>
        <div class="comm-autoplay">
            <slider :pages="pages" :sliderinit="sliderinit">
                <!-- slot  -->
            </slider>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .comm-content {
        position: relative;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        padding-bottom: 0.5rem;
        background: #efefef;
        .comm-header {
            height: 0.5rem;
            background: transparent;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: 10;
            display: flex;
            align-items: center;
            .btn-header {
                display: block;
                width: 0.3rem;
                height: 0.3rem;
                margin: 0 0.1rem;
                color: #ddd;
                background: rgba(0, 0, 0, .6);
                border-radius: 50%;
                i {
                    display: block;
                    width: 0.3rem;
                    height: 0.3rem;
                    transform: scale(0.6);
                    background-image: url("../../images/commodity/btn-header.png");
                    background-color: transparent;
                    background-repeat: no-repeat;
                    background-position: 50%;
                    background-size: cover;
                }
                &:last-of-type {
                    i {
                        background-image: url("../../images/commodity/btn-share.png");
                    }
                }
            }

            .placeholder {
                flex: 1;
            }
        }
        .comm-autoplay {
            background: #ccc;
            width: 100%;
            height: 4rem;
            margin-left: auto;
            margin-right: auto;
            position: relative;
            overflow: hidden;
            z-index: 1;
        }
    }
</style>

<script>
    import slider from 'vue-concise-slider' // 引入slider组件
    export default {
        data() {
            return {
                //图片列表[arr]
                pages: [{
                        // title: 'slide1',
                        style: {
                            background: 'url(' + require('../../images/commodity/mix2.webp') + ')'
                        }
                    },
                    {
                        // title: 'slide2',
                        style: {
                            background: 'url(' + require('../../images/commodity/mix22.jpg') + ')'
                        }
                    },
                    {
                        // title: 'slide3',
                        style: {
                            background: 'url(' + require('../../images/commodity/mix23.webp') + ')',
                        },
                    },
                    {
                        // title: 'slide4',
                        style: {
                            background: 'url(' + require('../../images/commodity/mix23.webp') + ')',
                        },
                    }
                ],
                //滑动配置[obj]
                sliderinit: {
                    currentPage: 0, //当前页码
                    thresholdDistance: 200, //滑动判定距离
                    // thresholdTime: 100, //滑动判定时间
                    // autoplay: 1000, //自动滚动[ms]
                    // loop: true, //循环滚动
                    // direction: 'vertical', //方向设置，垂直滚动，默认水平
                    infinite: 1, //无限滚动前后遍历数
                    slidesToScroll: 1, //每次滑动项数
                }
            }
        },
        components: {
            slider
        }
    }
</script>