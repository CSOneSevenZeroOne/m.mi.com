<template>
    <div>
        <autoplay />
        <ul class="nav-list">
            <li v-for="(item,index) in navArr" :key="index"><a href="javascript:void(0)"><img :src="item.imgSrc" /></a></li>
        </ul>
        <div class="newShop">
            <div class="newShop-left"><a href="javascript:void(0)"><img src="../images/indeximages/shop001.jpg" /></a></div>
            <div class="newShop-right">
                <div><a href="javascript:void(0)"><img src="../images/indeximages/shop002.jpg" /></a></div>
                <div><a href="javascript:void(0)"><img src="../images/indeximages/shop003.jpg" /></a></div>
            </div>
        </div>
        <div class="maxwidthShop"><a href="javascript:void(0)"><img src="../images/indeximages/shop004.jpg" /></a></div>

        <div class="mishangou">
            <div class="mshangou-title">
                <h3>小米闪购</h3>
                <!-- <div>
                    <div>距下一场</div>
                    <div class="timer">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div> -->
            </div>
            <ul class="shangou-list">
                <li v-for="(item1,index1) in shangouArr" :key="index1"><a href="javascript:void(0)"><img :src="item1.imgSrc" style="width:1.01rem;height:1.01rem" /><p><span v-text="'￥'+item1.price"></span><span v-text="'￥'+item1.old_price"></span></p></a></li>
            </ul>
        </div>

        <div class="maxwidthShop"><a href="javascript:void(0)"><img src="../images/indeximages/youxiben.jpg" /></a></div>


        <newOrder />
        

        <div class="divider_line" index="13" style="height:.09rem;background-color:#f5f5f5"></div>

        <div class="superVal">
            <div class="superVal-title">
                <img src="../images/indeximages/chaozhitujian.jpg" />
            </div>
            <div class="newOrder-shop-list">
                <div class="newOrder-shop">
                    <img src="../images/indeximages/newsshop001.jpg" />
                    <div class="newshopInfo">
                        <div class="shop-name">小米MIX 2S</div>
                        <div class="shop-introduce">骁龙845旗舰处理器，AI双摄</div>
                        <div class="shop-price">￥3299起</div>
                    </div>
                </div>
                <div class="newOrder-shop">
                    <img src="../images/indeximages/newsshop002.jpg" />
                    <div class="newshopInfo">
                        <div class="shop-name">红米Note 5</div>
                        <div class="shop-introduce">1.4μm大像素 AI 双摄</div>
                        <div class="shop-price">￥1099起</div>
                    </div>
                </div>
                <div class="newOrder-shop">
                    <img src="../images/indeximages/newsshop002.jpg" />
                    <div class="newshopInfo">
                        <div class="shop-name">红米Note 5</div>
                        <div class="shop-introduce">1.4μm大像素 AI 双摄</div>
                        <div class="shop-price">￥1099起</div>
                    </div>
                </div>
                <div class="newOrder-shop">
                    <img src="../images/indeximages/newsshop002.jpg" />
                    <div class="newshopInfo">
                        <div class="shop-name">红米Note 5</div>
                        <div class="shop-introduce">1.4μm大像素 AI 双摄</div>
                        <div class="shop-price">￥1099起</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="divider_line" index="13" style="height:.09rem;background-color:#f5f5f5"></div>

        <div class="superVal">
            <div class="superVal-title">
                <img src="../images/indeximages/chaozhituijian1.jpg" />
            </div>
            <div class="newOrder-shop-list">
                <div class="newOrder-shop">
                    <img src="../images/indeximages/newsshop001.jpg" />
                    <div class="newshopInfo">
                        <div class="shop-name">小米MIX 2S</div>
                        <div class="shop-introduce">骁龙845旗舰处理器，AI双摄</div>
                        <div class="shop-price">￥3299起</div>
                    </div>
                </div>
                <div class="newOrder-shop">
                    <img src="../images/indeximages/newsshop002.jpg" />
                    <div class="newshopInfo">
                        <div class="shop-name">红米Note 5</div>
                        <div class="shop-introduce">1.4μm大像素 AI 双摄</div>
                        <div class="shop-price">￥1099起</div>
                    </div>
                </div>
                <div class="newOrder-shop">
                    <img src="../images/indeximages/newsshop002.jpg" />
                    <div class="newshopInfo">
                        <div class="shop-name">红米Note 5</div>
                        <div class="shop-introduce">1.4μm大像素 AI 双摄</div>
                        <div class="shop-price">￥1099起</div>
                    </div>
                </div>
                <div class="newOrder-shop">
                    <img src="../images/indeximages/newsshop002.jpg" />
                    <div class="newshopInfo">
                        <div class="shop-name">红米Note 5</div>
                        <div class="shop-introduce">1.4μm大像素 AI 双摄</div>
                        <div class="shop-price">￥1099起</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="divider_line" index="13" style="height:.09rem;background-color:#f5f5f5"></div>
        <div class="superVal">
            <div class="superVal-title">
                <img src="../images/indeximages/mingxindanping.jpg" />
            </div>
            <div class="newOrder-shop-list">
                <div class="newOrder-shop">
                    <img src="../images/indeximages/newsshop001.jpg" />
                    <div class="newshopInfo">
                        <div class="shop-name">小米MIX 2S</div>
                        <div class="shop-introduce">骁龙845旗舰处理器，AI双摄</div>
                        <div class="shop-price">￥3299起</div>
                    </div>
                </div>
                <div class="newOrder-shop">
                    <img src="../images/indeximages/newsshop002.jpg" />
                    <div class="newshopInfo">
                        <div class="shop-name">红米Note 5</div>
                        <div class="shop-introduce">1.4μm大像素 AI 双摄</div>
                        <div class="shop-price">￥1099起</div>
                    </div>
                </div>
                <div class="newOrder-shop">
                    <img src="../images/indeximages/newsshop002.jpg" />
                    <div class="newshopInfo">
                        <div class="shop-name">红米Note 5</div>
                        <div class="shop-introduce">1.4μm大像素 AI 双摄</div>
                        <div class="shop-price">￥1099起</div>
                    </div>
                </div>
                <div class="newOrder-shop">
                    <img src="../images/indeximages/newsshop002.jpg" />
                    <div class="newshopInfo">
                        <div class="shop-name">红米Note 5</div>
                        <div class="shop-introduce">1.4μm大像素 AI 双摄</div>
                        <div class="shop-price">￥1099起</div>
                    </div>
                </div>
                <div class="newOrder-shop">
                    <img src="../images/indeximages/newsshop002.jpg" />
                    <div class="newshopInfo">
                        <div class="shop-name">红米Note 5</div>
                        <div class="shop-introduce">1.4μm大像素 AI 双摄</div>
                        <div class="shop-price">￥1099起</div>
                    </div>
                </div>
                <div class="newOrder-shop">
                    <img src="../images/indeximages/newsshop002.jpg" />
                    <div class="newshopInfo">
                        <div class="shop-name">红米Note 5</div>
                        <div class="shop-introduce">1.4μm大像素 AI 双摄</div>
                        <div class="shop-price">￥1099起</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import newOrder from "./module/index-newOrder.vue"
