<template>
	<div>
    <div class="order_empty">
        <p>您还没有<span v-if="this.$store.state.order_tab_title=='商品订单'"></span>
          <span v-else-if="this.$store.state.order_tab_title=='待支付订单'">待付款</span>
          <span v-else-if="this.$store.state.order_tab_title=='待收货订单'">待收货</span>订单</p>
    </div>
    <!-- if else if -->
    <div v-if="this.$store.state.order_tab_title=='商品订单'">
      
    </div>

    <div v-else-if="this.$store.state.order_tab_title=='待支付订单'">
      
    </div>

    <div v-else-if="this.$store.state.order_tab_title=='待收货订单'">
      
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style>
.order_empty {
  font-size: 0.16rem;
  text-align: center;
  background: url(//s1.mi.com/m/images/m/empty.png) 50% 0 no-repeat;
  background-size: 1rem 1rem;
  padding-top: 1.25rem;
  color: #999;
  margin: 0.4rem 0.5rem 0;
  display: box;
}
.order_empty span {
  margin: 0 0.02rem;
}
</style>
