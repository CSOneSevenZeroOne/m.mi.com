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
            <slider :pages="page" :sliderinit="sliderinit">
                <!-- slot  -->
            </slider>
        </div>
        <div class="activity">
            <img src="https://i8.mifile.cn/b2c-mimall-media/a37c46b43272921033724ab226859e13.jpg" alt="">
        </div>
        <div class="title">
            <div class="title_top">
                <img src="https://i8.mifile.cn/b2c-mimall-media/fa0265bf6fd2f34cfb50e18e7c115d65.png"><span v-html="this.$store.state.goodsinfo.product_info.name"></span></div>
                <div class="title_con" v-html="this.$store.state.goodsinfo.product_info.product_desc">
                    <font color="#ff4a00">「米粉节，一起狂欢8！领券减30元」</font>8天超长待机 / 137g轻巧机身 / 高通骁龙处理器
                </div>
        </div>
        <div class="price">
            ¥<span v-html="this.$store.state.goodsinfo.goods_info[0].price">699</span>
        </div>
        <div class="juan">
            <div class="lingjuan" @click="lingjuan">
                领卷<div><span>红米5A 30元优惠券</span></div>
            </div>
        </div>
        <div class="select">
            <div class="items">
                <div class="con">
                    <div class="sel">
                        <span>已选</span>
                        <em>红米5A 2GB+16GB 铂银灰 x1</em>
                    </div>
                </div>
            </div>
            <div class="line"></div>
            <div class="items">
                <div class="con">
                    <div class="sel">
                        <span>送至</span>
                        <em>北京市 东城区<span>有现货</span></em>
                    </div>
                </div>
            </div>
            <div class="line"></div>
            <div class="sevenday">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAAEEfUpiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTM0Q0I5QTA1QjA3MTFFN0JGODhGRDI4MUI3RDYzMEUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTM0Q0I5QTE1QjA3MTFFN0JGODhGRDI4MUI3RDYzMEUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMzRDQjk5RTVCMDcxMUU3QkY4OEZEMjgxQjdENjMwRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMzRDQjk5RjVCMDcxMUU3QkY4OEZEMjgxQjdENjMwRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkLPAgoAAAOcSURBVHjaYmBAgFAGXAC3DAgABBAzlDYBYhYg/gjiCCEpCENWDZfwQRIMBwggGEMQTSuKQlMslrMhuwJuOxB4Q/kvsTk5DI0Pth8ggJiRBEA6fYFYFojvMWBTjQb8iQkrHiYgcRmLRDiSoxmY0BwZjq7QCY9bwHx9HPazIHPcgZgXiW8GciCIARBAzFjiNwSIdYH4LxB/AeJ/QCwMxBZQjVhDmhnqHiYG4oAD1FVwt4YTqRHZApAXgpmgyWYjERpBlnAgiYG8x8IEZfCiabCApgtYUEsB8Uog/obLBlxesMPjKjP0tB4AxPZEhAM71EJwNDJiUcALDWFmLHKgZH4aWQAggBhx2CIHxGrQvPoLiJ8C8QUg/oOuEN0APSDWBOLXQHwJiN9B868CNMmCEtU6aCLDmsG8CPhfCOp/QXQJd7RcQ0yaYEZOUWEMpAEhWEnABLV9G5EaYba+g+oFp0QWaGokBDygmQgGLgKxIbG5zw5q0V4ksQdALI3NgCCQBBLfCIhFgHgLmjpQ+mDFZgAonm2AmAuIVaB4HRZ1oELmPQsOJ2+A5g0GaC7EBkCl1i1Y7WGGRYEiyIl4wiUcncNOQjrwQi+NeaCGsBCh2QnJewzYDDHDoZEXmmLdCWVnUJgoYREH5cCdQPwZWRAgQKtl89IwEETxrhGEWsEctBJEPagoinhW9GJR/INFwYJFFPTgTajgQeyhFNtiDxY/6tcM/FKWkk0TmoFHoclmZnbevBmTIOQCLb6QMMUculETVIex3MQ43RVMC/5gbXUw+hibIuglfHQE11HBmAjHJRjR4NB3bjSbIJkZwaegbAdiB6C0WhN0Bee8nKVp+Q65nQfEpC9PSpwVwZPgwiXZI5qOg0fBJL5UKuoe5Npijlxl5CxPu6yGcmGZDriiYF455ZG9HriNm/wpBP9AsC14p95Rt/mGVOXHrQHXjvnwHL+NmHd0nVmEOydD2i/05WsAPZiq4/vDccCnTD9k1bGerfNMa1xxbemOVb/nwUqfyFuOAy10YJZuCQjmiNu5gz/dhKVa5lxNA3iBLPrRZyZdlIWCpGXYgER1wSlDPqmp1uyRQMVYfx6jC+WUH0y7zpRI5ky7wAwwuIT8Nqnnb0aOx1hMivCn3x3GQbh9tnnV/psRbkQz3kF8lOCXuocknYZ6I5vwI1x+mtS9RZt9WawusD0F6H6ofipE9y51NSm1PKATfLIKd54eHfAKqetJh9g/yJmqAGrAgKoAAAAASUVORK5CYII=" alt=""><i>支持7天无理由退货</i>
            </div>
        </div>
        <div class="comment">
            <div class="comment_header">
                <a href="javascript:void(0);">
                    <span>用户评价(<i>12595</i>)</span>
                    <span><em>97.6%</em>满意 ></span>
                </a>
            </div>
            <div class="comment_con">
                <div class="items_header">
                    <!-- <img src="" alt=""> -->
                </div>
            </div>
        </div>

        <div class="weui-mask" id="lingjuanm" style="display: none"></div>
        <div class="weui-actionsheet" id="iosActionsheet">
            <div class="weui-actionsheet__title">
                <div class="describe">
                  <!-- <img src="" alt=""> -->
                </div>
            </div>
            <div class="select_type">
                
            </div>
            <div class="weui-actionsheet__action">
                <div class="weui-actionsheet__cell" id="lingjuanCancel">取消</div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import slider from "vue-concise-slider"; // 引入slider组件
