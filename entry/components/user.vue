<template>
<div style="height:100%; width:100%">
  <div v-if="this.$store.state.discounts_active">
    <xheader />
    <xorder />
    <xpannel />
  </div>
  <router-view></router-view>
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