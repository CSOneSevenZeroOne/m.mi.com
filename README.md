# 基于Vue重写的小米商城

## 萌新代码

----

### 入口

* 页面：'/entry/index.html'

使用 html-webpack-plugin 插件生成

* 入口文件：'/entry/entry.js'

### 出口

* 文件夹 ：'./output'

使用 clean-webpack-plugin 插件清理

输入 `npm start` 命令运行 webpack-dev-server,自动打开路径为 localhost:8000/#/ 主页面

输入 `npm run build` 命令进行构建

### 用户

* 用户页:'/user'

|组件名|路径|
|-|-|
|公用头部组件|entry/compoents/module/header.vue|
|底部Tab组件|entry/compoents/module/footer.vue|
|订单切换|entry/compoents/module/order_tab.vue|
|空订单|entry/compoents/module/order/order_empty.vue|
|会员中心|entry/compoents/module/vip/vipcenter.vue|
|我的优惠|entry/compoents/module/coupon.vue|
|mihome|entry/compoents/module/mihome.vue|
|服务|entry/compoents/module/services.vue|
|设置|entry/compoents/module/setting.vue|
|f码|entry/compoents/module/fcodepipe.vue|
|搜索|entry/compoents/public/search.vue|

* 数据库名 xiaomi

### 详情页

* 路由：'/commodity/'+id
* 组件：

|组件名|路径|
|-|-|
|commodity|entry/compoents/commodity.vue|
|commodity|entry/compoents/commodity/comm_content.vue|
|commodity|entry/compoents/commodity/comm_footer.vue|

### 购物车

* 路由：'/cart'
* 组件：

|组件名|路径|
|-|-|
|购物车|entry/compoents/cart.vue|
|空车|entry/compoents/cart/cart_empty.vue|
|列表|entry/compoents/cart/cart_list.vue|
|推荐|entry/compoents/cart/cart_recommend.vue|
|未登录|entry/compoents/cart/cart_unlogin.vue|
|购买限制|entry/compoents/cart/cart_max.vue|
|结算栏|entry/compoents/cart/cart_checkout.vue|
|选购|entry/compoents/cart/cart_selectshop.vue|

### 分类页

* 路由：'/classfiy'
* 组件：

|组件名|路径|
|-|-|
|分类|entry/compoents/classfiy.vue|
