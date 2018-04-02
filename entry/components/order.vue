<template>
<div style="width:100%; height:100%;">
    <xheader />
  <div @click="show(1)">
      11231
  </div>
  <div @click="show(2)" v-if="this.$store.state.order_tab==2">
      213123
  </div>
  <div @click="show(3)" v-else-if="this.$store.state.order_tab==3">
      123123
  </div>
</div>
</template>
<script>
import xheader from "./module/header.vue";
import xorder_tab from "./module/order_tab.vue";
export default {
  data() {
    return {
      header_title: "优惠券列表"
    };
  },
  components: {
    xheader
  },
  methods: {
    show(num) {
      this.$store.state.limit = num;
    }
  }
};
</script>