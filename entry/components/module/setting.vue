<template>
    <div style="background:#fff;height:100%">
        <header class="header">
        <a href="#/user" class="header_back" @click="vipcenterback"><img src="../../images/user/icon/icon_06.jpg" alt=""></a>
        <div class="header_title">
            <p v-text="'个人中心'"></p>
        </div>
        <a href="#/search" class="header_search"><img src="../../images/user/icon/icon_03.jpg" alt=""></a>
    </header>
    <ul class="setting_list">
        <li>
            <a href="javascript:void(0)">地址管理</a>
        </li>
    </ul>
    <a href="javascript:void(0)" class="exitaccount">退出账号</a>
    </div>
</template>
<script>
export default {
  data() {
    return {
      alphabet: []
    };
  },
  methods: {
    vipcenterback() {
      this.$store.state.index = true;
      this.$store.state.discounts_active = true;
    }
  },
  mounted() {
    var str = window.location.href;
    if (str.split("#")[1] == "/setting") {
      this.$store.state.index = false;
    }
  }
};
</script>
<style scoped>
.setting_list {
  margin-top: 0.6rem;
  font-size: 0.15rem;
  margin-bottom: 0.15rem;
}
.setting_list li {
  width: 100%;
  display: inline-block;
  padding: 0.1rem;
  border-bottom: 1px solid #f6f6f6;
  box-sizing: border-box;
  position: relative;
  text-align: left;
  color: #3c3c3c;
}
.setting_list li a {
  display: block;
  color: #3c3c3c;
}

.exitaccount {
  display: block;
  width: 100%;
  height: 0.5rem;
  position: absolute;
  bottom: 0;
  text-align: center;
  font-size: 0.15rem;
  line-height: 0.5rem;
  background-color: #f4f4f4;
}

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

