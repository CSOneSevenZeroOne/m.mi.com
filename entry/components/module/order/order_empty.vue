<template>
	<div class="order_empty">
        <p>您还没有<span v-text="empty_type"></span>订单</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      empty_type:"代付款"
    };
  }
};
</script>

<style>
.order_empty {
  font-size: 0.14rem;
  text-align: center;
  background: url(//s1.mi.com/m/images/m/empty.png) 50% 0 no-repeat;
  background-size: 1rem 1rem;
  padding-top: 1.25rem;
  color: #999;
  margin: 0.4rem 0.5rem 0;
  display: box;
}
.order_empty span{
    margin: 0 .02rem;
}
</style>
