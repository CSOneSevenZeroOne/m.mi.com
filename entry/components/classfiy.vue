<template>
	<div data-v-bc186c1a="" style="width:100%; height:100%">
        <xheader></xheader>
        <div id="app">
            <div data-v-bc186c1a="" class="app-shell app-shell-bottom-navigation">
                <div  data-v-bc186c1a="" class="app-view-wrapper">
                    <div data-v-06d70f2d="" data-v-bc186c1a="" class="container app-view app-view-with-header app-view-with-footer">
                        <div data-v-06d70f2d="" class="list-navbar">
                            <ul data-v-06d70f2d="">
                                <li data-v-06d70f2d="" v-for="(b,index) in classfiytype" :key="index" :class="{'action':index==curr?true:false}">
                                    <a data-v-06d70f2d="" @click="goAnchor('#anchor-'+(index),index)"><span>{{b.goods_type}}</span></a>
                                </li>
                            </ul>
                        </div>
                        <div data-v-06d70f2d="" class="list-wrap rela" ref="list" @scroll="scrollim">
							<div v-for="(ele,index) in a" :id="'anchor-'+index" :key="index">
								<div data-v-06d70f2d="" class="list-item category0" v-for="(b,b_index) in ele.goods" :key="b_index">
                                <div data-v-06d70f2d="" class="component-list-main" >
                                    <div class="cells_auto_fill" index="0" v-for="c in JSON.parse(b.items)" v-if="b.view_type=='cells_auto_fill'"   >
                                       <a href="javascript:void(0)" class="exposure items" style="height: 1rem; padding-right:0">
                                            <img :src="c.img_url" lazy="loaded" style="height: auto; width: 100%;">
                                        </a>
                                    </div>
                                    <div name="m1" class="category_title" v-if="b.view_type=='category_title'"><span>{{b.category_name}}</span></div>
                                    <div data-v-6b9822de=""class="category_group box-flex" index="2" v-else-if="b.view_type=='category_group'">
                                        <div data-v-6b9822de="" class="box">
                                            <div data-v-6b9822de="" class="product" v-for="c in JSON.parse(b.items)">
                                                <a data-v-6b9822de="" :href="'#/commodity?id='+c.action.path" class="exposure item">
                                                    <div data-v-6b9822de="" class="img"><img :src="c.img_url" class="big" style="width: .6rem; height: .6rem;">
                                                    </div>
                                                    <div data-v-6b9822de="" class="name" v-text="c.product_name"></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
							</div>							
                        </div>
                    </div>
                    <!---->
                </div>

            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import $$ from "jquery";
