<template>
    <div class="page4-box">
        <autoplay />
        <divide />
        <img src="../images/indeximages/page4.1.webp" style="width:3.75rem;height:0.42rem">
        <bigshop />
        <div class="shops-list">
            <shops></shops>
            <shops></shops>
            <shops></shops>
            <shops></shops>
        </div>
        <divide />
        <img src="../images/indeximages/page4.2.webp" style="width:3.75rem;height:0.42rem">
        <bigshop />
        <divide />
        <img src="../images/indeximages/page4.3.webp" style="width:3.75rem;height:0.42rem">
        <bigshop />
        <div class="shops-list">
            <shops></shops>
            <shops></shops>
        </div>
        <divide />
        <img src="../images/indeximages/page4.4.webp" style="width:3.75rem;height:0.42rem">
        <div class="shops-list">
            <shops></shops>
            <shops></shops>
            <shops></shops>
            <shops></shops>
            <shops></shops>
            <shops></shops>
        </div>
        <divide />
        <img src="../images/indeximages/page4.5.webp" style="width:3.75rem;height:0.42rem">
        <bigshop />
        <div class="shops-list">
            <shops></shops>
            <shops></shops>
        </div>
        <divide />
        <img src="../images/indeximages/page4.6.png" style="width:3.75rem;height:0.42rem">
        <div class="shops-list">
            <shops></shops>
            <shops></shops>
            <shops></shops>
            <shops></shops>
        </div>
        <divide />
        <img src="../images/indeximages/page4.7.png" style="width:3.75rem;height:0.42rem">
        <bigshop />
        <div class="shops-list">
            <shops></shops>
            <shops></shops>
            <shops></shops>
            <shops></shops>
            <shops></shops>
            <shops></shops>
            <shops></shops>
            <shops></shops>
            <shops></shops>
            <shops></shops>
        </div>
    </div>
</template>

<script>
import bigshop from "./module/bigshop.vue";
import divide from "./module/divide_line.vue";
import autoplay from "./index-autoplay.vue";
import shops from "../components/module/shopInfo.vue";
export default {
  components: {
    bigshop,
    autoplay,
    divide,
    shops
  }
};
</script>

<style>
.page4-box {
  margin-top: 0.86rem;
}

.shops-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
