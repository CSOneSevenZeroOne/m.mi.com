<template>
    <div>
        <header class="header">
        <a href="#/user" class="header_back" @click="vipcenterback"><img src="../../../images/user/icon/icon_06.jpg" alt=""></a>
        <div class="header_title">
            <p v-text="'会员中心'"></p>
        </div>
        <a href="" class="header_search"><img src="../../../images/user/icon/icon_03.jpg" alt=""></a>
    </header>
    <div class="vipcenter">
        <div class="vipcenterTxt">
            <p>请前往小米商城App查看会员福利</p>
        </div>
        <div class="btn_con">
            <div class="goappbtn">
            立即下载小米商城App
        </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  methods: {
    vipcenterback() {
      this.$store.state.index = true;
    }
  },
  mounted() {
    var str = window.location.href;
    if (str.split("#")[1] == "/vipcenter") {
      this.$store.state.index = false;
    }
  }
};
</script>

<style scoped>
.vipcenterTxt {
  padding: 1rem 0.4rem 1rem;
  text-align: center;
}
.vipcenterTxt p {
  font-size: 0.16rem !important;
}
.goappbtn {
  display: block;
  outline: 0;
  background: #ff6700;
  color: #fff;
  text-align: center;
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.14rem;
}
.btn_con{
    padding: 0 .3rem;
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
