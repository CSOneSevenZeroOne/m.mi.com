<template>
	<!-- 头部 -->
    <header class="header">
        <div class="header_con">
            <div class="head_img">
                <img src="../../../images/user/default.png" alt="">
            </div>
            <div class="userinfo" v-if="username.length>2">
                <p class="username">刘处长</p>
                <p class="userid">1301723</p>
            </div>
            <div class="userinfo" v-else>
                <p class="username"><a href="#/loginuser">登录/注册</a></p>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  data() {
    return {
      username: ""
    };
  }
};
</script>
<style scoped>
.header {
  background: url(../../../images/user/bg.63c8e19.png) center 0 #f37d0f;
  background-size: auto 100%;
  width: 100%;
  padding: 0.17rem 0;
  font-size: 0.12rem;
}
.username a{
  color: #fff
}

.header_con {
  display: flex;
  align-items: center;
}

.head_img {
  height: 0.56rem;
  margin: 0 0.16rem 0 0.16rem;
  width: 0.47rem;
  height: 0.47rem;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 100%;
  border: 3px solid hsla(0, 0%, 100%, 0.4);
  display: flex;
  align-items: center;
}

.head_img img {
  width: auto;
  height: 100%;
}

.userinfo {
  color: hsla(0, 0%, 100%, 0.6);
}

.username {
  color: #fff;
}
</style>
