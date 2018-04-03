<template>
  <div class="page2-box">
      <autoplay />
      <divide />
      <img src="../images/indeximages/remaibaoping.webp" style="width:3.75rem;height:0.42rem">
      <bigshop />
      <div class="shops-list">
          <shops></shops>
          <shops></shops>
          <shops></shops>
          <shops></shops>
          <shops></shops>
          <shops></shops>
      </div>
      <divide />
      <img src="../images/indeximages/xinpingtuijian.webp" style="width:3.75rem;height:0.42rem">
      <bigshop />
      <div class="shops-list">
          <shops></shops>
          <shops></shops>
          <shops></shops>
          <shops></shops>
      </div>
      <divide />
      <img src="../images/indeximages/zhinengjiaju.webp" style="width:3.75rem;height:0.42rem">
      <div class="shops-list">
          <shops></shops>
          <shops></shops>
          <shops></shops>
          <shops></shops>
      </div>
      <divide />
      <img src="../images/indeximages/jiankangjiance.png" style="width:3.75rem;height:0.42rem">
      <div class="shops-list">
          <shops></shops>
          <shops></shops>
          <shops></shops>
          <shops></shops>
      </div>
      <divide />
      <img src="../images/indeximages/kuwanyizhi.webp" style="width:3.75rem;height:0.42rem">
      <divide />
      <div class="shops-list">
          <shops></shops>
          <shops></shops>
          <shops></shops>
          <shops></shops>
      </div>
      <divide />
      <img src="../images/indeximages/zhinenghuwai.webp" style="width:3.75rem;height:0.42rem">
      <div class="shops-list">
          <shops></shops>
          <shops></shops>
          <shops></shops>
          <shops></shops>
      </div>
      <divide />
      <img src="../images/indeximages/shexiangdengju.png" style="width:3.75rem;height:0.42rem">
      <div class="shops-list">
          <shops></shops>
          <shops></shops>
          <shops></shops>
          <shops></shops>
      </div>
      <divide />
      <img src="../images/indeximages/chaoliuyingyin.webp" style="width:3.75rem;height:0.42rem">
      <div class="shops-list">
          <shops></shops>
          <shops></shops>
          <shops></shops>
          <shops></shops>
      </div>
      <divide />
      <img src="../images/indeximages/zhinengchuandai.png" style="width:3.75rem;height:0.42rem">
      <div class="shops-list">
          <shops></shops>
          <shops></shops>
          <shops></shops>
          <shops></shops>
      </div>
      <divide />
  </div>
</template>
<script>
import bigshop from "./module/bigshop.vue";
import divide from "./module/divide_line.vue";
import autoplay from "./index-autoplay.vue";
import shops from "../components/module/shopInfo.vue";
export default {
  components:{
      bigshop,
      autoplay,
      divide,
      shops
  }
}
</script>

<style scoped>
.page2-box{
    margin-top: .86rem;
}
.shops-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>

