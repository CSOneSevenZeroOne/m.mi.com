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
            <div class="lingjuan" @click="lingjuan(1)">
                领卷<div><span v-html="this.$store.state.goodsinfo.coupon_info.act_name"></span></div>
            </div>
        </div>
        <div class="select">
            <div class="items"  @click="lingjuan(2)">
                <div class="con">
                    <div class="sel">
                        <span>已选</span>
                        <em v-text="this.$store.state.goodsinfo.goods_info[0].name+' X1'"></em>
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
       <comments />
       <info />
        <div class="weui-mask lingjuanm" style="display: none"></div>
        <div class="weui-actionsheet iosActionsheet" >
              <div v-if="this.fidetype==1">
                <div class="weui-actionsheet__title">
                  <div class="describe" style="text-align:center">
                    <!-- <img src="" alt=""> -->
                    优惠促销
                  </div>
              </div>
              <div class="weui-actionsheet__action" style="margin-top:0">
                  <p style="line-height:.5rem; text-align:center">
                      暂时没有优惠哦!
                  </p>
              </div>
              </div>
              <div v-else>
                <div class="weui-actionsheet__title goods_sel" style="height:1rem;margin-bottom:0">
                  <div class="describe goodsinfo" style="height:1rem; text-align:left">
                    <img :src="this.$store.state.goodsinfo.goods_info[0].img_url" />
                    <div class="ginfo">
                      <p class="price" v-html="'¥ '+this.select.price"></p>
                      <p class="info" v-html="this.select.cart_name+' '+this.select.type.product+' '+this.select.type.color+' X'+this.select.num"></p>
                    </div>
                  </div>
                </div>
                <div class="weui-actionsheet__action" style="margin-top:0; position:relative; padding-bottom:.5rem;">
                    <div style="padding-top:.2rem; padding-left:.1rem; display:flex; flex-wrap: wrap;" v-for="item in this.$store.state.goodsinfo.buy_option">
                      <p class="item_title" v-text="item.name"></p>
                      <div v-for="(list,index) in item.list" :style="{width:list.price?'80%':'25%'}":key="index">
                        <div v-if="list.price" class="listitem">
                          <div style="width:100%; display:flex;padding: .08rem; margin:.08rem .1rem; justify-content:space-between;" class="item" :class='{curr:selcurr==index?true:false}' @click="selectgoods(list,index)">
                            <p v-text="list.name"></p>
                            <p v-text="list.price"></p>
                          </div>
                         </div> 
                        <div v-else class="itemcolor" :class='{curr:selcolor==index?true:false}' @click="selectcolor(list,index)">
                            <p v-text="list.name"></p>
                       </div>
                      </div>
                    </div>
                    <div class="buynum">
                        <p class="item_title" style="width:70%">购买数量</p>
                          <div class="input">
                                <div :class="{'input-sub':true,'active':selbool[0]}" @click="add(true)">
                                    <i class="image-icons"></i>
                                </div>
                                <div class="input-num">
                                    <span v-text="selnum"></span>
                                </div>
                                <div :class="{'input-add':true,'active':selbool[1]}" @click="add(false)">
                                    <i class="image-icons"></i>
                                </div>
                            </div>  
                      </div>
                      <div class="addcart" style="width:100%">
                        <a href="javascript:void(0)">加入购物车</a>
                      </div>
                </div>
              </div>
              <!-- 取消 -->
            <div class="cancelpanel" @click="calcel">
                <img :src='require("../../images/commodity/down.png")' alt="">
            </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import slider from "vue-concise-slider"; // 引入slider组件
