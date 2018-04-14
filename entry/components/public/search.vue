<template>
    <div style="background:#fff; height:100%">
        <xheader />
        <xsearchcon />
    </div>
</template>
<script>
import xheader from "../module/search/search_header.vue";
import xsearchcon from "../module/search/search_con.vue";
import $ from "jquery";
export default {
  data() {
    return {
      services: [],
      list: []
    };
  },
  methods: {
    vipcenterback() {
      this.$store.state.index = true;
      this.$store.state.discounts_active = true;
    },
    getinfo() {
      if (!sessionStorage.getItem("classfiy")) {
        var self = this;
        $.ajax({
          url: "http://localhost:6789/classfiy",
          type: "get"
        }).then(function(res) {
          sessionStorage.setItem("classfiy", res);
          var all = JSON.parse(res);
          var allgoods = [];
          for (var i = 0; i < all.length; i++) {
            if (all[i].view_type == "category_group") {
              var item = JSON.parse(all[i].items);
              if (item) {
                for (var j = 0; j < item.length; j++) {
                  allgoods.push(item[j]);
                }
              }
            }
          }
          self.$store.state.searchlist = allgoods;
        });
      } else {
        var all = JSON.parse(sessionStorage.getItem("classfiy"));
        var allgoods = [];
        for (var i = 0; i < all.length; i++) {
          if (all[i].view_type == "category_group") {
            var item = JSON.parse(all[i].items);
            if (item) {
              for (var j = 0; j < item.length; j++) {
                allgoods.push(item[j]);
              }
            }
          }
        }
        this.$store.state.searchlist = allgoods;
        console.log(this.$store.state.searchlist);
      }
    }
  },
  mounted() {
    this.getinfo();
    this.$store.state.searchres=[];
    this.$store.state.searchstatus = true;
    this.$store.state.index=false;
  },
  components: {
    xheader,
    xsearchcon
  }
};
</script>

