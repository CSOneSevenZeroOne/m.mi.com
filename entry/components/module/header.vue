<template>
	<!-- 头部 -->
    <header class="header">
        <a href="" class="header_back"><img src="../../images/user/icon/icon_06.jpg" alt=""></a>
        <div class="header_title">
            <p v-text="header_title"></p>
        </div>
        <a href="" class="header_search"><img src="../../images/user/icon/icon_03.jpg" alt=""></a>
    </header>
</template>

<script>
export default {
  data() {
    return {
      header_title: "优惠券列表"
    };
  }
};
</script>

<style>
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
  z-index: 10;
}
.header_back {
  margin-left: 0.18rem;
}
.header_search {
  margin-right: 0.16rem;
}
</style>