import xheader from "./module/header.vue";
import { setTimeout } from "timers";
export default {
  data() {
    return {
      a: [],
      index: 0,
      classfiytype: [],
      num: 0,
      curr: 0,
      offset: []
    };
  },
  mounted: function() {
    this.$store.state.header_title = "分类";
    //分类商品
    if (!sessionStorage.getItem("classfiy")) {
      var self = this;
      $$.ajax({
        url: "http://localhost:6789/classfiy",
        type: "get"
      }).then(function(res) {
        sessionStorage.setItem("classfiy", res);
        var arr = JSON.parse(res);
        var result = [];
        for (var i = 0; i < arr.length; i++) {
          var flag = true;
          var keyres = arr[i].goods_type;
          for (var j = 0; j < result.length; j++) {
            for (var key in result[j]) {
              if (keyres == key) {
                flag = false;
                result[j][key].push(arr[i]);
              }
            }
          }
          if (flag) {
            var obj = {};
            obj[keyres] = [arr[i]];
            result.push(obj);
          }
        }
        for (var i = 0; i < result.length; i++) {
          for (const key in result[i]) {
            result[i].goods = result[i][key];
          }
        }
        this.a = result;
      });
    } else {
      this.a = JSON.parse(sessionStorage.getItem("classfiy"));
      var arr = JSON.parse(sessionStorage.getItem("classfiy"));
      console.log(arr);
      var result = [];
      for (var i = 0; i < arr.length; i++) {
        var flag = true;
        var keyres = arr[i].goods_type;
        for (var j = 0; j < result.length; j++) {
          for (var key in result[j]) {
            if (keyres == key) {
              flag = false;
              result[j][key].push(arr[i]);
            }
          }
        }
        if (flag) {
          var obj = {};
          obj[keyres] = [arr[i]];
          result.push(obj);
        }
      }
      for (var i = 0; i < result.length; i++) {
        for (const key in result[i]) {
          result[i].goods = result[i][key];
        }
      }
      this.a = result;
      //console.log(this.a);
    }
    //console.log(JSON.parse(this.a[0].items)[0].action.path)
    //获取分类
    if (!sessionStorage.getItem("classfiytype")) {
      var self = this;
      $$.ajax({
        url: "http://localhost:6789/classfiytype",
        type: "get"
      }).then(function(res) {
        sessionStorage.setItem("classfiytype", res);
        self.classfiytype = JSON.parse(res);
      });
    } else {
      this.classfiytype = JSON.parse(sessionStorage.getItem("classfiytype"));
    }
    (function(doc, win, undefined) {
      var docEl = doc.documentElement,
        resizeEvt = "orientationchange" in win ? "orientationchange" : "resize",
        recalc = function() {
          var clientWidth = docEl.clientWidth;
          if (clientWidth === undefined) return;
          docEl.style.fontSize = 20 * (clientWidth / 150) + "px";
        };
      if (doc.addEventListener === undefined) return;
      win.addEventListener(resizeEvt, recalc, false);
      doc.addEventListener("DOMContentLoaded", recalc, false);
    })(document, window);
    this.$nextTick(function() {
      var resarr = [];
      var arr = this.a;
      setTimeout(() => {
        for (var i = 0; i < arr.length; i++) {
          resarr.push({
            top: $$("#anchor-" + i).offset().top,
          });
        }
      }, 1000);
      this.offset = resarr;
    });
    //    $$(this.$refs.list).on("scroll", function() {
    // 	//   var str = $$(this.$refs.list).scrollTop();
    // 	//   console.log(this.offset)
    //     //   var st=this.offset.sort(function(a, b) {
    //     //     return Math.abs(a - str) - Math.abs(b - str);
    // 	//   })[0];
    // 	//console.log(st)
    // 	});
    // this.$refs.list.onscroll=function(){
    // 	console.log(this.$refs.list.offsetTop)
    // }
  },
  methods: {
    scrollim() {
      var scroll = this.$refs.list.scrollTop-300;
      var arr = this.offset;
      var index = 0;
      var arr1 = [];
      //console.log(scroll);
      //console.log(arr);
      for (var i = 0; i < arr.length; i++) {
        arr1.push({
          id: i,
          res: Math.abs(scroll) - arr[i].top 
        });
      }
      //console.log(arr1)
      for (var i = 0; i < arr1.length - 1; i++) {
        for (var j = 0; j < arr1.length - i - 1; j++) {
          if (Math.abs(arr1[j].res) > Math.abs(arr1[j + 1].res)) {
            var temp = arr1[j];
            arr1[j] = arr1[j + 1];
            arr1[j + 1] = temp;
          }
        }
      }
      this.curr = arr1[0].id;
      //console.log(this.curr)
    },
    goAnchor(selector, index) {
      this.curr = index;
      var anchor = this.$el.querySelector(selector);
      $$(".list-wrap").scrollTop(anchor.offsetTop);
    }
  },

  components: {
    xheader
  }
};
</script>
<style type="text/css">
.rela {
  position: relative;
}
.action a {
  color: #fb7d34;
  font-size: 0.22rem;
}
.container[data-v-06d70f2d] {
  color: #3c3c3c;
}
.container .list-navbar[data-v-06d70f2d] {
  position: fixed;
  top: 49px;
  bottom: 52px;
  left: 0;
  width: 0.76rem;
  border-right: 1px solid #efefef;
  overflow: hidden;
}
.container .list-navbar ul[data-v-06d70f2d] {
  z-index: 90;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: -0.15rem;
  padding: 0.1rem 0.15rem 0.1rem 0;
  background: #fefefe;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.container .list-navbar ul[data-v-06d70f2d]::-webkit-scrollbar {
  display: none;
}

.container .list-navbar ul li[data-v-06d70f2d] {
  font-size: 0.17rem;
  height: 0.45rem;
  line-height: 0.45rem;
  overflow: hidden;
  text-align: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transition: -webkit-transform 0.1s linear;
  transition: transform 0.1s linear;
  transition: transform 0.1s linear, -webkit-transform 0.1s linear;
  transform-origin: center center;
  transform: scale(0.76);
  -webkit-transition: -webkit-transform 0.1s linear;
  -webkit-transform-origin: center center;
  -webkit-transform: scale(0.76);
}

.container .list-navbar ul li span[data-v-06d70f2d] {
  display: inline-block;
}

.container .list-navbar ul li.active[data-v-06d70f2d] {
  color: #fb7d34;
  transform: scale(1);
  -webkit-transform: scale(1);
}

.container .list-wrap[data-v-06d70f2d] {
  position: absolute;
  left: 0.76rem;
  right: 0;
  top: 49px;
  bottom: 52px;
  padding: 2px 0.16rem;
  overflow: auto;
}

