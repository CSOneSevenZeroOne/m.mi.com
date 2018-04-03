<template>
    <div class="page3-box">
        <autoplay />
        <divide />
        <img src="../images/indeximages/page3.1.webp" style="width:3.75rem;height:0.42rem">
        <bigshop />
        <div class="shops-list">
            <shops></shops>
            <shops></shops>
            <shops></shops>
            <shops></shops>
            <shops></shops>
            <shops></shops>
        </div>
        <divide />
        <img src="../images/indeximages/page3.2.png" style="width:3.75rem;height:0.42rem">
        <div class="shops-list">
            <shops></shops>
            <shops></shops>
        </div>
        <divide />
        <img src="../images/indeximages/page3.3.png" style="width:3.75rem;height:0.42rem">
        <bigshop />
        <div class="shops-list">
            <shops></shops>
            <shops></shops>
            <shops></shops>
            <shops></shops>
            <shops></shops>
            <shops></shops>
        </div>
        <divide />
        <img src="../images/indeximages/page3.4.webp" style="width:3.75rem;height:0.42rem">
        <bigshop />
        <div class="shops-list">
            <shops></shops>
            <shops></shops>
        </div>
        <divide />
        <img src="../images/indeximages/page3.5.webp" style="width:3.75rem;height:0.42rem">
        <bigshop />
        <div class="shops-list">
            <shops></shops>
            <shops></shops>
        </div>
        <divide />
        <img src="../images/indeximages/page3.6.webp" style="width:3.75rem;height:0.42rem">
        <bigshop />
        <div class="shops-list">
            <shops></shops>
            <shops></shops>
            <shops></shops>
            <shops></shops>
        </div>
        <divide />
        <img src="../images/indeximages/page3.7.webp" style="width:3.75rem;height:0.42rem">
        <div class="shops-list">
            <shops></shops>
            <shops></shops>
            <shops></shops>
            <shops></shops>
        </div>
        <divide />
        <img src="../images/indeximages/page3.8.webp" style="width:3.75rem;height:0.42rem">
        <bigshop />
        <div class="shops-list">
            <shops></shops>
            <shops></shops>
            <shops></shops>
            <shops></shops>
        </div>
        <divide />
        <img src="../images/indeximages/page3.9.webp" style="width:3.75rem;height:0.42rem">
        <bigshop />
        <div class="shops-list">
            <shops></shops>
            <shops></shops>
        </div>
        <bigshop />
        <divide />
        <img src="../images/indeximages/page3.10.webp" style="width:3.75rem;height:0.42rem">
        <bigshop />
        <div class="shops-list">
            <shops></shops>
            <shops></shops>
            <shops></shops>
            <shops></shops>
        </div>
        <divide />
        <img src="../images/indeximages/page3.11.webp" style="width:3.75rem;height:0.42rem">
        <div class="shops-list">
            <shops></shops>
            <shops></shops>
        </div>
    </div>
</template>

<script>
    import bigshop from "./module/bigshop.vue";
    import divide from "./module/divide_line.vue";
    import autoplay from "./index-autoplay.vue";
    import shops from "../components/module/shopInfo.vue";
    export default {
        components: {
            bigshop,
            autoplay,
            divide,
            shops
        }
    };
</script>

<style scoped>
    .page3-box {
        margin-top: 0.86rem;
    }

    .shops-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>