<template>
    <div style="background:#fff; height:100%">
        <header class="header">
        <a href="#/user" class="header_back" @click="vipcenterback"><img src="../../images/user/icon/icon_06.jpg" alt=""></a>
        <div class="header_title">
            <p v-text="'优惠券列表'"></p>
        </div>
        <a href="" class="header_search"><img src="../../images/user/icon/icon_03.jpg" alt=""></a>
    </header>
        <div>
            <a href="javascript:void(0)">
                <img src="http://i8.mifile.cn/v1/a1/30bc2339-742e-bb1d-e502-0ae28daeed25.png" alt="">
            </a>
        </div>
    </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      services: []
    };
  },
  methods: {
    vipcenterback() {
      this.$store.state.index = true;
    }
  },
  mounted() {
    $.ajax({
      url: "http://localhost:9000/insertdata",
      type: "get",
      dataType:"json"
    }).then(function(res){
      console.log(res)
    });
  }
};
</script>

<style scoped>
.header {
  background: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 0.5rem;
  font-size: 0.16rem;
  color: #666;
  width: 100%;
  position: fixed;
  top: 0;
}
.header_back {
  margin-left: 0.18rem;
}
.header_search {
  margin-right: 0.16rem;
}
</style>
