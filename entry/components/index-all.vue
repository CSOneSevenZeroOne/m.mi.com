<template>
    <div>
        <hhl_header/>
        <div v-show="this.$store.state.index_page==0">
            <page0/>
        </div>
        <div v-show="this.$store.state.index_page==1">
            <page1/>
        </div>
        <div v-show="this.$store.state.index_page==2">
            <page2/>
        </div>
        <div v-show="this.$store.state.index_page==3">
            <page3/>
        </div>
        <div v-show="this.$store.state.index_page==4">
            <page4/>
        </div>
        <div v-show="this.$store.state.index_page==5">
            <page5/>
        </div>
    </div>
</template>

<script>
    import "../inconfont/iconfont.css"; //导入iconfont样式

    import hhl_header from "./index-header.vue"; //导入主页头部组件
    import page0 from "./index-page0.vue"; //导入主页导航组件
    import page1 from "./index-page1.vue";
    import page2 from "./index-page2.vue";
    import page3 from "./index-page3.vue";
    import page4 from "./index-page4.vue";
    import page5 from "./index-page5.vue";
    import $$ from "jquery";

    export default {
        data(){
            return {};
        },
        mounted(){
            var self=this;
            $$.ajax({
                url : "http://localhost:6789/indexinfo",
                type : "get"
            }).then(function(res){
                sessionStorage.setItem("indexinfo", res);
                self.$store.state.homedata = JSON.parse(res);
                console.log(JSON.parse(res))
                var arr1 = JSON.parse(res).filter(function(ele, index, self){
                    if(ele.ad_position_id){
                        return ele;
                    }
                });
                for(var i=0; i<arr1.length-1; i++){
                    for(var j=0; j<arr1.length-i-1; j++){
                        if(arr1[j].id>arr1[j+1].id){
                            var tmp=arr1[j+1];
                            arr1[j+1]=arr1[j];
                            arr1[j]=tmp;
                        }
                    }
                }
                self.$store.state.homeimg=arr1;
                var arr = JSON.parse(res).filter(function(ele, index, self){
                    if(ele.h == "152"){
                        return ele;
                    }
                });
                self.$store.state.navlist = arr;
            });
        },
        components : {
            hhl_header,
            page0,
            page1,
            page2,
            page3,
            page4,
            page5
        }
    };
</script>

<style>

</style>