<template>
<div>
  <xheader />
<xorder />
<xpannel />
</div>
</template>
<script>
import xheader from "./user_header.vue";
import xorder from "./user_order.vue";
import xpannel from "./user_pannel.vue";
export default {
  data() {
    return {
      header_title: "优惠券列表"
    };
  },
  components: {
    xheader,
    xorder,
    xpannel
  },
  methods: {}
};
</script>