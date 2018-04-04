<template>
	<div style="width:100%; height:100%">
        <xheader></xheader>
        <div data-v-bc186c1a="" id="app">
            <div data-v-bc186c1a="" class="app-shell app-shell-bottom-navigation">
                <div data-v-bc186c1a="" class="app-view-wrapper">
                    <div data-v-06d70f2d="" data-v-bc186c1a="" class="container app-view app-view-with-header app-view-with-footer">
                        <div data-v-06d70f2d="" class="list-navbar">
                            <ul data-v-06d70f2d="">
                                <li data-v-06d70f2d="" categoryid="653" class="active" v-for="(b,index) in classfiytype" v-on:click="turn(index,$event)" >
                                    <a :href="'#'+index" data-v-06d70f2d=""><span data-v-06d70f2d="">{{b.goods_type}}</span></a>
                                </li>
                            </ul>
                        </div>
                        <div data-v-06d70f2d="" class="list-wrap">
                            <div data-v-06d70f2d="" class="list-item category0" v-for="(b,b_index) in a" :id="b_index">
                                <div data-v-06d70f2d="" class="component-list-main" >
                                    <div class="cells_auto_fill" index="0" v-for="c in b.category_list" v-if="c.view_type=='cells_auto_fill'">
                                        <a data-log_code="31wapcategorycells_auto_fill001001#rid=f9b40a00f9d8fbec38dbee729418791f&amp;t=ad&amp;page=category&amp;act=product&amp;pid=10000080&amp;page_id=25&amp;bid=3002987.1&amp;adp=757&amp;adm=5267" class="exposure items" style="width: 5rem; height: 2rem;">
                                            <img :src="c.body.items[0].img_url"  lazy="loaded" style="height: 2rem; width: 5rem;">
                                        </a>
                                    </div>
                                    <div name="m1" class="category_title" v-else-if="c.view_type=='category_title'"><span>{{c.body.category_name}}</span></div>
                                    <div data-v-6b9822de="" class="category_group box-flex" index="2" v-else>
                                        <div data-v-6b9822de="" class="box">
                                            <div data-v-6b9822de="" class="product" v-for="d in c.body.items">
                                                <a data-v-6b9822de="" data-log_code="31wapcategorycategory_group001017#rid=8c65c00166258adf46acb1bfe9221e32&amp;t=normal&amp;page=category&amp;act=product&amp;pid=10000085&amp;bid=3194830.1" class="exposure item">
                                                    <div data-v-6b9822de="" class="img"><img data-v-6b9822de="" class="big" :src="d.img_url"lazy="loaded" style="width: 1.2rem; height: 1.2rem;">
                                                    </div>
                                                    <div data-v-6b9822de="" class="name">{{d.product_name}}</div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <!---->

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
    import xheader from "./module/header.vue"
    export default {
        data() {
            return {
                a:1,
                index:0,
                data:[],
                classfiytype:[]
            }
        },
        mounted: function() {
            this.$store.state.header_title="分类";
            //分类商品
            if(!sessionStorage.getItem("classfiy")){
                var self=this;
                $$.ajax({
                    url: "http://localhost:6789/classfiy",
                    type: "get"
                }).then(function (res) {
                    sessionStorage.setItem("classfiy", res);
                    self.data=JSON.parse(res);
                });
            }else{
                this.data=JSON.parse(sessionStorage.getItem("classfiy"))
            }
            //获取分类
            if(!sessionStorage.getItem("classfiytype")){
                var self=this;
                $$.ajax({
                    url: "http://localhost:6789/classfiytype",
                    type: "get"
                }).then(function (res) {
                    sessionStorage.setItem("classfiytype", res);
                    self.classfiytype=JSON.parse(res);
                });
            }else{
                this.classfiytype=JSON.parse(sessionStorage.getItem("classfiytype"))
            }
            console.log(this.data);
            (function(doc, win, undefined) {
                var docEl = doc.documentElement,
                    resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
                    recalc = function() {
                        var clientWidth = docEl.clientWidth;
                        if(clientWidth === undefined) return;
                        docEl.style.fontSize = 20 * (clientWidth / 150) + 'px';
                    };
                if(doc.addEventListener === undefined) return;
                win.addEventListener(resizeEvt, recalc, false);
                doc.addEventListener('DOMContentLoaded', recalc, false)
            })(document, window);
        },
        methods:{
        },
        components:{
            xheader
        }
    }
