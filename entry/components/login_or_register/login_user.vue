<template>
	<div id="wrap">
		<div class="wrap">
			<div class="layout_panel">
				<div class="layout" id="layout">
					<!--表单输入登录-->
					<div class="mainbox" id="login-main">
						<div id="custom_display_2">
							<a class="ercode" id="qrcode-trigger" href="javascript:void(0)"></a>
						</div>
						<!-- header s -->
						<div class="lgnheader">
							<div class="header_tit t_c">
								<em id="custom_display_1" class="milogo">
                  <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="3" ry="3" style="fill:#ff6700"></rect><rect x="10" y="15" width="4.2" height="18" style="fill:#FFFFFF"></rect><rect x="33.75" y="15" width="4.2" height="18" style="fill:#FFFFFF"></rect><rect x="11.25" y="15" width="15" height="4.1" style="fill:#FFFFFF"></rect><rect x="26.2" y="20.55" width="4.2" height="12.5" style="fill:#FFFFFF"></rect><rect x="20.6" y="15" width="9.8" height="9.8" rx="4.4" ry="4.4" style="fill:#FFFFFF"></rect><rect x="20.2" y="19" width="6" height="6" rx="2" ry="2" style="fill:#ff6700"></rect><rect x="18" y="19.1" width="4" height="2.2" style="fill:#ff6700"></rect><rect x="24.2" y="23" width="1.94" height="10" style="fill:#ff6700"></rect><rect x="18.1" y="22.8" width="4.2" height="10.2" style="fill:#FFFFFF"></rect></svg>
                </em>
								<h4 class="header_tit_txt" id="login-title">小米帐号登录</h4>
								<div class="site_info"></div>
							</div>
						</div>
						<!-- header e -->
						<!-- tab s -->
						<div class="nav_tabs_panel">
							<div id="nav-tabs" class="nav_tabs">
								<a class="navtab-link now" href="javascript:void(0);" data-tab="pwd">帐号登录</a><span class="line"></span>
								<a class="navtab-link" href="javascript:void(0);" data-tab="qr">扫码登录</a>
							</div>
						</div>
						<!-- tab e -->
						<!-- tab con s -->
						<div class="tabs-con tabs_con now" data-con="pwd">
							<div>
								<div class="login_area">
									<form action="/pass/serviceLoginAuth2" method="POST" id="login-main-form">
										<div class="loginbox c_b">
											<!-- 输入框 -->
											<div class="lgn_inputbg c_b login-panel pwdLogin">
												<!--验证用户名-->
												<div class="single_imgarea" id="account-info">
													<div class="na-img-area" id="account-avator" style="display:none">
														<div class="na-img-bg-area" id="account-avator-con"></div>
													</div>
													<p class="us_name tac" id="account-displayname"></p>
													<p class="us_id tac"></p>
												</div>
												<label id="region-code" class="labelbox login_user c_b" for="">
                          <div class="turn_area"><a class="btn_turn" id="manual_code" href="javascript:void(0);" title="关闭国家码"></a></div>
                          <div class="country_list">
                            <div class="animation countrycode_selector" id="countrycode_selector">
                              <span class="country_code"><tt class="countrycode-value" id="countrycode_value">+86</tt><i class="icon_arrow_down"></i></span>
                            </div>
                          </div>
                          <input class="item_account" autocomplete="off" type="text" name="user" id="username" placeholder="邮箱/手机号码/小米ID" _type="text" v-model="username">
                        </label>
												<div class="country-container" id="countrycode_container" style="display: none;">
													<div class="country_container_con" id="countrycode_container_con"></div>
												</div>
												<label class="labelbox pwd_panel c_b">
                          <input class="item_account" type="password" placeholder="密码" autocomplete="off" id="pwd" name="password" _type="password" v-show="password" v-model="pwd">
                          <input class="item_account" type="text" placeholder="密码" autocomplete="off" id="visiablePwd" name="visiablepwd" v-show="!password" v-model="pwd">
                          <div class="eye_panel pwd-visiable" @click="passwordchick">
                            <i class="eye pwd-eye">
                              <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <path class="eye_outer" d="M0 8 C6 0,14 0,20 8, 14 16,6 16, 0 8 z"></path>
                                <circle class="eye_inner" cx="10" cy="8" r="3"></circle>
                              </svg>
                              </i>
                          </div>
                          <div id="sms-code-panel" class="code_panel" style="display: none;">
                            <a href="javascript:;" id="getSMSCode">获取验证码</a>
                          </div>
                        </label>
											</div>
											<div class="security_Controller" style="display: none;">
												<label class="checkbox_area">
                          <input type="checkbox" id="trustSecurityController" class="checkbox">使用安全控件</label>
											</div>

											<!-- 错误信息 -->
											<div id="captcha"></div>
											<div class="err_tip">
												<div><em class="icon_error" v-text="msg" style="color:#ff6700"></em><span class="error-con"></span></div>
											</div>
											<!-- 登录频繁 -->
											<div id="error-forbidden" class="err_forbidden">您的操作频率过快，请稍后再试。</div>
											<div class="btns_bg">
												<input class="btnadpt" id="login-button" type="button" value="登录" @click="login">
												<span id="custom_display_8" class="sns-default-container sns_default_container" style="display: none;">
                          </span>
											</div>
											<div class="other_panel clearfix">
												<span id="custom_display_256" class="sms_link">
                            <a href="#/loginphone" class="btnadpt btn_gray" id="ChangeLoginType">手机短信登录/注册</a>
                          </span>
												<div class="reverse">
													<div class="n_links_area" id="custom_display_64" style="">
														<a class="outer-link" href="#/loginphone">立即注册</a><span>|</span>
														<a class="outer-link" href="https://account.xiaomi.com/pass/forgetPassword">忘记密码？</a>
													</div>
												</div>
												<!-- 其他登录方式 s -->
												<div style="display: block;" class="other_login_type sns-login-container" id="custom_display_16">
													<fieldset class="oth_type_tit">
														<legend align="center" class="oth_type_txt">其他方式登录</legend>
													</fieldset>
													<div class="oth_type_links">
														<a class="icon_type btn_qq sns-login-link" data-type="qq" href="https://account.xiaomi.com/pass/sns/login/auth?appid=100284651&amp;&amp;callback=https%3A%2F%2Faccount.xiaomi.com&amp;sid=passport" title="QQ登录" target="_blank"><i class="btn_sns_icontype icon_default_qq"></i></a>
														<a class="icon_type btn_weibo sns-login-link" data-type="weibo" href="https://account.xiaomi.com/pass/sns/login/auth?appid=2996826273&amp;&amp;callback=https%3A%2F%2Faccount.xiaomi.com&amp;sid=passport" title="微博登录" target="_blank"><i class="btn_sns_icontype icon_default_weibo"></i></a>
														<a class="icon_type btn_alipay sns-login-link" data-type="alipay" href="https://account.xiaomi.com/pass/sns/login/auth?appid=2088011127562160&amp;&amp;callback=https%3A%2F%2Faccount.xiaomi.com&amp;sid=passport" title="支付宝登录" target="_blank"><i class="btn_sns_icontype icon_default_alipay"></i></a>
														<a class="icon_type btn_weixin sns-login-link" data-type="weixin" href="https://account.xiaomi.com/pass/sns/login/auth?appid=wxxmzh&amp;scope=snsapi_login&amp;callback=https%3A%2F%2Faccount.xiaomi.com&amp;sid=passport" title="微信登录" target="_blank"><i class="btn_sns_icontype icon_default_weixin"></i></a>
													</div>
												</div>
												<!-- 其他登录方式 e -->
												<p class="acq_tips" style="display: none;"></p>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div class="tabs-con tabs_con" data-con="qr">
							<div class="tab_qrcon">
								<div class="tab_code_iframe">
									<iframe style="background:#fff;" src="about:blank" id="tab-qriframe" frameborder="0" scrolling="no"></iframe>
								</div>
								<div class="custom_sub_txt">
									<p>使用<span>小米商城APP</span>扫一扫</p>
									<p>小米手机可打开「设置」&gt;「小米帐号」扫码登录</p>
								</div>
							</div>
						</div>
						<!-- tab con e -->
					</div>
					<div class="ercode_area" id="login-qrcode">
						<div class="ercode_pannel">
							<a class="code_close" href="javascript:void(0)" title="关闭" id="qrcode-close"><span class="icon_code_close"></span></a>
							<div class="ercode_box">
								<div class="code_hd">
									<h3 class="code_tit">小米帐号扫码登录</h3>
									<p>请打开「设置 &gt; 小米帐号 &gt; 右上角扫一扫」扫码登录</p>
								</div>
								<div class="code_iframe">
									<iframe style="background:#fff;" src="about:blank" id="qriframe" frameborder="0" scrolling="no"></iframe>
								</div>
							</div>
						</div>
					</div>
					<div class="ac-box" style="display: none">
						<!-- 取号注册 -->
						<div id="ac-register" class="tac" style="display: none">
							<h1>注册小米帐号</h1>
							<div class="box">
								<img src="https://account.xiaomi.com/static/res/bcc9d9f/account-static/respassport/acc-2014/img/2018/sim.png" alt="sim card" class="fl" width="70" height="70">
								<div class="fl">
									<p>手机号：<span class="maskedPhone"></span></p>
								</div>
							</div>
							<div class="err_tip">
								<div class="dis_box"><em class="icon_error"></em><span class="error-con"></span></div>
							</div>
							<div class="fixed_bot">
								<a href="javascript:;" class="btnadpt ok_btn">一键注册</a>
								<a href="javascript:;" class="btnadpt no_btn btn_gray">登录其他帐号</a>
							</div>
							<p class="acq_tips" style="display: none">取号来源于中国移动</p>
							<p class="agreeTip"><i class="icon_select icon_true"></i>同意小米的
								<a href="http://www.miui.com/res/doc/eula/cn.html" class="agreement_link">用户协议</a>和
								<a href="http://www.miui.com/res/doc/privacy/cn.html" class="privacy_link"> 隐私政策 </a>
							</p>
						</div>
						<!-- 回收号确认 -->
						<div id="ac-confirm" class="tac" style="display: none">
							<div>
								<div class="box">
									<div class="na-img-area">
										<div class="na-img-bg-area us-portraitUrl"></div>
									</div>
									<div class="confirm_tips">
										<p>昵称：<span class="usernameShow"></span></p>
										<p>小米ID：<span class="useridShow"></span></p>
										<!-- <p>注册时间：<span class="userRegisterDateShow"></span></p>
                    <p>注册设备：<span class="userRegisterDeviceShow"></span></p>
                    <p>注册来源：<span class="userRegisterOriginShow"></span></p>
                    <p>手机号：<span class="userPhoneShow"></span></p> -->
									</div>
								</div>
								<h2>这是你的帐号吗？</h2>
							</div>
							<div class="err_tip">
								<div class="dis_box"><em class="icon_error"></em><span class="error-con"></span></div>
							</div>
							<div class="fixed_bot">
								<a href="javascript:;" class="btnadpt plain ok_btn">是我的，立即登录</a>
								<a href="javascript:;" class="btnadpt plain no_btn">不是我的，注册新帐号</a>
							</div>
							<p class="acq_tips" style="display: none">取号来源于中国移动</p>
							<p class="ptb30">
								<a href="javascript:;" class="back_btn blue">登录其他帐号</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="custom_display_4" class="n-footer">
			<div class="nf-link-area clearfix">
				<ul class="lang-select-list">
					<li>
						<a href="javascript:void(0)" data-lang="zh_CN" class="lang-select-li current">简体</a>|</li>
					<li>
						<a href="?&amp;_locale=zh_TW" data-lang="zh_TW" class="lang-select-li">繁体</a>|</li>
					<li>
						<a href="?&amp;_locale=en" data-lang="en" class="lang-select-li">English</a>|</li>
					<li>
						<a href="https://static.account.xiaomi.com/html/faq/faqList.html" target="_blank">常见问题</a>|</li>
					<li>
						<a id="msg-privacy" href="http://www.miui.com/res/doc/privacy/cn.html" target="_blank">隐私政策</a>
					</li>
				</ul>
			</div>
			<p class="nf-intro" style="display: none;">小米公司版权所有-京ICP备10046444-
				<a class="beian-record-link" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020134"><span><img src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png"></span>京公网安备11010802020134号</a>-京ICP证110507号</p>
		</div>
	</div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      password: true,
      username: "",
      pwd: "",
      msg: ""
    };
  },
  methods: {
    passwordchick() {
      this.password = !this.password;
    },
    login() {
      var self = this;
      //console.log(111);
      $.ajax({
        url: "http://localhost:6789/sign/login",
        type: "post",
        data: {
          user_name: self.username,
          user_pwd: self.pwd
        },
        dataType: "JSON"
      }).then(function(res) {
        if (res.status == 1) {
          self.$store.state.foottab = {
            home_src: require("../../images/foottab/home_curr.jpg"),
            home_curr: true,
            classify_src: require("../../images/foottab/classify.jpg"),
            classify_curr: false,
            cart_src: require("../../images/foottab/cart.jpg"),
            cart_curr: false,
            user_src: require("../../images/foottab/user.jpg"),
            user_curr: false
          };
          sessionStorage.setItem("userinfo",self.username)
          this.$store.state.index=true;
          window.location.href = "#/";
        } else {
          self.msg = "用户名或密码错误";
        }
      });
    }
  },
  mounted(){
    this.$store.state.index=false;
  }
};
</script>
<style type="text/css">
html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
blockquote,
p,
pre,
dl,
dd,
ol,
ul,
li,
a,
span,
caption,
th,
td,
form,
fieldset,
legend,
input,
button,
textarea,
address {
  margin: 0;
  padding: 0;
}

