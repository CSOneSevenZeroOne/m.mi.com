<template>
    <div id="commodity" v-if="loadstatus">
        <comm-content :page="page"></comm-content>
        <comm-footer/>
        <success-addcart />
    </div>
</template>
<style lang="less" scoped>

</style>

<script>
import comm_content from "./commodity/comm_content.vue";
import comm_footer from "./commodity/comm_footer.vue";
import success from './commodity/success.vue';
import $ from "jquery";
export default {
  data() {
    return {
      page: [],
      loadstatus:false
    }
  },
  components: {
    "comm-content": comm_content,
    "comm-footer": comm_footer,
    "success-addcart":success
  },
  mounted() {
    var str = window.location.href.split("?")[1].split("=")[1];
    var self = this;
    $.ajax({
      url: "http://localhost:6789/goodsinfo",
      type: "POST",
      data: {
        path: str
      }
    }).then(function(res) {
      //.product_info.name
      //console.log(JSON.parse(res)[0])
      var obj = JSON.parse(res)[0];
      if (obj.buy_option!="[]") {
        obj.buy_option = JSON.parse(obj.buy_option);
      }
      if (obj.coupon_info) {
        obj.coupon_info = JSON.parse(obj.coupon_info);
      }
      if (obj.goods_info) {
        obj.goods_info = JSON.parse(obj.goods_info);
      }
      if (obj.product_info) {
        obj.product_info = JSON.parse(obj.product_info);
      }
      if (obj.view_content) {
        obj.view_content = JSON.parse(obj.view_content);
      }
      if (obj.seo) {
        obj.seo = JSON.parse(obj.seo);
      }
      self.$store.state.goodsinfo = obj;
      console.log(obj);
      var arr = obj.view_content.galleryView.galleryView;
      var newArr = [];
      for (var i = 0; i < arr.length; i++) {
        newArr.push({
          style: {
            background:
              "url(" + arr[i] + ")"
          }
        });
      }
      self.page=newArr;
      // console.log(111)
      // console.log(self.page)
      self.loadstatus=true
    });
  }
};
</script>
