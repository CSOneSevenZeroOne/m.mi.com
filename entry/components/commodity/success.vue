<template>
    <div id="toast" :style="{'display':this.$store.state.successbool?'block':'none'}">
        <div class="weui-mask_transparent"></div>
        <div class="weui-toast">
            <i class="weui-icon-success-no-circle weui-icon_toast"></i>
            <p class="weui-toast__content">加入购物车成功</p>
        </div>
    </div>
</template>
<script>
import "weui";
export default {};
</script>