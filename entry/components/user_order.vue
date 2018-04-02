<template>
	<!-- 订单 -->
    <div class="order">
        <div class="order_top">
            <div class="my_order">我的订单</div>
            <div class="all_order">
                <a href="#/order">全部订单</a>
            </div>
        </div>
        <div class="order_order">
            <ul>
                <li>
                    <a href="">
                        <img src="../images/user/icon/xiaomi_10.jpg" alt="">
                        <p>待付款</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../images/user/icon/xiaomi_12.jpg" alt="">
                        <p>待收货</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../images/user/icon/xiaomi_07.jpg" alt="">
                        <p>退换修</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
 
};
</script>

<style scoped>
/*
order
*/

.order {
    background: #fff;
    text-align: center
}

.order_top {
    height: .4rem;
    display: flex;
    justify-content: space-between;
    padding: 0 .17rem;
    align-items: center;
    border-bottom: 1px solid #d9d9d9;
}

.all_order {
    padding-right: .16rem;
    background: url(../images/user/icon/xiaomi_03.jpg) no-repeat right center;
}
.my_order{
    font-size: .14rem;
}

.order_order {
    height: .88rem;
}

.order_order ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: .88rem;
}
.order_order ul li a p{
    padding-top: .09rem;
}
</style>
