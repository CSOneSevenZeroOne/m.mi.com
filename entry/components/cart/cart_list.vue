<template>
    <div class="cart-list">
        <ul v-if="product">
            <li v-for="item in this.product" :key="item.id" class="item">
                <div class="content">
                    <div class="choose" :class="item.isChecked?'checked':'unchecked'" @click="checked(item)"></div>
                    <a href="#/commodity" class="imgProduct">
                        <img :src="item.src">
                    </a>
                    <div class="info">
                        <div class="name" v-text="item.name"></div>
                        <div class="price">
                            <span>售价</span>
                            <span v-text="item.price+'元'"></span>
                        </div>
                        <div class="num">
                            <div class="input">
                                <div class="input-sub" :class="item.num==1?'':'active'" @click="sub(item)">
                                    <i class="image-icons"></i>
                                </div>
                                <div class="input-num">
                                    <span v-text="item.num"></span>
                                </div>
                                <div class="input-add" :class="item.num==item.max?'':'active'" @click="add(item)">
                                    <i class="image-icons active"></i>
                                </div>
                            </div>
                            <div class="delete" @click="del(item)">
                                <i></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="append" v-show="item.isChecked">
                    <div class="i1">
                        <img :src="imgSrc">
                    </div>
                    <div class="i2">
                        <span v-text="' 意外保障服务 '+item.insurance+'元'"></span>
                    </div>
                    <div class="i3" @click="open(item.insurance)">
                        <span>选购</span>
                    </div>
                </div>
            </li>
        </ul>
        <div class="point-box">
            <div class="point">
                <span class="act act-gift">赠品</span>
                <span>赠米粉卡</span>
            </div>
            <div class="point">
                <span class="act act-freeShipping">包邮</span>
            </div>
            <div class="point">
                <p>温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</p>
            </div>
        </div>
    </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      imgSrc: [require("../../images/cart/insurance.png")],
      product: []
    };
  },
  methods: {
    //判断购物车是否为空,底部是否为结算模块
    isEmpty() {
      if (this.product.length != 0) {
        //若有商品列表
        this.$store.state.bEmpty = false;
        this.$store.state.bFooter = false;
      } else {
        this.$store.state.bEmpty = true;
        this.$store.state.bFooter = true;
      }
    },
    // 更改选中状态
    checked(item) {
      item.isChecked = !item.isChecked;
      item.num = 0;
      this.calc();
    },
    // 减少物品
    sub(item) {
      if (item.num != 1) {
        //若物品数不为1
        item.num--;
        this.calc();
      }
    },
    // 增加物品
    add(item) {
      if (item.num != item.max) {
        //若物品数不为1
        item.num++;
        this.calc();
      } else {
        //弹出遮罩层
        this.$store.state.bMax = true;
        var timer = setTimeout(() => {
          this.$store.state.bMax = false;
          clearTimeout(timer);
        }, 2000);
      }
    },
    // 删除物品
    del(item) {
      this.product.splice(item, 1);
      this.isEmpty();
      this.calc();
    },
    // 计算数量价格
    calc() {
      this.$store.state.total = 0;
      this.$store.state.prices = 0;
      for (const item of this.product) {
        this.$store.state.total += item.num;
        this.$store.state.prices += item.num * item.price;
      }
    },
    // 打开选购窗口
    open(insurance) {
      this.$store.state.bClose = false;
    }
  },
  mounted() {
    this.isEmpty();
    this.calc();
    var self = this;
    setTimeout(() => {
        console.log(this.product)
    }, 1000);
    if (sessionStorage.getItem("cart")) {
      var arr = JSON.parse(sessionStorage.getItem("cart") || "[]");
      var current = [];
      if (arr) {
        for (var i = 0; i < arr.length; i++) {
          var obj = {
            src: arr[i].imgsrc,
            name:
              arr[i].cart_name +
              JSON.parse(arr[i].type).product +
              JSON.parse(arr[i].type).color,
            price: arr[i].price,
            num: arr[i].num,
            max: 2,
            insurance: 59,
            isChecked: true
          };
          current.push(obj);
        }
        this.product = current;
      }
    } else {
      $.ajax({
        url: "http://localhost:6789/cart/selectcart",
        type: "post",
        data: {
          user_name: sessionStorage.getItem("userinfo")
        },
        dataType: "JSON"
      }).then(function(res) {
        var arr = res;
        if (arr) {
          var current = [];
          for (var i = 0; i < arr.length; i++) {
            var obj = {
              src: arr[i].imgsrc,
              name:
                arr[i].cart_name +
                JSON.parse(arr[i].type).product +
                JSON.parse(arr[i].type).color,
              price: arr[i].price,
              num: arr[i].num,
              max: 2,
              insurance: 59,
              isChecked: true
            };
            current.push(obj);
          }
          self.product = current;
          self.isEmpty();
          self.calc()
        }
      });
    }
  }
};
</script>

