<template>
	<div class="order_tab">
        <ul class="order_tab_con">
            <li :class="{'curr':this.$store.state.order_tab_active.all}">
                <a href="javascript:void(0)" @click="show('商品订单')">全部</a>
            </li>
            <li :class="{'curr':this.$store.state.order_tab_active.wait}">
                <a href="javascript:void(0)" @click="show('待支付订单')">待付款</a>
            </li>
            <li :class="{'curr':this.$store.state.order_tab_active.take}">
                <a href="javascript:void(0)" @click="show('待收货订单')">待收货</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      order_tab_active: {"all":true,"wait":false,"take":false}
    };
  },
  methods: {
    show(num) {
      this.$store.state.order_tab_title = num;
      if (num == "商品订单") {
          this.$store.state.order_tab_active={"all":true,"wait":false,"take":false}
      } else if (num == "待支付订单") {
          this.$store.state.order_tab_active={"all":false,"wait":true,"take":false}
      } else if (num == "待收货订单") {
          this.$store.state.order_tab_active={"all":false,"wait":false,"take":true}
      }
    }
  }
};
</script>
<style scoped>
.order_tab_con {
  height: 0.32rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #ececec;
}
.order_tab_con li {
  display: flex;
  justify-content: center;
}
.order_tab_con li a {
  text-align: center;
  line-height: 0.3rem;
  color: #3c3c3c;
  padding: 0 0.05rem;
}
.order_tab_con .curr a {
  color: #ff6700;
  border-bottom: 1px solid #ff6700;
}
</style>
