const request = require("request");
//SPDY Server for node.js
request.post({
    url: "https://m.mi.com/v1/product/recommend",
    type:"POST",
    headers: {
        'Host': 'm.mi.com',
        'Accept': 'application/json, text/plain, */*',
        'X-Requested-With': 'XMLHttpRequest',
        'Accept-Language': 'zh-cn',
        'Accept-Encoding': 'br, gzip, deflate',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Origin': 'https://m.mi.com',
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E216 MicroMessenger/6.6.5 NetType/WIFI Language/zh_CN',
        'Connection': 'keep-alive',
        'Referer': 'https://m.mi.com/commodity/detail/10000064',
        'Cookie': 'Hm_lpvt_4982d57ea12df95a2b24715fb6440726=1523151644; Hm_lvt_4982d57ea12df95a2b24715fb6440726=1522130130,1523150127,1523151644; xmuuid=XMGUEST-DA69E5C0-3ACD-11E8-B886-31CE6E27BC53; log_code=AJAX_ERROR|https%3A%2F%2Fm.mi.com%2Fcommodity%2Fdetail%2F10000064; mstuid=1520070089272_3621; callback_url=https://m.mi.com/cart?from=product&address_id=; client_id=180100041061; fbh20180327_uuid=7ca4a426-8d6d-460c-8f68-f1aacbf95e35; muuid=1522130125158_2635'
    },
    Cookies:{
        'Hm_lpvt_4982d57ea12df95a2b24715fb6440726':	'1523151644',
        'Hm_lvt_4982d57ea12df95a2b24715fb6440726':	'1522130130,1523150127,1523151644',
        'xmuuid':	'XMGUEST-DA69E5C0-3ACD-11E8-B886-31CE6E27BC53',
        'log_code':	'AJAX_ERROR|https%3A%2F%2Fm.mi.com%2Fcommodity%2Fdetail%2F10000064',
        'mstuid':	'1520070089272_3621',
        'callback_url':	'https://m.mi.com/cart?from=product&address_id=',
        'client_id':	'180100041061',
        'fbh20180327_uuid':	'7ca4a426-8d6d-460c-8f68-f1aacbf95e35',
        'muuid':	'1522130125158_2635',
        'Body':'client_id=180100031051&channel_id=0&webp=0&product_id=10000064'
    },
    formData: {
        'client_id': 180100031051,
        'channel_id': 0,
        'webp': 1,
        'commodity_id': 10000064,
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