.container .list-wrap > div[data-v-06d70f2d]:last-child {
  min-height: -webkit-calc(50vh - 0.4rem);
  min-height: calc(50vh - 0.4rem);
}
</style>
<style type="text/css">
.component-list-main img {
  display: block;
  width: 100%;
  height: auto;
}

.component-list-main .img {
  position: relative;
  overflow: hidden;
}

.component-list-main .bgw {
  background-color: #fff;
}

.component-list-main .buybtn {
  width: 1rem;
  background: #ea625b;
  border-radius: 0.025rem;
  text-align: center;
  color: #fff;
  font-size: 0.12rem;
  padding: 0.08rem 0;
  font-weight: 700;
}

.component-list-main .mauto {
  margin: 0 auto;
}

.component-list-main .tag {
  position: absolute;
  top: 0;
  left: 0;
}

.component-list-main .tag img {
  height: 0.16rem;
  width: auto;
}

.component-list-main .tag2 {
  position: absolute;
  bottom: 0.08rem;
  right: 0.08rem;
}

.component-list-main .tag2 img {
  display: inline-block;
  width: 0.05rem;
  height: auto;
}

.component-list-main .info {
  padding: 0.1rem 0.135rem;
  text-align: left;
}

.component- main .info .l {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  overflow: hidden;
  -webkit-box-align: justify;
  box-align: justify;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.component-list-main .info .l .price {
  margin-top: 0;
}

.component-list-main .info .l .price.old {
  font-size: 0.11rem;
  color: rgba(0, 0, 0, 0.54);
}

.component-list-main .name {
  font-size: 0.14rem;
  color: rgba(0, 0, 0, 0.87);
}

.component-list-main .brief,
.component-list-main .name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.component-list-main .brief {
  margin-top: 0.03rem;
  font-size: 0.11rem;
  line-height: 0.15rem;
  color: rgba(0, 0, 0, 0.54);
}

.component-list-main .briefwarp {
  margin-top: 0.03rem;
  font-size: 0.11rem;
  line-height: 0.175rem;
  color: rgba(0, 0, 0, 0.54);
}

.component-list-main .price {
  font-size: 0.14rem;
  color: #ea625b;
  height: 0.75em;
  line-height: 0.75em;
  position: relative;
  display: inline-block;
}

.component-list-main .price.mt32 {
  margin-top: 0.1rem;
}

.component-list-main .price .old {
  display: inline-block;
  margin: 0 0.05rem;
  font-size: 0.11rem;
  color: rgba(0, 0, 0, 0.54);
}

.component-list-main .price span {
  display: inline-block;
  margin-left: 0.02rem;
  font-size: 0.1rem;
}

.component-list-main .cells_auto_fill .items {
  height: auto !important;
  display: block;
}

.component-list-main .cells_auto_fill .items img {
  width: 100%;
}

.component-list-main .cells_auto_fill .items .tag img {
  width: auto;
}

.component-list-main .cells_auto_fill.multi_cell {
  position: relative;
}

.component-list-main .cells_auto_fill.multi_cell .items {
  position: absolute;
}

.component-list-main .divider_line {
  margin: 0 auto;
  border-top: none;
  border-left: none;
  border-right: none;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
}

.component-list-main .list_one_type1 .item,
.component-list-main .list_one_type9 .item,
.component-list-main .list_one_type10 .item,
.component-list-main .list_one_type12 .item,
.component-list-main .list_one_type14 .item {
  position: relative;
  width: 100%;
  display: block;
}

.component-list-main .list_one_type2 .item {
  width: 100%;
}

.component-list-main .list_one_type2 .img {
  width: 1.8rem;
  height: 1.8rem;
}

.component-list-main .list_one_type2 .info {
  padding: 0.32rem 0.06rem 0 0.16rem;
  box-sizing: border-box;
  width: 1.8rem;
  height: 1.8rem;
}

.component-list-main .list_one_type3 .item {
  width: 100%;
}

.component-list-main .list_one_type3 .img {
  width: 1.8rem;
  height: 1.8rem;
}

.component-list-main .list_one_type3 .info {
  width: 1.8rem;
  padding: 0.32rem 0.06rem 0 0.16rem;
}

.component-list-main .list_one_type11 .item {
  width: 100%;
}

.component-list-main .list_one_type11 .img {
  width: 1.5rem;
  height: 1.5rem;
}

.component-list-main .list_one_type11 .info {
  padding: 0.32rem 0.06rem 0 0.16rem;
  box-sizing: border-box;
  width: 2.1rem;
  height: 1.5rem;
}

.component-list-main .list_one_type14 .item {
  padding: 0 0.06rem;
}

.component-list-main .list_two_type1 .item {
  width: 1.8rem;
}

.component-list-main .list_two_type1 .item:first-child {
  margin-right: 0.02rem;
}

.component-list-main .list_two_type1 .img {
  width: 1.8rem;
  height: 1.8rem;
}

.component-list-main .list_two_type5 .item {
  width: 1.8rem;
}

.component-list-main .list_two_type5 .item .big {
  width: 1.8rem;
  height: 1.02rem;
}

.component-list-main .list_two_type5 .item:first-child {
  margin-right: 0.02rem;
}

.component-list-main .list_two_type2 {
  box-sizing: border-box;
}

.component-list-main .list_two_type2 .item:first-child {
  width: 1.2rem;
  margin-right: 0.02rem;
}

.component-list-main .list_two_type2 .item:first-child .big {
  width: 1.2rem;
  height: 1.6rem;
}

.component-list-main .list_two_type2 .item:last-child {
  width: 2.4rem;
}

.component-list-main .list_two_type2 .item:last-child .big {
  width: 2.4rem;
  height: 1.6rem;
}

.component-list-main .list_two_type3 {
  box-sizing: border-box;
}

.component-list-main .list_two_type3 .item:last-child {
  width: 1.2rem;
  margin-left: 0.02rem;
}

.component-list-main .list_two_type3 .item:last-child .big {
  width: 1.2rem;
  height: 1.6rem;
}

.component-list-main .list_two_type3 .item:first-child {
  width: 2.4rem;
}

.component-list-main .list_two_type3 .item:first-child .big {
  width: 2.4rem;
  height: 1.6rem;
}

.component-list-main .list_two_type10 {
  box-sizing: border-box;
}

.component-list-main .list_two_type10 .item:first-child {
  width: 2.4rem;
  margin-right: 0.02rem;
}

.component-list-main .list_two_type10 .item:first-child .big {
  width: 2.4rem;
  height: 1.2rem;
}

.component-list-main .list_two_type10 .item:last-child {
  width: 1.2rem;
}

.component-list-main .list_two_type10 .item:last-child .big {
  width: 1.2rem;
  height: 1.2rem;
}

.component-list-main .list_two_type11 {
  box-sizing: border-box;
}

.component-list-main .list_two_type11 .item:last-child {
  width: 2.4rem;
  margin-left: 0.02rem;
}

.component-list-main .list_two_type11 .item:last-child .big {
  width: 2.4rem;
  height: 1.2rem;
}

.component-list-main .list_two_type11 .item:first-child {
  width: 1.2rem;
}

.component-list-main .list_two_type11 .item:first-child .big {
  width: 1.2rem;
  height: 1.2rem;
}

.component-list-main .list_two_type12 .item .big {
  width: 1.8rem;
  height: 1.2rem;
}

.component-list-main .list_two_type12 .item:first-child {
  margin-right: 0.02rem;
}

.component-list-main .list_two_type13 {
  padding: 0 0.06rem;
  width: 100%;
  overflow: hidden;
  text-align: center;
}

.component-list-main .list_two_type13 .item {
  width: 1.7rem;
}

.component-list-main .list_two_type13 .item:first-child {
  margin-right: 0.06rem;
}

.component-list-main .list_three_type1 .item {
  width: 1.2rem;
  box-sizing: border-box;
}

.component-list-main .list_three_type1 .item .big {
  width: 1.2rem;
  height: 1.2rem;
}

.component-list-main .list_three_type1 .item:first-child {
  margin-right: 0.02rem;
}

.component-list-main .list_three_type1 .item:last-child {
  margin-left: 0.02rem;
}

.component-list-main .list_action_title .h {
  background: #fff;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.14rem;
  text-align: center;
}

.component-list-main .list_action_title .h a {
  display: block;
}

.component-list-main .list_action_title .h .ti {
  color: rgba(0, 0, 0, 0.6);
}

.component-list-main .list_broadcast .box {
  overflow: hidden;
  height: 0.4rem;
  width: 100%;
  font-size: 0.12rem;
  color: #000;
}

.component-list-main .list_broadcast .img {
  width: 0.75rem;
}

.component-list-main .list_broadcast .img img {
  width: 0.75rem;
  height: auto;
}

.component-list-main .list_broadcast .sc_title {
  width: 2.5rem;
  font-size: 0.12rem;
  line-height: 0.14rem;
  -webkit-transition: opacity 0.2s;
  transition: opacity 0.2s;
  padding-left: 0.1rem;
  border-left: 1px solid #b2b2b2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0.115rem 0 0.115rem 0.1rem;
  text-align: left;
}

.component-list-main .category_title {
  background: #fff;
  font-size: 0.14rem;
  text-align: center;
  font-weight: 400;
  margin-top: 0.1rem;
  height: 0.64rem;
  line-height: 0.64rem;
  overflow: hidden;
}

.component-list-main .category_title span {
  position: relative;
}

.component-list-main .category_title span:after,
.component-list-main .category_title span:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 6.4px;
  width: 0.2rem;
  border-top: 1px solid #e0e0e0;
  transform: translate3d(-150%, -50%, 0);
  -webkit-transform: translate3d(-150%, -50%, 0);
}