</script>
<style type="text/css">
	.container[data-v-06d70f2d] {
		color: #3c3c3c
	}
	.container .list-navbar[data-v-06d70f2d] {
		position: fixed;
		top: 49px;
		bottom: 52px;
		left: 0;
		width: 1.52rem;
		border-right: 1px solid #efefef;
		overflow: hidden
	}
	.container .list-navbar ul[data-v-06d70f2d] {
		z-index: 90;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: -.3rem;
		padding: .2rem .3rem .2rem 0;
		background: #fefefe;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch
	}
	
	.container .list-navbar ul[data-v-06d70f2d]::-webkit-scrollbar {
		display: none
	}
	
	.container .list-navbar ul li[data-v-06d70f2d] {
		font-size: .34rem;
		height: .9rem;
		line-height: .9rem;
		overflow: hidden;
		text-align: center;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		transition: -webkit-transform .1s linear;
		transition: transform .1s linear;
		transition: transform .1s linear, -webkit-transform .1s linear;
		transform-origin: center center;
		transform: scale(.76);
		-webkit-transition: -webkit-transform .1s linear;
		-webkit-transform-origin: center center;
		-webkit-transform: scale(.76)
	}
	
	.container .list-navbar ul li span[data-v-06d70f2d] {
		display: inline-block
	}
	
	.container .list-navbar ul li.active[data-v-06d70f2d] {
		color: #fb7d34;
		transform: scale(1);
		-webkit-transform: scale(1)
	}
	
	.container .list-wrap[data-v-06d70f2d] {
		position: absolute;
		left: 1.52rem;
		right: 0;
		top: 49px;
		bottom: 52px;
		padding: 2px .32rem;
		overflow: auto
	}
	
	.container .list-wrap>div[data-v-06d70f2d]:last-child {
		min-height: -webkit-calc(100vh - .8rem);
		min-height: calc(100vh - .8rem)
	}
