<template>
   <div class="searchcon">
       <div class="hotsearch">
           <div class="hotsearch_title">热门搜索</div>
           <div class="hotsearch_banner">
               <a href="javascript:void(0)">
                   <img src="https://i8.mifile.cn/b2c-mimall-media/c5691399cb0e42d11cecb0ccf9136ea5.jpg?bg=FFFFFF" alt="">
               </a>
           </div>
       </div>
       <div class="search_key">
           <a href="javascript:void(0)">红米 Note5</a>
           <a href="javascript:void(0)">净水器厨下</a>
           <a href="javascript:void(0)">小米MIX 2</a>
       </div>
   </div>
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
      console.log(this.searchcon);
    }
  }
};
</script>
<style lang="less" scoped>
.searchcon {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  margin-top: .55rem;
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