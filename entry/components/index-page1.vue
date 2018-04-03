<template>
  <div class="page1_box">
    <autoplay />
    <newOrder />
    <divide />
    
    <div class="mifen">
      <img src="../images/indeximages/xianhuogenggai.webp" style="width:3.75rem;height:0.42rem">
      <img src="../images/indeximages/xianhuogenggai1.webp" style="width:3.75rem;height:1.88rem">
      <div class="shopInfo">
        <div class="top">
          <div class="name">小米Note 3 人脸解锁</div>
          <div class="price">￥1799起</div>
        </div>
        <div class="bottom">
          <div class="intro">变焦双摄，1600万美颜自拍</div>
          <div class="old_price">￥1999</div>
        </div>
      </div>
    </div>

    <div>
      <img src="../images/indeximages/xiaomimax2.webp" style="width:3.75rem;height:1.88rem">
      <div class="shopInfo">
        <div class="top">
          <div class="name">小米Max 2 大屏大电量</div>
          <div class="price">￥1299起</div>
        </div>
        <div class="bottom">
          <div class="intro">6.44" 大屏，5300mAh大电量</div>
          <div class="old_price">￥1399</div>
        </div>
      </div>
    </div>

    <div class="shops-list">
      <shops></shops>
      <shops></shops>
      <shops></shops>
      <shops></shops>
    </div>


    <divide />

    <div class="shops-list">
      <img src="../images/indeximages/600yuan.png" style="width:3.75rem;height:0.42rem">
      <shops></shops>
      <shops></shops>
    </div>

    <divide />

    <div>
      <img src="../images/indeximages/600-1000yuan.png" style="width:3.75rem;height:0.42rem">
      <img src="../images/indeximages/hongminot5.webp" style="width:3.75rem;height:1.88rem">
      <div class="shopInfo">
        <div class="top">
          <div class="name">红米Note 5A </div>
          <div class="price">￥649</div>
        </div>
        <div class="bottom">
          <div class="intro">5.5"高清大屏，高通骁龙处理器，超长续航</div>
          <div class="old_price">￥699</div>
        </div>
      </div>
    </div>

    <div class="shops-list">
      <shops></shops>
      <shops></shops>
      <shops></shops>
      <shops></shops>
    </div>

    <divide />

    <div>
      <img src="../images/indeximages/1000-1500yuan.webp" style="width:3.75rem;height:0.42rem">
      <div class="shops-list">
        <shops></shops>
        <shops></shops>
        <shops></shops>
        <shops></shops>
        <shops></shops>
        <shops></shops>
      </div>
    </div>

    <divide />

    <div>
      <img src="../images/indeximages/1500-2000yuan.webp" style="width:3.75rem;height:0.42rem">
      <img src="../images/indeximages/hongminot5GUI.jpg" style="width:3.75rem;height:1.88rem">
      <div class="shopInfo">
        <div class="top">
          <div class="name">红米Note 5 6GB+64GB </div>
          <div class="price">￥1699</div>
        </div>
        <div class="bottom">
          <div class="intro">骁龙636 八核处理器，1.4μm大像素 AI 双摄</div>
          <div class="old_price"></div>
        </div>
      </div>
      <img src="../images/indeximages/hongminot5GUI.jpg" style="width:3.75rem;height:1.88rem">
      <div class="shopInfo">
        <div class="top">
          <div class="name">红米Note 5 6GB+64GB </div>
          <div class="price">￥1699</div>
        </div>
        <div class="bottom">
          <div class="intro">骁龙636 八核处理器，1.4μm大像素 AI 双摄</div>
          <div class="old_price"></div>
        </div>
      </div>
      <div class="shops-list">
        <shops></shops>
        <shops></shops>
      </div>
    </div>

    <divide />

    <div>
      <img src="../images/indeximages/2000-3000yuan.webp" style="width:3.75rem;height:0.42rem">
      <div class="shops-list">
        <shops></shops>
        <shops></shops>
      </div>
    </div>

    <divide />

    <div>
      <img src="../images/indeximages/3000.webp" style="width:3.75rem;height:0.42rem">
      <div class="shops-list">
        <shops></shops>
        <shops></shops>
        <shops></shops>
        <shops></shops>
      </div>
    </div>

    <divide />

    <div>
      <img src="../images/indeximages/hongmixilie.webp" style="width:3.75rem;height:0.42rem">
      <img src="../images/indeximages/hongminot5GUI.jpg" style="width:3.75rem;height:1.88rem">
      <div class="shopInfo">
        <div class="top">
          <div class="name">红米Note 5 6GB+64GB </div>
          <div class="price">￥1699</div>
        </div>
        <div class="bottom">
          <div class="intro">骁龙636 八核处理器，1.4μm大像素 AI 双摄</div>
          <div class="old_price"></div>
        </div>
      </div>
      <div class="shops-list">
        <shops></shops>
        <shops></shops>
        <shops></shops>
        <shops></shops>
        <shops></shops>
        <shops></shops>
      </div>
    </div>

    <div>
      <img src="../images/indeximages/yidong.webp" style="width:3.75rem;height:1.46rem;display:block">
    </div>

    <divide />

  </div>
</template>

<script>
import divide from "./module/divide_line.vue";
import newOrder from "../components/module/index-newOrder.vue";
import shops from "../components/module/shopInfo.vue";
import autoplay from "./index-autoplay.vue";
export default {
  components: {
    newOrder,
    shops,
    autoplay,
    divide
  }
};
</script>

<style scoped>
.page1_box {
  margin-top: 0.87rem;
}

.shopInfo {
  height: 0.61rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding-top: 0.06rem;
  box-sizing: border-box;
}

.shopInfo .top {
  height: 0.33rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.shopInfo .top .name {
  font-size: 0.16rem;
  color: #000;
  margin-left: 0.14rem;
}

.shopInfo .top .price {
  font-size: 0.12rem;
  color: #ec746e;
  margin-right: 0.14rem;
}

.shopInfo .bottom {
  height: 0.23rem;
  display: flex;
  justify-content: space-between;
}

.shopInfo .bottom .intro {
  font-size: 0.12rem;
  color: #757575;
  margin-left: 0.14rem;
}

.shopInfo .bottom .old_price {
  margin-right: 0.14rem;
  text-decoration: line-through;
}

.shops-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>