.component-list-main .category_title span:after {
  left: auto;
  right: 0;
  transform: translate3d(150%, -50%, 0);
  -webkit-transform: translate3d(150%, -50%, 0);
}

.component-list-main .category_group {
  background: #fff;
  margin: -0.03rem 0 0;
}

.component-list-main .category_group .box {
  width: 100%;
  overflow: hidden;
}

.component-list-main .category_group .product {
  float: left;
  width: 33.333333333333336%;
  text-align: center;
  margin-top: 0.1rem;
  margin-bottom: 0.15rem;
  overflow: hidden;
}

.component-list-main .category_group .product .img {
  width: 0.5rem;
  height: 0.5rem;
  margin: 0 auto;
  background: #fff;
  overflow: hidden;
}

.component-list-main .category_group .product .img img {
  width: 100%;
}

.component-list-main .category_group .name {
  margin-top: 0.14rem;
  white-space: nowrap;
  font-size: 0.115rem;
  color: rgba(0, 0, 0, 0.54);
}

.component-list-main .goods-list {
  padding: 0 0.05rem;
  overflow: hidden;
  text-align: left;
}

.component-list-main .goods-list .item {
  background: #fff;
}

.component-list-main .goods-list .item .img-box {
  display: block;
  position: relative;
  height: 2.18rem;
  overflow: hidden;
}

