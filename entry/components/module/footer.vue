<template>
	<!-- 头部 -->
    <footer class="footer">
        <ul class="footer_con">
            <li>
                <a href="javascript:void(0)" @click="tabcurr(1)">
                    <img :src="tab.home_src" alt="">
                    <p :style='{"color":tab.home_curr?"#f56c02":"#212121"}'>首页</p>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)" @click="tabcurr(2)">
                    <img :src="tab.classify_src" alt="">
                    <p :style='{"color":tab.classify_curr?"#f56c02":"#212121"}'>分类</p>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)" @click="tabcurr(3)">
                    <img :src='tab.cart_src' alt="">
                    <p :style='{"color":tab.cart_curr?"#f56c02":"#212121"}'>购物车</p>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)" @click="tabcurr(4)">
                    <img :src='tab.user_src' alt="">
                    <p :style='{"color":tab.user_curr?"#f56c02":"#212121"}'>我的</p>
                </a>
            </li>
        </ul>
    </footer>
</template>

<script>
export default {
  data() {
    return {
      tab: {
        home_src: require("../../images/foottab/home_curr.jpg"),
        home_curr: true,
        classify_src: require("../../images/foottab/classify.jpg"),
        classify_curr: false,
        cart_src: require("../../images/foottab/cart.jpg"),
        cart_curr: false,
        user_src: require("../../images/foottab/user.jpg"),
        user_curr: false
      }
    };
  },
  methods: {
    tabcurr: function(key) {
      if (key == 1) {
        this.tab = {
        home_src: require("../../images/foottab/home_curr.jpg"),
        home_curr: true,
        classify_src: require("../../images/foottab/classify.jpg"),
        classify_curr: false,
        cart_src: require("../../images/foottab/cart.jpg"),
        cart_curr: false,
        user_src: require("../../images/foottab/user.jpg"),
        user_curr: false
      };
      } else if (key == 2) {
        this.tab = {
          home_src: require("../../images/foottab/home.jpg"),
          home_curr: false,
          classify_src: require("../../images/foottab/classify_curr.jpg"),
          classify_curr: true,
          cart_src: require("../../images/foottab/cart.jpg"),
          cart_curr: false,
          user_src: require("../../images/foottab/user.jpg"),
          user_curr: false
        };
      } else if (key == 3) {
        this.tab = {
          home_src: require("../../images/foottab/home.jpg"),
          home_curr: false,
          classify_src: require("../../images/foottab/classify.jpg"),
          classify_curr: false,
          cart_src: require("../../images/foottab/cart_curr.jpg"),
          cart_curr: true,
          user_src: require("../../images/foottab/user.jpg"),
          user_curr: false
        };
      } else if (key == 4) {
        this.tab = {
          home_src: require("../../images/foottab/home.jpg"),
          home_curr: false,
          classify_src: require("../../images/foottab/classify.jpg"),
          classify_curr: false,
          cart_src: require("../../images/foottab/cart.jpg"),
          cart_curr: false,
          user_src: require("../../images/foottab/user_curr.jpg"),
          user_curr: true
        };
      }
    }
  }
};
</script>

<style>
.footer {
  position: fixed;
  bottom: 0;
  height: 0.52rem;
  background: #fff;
  width: 100%;
  text-align: center;
  box-shadow: 0 -3px 8px rgba(0, 0, 0, 0.04);
}
li:nth-child(1) img {
  width: 0.22rem;
  height: 0.2rem;
}
li:nth-child(2) img {
  width: 0.21rem;
  height: 0.21rem;
}
li:nth-child(3) img {
  width: 0.21rem;
  height: 0.21rem;
}
li:nth-child(4) img {
  width: 0.17rem;
  height: 0.21rem;
}
.footer_con {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.footer_con li p {
  padding-top: 0.04rem;
}
.footer_con li {
  width: 100%;
  height: 0.52rem;
}
.footer_con li a {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.footer_con li:nth-child(1) p {
  color: #f56c02;
}
</style>
