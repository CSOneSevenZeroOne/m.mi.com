<template>
	<!-- 订单 -->
    <div class="order">
        <div class="order_top">
            <div class="my_order">我的订单</div>
            <div class="all_order">
                <a href="#/order" @click="goallorder">全部订单</a>
            </div>
        </div>
        <div class="order_order">
            <ul>
                <li>
                    <a href="#/order" @click="goorder">
                        <img src="../../../images/user/icon/xiaomi_10.jpg" alt="">
                        <p>待付款</p>
                    </a>
                </li>
                <li>
                    <a href="#/order" @click="gotake">
                        <img src="../../../images/user/icon/xiaomi_12.jpg" alt="">
                        <p>待收货</p>
                    </a>
                </li>
                <li>
                    <a href="#/userafter" @click="goaftersale">
                        <img src="../../../images/user/icon/xiaomi_07.jpg" alt="">
                        <p>退换修</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    goorder() {
      this.$store.state.order_tab_title = "待支付订单";
      this.$store.state.order_tab_active={"all":false,"wait":true,"take":false}
    },
    gotake() {
      this.$store.state.order_tab_title = "待收货订单";
      this.$store.state.order_tab_active={"all":false,"wait":false,"take":true}
    },
    goaftersale(){
        this.$store.state.index=false;
    },
    goallorder(){
        this.$store.state.order_tab_title = "待支付订单";
      this.$store.state.order_tab_active={"all":true,"wait":false,"take":false}
    }
  }
};
</script>

<style scoped>
/*
order
*/

.order {
  background: #fff;
  text-align: center;
}

.order_top {
  height: 0.4rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.17rem;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
}

.all_order {
  padding-right: 0.16rem;
  background: url(../../../images/user/icon/xiaomi_03.jpg) no-repeat right center;
}
.my_order {
  font-size: 0.14rem;
}

.order_order {
  height: 0.88rem;
}

.order_order ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 0.88rem;
}
.order_order ul li a p {
  padding-top: 0.09rem;
}
</style>
