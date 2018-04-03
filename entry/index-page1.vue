<template>
  <div class="page1_box">
      <newOrder />
      <div class="divider_line" index="13" style="height:.09rem;background-color:#f5f5f5"></div>
      <div>
          <img src="./indeximages/xianhuogenggai.webp" style="width:3.75rem;height:0.42rem">
          <img src="./indeximages/xianhuogenggai1.webp" style="width:3.75rem;height:1.88rem">
      </div>
  </div>
</template>

<script>
import newOrder from "./modules/index-newOrder.vue"
export default {
  components:{
      newOrder
  }
}
</script>

<style scoped>
.page1_box{
    margin-top: 0.84rem;
}
</style>
