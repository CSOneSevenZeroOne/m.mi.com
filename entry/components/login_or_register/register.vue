<template>
	<div id="wrap">
		<div class="wrapper">
			<div class="wrap">
				<div class="layout">
					<div class="n-frame device-frame reg_frame" id="main_container">
						<div class="external_logo_area">
							<a class="milogo" href="javascript:void(0)"></a>
						</div>
						<div class="title-item t_c">
							<h4 class="title_big30">注册小米帐号</h4>
						</div>
						<div>
							<div class="regbox">
								<div class="phone_step1">
									<h4 class="tit_normal">
								        国家/地区
								     </h4>
									<div class="listwrap select-regions" _region="CN">
										<div class="listtit reg-select-regions">
											<div class="tits display_box c_b">
												<p class="result-select-regions">中国</p>
												<i class="icon_cirarr"></i>
											</div>
										</div>
										<div class="inputbg">
											<input type="hidden" class="select-regions-input" name="region" value="CN">
											<label class="labelbox" for="">
          									  <input type="tel" name="phone" data-type="PH" placeholder="请输入手机号码">
        									 </label>
										</div>
										<div class="err_tip">
											<div class="dis_box"><em class="icon_error"></em><span></span></div>
										</div>
									</div>

									<div class="err_tip send-left-times">
									</div>
									<div class="err_tip err_invalid error-invalid">
										<div class="dis_box"><em class="icon_error"></em><span></span></div>
									</div>
									<div class="fixed_bot mar_phone_dis1">
										<input class="btn332 btn_reg_1 submit-step" data-to="phone-step2" type="submit" value="立即注册">
										<div class="other_register_area" style="display:none;">
											<input class="btn332 btn_reg_2 change-view" data-to="EMAIL" type="button" value="用邮箱注册">
											<div class="facebook_area">
												<a class="btn332 btn_reg_2 box_center sns-login-facebook" href="https://account.xiaomi.com/pass/sns/login/auth?appid=222161937813280&amp;callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&amp;sid=mi_eshopm_go"><i class="iconfacebook"></i>使用Facebook登录</a>
											</div>
										</div>
										<img style="display:none;" src="/pass/ajax/tick?biz=register&amp;type=wap&amp;step=0">
									</div>
								</div>
							</div>
							<div class="privacy_box">
								<div class="msg">
									<label class="n_checked now select-privacy">
       									 <i class="icon_select"></i>注册帐号即表示您同意并愿意遵守小米 <a href="http://www.miui.com/res/doc/eula/cn.html" class="inspect_link agreement_link" title="用户协议" target="_blank">用户协议</a>和<a href="http://www.miui.com/res/doc/privacy/cn.html" class="inspect_link privacy_link" title=" 隐私政策 " target="_blank"> 隐私政策 </a>
     								 </label>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="n-footer">
			<div class="nf-link-area clearfix">
				<ul class="lang-select-list">
					<li>
						<a class="lang-select-li current" href="javascript:void(0)" data-lang="zh_CN">简体</a>|</li>
					<li>
						<a class="lang-select-li" href="javascript:void(0)" data-lang="zh_TW">繁体</a>|</li>
					<li>
						<a class="lang-select-li" href="javascript:void(0)" data-lang="en">English</a>
					</li>

					|
					<li>
						<a class="a_critical" href="https://static.account.xiaomi.com/html/faq/faqList.html" target="_blank"><em></em>常见问题</a>
					</li>

				</ul>
			</div>
			<p class="nf-intro"><span>小米公司版权所有-京ICP备10046444-<a class="beianlink beian-record-link" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020134"><span><img src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png"></span>京公网安备11010802020134号</a>-京ICP证110507号</span>
			</p>
		</div>
	</div>
</template>

<script>
import "../../css/register.css"; 
export default {
};
</script>
<style>
.btn-action-go {
  display: none;
}
.nf-intro {
  display: none;
}
</style>