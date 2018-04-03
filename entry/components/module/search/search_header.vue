<template>
   <header class="header">
        <a href="#/user" class="header_back" @click="vipcenterback"><img src="../../../images/user/icon/icon_06.jpg" alt=""></a>
        <div class="header_title">
            <div class="header_input">
                <input type="text" v-model="searchcon" placeholder="搜索商品名称">
            </div>
        </div>
        <a href="javascript:void(0)" @click="search" class="header_search"><img src="../../../images/user/icon/icon_03.jpg" alt=""></a>
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
      console.log(this.searchcon);
    },
    vipcenterback() {
      this.$store.state.index = true;
      this.$store.state.discounts_active = true;
    }
  }
};
</script>
<style lang="less" scoped>
.header_input{
  border: 1px solid #e5e5e5;
    margin: 0 .1rem;
     background: #fff;
}
.header input {
  width: 100%;
  border: 0 none;
  outline: 0;
  font-size: 0.14rem;
  font-weight: 400;
  height: 0.18rem;
  padding: 0.05rem .1rem;
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