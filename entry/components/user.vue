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
import xheader from "./module/user_header.vue";
import xorder from "./module/user_order.vue";
import xpannel from "./module/user_pannel.vue";
export default {
  components: {
    xheader,
    xorder,
    xpannel
  },
  methods: {},
  mounted() {
    var str = window.location.href;
    if (str.split("#")[1] == "/user") {
      this.$store.state.discounts_active = true;
    }
  }
};
</script>