const request = require("request");

const http=require("http2")
//SPDY Server for node.js
// request.get({
//     url:"https://m.mi.com/commodity/detail/10000084"
// },function optionalCallback(err, httpResponse, body) {
//     if (err) {
//         return console.error('error! upload failed:', err);
//     }
//     console.log(body);
// })
var date = new Date()
var num = parseInt(date.getTime() / 1000)
console.log(num)
http.request({
    url: "https://m.mi.com/v1/product/productView2_new",
    headers: {
        'accept': 'application/json, text/plain, */*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9',
        'content-length': '74',
        'content-type': 'application/x-www-form-urlencoded',
        'origin': 'https://m.mi.com',
        'referer': 'https://m.mi.com/category',
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X)AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
        'x-requested-with': 'XMLHttpRequest',
        ':authority': 'm.mi.com',
        ':method': 'POST',
        ':path': '/v1/product/productView2_new',
        ':scheme': 'https',
        'cookie': 'xmuuid=XMGUEST-D942B720-3B0A-11E8-9A29-2F391DAA5546;  Hm_lvt_4982d57ea12df95a2b24715fb6440726=1523148921,1523152023,1523154259,1523173628; Hm_lpvt_4982d57ea12df95a2b24715fb6440726=' + num,
        // xmuuid=XMGUEST-D64BA920-3B08-11E8-AB0C-232DE69620F1;  Hm_lpvt_4982d57ea12df95a2b24715fb6440726=1523176978
        // XMGUEST-D942B720-3B0A-11E8-9A29-2F391DAA5546
        // XMGUEST-D942B720-3B0A-11E8-9A29-2F391DAA5546
        // xmuuid=XMGUEST-D942B720-3B0A-11E8-9A29-2F391DAA5546

    },
    formData: {
        'client_id': 180100031051,
        'channel_id': 0,
        'webp': 1,
        'commodity_id': 10000084,
        'width': 720
    },
}, function optionalCallback(err, httpResponse, body) {
    if (err) {
        return console.error('error! upload failed:', err);
    }
    console.log(body);
});

// Cookies
// Name	Value
// Hm_lpvt_4982d57ea12df95a2b24715fb6440726	1523151644
// Hm_lvt_4982d57ea12df95a2b24715fb6440726	1522130130,1523150127,1523151644
// xmuuid	XMGUEST-DA69E5C0-3ACD-11E8-B886-31CE6E27BC53
// log_code	AJAX_ERROR|https%3A%2F%2Fm.mi.com%2Fcommodity%2Fdetail%2F10000064
// mstuid	1520070089272_3621
// callback_url	https://m.mi.com/cart?from=product&address_id=
// client_id	180100041061
// fbh20180327_uuid	7ca4a426-8d6d-460c-8f68-f1aacbf95e35
// muuid	1522130125158_2635
// Body
// client_id=180100031051&channel_id=0&webp=0&product_id=10000064