* {
  padding: 0;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}

ol,
ul {
  list-style: none;
}

li {
  list-style: none;
}

fieldset,
img {
  border: 0;
}

address,
cite,
dfn,
em,
var {
  font-style: normal;
}

code,
kbd,
pre,
samp {
  font-family: courier new, courier, monospace;
}

input,
button,
textarea,
select {
  font-size: 100%;
}

input,
button,
select,
textarea {
  outline: 0;
}

textarea {
  resize: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  font-size: inherit;
}

abbr[title] {
  border-bottom: 1px dotted;
  cursor: help;
}

a,
a:hover {
  text-decoration: none;
}

a,
label,
:focus {
  outline: 0 none;
}

a,
img,
input {
  border: 0 none;
}

s {
  font-style: normal;
  text-decoration: none;
}

body {
  font-size: 14px;
  font-family: arial, "Hiragino Sans GB", "Microsoft YaHei", "微軟正黑體",
    "儷黑 Pro", sans-serif;
}

button,
input,
select,
textarea {
  font-family: arial, "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
}

input::-moz-placeholder,
textarea::-moz-placeholder {
  color: #3b3b3b;
  font-weight: normal;
}

::-webkit-input-placeholder {
  color: #3b3b3b;
  font-weight: normal;
}

input:-ms-input-placeholder {
  color: #3b3b3b;
  font-weight: normal;
}