import autoplay from "./index-autoplay.vue"
export default {
  data() {
    return {
      navArr: [
        {
          imgSrc: require("../images/indeximages/nav1.jpg")
        },
        {
          imgSrc: require("../images/indeximages/nav2.jpg")
        },
        {
          imgSrc: require("../images/indeximages/nav3.jpg")
        },
        {
          imgSrc: require("../images/indeximages/nav4.jpg")
        },
        {
          imgSrc: require("../images/indeximages/nav5.jpg")
        }
      ],
      shangouArr: [
        {
          imgSrc: require("../images/indeximages/shangou001.webp"),
          price: 739,
          old_price: 799
        },
        {
          imgSrc: require("../images/indeximages/shangou002.webp"),
          price: 739,
          old_price: 799
        },
        {
          imgSrc: require("../images/indeximages/shangou003.webp"),
          price: 315,
          old_price: 349
        },
        {
          imgSrc: require("../images/indeximages/shangou004.webp"),
          price: 639,
          old_price: 699
        },
        {
          imgSrc: require("../images/indeximages/shangou005.webp"),
          price: 155,
          old_price: 199
        },
        {
          imgSrc: require("../images/indeximages/shangou006.webp"),
          price: 6799,
          old_price: 6999
        },
        {
          imgSrc: require("../images/indeximages/shangou007.jpg"),
          price: 3899,
          old_price: 3999
        }
      ]
    };
  },
  components:{
      newOrder,
      autoplay
  }
};
</script>

<style scoped>
.nav-list {
  display: flex;
  height: 0.8rem;
  align-items: center;
  justify-content: space-around;
  border-top: 0.01rem solid #d8d6d2;
}
.nav-list li a img {
  width: 0.75rem;
  height: 0.79rem;
}
/* 新品 */
.newShop {
  display: flex;
  height: 2.82rem;
  justify-content: space-between;
  align-items: center;
  background: #f5f5f5;
}
.newShop .newShop-left img {
  width: 1.86rem;
  height: 2.65rem;
}
.newShop .newShop-right {
  display: flex;
  flex-direction: column;
}
.newShop .newShop-right img {
  width: 1.86rem;
  height: 1.31rem;
}

.maxwidthShop {
  width: 100%;
  height: 1.54rem;
  background: #f5f5f5;
}

.maxwidthShop a {
  display: block;
  width: 100%;
  height: 1.46rem;
}

.maxwidthShop a img {
  width: 100%;
  height: 100%;
}

/* 小米闪购 */
.mishangou {
  height: 1.71rem;
}

.mishangou .mshangou-title {
  height: 0.42rem;
  display: flex;
  align-items: center;
}

.mishangou .mshangou-title h3 {
  font-size: 0.18rem;
  color: #ff873b;
  position: relative;
  left: 0.15rem;
}

.mishangou .shangou-list {
  height: 1.29rem;
  display: flex;
  overflow-x: auto;
}
.mishangou .shangou-list li {
  padding-right: 0.08rem;
}
.mishangou .shangou-list li:nth-child(1) {
  padding-left: 0.08rem;
}
.mishangou .shangou-list li p {
  display: flex;
  height: 0.24rem;
  justify-content: space-around;
  align-items: center;
}

.mishangou .shangou-list li p span:nth-child(1) {
  color: #ea625b;
  font-size: 0.12rem;
}

.mishangou .shangou-list li p span:nth-child(2) {
  color: #676767;
  font-size: 0.12rem;
  text-decoration: line-through;
}


.superVal-title img {
  width: 3.75rem;
  height: 2.29rem;
}
</style>