import weui from "weui";
import $ from "jquery";
export default {
  data() {
    return {
      //图片列表[arr]
      //滑动配置[obj]
      sliderinit: {
        currentPage: 0, //当前页码
        thresholdDistance: 200, //滑动判定距离
        // thresholdTime: 100, //滑动判定时间
        // autoplay: 1000, //自动滚动[ms]
        // loop: true, //循环滚动
        // direction: 'vertical', //方向设置，垂直滚动，默认水平
        infinite: 1, //无限滚动前后遍历数
        slidesToScroll: 1 //每次滑动项数
      }
    };
  },
  props:["page"],
  methods:{
    lingjuan(){
      var $lingjuan = $("#lingjuanm");
      var $lingjuanm = $("#iosActionsheet");
      function hideActionSheet() {
        $lingjuanm.removeClass("weui-actionsheet_toggle");
        $lingjuan.fadeOut(200);
      }
      $lingjuanm.on("click", hideActionSheet);
      $("#lingjuanCancel").on("click", hideActionSheet);
      $(".juan").on("click", function() {
        //console.log(222);
        $lingjuanm.addClass("weui-actionsheet_toggle");
        $lingjuan.fadeIn(200);
      });
      // console.log(this.page);
    }
  },
  mounted(){
    
  },
  components: {
    slider
  }
};
</script>

<style lang="less" scoped>
.comment {
  margin-top: 0.08rem;
  background: #fff;
  .comment_header {
    a {
      display: flex;
      justify-content: space-between;
      padding: 0.16rem 0;
      margin: 0 0.16rem;
      font-size: 0.12rem;
      span {
        color: rgba(0, 0, 0, 0.54);
        em {
          color: #ff6700;
        }
      }
    }
  }
}
.price {
  color: #ff6700;
  font-size: 0.24rem;
  font-weight: 700;
  background: #fff;
  padding: 0.08rem 0.16rem 0;
}
.select {
  margin-top: 0.05rem;
  background: #fff;
  .line {
    height: 1px;
    margin: 0 0.16rem;
    background: #f8f8f8;
  }
  .items {
    position: relative;
    padding: 0.1rem 0.16rem 0;
    background: #fff;
    border-top: 1px;
    text-align: left;
    padding: 0.08rem 0.16rem;
    .sel {
      background: url("../../images/user/icon/xiaomi_03.jpg") no-repeat right
        center;
      span {
        width: 0.41rem;
        font-size: 0.12rem;
        color: rgba(0, 0, 0, 0.54);
        line-height: 0.2rem;
        margin-right: 0.15rem;
      }
      em span {
        color: rgba(0, 0, 0, 0.54);
      }
    }
  }
  .sevenday {
    color: rgba(0, 0, 0, 0.54);
    font-size: 0.1rem;
    padding: 0.08rem 0.58rem;
    img {
      height: 0.1rem;
      width: auto;
      margin-right: 0.05rem;
      position: relative;
      top: 0.01rem;
    }
  }
}

i,
em {
  font-style: normal;
}
.juan {
  background: #fff;
  overflow: hidden;
}
.lingjuan {
  color: rgba(0, 0, 0, 0.54);
  display: flex;
  position: relative;
  margin: 0.1rem 0.16rem 0;
  background: url("../../images/user/icon/xiaomi_03.jpg") no-repeat right center
    #fff;
  border-top: 1px;
  text-align: left;
  padding: 0.08rem 0;
  div {
    color: #fff;
    margin-right: 0.08rem;
    margin-left: 0.08rem;
    position: relative;
    height: 0.13rem;
    span {
      background: #f66;
      display: inline-block;
      max-width: 1.35rem;
      height: 0.11rem;
      font-size: 0.09rem;
      padding: 0.03rem 0.048rem 0.03rem;
      white-space: nowrap;
      overflow-x: hidden;
      text-overflow: ellipsis;
      margin-left: 0.1rem;
    }
  }
}
.activity {
  img {
    width: 100%;
    height: auto;
    display: block;
  }
}
.title {
  background: #fff;
  text-align: left;
  padding: 0.1rem 0.16rem 0;
  .title_top {
    font-size: 0.18rem;
    line-height: 0.7em;
    img {
      height: 0.21rem;
      width: auto;
      line-height: 0.18rem;
      margin-right: 0.05rem;
      position: relative;
      top: 0.04rem;
    }
  }
  .title_con {
    font-size: 0.12rem;
    line-height: 1.5em;
    color: rgba(0, 0, 0, 0.54);
    margin-top: 0.1rem;
  }
}
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
      background: rgba(0, 0, 0, 0.6);
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

