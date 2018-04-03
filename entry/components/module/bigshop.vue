<template>
    <div>
        <img src="../../images/indeximages/xiaomimax2.webp" style="width:3.75rem;height:1.88rem">
        <div class="shopInfo">
            <div class="top">
                <div class="name">小米Max 2 大屏大电量</div>
                <div class="price">￥1299起</div>
            </div>
            <div class="bottom">
                <div class="intro">6.44" 大屏，5300mAh大电量</div>
                <div class="old_price">￥1399</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {};
</script>

<style>
.shopInfo {
    height: 0.61rem;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    padding-top: 0.06rem;
    box-sizing: border-box;
  }

  .shopInfo .top {
    height: 0.33rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .shopInfo .top .name {
    font-size: 0.16rem;
    color: #000;
    margin-left: 0.14rem;
  }

  .shopInfo .top .price {
    font-size: 0.12rem;
    color: #ec746e;
    margin-right: 0.14rem;
  }

  .shopInfo .bottom {
    height: 0.23rem;
    display: flex;
    justify-content: space-between;
  }

  .shopInfo .bottom .intro {
    font-size: 0.12rem;
    color: #757575;
    margin-left: 0.14rem;
  }

  .shopInfo .bottom .old_price {
    margin-right: 0.14rem;
    text-decoration: line-through;
  }
</style>