::-ms-clear {
  display: none;
}

::-ms-reveal {
  display: none;
}

.clearfix:after {
  display: block;
  content: "\20";
  height: 0;
  clear: both;
  overflow: hidden;
  visibility: hidden;
}

.clearfix {
  *zoom: 1;
}

input::-ms-clear {
  display: none;
}

input::-ms-reveal {
  display: none;
}

input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 1000px white inset;
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  a {
    background-color: transparent;
  }
}

input {
  background: 0;
  border: 0 none;
}

input[type="button"],
input[type="submit"],
input[type="reset"],
a {
  -webkit-appearance: none;
  appearance: none;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

.nbg {
  background: none !important;
}

.t_l {
  text-align: left;
}

.t_c {
  text-align: center;
}

.t_r {
  text-align: right;
}

.c_b:before,
.c_b:after {
  content: "";
  display: block;
}

.c_b:after {
  clear: both;
}

.c_b {
  zoom: 1;
}

.hidden,
.hide {
  display: none;
}

.hideimportant {
  display: none !important;
}

.underline {
  text-decoration: underline;
}

input[type="text"]::-ms-clear,
input[type="password"]::-ms-reveal {
  display: none;
}

input {
  color: #333;
}

input:required,
input:invalid {
  -moz-box-shadow: none;
  box-shadow: none;
}

input::-moz-focus-inner {
  border: 0;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

input {
  color: #4a4a4a;
}

::-webkit-input-placeholder {
  color: #9b9b9b;
}

input:-ms-input-placeholder {
  color: #9b9b9b;
}

.blue {
  color: #2ea5e5;
}

.orange {
  color: #ff6700;
}

.fr {
  float: right;
}

.tac {
  text-align: center;
}

.ptb30 {
  padding: 30px 0;
}

.clearfix:before,
.clearfix:after {
  content: " ";
  display: table;
}

.clearfix:after {
  clear: both;
}

@media only screen and (max-width: 420px) {
  html {
    font-size: 625%;
  }
}

@media only screen and (max-width: 580px) and (min-width: 421px) {
  html {
    font-size: 687.5%;
  }
}

@media only screen and (max-width: 540px) and (min-width: 480px) {
  html {
    font-size: 750%;
  }
}

@media only screen and (max-width: 660px) and (min-width: 541px) {
  html {
    font-size: 781.25%;
  }
}

@media only screen and (max-width: 720px) and (min-width: 661px) {
  html {
    font-size: 812.5%;
  }
}

@media only screen and (min-width: 720px) {
  html {
    font-size: 875%;
  }
}

body {
  font-size: 0.14rem;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  background-color: #fff;
}

button,
input,
select,
textarea,
tt {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

html,
body {
  height: 100%;
}

a {
  color: #9b9b9b;
}

.a_critical {
  color: #4a4a4a;
}

.btns_bg {
  padding-top: 24px;
}

.btnadpt {
  width: 100%;
  padding: 0.1rem 0;
  display: block;
  margin-bottom: 14px;
  text-align: center;
  font-size: 0.18rem;
  color: #fff;
  cursor: pointer;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -o-border-radius: 6px;
  border-radius: 6px;
  overflow: hidden;
  background-color: #ff6700;
}

.btnadpt.disabled {
  opacity: 0.7;
  filter: alpha(opacity=70);
}

.btnadpt.plain {
  border: 1px solid #ff6700;
  background-color: #fff;
  color: #ff6700;
}

.btn_gray {
  background: #fff;
  margin-top: 10px;
  border: 1px solid #d3d3d3;
  color: #000;
}

.btn_gray.disabled {
  color: #9b9b9b;
}

.wrapper {
  min-height: 100%;
  height: auto;
}

.wrap {
  padding-bottom: 0.9rem;
}

.layout {
  width: 100%;
  margin: 0 auto 30px;
  padding: 0 28px;
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.header_tit {
  padding: 30px 0 10px;
}

.milogo {
  background-image: url(https://account.xiaomi.com/static/res/11eb7d1/account-static/respassport/acc-2014/img/2018/milogo.png);
  width: 48px;
  height: 48px;
  margin: 0 auto 15px;
  display: block;
  background-image: -webkit-image-set(
    url(https://account.xiaomi.com/static/res/11eb7d1/account-static/respassport/acc-2014/img/2018/milogo.png)
      1x,
    url(https://account.xiaomi.com/static/res/11eb7d1/account-static/respassport/acc-2014/img/2018/milogo@2x.png)
      2x
  );
}

.header_tit_txt {
  font-size: 0.18rem;
  color: #000;
  font-weight: normal;
}

.login_area {
  padding-bottom: 20px;
}

.labelbox {
  display: block;
  background-color: #fff;
}

.labelbox input {
  width: 100%;
  padding: 0.16rem 0;
  line-height: normal;
  display: block;
  font-size: 0.18rem;
}

.loginbox .acq_tips {
  margin-top: 30px;
}

.login_user {
  margin-bottom: 1px;
  display: box;
  display: -webkit-box;
  display: -moz-box;
  -webkit-box-align: center;
  box-align: center;
  border-bottom: 1px solid #d3d3d3;
}

.item_account {
  -webkit-box-flex: 1;
  box-flex: 1;
}

.pwd_panel {
  border-bottom: 1px solid #d3d3d3;
  display: box;
  display: -webkit-box;
  display: -moz-box;
  -webkit-box-align: center;
  box-align: center;
}

.pwd_panel input {
  -webkit-box-flex: 1;
  box-flex: 1;
}

.eye {
  width: 20px;
  height: 16px;
  display: block;
}

.eye.chk .eye_outer,
.eye.chk .eye_inner {
  fill: #ff6700;
}

.eye_outer {
  fill: #4d4d4d;
}

.eye_inner {
  fill: #4d4d4d;
  stroke: #fff;
  stroke-width: 2;
  stroke-opacity: 0.8;
}

.lgncode {
  padding-top: 14px;
  display: box;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  box-align: center;
  align-items: flex-end;
}

.code_label {
  -webkit-box-flex: 1;
  box-flex: 1;
  border-bottom: 1px solid #d3d3d3;
}

.chkcode_img {
  border-bottom: 1px solid #d3d3d3;
}

.sms_login .lgncode {
  padding: 0;
  background: #fff;
  margin-bottom: 1px;
}

.sms_login .code_label {
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  -o-border-radius: 0;
  border-radius: 0;
}

.sms_login .chkcode_img {
  margin-left: 0;
}

.btn_facebook {
  background-color: #7a96d2;
}

.btn_qq {
  background-color: #72c7db;
}

.btn_weibo {
  background-color: #ed9090;
}

.btn_alipay {
  background-color: #6bb6ea;
}

.btn_weixin {
  background-color: #00be00;
}

.btn_sns_icontype {
  background: url(https://account.xiaomi.com/static/res/166d6dc/account-static/respassport/acc-2014/img/icons_type.png)
    no-repeat;
  display: block;
  width: 18px;
  height: 18px;
  margin: 5px auto 0;
}

.sns-default-container .btn_sns_icontype {
  display: inline-block;
  vertical-align: middle;
  margin: 0 5px 0 0;
}

.icon_default_qq {
  background-position: -19px 0;
}

.icon_default_weibo {
  background-position: -38px 0;
}

.icon_default_alipay {
  background-position: -57px 0;
}

.icon_default_weixin {
  background-position: -84px 0;
}

.icon_default_alipay {
  width: 26px;
}

.icon_default_weixin {
  width: 23px;
}

.icon_default_facebook {
  background: 0;
  display: inline !important;
}

.btn_facebook:before {
  content: "";
  width: 18px;
  height: 18px;
  margin-right: 6px;
  background: url(https://account.xiaomi.com/static/res/28f08d0/account-static/respassport/acc-2014/img/fb.png);
  display: inline-block;
  vertical-align: middle;
}

.other_login_type {
  padding-top: 40px;
}

.oth_type_tit {
  border-top: 1px solid #f2f2f2;
  padding-top: 10px;
}

.oth_type_txt {
  font-size: 0.12rem;
  color: #b0b0b0;
  width: 80px;
}

.oth_type_links {
  padding-top: 10px;
  text-align: center;
  display: box;
  display: -webkit-box;
  display: -moz-box;
  -webkit-box-pack: center;
  box-pack: center;
}

.oth_type_links .btn_weixin {
  display: none;
}

.icon_type {
  width: 30px;
  height: 30px;
  margin: 0 10px;
  display: inline-block;
  text-indent: -9999px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
}

.icon_type .icon_default_qq {
  background-position: -19px 0;
}

.icon_type .icon_default_weibo {
  background-position: -38px 0;
}

.icon_type .icon_default_alipay {
  background-position: -57px 0;
}

.icon_type .icon_default_weixin {
  background-position: -84px 0;
}

.hasSnsDefault #ChangeLoginType {
  font-size: 0.14rem;
  text-align: center;
  display: block;
  background: 0;
  border: 0 none;
  padding: 10px 0 20px 0;
  margin: 0;
  color: #424242;
}

.hasSnsDefault #ChangeLoginType:after {
  content: ">";
}

.reverse {
  display: box;
  display: -webkit-box;
  display: -moz-box;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  -webkit-box-direction: reverse;
  box-direction: reverse;
}

.reverse .n_links_area {
  text-align: center;
  color: #646464;
}

.reverse .n_links_area a {
  padding: 0 9px;
  font-size: 0.16rem;
  color: #646464;
}

#qrcode-trigger {
  display: none !important;
}

.ercode {
  background: url(https://account.xiaomi.com/static/res/28f08d0/account-static/respassport/acc-2014/img/ercode_hover.png);
  width: 68px;
  height: 68px;
  position: absolute;
  right: 0;
  top: 0;
}

.ercode_area {
  display: none;
  width: 100% !important;
}

.ercode_box {
  padding-top: 40px;
}

.code_close {
  background-color: #bdbdbd;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  width: 0.3rem;
  height: 0.3rem;
  position: absolute;
  right: 10px;
  top: 10px;
}

.icon_code_close {
  width: 0.2rem;
  height: 0.2rem;
  margin: 0 auto;
  display: block;
  position: relative;
}

.icon_code_close:before,
.icon_code_close:after {
  content: "";
  width: 100%;
  height: 0.01rem;
  background-color: rgba(0, 0, 0, 0.3);
  display: block;
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: 0.04rem;
}

.icon_code_close:before {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.icon_code_close:after {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.code_hd {
  padding-bottom: 20px;
}

.zh_CN .code_hd,
.zh_TW .code_hd {
  text-align: center;
}

.code_tit {
  font-size: 0.2rem;
  text-align: center;
  color: #ff6700;
  font-weight: normal;
  padding-bottom: 10px;
}

.code_iframe {
  text-align: center;
}

.turn_area {
  display: none;
  padding-right: 8px;
}

.btn_turn {
  width: 0.11rem;
  height: 0.11rem;
  display: block;
  position: relative;
}

.btn_turn:before,
.btn_turn:after {
  content: "";
  width: 100%;
  height: 0.01rem;
  background-color: rgba(0, 0, 0, 0.3);
  display: block;
  position: absolute;
  left: 0;
  top: 50%;
}

.btn_turn:before {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.btn_turn:after {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.turn_off {
  display: none;
}

.add_regioncode .country_list {
  padding: 0.1rem 10px 0.1rem 0;
  margin-right: 8px;
  color: #4a4a4a;
  display: block;
  overflow: hidden;
}
.add_regioncode .country_list .country_code tt {
  margin-right: 2px;
  color: #9b9b9b;
  font-size: 0.18rem;
  line-height: 0.2rem;
}
.n-footer {
  line-height: 1.5;
  text-align: center;
  font-size: 0.14rem;
  margin-top: -0.9rem;
  height: 0.9rem;
}
.nf-link-area {
  color: #9b9b9b;
}
.nf-link-area li {
  display: inline-block;
}
.nf-link-area li a.current {
  color: #4a4a4a;
}
.nf-link-area li a {
  padding: 0 10px;
}
.nav_tabs_panel,
.bgiframe {
  display: none;
}
.sms_login .btn_turn,
.sms_login .eye_panel,
.sms_login #manual_code {
  display: none;
}
#getSMSCode,
.getSMSCode {
  cursor: pointer;
  color: #2ea5e5;
}
.err_forbidden {
  padding: 10px;
  line-height: 1.5;
  background: #fff;
  color: #f66;
  display: none;
}
.tabs_con {
  display: none;
}
.tabs_con.now {
  display: block;
}
.icon_arrow_down {
  margin-left: 0.03rem;
  display: block;
  width: 0.07rem;
  height: 0.07rem;
  border-width: 0.01rem;
  border-style: solid;
  border-color: transparent transparent #9b9b9b #9b9b9b;
  transform: rotate(-135deg);
}
.add_regioncode .animation {
  position: relative;
  -webkit-animation: fade-in ease-in-out 0.5s;
  -webkit-animation-name: fade-in;
  animation-name: fade-in;
  -webkit-animation-timing-function: ease-in-out;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
}
.add_regioncode .country_list .country_code {
  display: box;
  display: -webkit-box;
  display: -moz-box;
  box-align: center;
  -webkit-box-align: center;
  -moz-box-align: center;
  display: flex;
  align-items: center;
}
</style>
<style>
.country_list {
  display: none;
}
</style>