<template>
    <div style="background:#fff; height:100%">
        <xheader />
        <xsearchcon />
    </div>
</template>
<script>
import xheader from "../module/search/search_header.vue";
import xsearchcon from "../module/search/search_con.vue";
export default {
  data() {
    return {
      services: []
    };
  },
  methods: {
    vipcenterback() {
      this.$store.state.index = true;
      this.$store.state.discounts_active = true;
    }
  },
  mounted() {
    this.$store.state.index = false;
  },
  components: {
    xheader,
    xsearchcon
  }
};
</script>