.component-list-main .goods-list .item .mark {
  position: absolute;
  top: 0;
  left: 0;
}

.component-list-main .goods-list .item .mark span {
  display: inline-block;
}

.component-list-main .goods-list .item .mark span img {
  width: auto;
  height: 0.18rem;
}

.component-list-main .goods-list .item .badge {
  position: absolute;
  right: 0;
  bottom: 0;
}

.component-list-main .goods-list .item .badge span {
  display: inline-block;
  width: 0.43rem;
  margin-left: 0.04rem;
}

.component-list-main .goods-list .item .info-box {
  height: 0.76rem;
  padding: 0 0.14rem;
  color: #000;
}

.component-list-main .goods-list .item .info-box .text {
  height: 0.76rem;
  padding-top: 0.3rem;
  padding-right: 0.1rem;
}

.component-list-main .goods-list .item .info-box .name {
  font-size: 0.16rem;
  font-weight: bolder;
  color: #3c3c3c;
  white-space: nowrap;
}

.component-list-main .goods-list .item .info-box .brief {
  font-size: 0.1rem;
  color: #3c3c3c;
  height: 0.75em;
  line-height: 0.75em;
  white-space: nowrap;
}

.component-list-main .goods-list .item .info-box .action {
  width: 1.1rem;
}

.component-list-main .goods-list .item .info-box .ui-button {
  font-weight: bolder;
}

.component-list-main .goods-list .item .info-box .price {
  font-size: 0.16rem;
  color: #ea625b;
  font-weight: 700;
  text-align: right;
  height: 0.75em;
  line-height: 0.75em;
}

.component-list-main .goods-list .item .info-box .price i,
.component-list-main .goods-list .item .info-box .price span {
  font-size: 0.1rem;
  vertical-align: text-top;
  font-weight: lighter;
  line-height: 0.16rem;
}

.component-list-main .goods-list .item .info-box .price span {
  vertical-align: baseline;
}

.component-list-main .goods-list .item .info-box .price del {
  margin-left: 0.05rem;
  font-size: 0.1rem;
  color: #666;
  font-weight: lighter;
  vertical-align: baseline;
}
</style>
<style type="text/css">
.category_group .big[data-v-6b9822de] {
  height: 100% !important;
  width: auto !important;
}
</style>



<!--<script type="text/javascript">
	$(function () {
		for (var i = 0; i < $(".active").length; i++) {
			$($(".active")[i]).dex=i
			$($(".active")[i]).on("click",function () {
				console.log(c)
		})		
		}
	
	})
	
            
</script>-->