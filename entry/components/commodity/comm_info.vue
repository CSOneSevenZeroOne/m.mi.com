<template>
    <div class="comm_info">
        <div class="tab">
            <div v-for="(item,index) in this.$store.state.goodsinfo.view_content.descTabsView.descTabsView" v-text="item.name" @click="tabchange(index)" :class="{'item':true,'curr':index==currtest}"  :key="index">
            </div>
        </div>
        <div class="con">
            <div class="conimg" v-for="(item,index) in tabarr" :key="index">
            <img :src="item.plainView.img" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tabarr: [],
      currtest: 0
    };
  },
  mounted() {
    this.tabarr = this.$store.state.goodsinfo.view_content.descTabsView.descTabsView[0].tabContent;
    var arr = this.$store.state.goodsinfo.view_content.descTabsView
      .descTabsView;
  },
  methods: {
    tabchange(index) {
      this.tabarr = this.$store.state.goodsinfo.view_content.descTabsView.descTabsView[index].tabContent;
      this.currtest = index;
    }
  }
};
</script>
<style lang="less" scoped>
.comm_info {
  margin-top: 0.1rem;
  background: #fff;
  .con {
    display: flex;
    flex-wrap: wrap;
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
  .tab {
    height: 0.44rem;
    align-items: center;
    display: flex;
    justify-content: space-around;
    .item {
      color: #333;
      border-right: 1px solid #ddd;
      width: 100%;
      height: 100%;
      text-align: center;
      height: 0.22rem;
      line-height: 0.22rem;
    }
    .curr {
      color: #ff6700;
    }
    .item:nth-last-of-type(1) {
      border: none;
    }
  }
}
em,
i {
  font-style: normal;
}
</style>

