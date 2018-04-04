<template>
	<!-- 头部 -->
    <header class="header"  @touchmove.prevent>
        <a href="#/" class="header_back" @click="back"><img src="../../images/user/icon/icon_06.jpg" alt=""></a>
        <div class="header_title">
            <p v-text="this.$store.state.header_title"></p>
        </div>
        <a href="#/search" class="header_search"><img src="../../images/user/icon/icon_03.jpg" alt=""></a>
    </header>
</template>

<script>
export default {
    methods:{
        back(){
            this.$store.state.bFooter=true
            this.$store.state.foottab = {
                home_src: require("../../images/foottab/home_curr.jpg"),
                home_curr: true,
                classify_src: require("../../images/foottab/classify.jpg"),
                classify_curr: false,
                cart_src: require("../../images/foottab/cart.jpg"),
                cart_curr: false,
                user_src: require("../../images/foottab/user.jpg"),
                user_curr: false
            }
        }
    }
};
</script>

<style scoped>
.header {
  background: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 0.5rem;
  font-size: 0.16rem;
  color: #666;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 500;
}
.header_back {
  margin-left: 0.18rem;
}
.header_search {
  margin-right: 0.16rem;
}
</style>
