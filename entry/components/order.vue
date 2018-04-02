<template>
<div style="width:100%; height:100%; background:white">
    <xheader />
    <xordertab />
    <xempty />
    <xlike />
</div>
</template>
<script>
import xheader from "./module/order/order_header.vue";
import xempty from "./module/order/order_empty.vue";
import xlike from "./module/order/order_empty_like.vue";
import xordertab from "./module/order_tab.vue";
export default {
  data() {
    return {
      header_title: "优惠券列表"
    };
  },
  components: {
    xheader,
    xordertab,
    xempty,
    xlike
  },
};
</script>