<template>
  <div>
    <hhl_header />
    <div v-show="this.$store.state.index_page==0">
      <page0 />
    </div>
    <div v-show="this.$store.state.index_page==1">
      <page1 />
    </div>
    <div v-show="this.$store.state.index_page==2">
      <page2 />
    </div>
    <div v-show="this.$store.state.index_page==3">
      <page3 />
    </div>
  </div>
</template>

<script>
import "../inconfont/iconfont.css"; //导入iconfont样式

import hhl_header from "./index-header.vue"; //导入主页头部组件
import page0 from "./index-page0.vue"; //导入主页导航组件
import page1 from "./index-page1.vue";
import page2 from "./index-page2.vue";
import page3 from "./index-page3.vue";

export default {
  data() {
    return {};
  },
  components: {
    hhl_header,
    page0,
    page1,
    page2,
    page3
  }
};
</script>

<style>

</style>