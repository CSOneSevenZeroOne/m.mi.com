const request = require("request");
//SPDY Server for node.js
request.post({
    url: "https://m.mi.com/v1/product/productView2_new",
    headers: {
        ':authority': 'm.mi.com',
        ':method': 'POST',
        ':path': '/v1/product/productView2_new',
        ':scheme': 'https',
        'accept': 'application/json, text/plain, */*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'content-length': 74,
        'content-type': 'application/x-www-form-urlencoded',
        'cookie': 'xmuuid=XMGUEST-A5300CF0-2B05-11E7-BA89-1915B2B99B4C; mstuid=1493268890580_4121; muuid=1521951934233_2635; Hm_lvt_4982d57ea12df95a2b24715fb6440726=1522760358,1522761501,1522808871,1523108677; log_code=be3508ef26ecd981-4f3e9d63a6677a31|https%3A%2F%2Fm.mi.com%2Fcategory; hd_log_code=31wapcategorycategory_group001017%23t%3Dnormal%26page%3Dcategory%26act%3Dproduct%26pid%3D10000085%26bid%3D3194830.1; pageid=e788ae18b5944665; msttime=https%3A%2F%2Fm.mi.com%2Fcommodity%2Fdetail%2F10000085; msttime1=https%3A%2F%2Fm.mi.com%2Fcommodity%2Fdetail%2F10000085; mstz=||1728593202.20|||; xm_vistor=1493268890580_4121_1523108669133-1523109228251; Hm_lpvt_4982d57ea12df95a2b24715fb6440726=1523109232',
        'origin': 'https://m.mi.com',
        'pragma': 'no-cache',
        'referer': 'https://m.mi.com/commodity/detail/10000085',
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1x-requested-with: XMLHttpRequest'
    },
    formData: {
        'client_id': 180100031051,
        'channel_id': 0,
        'webp': 1,
        'commodity_id': 10000085,
        'width': 720
    },
}, function optionalCallback(err, httpResponse, body) {
    if (err) {
        return console.error('error! upload failed:', err);
    }
    console.log(body);
});