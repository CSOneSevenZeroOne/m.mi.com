<template>
  <div id="header_wrap_h">
        <div class="header_top">
            <div class="header_logo"><img :src="imgSrc" alt=""></div>
            <div class="header_search"><span class="iconfont">&#xe62e;</span>搜索商品名称</div>
            <div class="iconfont" id="people_pic">&#xe619;</div>
        </div>
        <ul class="header_nav_h_list">
            <li v-for="(item,index) in arr" :key="index" @click="showPage(index)"><a href="javascript:void(0)" v-text="item" :class="{active:nav_index==index}"></a></li>
        </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: require("./indeximages/logo.png"),
      arr:["推荐","手机","智能","电视","电脑","全面屏","生活周边","盒子"],
      nav_index:0
    };
  },
  methods:{
    showPage(index){
      this.$store.state.index_page=index;
      this.nav_index=index;
    }
  }
};
</script>

<style scoped>
#header_wrap_h {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2);
  z-index: 99;
  background-color: #f2f2f2;
}
.header_top {
  
  height: .48rem;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.header_top .header_logo img {
  width: .25rem;
  height: .16rem;
}
.header_top .header_search {
  width: 2.69rem;
  height: .32rem;
  line-height: .32rem;
  background-color: #ffffff;
  display: flex;
  font-size: .16rem;
  color: #b2b2b2;
  border: .01rem solid #e5e5e5;
}
.header_top .header_search span {
  display: block;
}
.header_top .header_search span:nth-child(1) {
  width: .31rem;
  height: .32rem;
  font-size: .24rem;
}
#people_pic {
  font-size: .24rem;
}
 .header_nav_h_list {
  height: .36rem;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  background-color: #f2f2f2;
}
/* 不显示滚动条但是可以滑动 */
.header_nav_h_list::-webkit-scrollbar {
  display: none;
}
/* end */
 .header_nav_h_list li{
  padding: 0 0.13rem;
  white-space: nowrap;
  border-bottom: .02rem solid #f2f2f2;
}
 .header_nav_h_list li a{
  font-size: .14rem;
  color: #747474;
  line-height: .34rem;
  display: block;
  border-bottom: .02rem solid #f2f2f2;
  /* #ed5b00  改变后的*/
}

 .header_nav_h_list li .active{
   color: #ed5b00;
   border-bottom: .02rem solid #ed5b00;
 }
</style>

