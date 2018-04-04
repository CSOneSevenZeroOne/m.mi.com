<template>
	<div id="wrap">

		<div class="wrap">
			<div class="layout_panel">
				<div class="layout" id="layout">
					<!--表单输入登录-->
					<div class="mainbox" id="login-main" style="display: block;">
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
											<div class="lgn_inputbg c_b login-panel pwdLogin sms_login">
												<!--验证用户名-->
												<div class="single_imgarea" id="account-info">
													<div class="na-img-area" id="account-avator" style="display:none">
														<div class="na-img-bg-area" id="account-avator-con"></div>
													</div>
													<p class="us_name tac" id="account-displayname"></p>
													<p class="us_id tac"></p>
												</div>
												<label id="region-code" class="labelbox login_user c_b add_regioncode" for="">
                          <div class="turn_area"><a class="btn_turn" id="manual_code" href="javascript:void(0);" title="关闭国家码"></a></div>
                          <div class="country_list">
                            <div class="animation countrycode_selector" id="countrycode_selector">
                              <span class="country_code"><tt class="countrycode-value" id="countrycode_value">+86</tt><i class="icon_arrow_down"></i></span>
                            </div>
                          </div>
                          <input class="item_account" autocomplete="off" type="tel" name="user" id="username" placeholder="手机号码" _type="tel">
                        </label>
												<div class="country-container" id="countrycode_container" style="display: none;">
													<div class="country_container_con" id="countrycode_container_con"></div>
												</div>
												<div id="captcha"></div><label class="labelbox pwd_panel c_b">
                          <input class="item_account" type="number" placeholder="短信验证码" autocomplete="off" id="pwd" name="password" _type="number">
                          <input class="item_account" type="text" placeholder="密码" autocomplete="off" id="visiablePwd" name="visiablepwd" style="display:none">
                          <div class="eye_panel pwd-visiable">
                            <i class="eye pwd-eye">
                              <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <path class="eye_outer" d="M0 8 C6 0,14 0,20 8, 14 16,6 16, 0 8 z"></path>
                                <circle class="eye_inner" cx="10" cy="8" r="3"></circle>
                              </svg>
                              </i>
                          </div>
                          <div id="sms-code-panel" class="code_panel" style="display: block;">
                            <a href="javascript:;" id="getSMSCode">获取验证码</a>
                          </div>
                        </label>
											</div>
											<div class="security_Controller" style="display: none;">
												<label class="checkbox_area">
                          <input type="checkbox" id="trustSecurityController" class="checkbox">使用安全控件</label>
											</div>

											<!-- 错误信息 -->
											<div class="err_tip" style="display: none;">
												<div><em class="icon_error"></em><span class="error-con"></span></div>
											</div>
											<!-- 登录频繁 -->
											<div id="error-forbidden" class="err_forbidden">您的操作频率过快，请稍后再试。</div>
											<div class="btns_bg">
												<input class="btnadpt" id="login-button" type="submit" value="立即登录/注册">
												<span id="custom_display_8" class="sns-default-container sns_default_container" style="display: none;">
                          </span>
											</div>
											<div class="other_panel clearfix">
												<span id="custom_display_256" class="sms_link">
                            <a href="javascript:;" class="btnadpt btn_gray" id="ChangeLoginType">用户名密码登录</a>
                          </span>
												<div class="reverse">
													<div class="n_links_area" id="custom_display_64" style="display: none;">
														<a class="outer-link" href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&amp;sid=mi_eshopm_go&amp;_bal=true&amp;_loginSign=ticket&amp;_loginType=ticket">立即注册</a><span>|</span>
														<a class="outer-link" href="https://account.xiaomi.com/pass/forgetPassword?callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&amp;sid=mi_eshopm_go&amp;_bal=true&amp;_loginSign=ticket&amp;_loginType=ticket">忘记密码？</a>
													</div>
												</div>
												<!-- 其他登录方式 s -->
												<div style="display: block;" class="other_login_type sns-login-container" id="custom_display_16">
													<fieldset class="oth_type_tit">
														<legend align="center" class="oth_type_txt">其他方式登录</legend>
													</fieldset>
													<div class="oth_type_links">
														<a class="icon_type btn_qq sns-login-link" data-type="qq" href="https://account.xiaomi.com/pass/sns/login/auth?appid=100284651&amp;&amp;callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&amp;sid=mi_eshopm_go" title="QQ登录" target="_blank"><i class="btn_sns_icontype icon_default_qq"></i></a>
														<a class="icon_type btn_weibo sns-login-link" data-type="weibo" href="https://account.xiaomi.com/pass/sns/login/auth?appid=2996826273&amp;&amp;callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&amp;sid=mi_eshopm_go" title="微博登录" target="_blank"><i class="btn_sns_icontype icon_default_weibo"></i></a>
														<a class="icon_type btn_alipay sns-login-link" data-type="alipay" href="https://account.xiaomi.com/pass/sns/login/auth?appid=2088011127562160&amp;&amp;callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&amp;sid=mi_eshopm_go" title="支付宝登录" target="_blank"><i class="btn_sns_icontype icon_default_alipay"></i></a>
														<a class="icon_type btn_weixin sns-login-link" data-type="weixin" href="https://account.xiaomi.com/pass/sns/login/auth?appid=wxxmzh&amp;scope=snsapi_login&amp;callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&amp;sid=mi_eshopm_go" title="微信登录" target="_blank"><i class="btn_sns_icontype icon_default_weixin"></i></a>
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
					<div class="ercode_area" id="login-qrcode" style="display: none;">
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
</script>

<style>

</style>