<template>
    <header class="header">
        <a href="#/" class="header_back" @click="vipcenterback">
            <img src="../../../images/user/icon/icon_06.jpg" alt=""></a>
        <div class="header_title">
            <div class="header_input">
                <input type="text" v-model="searchcon" placeholder="搜索商品名称">
            </div>
        </div>
        <a href="javascript:void(0)" @click="search" class="header_search">
            <img src="../../../images/user/icon/icon_03.jpg" alt=""></a>
    </header>
</template>
<script>
export default {
  data() {
    return {
      searchcon: ""
    };
  },
  methods: {
    search() {
      var arr = [];
      var all = this.$store.state.searchlist;
      for (var i = 0; i < all.length; i++) {
        if (
          all[i].category_name.indexOf(this.searchcon) > -1 ||
          all[i].product_name.indexOf(this.searchcon) > -1
        ) {
          arr.push(all[i]);
        }
      }
      this.$store.state.searchres = arr;
      //console.log(this.$store.state.searchres)
      this.$store.state.searchstatus = false;
      $.ajax({
        url: "http://localhost:6789/search/info",
        type: "post",
        dataType: "JSON",
        data:{
            info:this.searchcon
        }
      }).then(function(res) {
        console.log(res);
      });
    },
    vipcenterback() {
      this.$store.state.index = true;
      this.$store.state.discounts_active = true;
      this.$store.state.foottab = {
        home_src: require("../../../images/foottab/home_curr.jpg"),
        home_curr: true,
        classify_src: require("../../../images/foottab/classify.jpg"),
        classify_curr: false,
        cart_src: require("../../../images/foottab/cart.jpg"),
        cart_curr: false,
        user_src: require("../../../images/foottab/user.jpg"),
        user_curr: false
      };
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.header_input {
  border: 1px solid #e5e5e5;
  margin: 0 0.1rem;
  background: #fff;
}
.header input {
  width: 92%;
  border: 0 none;
  outline: 0;
  font-size: 0.14rem;
  font-weight: 400;
  height: 0.18rem;
  padding: 0.05rem 0.1rem;
  line-height: normal;
}
.header_title {
  padding: 0 0.1rem;
  width: 100%;
  border-radius: 0.02rem;
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