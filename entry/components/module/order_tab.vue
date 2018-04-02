<template>
	<div class="order_tab">
        <ul class="order_tab_con">
            <li class="curr">
                <a href="javascript:void(0)">全部</a>
            </li>
            <li>
                <a href="javascript:void(0)">待付款</a>
            </li>
            <li>
                <a href="javascript:void(0)">待收货</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {};
</script>
<style>
.order_tab_con {
  height: 0.32rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.order_tab_con li {
  display: flex;
  justify-content: center;
}
.order_tab_con li a {
  text-align: center;
  line-height: 0.3rem;
  color: #3c3c3c;
}
.order_tab_con .curr a {
  color: #ff6700;
  border-bottom: 1px solid #ff6700;
  padding: 0 0.05rem;
}
</style>