<style lang="less">
.cart-list {
  background: #fff;
  .item {
    border-bottom: 1px solid #f6f6f6;
    line-height: 0;
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.12rem 0;
      .choose {
        flex: none;
        width: 0.3rem;
        padding: 0 0.1rem;
        height: 0.9rem;
      }
      .checked {
        background: url(../../images/cart/checked.png) 50% 50% no-repeat;
        background-size: 0.2rem 0.2rem;
      }
      .unchecked {
        background: url("../../images/cart/unchecked.png") 50% 50% no-repeat;
        background-size: 0.2rem 0.2rem;
      }
      .imgProduct {
        flex: none;
        display: block;
        position: relative;
        width: 0.9rem;
        height: 0.9rem;
        margin-right: 0.1rem;
        border: 1px solid #eee;
        border-radius: 2px;
        img {
          width: auto;
          height: 100%;
        }
      }
      .info {
        text-align: left;
        .name {
          font-size: 0.14rem;
          line-height: 0.16rem;
          color: #666;
          margin-bottom: 0.06rem;
          margin-right: 0.15rem;
        }
        .price {
          padding: 0.06rem 0;
          font-size: 0.12rem;
          color: #999;
          margin-bottom: 0.06rem;
        }
        .num {
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
            .input-sub {
              display: inline-block;
              width: 0.3rem;
              height: 0.3rem;
              position: relative;
              vertical-align: middle;
              background-color: #fafafa;
              text-align: center;
              &.active {
                background-color: #f4f4f4;
                i {
                  opacity: 1;
                }
              }
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
              &.active {
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
      }
    }
    .append {
      display: flex;
      justify-content: space-between;
      border: 1px solid #f6f6f6;
      padding: 0.07rem 0.1rem;
      border-radius: 0.02rem;
      background: #f6f6f6;
      font-size: 0.12rem;
      margin: 0 0.1rem 0.1rem;
      .i1 {
        margin-right: 0.06rem;
        img {
          width: 0.25rem;
          height: 0.25rem;
        }
      }
      .i2 {
        display: flex;
        flex: 1;
        color: #3c3c3c;
        justify-content: space-between;
        padding-right: 0.1rem;
        span {
          word-break: break-all;
          overflow: hidden;
          height: 0.25rem;
          line-height: 0.25rem;
          text-overflow: ellipsis;
          text-align: left;
        }
      }
      .i3 {
        width: 0.375rem;
        color: #ff5722;
        line-height: 0.25rem;
      }
    }
  }
  .point-box {
    .point {
      font-size: 0.11rem;
      color: #999;
      border-top: 1px solid #f6f6f6;
      padding: 0.1rem 0.15rem;
      text-align: left;
      .act {
        border-radius: 0.02rem;
        color: #fff;
        padding: 0.01rem 0.03rem;
        margin-right: 0.05rem;
      }
      .act-gift {
        background: #5b77d6;
      }
      .act-freeShipping {
        background: #e53935;
      }
    }
  }
}
</style>

