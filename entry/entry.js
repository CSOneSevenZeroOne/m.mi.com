//npm
//import Vue from "vue";
//手动下载
import Vue from "vue";
require("./css/base.css");
import xuser_pannel from "./components/user_pannel.vue";
import xuser_header from "./components/user_header.vue";
import xuser_order from "./components/user_order.vue";
import xfooter from "./components/module/footer.vue";
new Vue({
	//容器作用域
	el: "#user",
	//容器内容
	template: `
		<div style="height:100%; width:100%" id="user_page">
			<xuser_header />
			<xuser_order />
			<xuser_pannel />
			<xfooter />
		</div>
	`,
	data: {

	},
	methods: {},
	components: {
		xuser_pannel,
		xuser_header,
		xuser_order,
		xfooter
	}
})