</style>
<style type="text/css">
	.component-list-main img {
		display: block;
		width: 100%;
		height: auto
	}
	
	.component-list-main .img {
		position: relative;
		overflow: hidden
	}
	
	.component-list-main .bgw {
		background-color: #fff
	}
	
	.component-list-main .buybtn {
		width: 2rem;
		background: #ea625b;
		border-radius: .05rem;
		text-align: center;
		color: #fff;
		font-size: .24rem;
		padding: .16rem 0;
		font-weight: 700
	}
	
	.component-list-main .mauto {
		margin: 0 auto
	}
	
	.component-list-main .tag {
		position: absolute;
		top: 0;
		left: 0
	}
	
	.component-list-main .tag img {
		height: .32rem;
		width: auto
	}
	
	.component-list-main .tag2 {
		position: absolute;
		bottom: .16rem;
		right: .16rem
	}
	
	.component-list-main .tag2 img {
		display: inline-block;
		width: 1rem;
		height: auto
	}
	
	.component-list-main .info {
		padding: .2rem .27rem;
		text-align: left
	}
	
	.component-list-main .info .l {
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
		align-items: center
	}
	
	.component-list-main .info .l .price {
		margin-top: 0
	}
	
	.component-list-main .info .l .price.old {
		font-size: .22rem;
		color: rgba(0, 0, 0, .54)
	}
	
	.component-list-main .name {
		font-size: .28rem;
		color: rgba(0, 0, 0, .87)
	}
	
	.component-list-main .brief,
	.component-list-main .name {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis
	}
	
	.component-list-main .brief {
		margin-top: .06rem;
		font-size: .22rem;
		line-height: .3rem;
		color: rgba(0, 0, 0, .54)
	}
	
	.component-list-main .briefwarp {
		margin-top: .06rem;
		font-size: .22rem;
		line-height: .35rem;
		color: rgba(0, 0, 0, .54)
	}
	
	.component-list-main .price {
		font-size: .28rem;
		color: #ea625b;
		height: 1.5em;
		line-height: 1.5em;
		position: relative;
		display: inline-block
	}
	
	.component-list-main .price.mt32 {
		margin-top: .2rem
	}
	
	.component-list-main .price .old {
		display: inline-block;
		margin: 0 .1rem;
		font-size: .22rem;
		color: rgba(0, 0, 0, .54)
	}
	
	.component-list-main .price span {
		display: inline-block;
		margin-left: .04rem;
		font-size: .2rem
	}
	
	.component-list-main .cells_auto_fill .items {
		height: auto!important;
		display: block
	}
	
	.component-list-main .cells_auto_fill .items img {
		width: 100%
	}
	
	.component-list-main .cells_auto_fill .items .tag img {
		width: auto
	}
	
	.component-list-main .cells_auto_fill.multi_cell {
		position: relative
	}
	
	.component-list-main .cells_auto_fill.multi_cell .items {
		position: absolute
	}
	
	.component-list-main .divider_line {
		margin: 0 auto;
		border-top: none;
		border-left: none;
		border-right: none;
		box-sizing: border-box;
		width: 100%;
		overflow: hidden
	}
	
	.component-list-main .list_one_type1 .item,
	.component-list-main .list_one_type9 .item,
	.component-list-main .list_one_type10 .item,
	.component-list-main .list_one_type12 .item,
	.component-list-main .list_one_type14 .item {
		position: relative;
		width: 100%;
		display: block
	}
	
	.component-list-main .list_one_type2 .item {
		width: 100%
	}
	
	.component-list-main .list_one_type2 .img {
		width: 3.6rem;
		height: 3.6rem
	}
	
	.component-list-main .list_one_type2 .info {
		padding: .64rem .12rem 0 .32rem;
		box-sizing: border-box;
		width: 3.6rem;
		height: 3.6rem
	}
	
	.component-list-main .list_one_type3 .item {
		width: 100%
	}
	
	.component-list-main .list_one_type3 .img {
		width: 3.6rem;
		height: 3.6rem
	}
	
	.component-list-main .list_one_type3 .info {
		width: 3.6rem;
		padding: .64rem .12rem 0 .32rem
	}
	
	.component-list-main .list_one_type11 .item {
		width: 100%
	}
	
	.component-list-main .list_one_type11 .img {
		width: 3rem;
		height: 3rem
	}
	
	.component-list-main .list_one_type11 .info {
		padding: .64rem .12rem 0 .32rem;
		box-sizing: border-box;
		width: 4.2rem;
		height: 3rem
	}
	
	.component-list-main .list_one_type14 .item {
		padding: 0 .12rem
	}
	
	.component-list-main .list_two_type1 .item {
		width: 3.6rem
	}
	
	.component-list-main .list_two_type1 .item:first-child {
		margin-right: .04rem
	}
	
	.component-list-main .list_two_type1 .img {
		width: 3.6rem;
		height: 3.6rem
	}
	
	.component-list-main .list_two_type5 .item {
		width: 3.6rem
	}
	
	.component-list-main .list_two_type5 .item .big {
		width: 3.6rem;
		height: 2.04rem
	}
	
	.component-list-main .list_two_type5 .item:first-child {
		margin-right: .04rem
	}
	
	.component-list-main .list_two_type2 {
		box-sizing: border-box
	}
	
	.component-list-main .list_two_type2 .item:first-child {
		width: 2.4rem;
		margin-right: .04rem
	}
	
	.component-list-main .list_two_type2 .item:first-child .big {
		width: 2.4rem;
		height: 3.2rem
	}
	
	.component-list-main .list_two_type2 .item:last-child {
		width: 4.8rem
	}
	
	.component-list-main .list_two_type2 .item:last-child .big {
		width: 4.8rem;
		height: 3.2rem
	}
	
	.component-list-main .list_two_type3 {
		box-sizing: border-box
	}
	
	.component-list-main .list_two_type3 .item:last-child {
		width: 2.4rem;
		margin-left: .04rem
	}
	
	.component-list-main .list_two_type3 .item:last-child .big {
		width: 2.4rem;
		height: 3.2rem
	}
	
	.component-list-main .list_two_type3 .item:first-child {
		width: 4.8rem
	}
	
	.component-list-main .list_two_type3 .item:first-child .big {
		width: 4.8rem;
		height: 3.2rem
	}
	
	.component-list-main .list_two_type10 {
		box-sizing: border-box
	}
	
	.component-list-main .list_two_type10 .item:first-child {
		width: 4.8rem;
		margin-right: .04rem
	}
	
	.component-list-main .list_two_type10 .item:first-child .big {
		width: 4.8rem;
		height: 2.4rem
	}
	
	.component-list-main .list_two_type10 .item:last-child {
		width: 2.4rem
	}
	
	.component-list-main .list_two_type10 .item:last-child .big {
		width: 2.4rem;
		height: 2.4rem
	}
	
	.component-list-main .list_two_type11 {
		box-sizing: border-box
	}
	
	.component-list-main .list_two_type11 .item:last-child {
		width: 4.8rem;
		margin-left: .04rem
	}
	
	.component-list-main .list_two_type11 .item:last-child .big {
		width: 4.8rem;
		height: 2.4rem
	}
	
	.component-list-main .list_two_type11 .item:first-child {
		width: 2.4rem
	}
	
	.component-list-main .list_two_type11 .item:first-child .big {
		width: 2.4rem;
		height: 2.4rem
	}
	
	.component-list-main .list_two_type12 .item .big {
		width: 3.6rem;
		height: 2.4rem
	}
	
	.component-list-main .list_two_type12 .item:first-child {
		margin-right: .04rem
	}
	
	.component-list-main .list_two_type13 {
		padding: 0 .12rem;
		width: 100%;
		overflow: hidden;
		text-align: center
	}
	
	.component-list-main .list_two_type13 .item {
		width: 3.4rem
	}
	
	.component-list-main .list_two_type13 .item:first-child {
		margin-right: .12rem
	}
	
	.component-list-main .list_three_type1 .item {
		width: 2.4rem;
		box-sizing: border-box
	}
	
	.component-list-main .list_three_type1 .item .big {
		width: 2.4rem;
		height: 2.4rem
	}
	
	.component-list-main .list_three_type1 .item:first-child {
		margin-right: .04rem
	}
	
	.component-list-main .list_three_type1 .item:last-child {
		margin-left: .04rem
	}
	
	.component-list-main .list_action_title .h {
		background: #fff;
		height: 1rem;
		line-height: 1rem;
		font-size: .28rem;
		text-align: center
	}
	
	.component-list-main .list_action_title .h a {
		display: block
	}
	
	.component-list-main .list_action_title .h .ti {
		color: rgba(0, 0, 0, .6)
	}
	
	.component-list-main .list_broadcast .box {
		overflow: hidden;
		height: .8rem;
		width: 100%;
		font-size: .24rem;
		color: #000
	}
	
	.component-list-main .list_broadcast .img {
		width: 1.5rem
	}
	
	.component-list-main .list_broadcast .img img {
		width: 1.5rem;
		height: auto
	}
	
	.component-list-main .list_broadcast .sc_title {
		width: 5rem;
		font-size: .24rem;
		line-height: .28rem;
		-webkit-transition: opacity .2s;
		transition: opacity .2s;
		padding-left: .2rem;
		border-left: 1px solid #b2b2b2;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin: .23rem 0 .23rem .2rem;
		text-align: left
	}
	
	.component-list-main .category_title {
		background: #fff;
		font-size: .28rem;
		text-align: center;
		font-weight: 400;
		margin-top: .2rem;
		height: 1.28rem;
		line-height: 1.28rem;
		overflow: hidden
	}
	
	.component-list-main .category_title span {
		position: relative
	}
	
	.component-list-main .category_title span:after,
	.component-list-main .category_title span:before {
		content: "";
		position: absolute;
		top: 50%;
		left: 0;
		width: 6.4px;
		width: .4rem;
		border-top: 1px solid #e0e0e0;
		transform: translate3d(-150%, -50%, 0);
		-webkit-transform: translate3d(-150%, -50%, 0)
	}
	
	.component-list-main .category_title span:after {
		left: auto;
		right: 0;
		transform: translate3d(150%, -50%, 0);
		-webkit-transform: translate3d(150%, -50%, 0)
	}
	
	.component-list-main .category_group {
		background: #fff;
		margin: -.06rem 0 0
	}
	
	.component-list-main .category_group .box {
		width: 100%;
		overflow: hidden
	}
	
	.component-list-main .category_group .product {
		float: left;
		width: 33.333333333333336%;
		text-align: center;
		margin-top: .2rem;
		margin-bottom: .3rem;
		overflow: hidden
	}
	
	.component-list-main .category_group .product .img {
		width: 1rem;
		height: 1rem;
		margin: 0 auto;
		background: #fff;
		overflow: hidden
	}
	
	.component-list-main .category_group .product .img img {
		width: 100%
	}
	
	.component-list-main .category_group .name {
		margin-top: .28rem;
		white-space: nowrap;
		font-size: .23rem;
		color: rgba(0, 0, 0, .54)
	}
	
	.component-list-main .goods-list {
		padding: 0 .1rem;
		overflow: hidden;
		text-align: left
	}
	
	.component-list-main .goods-list .item {
		background: #fff
	}
	
	.component-list-main .goods-list .item .img-box {
		display: block;
		position: relative;
		height: 4.36rem;
		overflow: hidden
	}
	
	.component-list-main .goods-list .item .mark {
		position: absolute;
		top: 0;
		left: 0
	}
	
	.component-list-main .goods-list .item .mark span {
		display: inline-block
	}
	
	.component-list-main .goods-list .item .mark span img {
		width: auto;
		height: .36rem
	}
	
	.component-list-main .goods-list .item .badge {
		position: absolute;
		right: 0;
		bottom: 0
	}
	
	.component-list-main .goods-list .item .badge span {
		display: inline-block;
		width: .86rem;
		margin-left: .08rem
	}
	
	.component-list-main .goods-list .item .info-box {
		height: 1.52rem;
		padding: 0 .28rem;
		color: #000
	}
	
	.component-list-main .goods-list .item .info-box .text {
		height: 1.52rem;
		padding-top: .6rem;
		padding-right: .2rem
	}
	
	.component-list-main .goods-list .item .info-box .name {
		font-size: .32rem;
		font-weight: bolder;
		color: #3c3c3c;
		white-space: nowrap
	}
	
	.component-list-main .goods-list .item .info-box .brief {
		font-size: .2rem;
		color: #3c3c3c;
		height: 1.5em;
		line-height: 1.5em;
		white-space: nowrap
	}
	
	.component-list-main .goods-list .item .info-box .action {
		width: 2.2rem
	}
	
	.component-list-main .goods-list .item .info-box .ui-button {
		font-weight: bolder
	}
	
	.component-list-main .goods-list .item .info-box .price {
		font-size: .32rem;
		color: #ea625b;
		font-weight: 700;
		text-align: right;
		height: 1.5em;
		line-height: 1.5em
	}
	
	.component-list-main .goods-list .item .info-box .price i,
	.component-list-main .goods-list .item .info-box .price span {
		font-size: .2rem;
		vertical-align: text-top;
		font-weight: lighter;
		line-height: .32rem
	}
	
	.component-list-main .goods-list .item .info-box .price span {
		vertical-align: baseline
	}
	
	.component-list-main .goods-list .item .info-box .price del {
		margin-left: .1rem;
		font-size: .2rem;
		color: #666;
		font-weight: lighter;
		vertical-align: baseline
	}
	
	
</style>
<style type="text/css">
	.category_group .big[data-v-6b9822de] {
		height: 100%!important;
		width: auto!important
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