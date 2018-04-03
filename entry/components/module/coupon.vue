<template>
    <div style="background:#fff; height:100%">
        <header class="header">
        <a href="#/user" class="header_back" @click="vipcenterback"><img src="../../images/user/icon/icon_06.jpg" alt=""></a>
        <div class="header_title">
            <p v-text="'优惠券列表'"></p>
        </div>
        <a href="" class="header_search"><img src="../../images/user/icon/icon_03.jpg" alt=""></a>
    </header>
        <ul class="order_tab_con">
            <li :class="{'curr':status}">
                <a href="javascript:void(0)" @click="show('未使用')">未使用</a>
            </li>
            <li :class="{'curr':!status}">
                <a href="javascript:void(0)" @click="show('已使用')">已使用/已过期</a>
            </li>
        </ul>
        <div class="order_empty">
        <p>您还没有<span v-if="status">未使用</span>
          <span v-else="status">已使用/已过期</span>优惠券</p>
    </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      status: false
    };
  },
  methods: {
    vipcenterback() {
      this.$store.state.index = true;
      this.$store.state.discounts_active = true;
    },
    show(str) {
      this.status = !this.status;
    }
  },
  mounted() {
    var str = window.location.href;
    if (str.split("#")[1] == "/coupon") {
      this.$store.state.discounts_active = false;
    }
  }
};
</script>

<style scoped>
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
.order_tab_con {
  margin: 0.1rem auto;
  display: flex;
  height: 0.32rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #ececec;
  padding-top: .6rem;
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
.header {
  background: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 0.5rem;
  font-size: 0.16rem;
  color: #666;
  width: 100%;
  position: fixed;
  top: 0;
}
.header_back {
  margin-left: 0.18rem;
}
.header_search {
  margin-right: 0.16rem;
}
</style>
