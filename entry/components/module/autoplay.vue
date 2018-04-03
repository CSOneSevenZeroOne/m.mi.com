<template>
   <div class="xm_banner">
            <!-- Swiper -->
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="../../images/indeximages/auto1.jpg" /></div>
                    <div class="swiper-slide"><img src="../../images/indeximages/auto2.jpg" /></div>
                    <div class="swiper-slide"><img src="../../images/indeximages/auto3.jpg" /></div>
                    <div class="swiper-slide"><img src="../../images/indeximages/auto4.jpg" /></div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
        </div>
</template>

<script>
import "../.."
import "swiper";
export default {
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      pagination: ".swiper-pagination",
      paginationClickable: true,
      autoplay: 1000,
      loop: true
    });
  }
};
</script>

<style>
/*�ֲ�ͼ*/
.xm_banner{
    width: 100%;
    overflow: hidden;
    position: relative;
}
.xm_banner ul:first-child{
    width: 800%;
}
.xm_banner ul:first-child li{
    width: 12.5%;
    float: left;
}
.xm_banner ul:first-child li img{
    width: 100%;
    display: block;
}

/*��*/
.xm_banner ul:last-child{
    width: 118px;
    height: 6px;
    position: absolute;
    left: 50%;
    margin-left: -59px;
    bottom: 10px;
}

.xm_banner ul:last-child li {
    width: 6px;
    height: 6px;
    border: 1px solid #fff;
    border-radius: 3px;
    margin-left: 10px;
    float: left;
}
.xm_banner ul:last-child li:first-child{
    margin-left: 0;
}

.xm_banner ul:last-child li.now{
    background: #fff;
}
</style>
