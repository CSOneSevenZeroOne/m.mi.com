<template>
    <div class="autoplay">
        <slider :pages="pages" :sliderinit="sliderinit">
            <!-- slot  -->
        </slider>
    </div>
</template>

<style lang="less" scoped>
.autoplay{
    height: 1.8rem;
    margin-top: .87rem;
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
                            background: 'url('+require('../images/indeximages/auto1.jpg')+')'
                        }
                    },
                    {
                        // title: 'slide2',
                        style: {
                            background: 'url('+require('../images/indeximages/auto2.jpg')+')'
                        }
                    },
                    {
                        // title: 'slide3',
                        style: {
                            background: 'url('+require('../images/indeximages/auto3.jpg')+')',
                        },
                    },
                    {
                        // title: 'slide4',
                        style: {
                            background: 'url('+require('../images/indeximages/auto4.jpg')+')',
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
        mounted(){
        },
        components: {
            slider
        }
    }
</script>