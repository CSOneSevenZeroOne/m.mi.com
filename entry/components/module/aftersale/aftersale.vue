<template>
    <div>
        <header class="header">
        <a href="#/user" class="header_back" @click="back"><img src="../../../images/user/icon/icon_06.jpg" alt=""></a>
        <div class="header_title">
            <p v-text="'售后记录'"></p>
        </div>
        <a href="" class="header_search"><img src="../../../images/user/icon/icon_03.jpg" alt=""></a>
    </header>
    <div class="aftersale">
        <div class="btn">申请售后</div>
        <div class="noneimg">
            <img src="../../../images/user/nolist_efa3d26.png" alt="">
        </div>
    </div>
    </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$store.state.index = true;
    }
  },
  mounted() {
    var str = window.location.href;
    if (str.split("#")[1] == "/userafter") {
      this.$store.state.index = false;
    }
  }
};
</script>

<style scoped>
.aftersale{
    padding-top: .6rem
}
.aftersale .btn {
  color: rgba(0, 0, 0, 0.54);
  margin: .1rem .1rem;
  font-size: 0.16rem;
  line-height: 0.42rem;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.27);
  background-color: #fff;
}
.aftersale .noneimg {
  padding: .75rem 0;
  text-align: center;
}
.aftersale .noneimg img {
  margin: 0 auto;
  width: 1.35rem;
  height: auto;
  vertical-align: middle;
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
