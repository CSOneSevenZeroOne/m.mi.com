<template>
  <div class="newOrder">
            <div class="newOrder-title">
                <h3>新品预约</h3>
            </div>
            <div class="newOrder-shop-list">
                <div class="newOrder-shop">
                    <img :src="first" />
                    <div class="newshopInfo">
                        <div class="shop-name">小米MIX 2S</div>
                        <div class="shop-introduce">骁龙845旗舰处理器，AI双摄</div>
                        <div class="shop-price">￥3299起</div>
                    </div>
                </div>
                <div class="newOrder-shop">
                    <img :src="second" />
                    <div class="newshopInfo">
                        <div class="shop-name">红米Note 5</div>
                        <div class="shop-introduce">1.4μm大像素 AI 双摄</div>
                        <div class="shop-price">￥1099起</div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            first:require("../indeximages/newsshop001.jpg"),
            second:require("../indeximages/newsshop002.jpg")
        }
    }
};
</script>

<style>
.newOrder {
  height: 3.06rem;
  background-color: #ffffff;
}

.newOrder .newOrder-title {
  height: 0.42rem;
  display: flex;
  align-items: center;
}

.newOrder .newOrder-title h3 {
  font-size: 0.18rem;
  color: #434343;
  position: relative;
  left: 0.15rem;
}
.newOrder-shop-list {
  /* height: 2.64rem; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.newOrder-shop {
  width: 1.86rem;
}
.newOrder-shop .newshopInfo {
  height: 0.78rem;
  line-height: 0.18rem;
  padding-top: 0.07rem;
  box-sizing: border-box;
}
.newOrder-shop img {
  width: 1.86rem;
  height: 1.86rem;
}
.newOrder-shop .newshopInfo div {
  padding-left: 0.14rem;
  box-sizing: border-box;
}
.newOrder-shop .newshopInfo .shop-name {
  color: #212121;
  font-size: 0.14rem;
}
.newOrder-shop .newshopInfo .shop-introduce {
  font-size: 0.12rem;
  color: #757575;
}
.newOrder-shop .newshopInfo .shop-price {
  color: #ea625b;
}
</style>
