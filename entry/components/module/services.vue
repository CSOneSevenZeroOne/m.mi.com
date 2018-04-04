<template>
    <div style="background:#fff; height:100%">
        <header class="header">
        <a href="#/user" class="header_back" @click="vipcenterback"><img src="../../images/user/icon/icon_06.jpg" alt=""></a>
        <div class="header_title">
            <p v-text="'服务'"></p>
        </div>
        <a href="#/search" class="header_search"><img src="../../images/user/icon/icon_03.jpg" alt=""></a>
    </header>
        <div class="services">
          <h4>自助服务</h4>
            <div class="items">
              <a href="javascript:void(0)" v-for="(key,index) in services" :key="index" >
                <img :src="key.img_url" alt="">
              </a>
            </div>
        </div>
    </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      services: []
    };
  },
  methods: {
    vipcenterback() {
      this.$store.state.index = true;
      this.$store.state.discounts_active = true;
    }
  },
  mounted() {
    var str = window.location.href;
    if (str.split("#")[1] == "/services") {
      this.$store.state.discounts_active = false;
    }
    var self=this;
    $.ajax({
      url: "http://localhost:6789/services",
      type: "get",
      dataType: "json"
    }).then(function(res) {
      // console.log(res);
      self.services=res;
    });
  }
};
</script>

<style lang="less" scoped>
.services {
  padding-top: .6rem;
  h4 {
    margin: 0;
    margin-left: 0.16rem;
    font-size: 0.12rem;
    line-height: 0.36rem;
    border-bottom: 1px solid #f6f6f6;
    color: #919191;
    font-weight: 400;
    text-align: left;
  }
  .items{
    display: flex;
    flex-wrap: wrap;
    a{
      display: inline-block;
      width: 25%;
    }
    img{
      width: 100%;
    }
  }
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
