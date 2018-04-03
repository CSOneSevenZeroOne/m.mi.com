<template>
	 <div class="order_like">
        <div class="order_like_banner">
            <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg" alt="" class="order_like_title">
        </div>
        <div class="order_like_con">
            <a href="javascript:void(0)" v-for="(key,index) in recom_list" :key="index">
                <img :src="key.image_url">
                <div class="goods_info">
                    <div class="goods_name" v-text="key.name"></div>
                    <div class="goods_price" v-text="key.price"></div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      recom_list: []
    };
  },
  mounted: function() {
    var self = this;
    $.ajax({
      url: "http://localhost:6789/recommend",
      type: "get",
      dataType: "json"
    }).then(function(res) {
      // console.log(res);
      self.recom_list=res;
    });
  }
};
</script>

<style>
.order_like {
  padding: 0.15rem 0;
}

.order_like .order_like_title {
  width: 100%;
}

.order_like_con {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.order_like_con a {
  display: block;
  height: 2.43rem;
  width: 49.5%;
}

.order_like_con a img {
  min-height: 1.78rem;
  display: block;
  width: 100%;
}
.order_like_con a:nth-child(odd) {
  padding-right: 0.03rem;
}
.goods_price:before {
  content: "Ұ";
  position: absolute;
  left: 0;
  top: 0;
  text-decoration: none;
}
.order_like_banner {
  width: 100%;
}
.goods_price {
  position: relative;
  padding-left: 0.12rem;
  color: #ff6700;
}
.goods_info {
  padding: 0.09rem 0.13rem 0.11rem;
  color: #555;
}
</style>