import weui from "weui";
import $ from "jquery";
import comments from "./comm_comment.vue";
import info from "./comm_info.vue";
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
      },
      fidetype: 1,
      selcurr: 0,
      selcolor: 0,
      select: {},
      selnum: 1,
      selbool: [false, true]
    };
  },
  props: ["page"],
  methods: {
    lingjuan(num) {
      this.fidetype = num;
      //console.log(this.fidetype);
      var $lingjuan = $(".lingjuanm");
      var calcel = $(".cancelpanel");
      var $lingjuanm = $(".iosActionsheet");
      $lingjuanm.addClass("weui-actionsheet_toggle");
      $lingjuan.fadeIn(200);
      // console.log(this.page);
    },
    calcel() {
      var $lingjuan = $(".lingjuanm");
      var $lingjuanm = $(".iosActionsheet");
      $lingjuanm.removeClass("weui-actionsheet_toggle");
      $lingjuan.fadeOut(200);
    },
    selectgoods(item, index) {
      this.selcurr = index;
      this.select.price = item.price;
      this.select.type.product = item.name;
    },
    selectcolor(item, index) {
      this.selcolor = index;
      this.select.type.color = item.name;
    },
    add(bool) {
      if (!bool) {
        this.selnum++;
        if (this.selnum >= 2) {
          this.selnum = 2;
          this.selbool = [true, false];
        } else {
          this.selbool = [false, true];
        }
      } else {
        this.selnum--;
        if (this.selnum <= 1) {
          this.selnum = 1;
          this.selbool = [false, true];
        } else {
          this.selbool = [true, false];
        }
      }
      this.select.num=this.selnum;
    }
  },
  mounted() {
    this.select = {
      num: 1,
      cart_name: this.$store.state.goodsinfo.product_info.name,
      type: {
        product: this.$store.state.goodsinfo.buy_option[0].list[0].name,
        color: this.$store.state.goodsinfo.buy_option[1].list[0].name
      },
      price: parseInt(this.$store.state.goodsinfo.buy_option[0].list[0].price)
    };
  },
  components: {
    slider,
    comments,
    info
  }
};
</script>

<style lang="less" scoped>
.itemcolor {
  border: 1px solid #ddd;
  text-align: center;
  padding: 0.08rem;
  margin: 0.08rem 0.1rem;
}
.curr {
  border: 1px solid #f56600;
  color: #f56600;
}
.listitem {
  width: 100%;
  .item {
    border: 1px solid #ddd;
  }
  .curr {
    color: #f56600 !important;
    border: 1px solid #f56600 !important;
  }
}
.buynum {
  padding: 0.1rem 0.1rem;
  justify-content: space-between;
  display: flex;
  .input {
    display: inline-block;
    border: 1px solid #eee;
    .image-icons {
      opacity: 0.3;
      width: 0.3rem;
      height: 0.3rem;
      background-size: 0.15rem 0.15rem;
      display: inline-block;
      background-color: transparent;
      background-repeat: no-repeat;
      background-position: 50%;
    }
    .active {
      background-color: #f4f4f4;
      i {
        opacity: 1;
      }
    }
    .input-sub {
      display: inline-block;
      width: 0.3rem;
      height: 0.3rem;
      position: relative;
      vertical-align: middle;
      background-color: #fafafa;
      text-align: center;

      i {
        background-image: url("../../images/cart/icon-sub.png");
      }
    }
    .input-num {
      display: inline-block;
      vertical-align: middle;
      padding: 0 0.06rem;
      line-height: 0.3rem;
      text-align: center;
      font-size: 0.16rem;
    }
    .input-add {
      display: inline-block;
      width: 0.3rem;
      height: 0.3rem;
      position: relative;
      vertical-align: middle;
      background-color: #fafafa;
      text-align: center;
      .active {
        background-color: #f4f4f4;
        i {
          opacity: 1;
        }
      }
      i {
        background-image: url("../../images/cart/icon-add.png");
      }
    }
  }
  .delete {
    float: right;
    margin-right: 0.1rem;
    display: block;
    i {
      width: 0.3rem;
      height: 0.3rem;
      display: inline-block;
      background-color: transparent;
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: cover;
      background-image: url("../../images/cart/delete.png");
    }
  }
}
.item_title {
  position: relative;
  line-height: 0.12rem;
  font-size: 0.12rem;
  padding: 0.1rem 0;
  color: rgba(0, 0, 0, 0.87);
  width: 100%;
}
.addcart {
  position: absolute;
  bottom: 0;
  a {
    display: block;
    outline: 0;
    background: #ff6700;
    color: #fff;
    text-align: center;
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.14rem;
  }
}
.goodsinfo {
  display: flex;
  .ginfo {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    .price {
      font-weight: normal;
      font-size: 0.16rem;
      margin-top: 0.2rem;
      line-height: 0.2rem;
      padding-left: 0;
    }
    .info {
      font-size: 0.14rem;
      color: rgba(0, 0, 0, 0.87);
      line-height: 0.2rem;
      margin-bottom: 0.3rem;
    }
  }
}
.goods_sel {
  height: 0.1rem;
  img {
    height: 100%;
    width: auto;
  }
}
.cancelpanel {
  width: 0.2rem;
  height: 0.2rem;
  position: absolute;
  right: 0.1rem;
  top: 0.1rem;
  img {
    width: 0.2rem;
    height: 0.2rem;
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

