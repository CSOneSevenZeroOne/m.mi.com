<template>
    <div style="background:#fff;height:100%">
        <header class="header">
        <a href="#/user" class="header_back" @click="vipcenterback"><img src="../../images/user/icon/icon_06.jpg" alt=""></a>
        <div class="header_title">
            <p v-text="'F码购买'"></p>
        </div>
        <a href="" class="header_search"><img src="../../images/user/icon/icon_03.jpg" alt=""></a>
    </header>
    <div class="fcode">
        <form action="#" class="fcode_form">
            <div class="fcode_form_con">
                <input type="text" placeholder="请输入任意产品F码">
            </div>
        </form>
    </div>
    <div  class="notic"><div  class="name">F码就是朋友特权</div><div  class="content"><p >F码是小米产品优先购买码，无需预约排队，直接购买热门商品。F = Friend，它是为小米的好朋友提供的“友情特权”。部分商品的特权购买，无法保证7天内发货。</p><p >红米Note 4X 初音未来限量套装 预计6-8周发货。</p></div><div  class="name">谁会有F码？</div><div  class="content"><p >我们把F码发放给以下论坛资深用户：</p><p >1. 小米论坛的版主们、顾问团、资源组成员、同城会会长</p><p >2. MIUI论坛的版主们、荣誉开发组、资源组、主题创意组和粉丝站长组的成员</p></div></div>
    <a href="javascript:void(0)" class="codesubmit">提交</a>
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
    if (str.split("#")[1] == "/fcodepipe") {
      this.$store.state.index = false;
    }
  }
};
</script>
<style scoped>
.codesubmit {
  display: block;
  width: 100%;
    height: .5rem;
    position: absolute;
    bottom: 0;
    text-align: center;
  font-size: 0.15rem;
  line-height:  .5rem;
  background-color: #f4f4f4;
}
.fcode {
  padding-top: 0.6rem;
}
.fcode_form_con input {
  border: 1px solid #f6f6f6;
  overflow: hidden;
  font-size: 0.12rem;
  padding: 0.09rem 0.15rem;
  width: 100%;
  box-sizing: border-box;
  outline: none;
}
.notic {
  padding-top: 0.2rem;
  border-top: 1px solid #f6f6f6;
  color: #777;
  line-height: 0.15rem;
  margin: 0.2rem 0.15rem 0;
}

.notic p {
  list-style: none;
  margin: 0;
  padding: 0;
}
.fcode_form_con {
  border: 1px solid #f6f6f6;
  overflow: hidden;
  font-size: 0.12rem;
}
.fcode_form {
  margin: 0.1rem;
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

