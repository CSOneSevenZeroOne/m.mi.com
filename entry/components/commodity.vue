<template>
    <div id="commodity">
        <comm-content/>
        <comm-footer/>
    </div>
</template>

<style lang="less" scoped>  
</style>

<script>
import comm_content from "./commodity/comm_content.vue"
import comm_footer from "./commodity/comm_footer.vue"
export default {
    components:{
        "comm-content":comm_content,
        "comm-footer":comm_footer
    }
}
</script>
