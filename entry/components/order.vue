<template>
<div style="width:100%; height:100%; background:white">
    <div style=" position:fixed; top:0; width:100%; background:#fff; z-index:99">
        <xheader />
        <xordertab />
    </div>
    <div style="padding-top:.7rem;">
    <xempty />
    <xlike />
    </div>
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