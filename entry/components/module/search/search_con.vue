<template>
   <div class="searchcon">
       <div class="hotsearch" v-if="this.$store.state.searchstatus">
           <div class="hotsearch_title">热门搜索</div>
           <div class="hotsearch_banner">
               <a href="javascript:void(0)">
                   <img src="https://i8.mifile.cn/b2c-mimall-media/c5691399cb0e42d11cecb0ccf9136ea5.jpg?bg=FFFFFF" alt="">
               </a>
           </div>
       </div>
       <div class="search_key" v-if="this.$store.state.searchstatus">
           <a href="javascript:void(0)" v-for="item in hotcon" v-text="item.info" @click="searchitem(item.info)"></a>
       </div>
       <div class="search_con">
         <a :href="'#/commodity?id='+item.action.path" v-for="(item,index) in this.$store.state.searchres" :key="index">
          <img :src="item.img_url" alt="">
          <p v-text="item.product_name"></p>
         </a>
       </div>
       <div class="empty" v-if="this.$store.state.searchres.length==0&&this.$store.state.searchstatus==false">
         没有相关内容!
       </div>
   </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      hotcon: []
    };
  },
  methods: {
    searchitem(info) {
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
      this.$store.state.searchstatus = false;
    }
  },
  mounted() {
    var self = this;
    $.ajax({
      url: "http://localhost:6789/search/limit",
      type: "post",
      dataType: "JSON"
    }).then(function(res) {
      self.hotcon = res;
      console.log(res);
    });
  }
};
</script>
<style lang="less" scoped>
.empty{
  display: flex;
  line-height: .5rem;
  text-align: center;
}
.search_con {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  a {
    width: 49.8%;
    text-align: center;
    img {
      width: 80%;
      height: auto;
    }
  }
}
.searchcon {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  margin-top: 0.55rem;
  .hotsearch {
    .hotsearch_title {
      line-height: 0.4rem;
      padding: 0 0.15rem;
      font-size: 0.12rem;
      text-align: left;
    }
    img {
      width: 100%;
    }
  }
  .search_key {
    margin: 0.05rem 0.1rem;
    text-align: left;
    a {
      display: inline-block;
      background: #e4e4e4;
      padding: 0.07rem 0.1rem;
      margin: 0.05rem;
      border: 1px solid #e4e4e4;
      background: hsla(12, 99%, 71%, 0.05);
      font-size: 0.12rem;
      color: #484848;
    }
  }
}
</style>