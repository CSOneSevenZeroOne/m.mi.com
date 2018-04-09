const request = require("request");
request.get({
    url:"http://localhost:6789/classfiy",
    dataType:"JSON"
}, function optionalCallback(err, httpResponse, body) {
    var arr=JSON.parse(body);
    for(var i=0; i<arr.length; i++){
        if(arr[i].items!="null"&&arr[i].view_type!="category_title"){
            var items=JSON.parse(arr[i].items);
            //console.log(JSON.parse(arr[i].items)[0].action.path)
            for(var j=0; j<items.length; j++){
                if(/^\d+$/.test(''+items[j].action.path)){
                    //console.log(items[j].action.path)
                    request.post({
                        url: "https://m.mi.com/v1/product/productView2_new",
                        headers: {
                            origin: 'https://m.mi.com',
                            'referer': 'https://m.mi.com/commodity/detail/'+items[j].action.path,
                            'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D257 Safari/9537.53',
                            'x-requested-with': 'XMLHttpRequest',
                        },
                        formData: {
                            'client_id': 180100031051,
                            'channel_id': 0,
                            'webp': 1,
                            'commodity_id': items[j].action.path,
                            'width': 720
                        }
                    }, function optionalCallback(err, httpResponse, body) {
                        //console.log(httpResponse.request)
                        //res.send(httpResponse.request.headers.referer.split("detail/")[1])
                        if(JSON.parse(httpResponse.body).data){
                            var obj=JSON.parse(httpResponse.body).data
                            obj.path=httpResponse.request.headers.referer.split("detail/")[1]
                            request.post({
                                url: "http://localhost:6789/insertgoodsinfo",
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                                    //'Content-Type': 'multipart/form-data; charset=UTF-8',
                                },
                                form: {
                                    'action': JSON.stringify(obj),
                                }
                            }, function optionalCallback(err, httpResponse, body) {
                                console.log(111);
                            })
                            // request.post({
                            //     url: "http://localhost:6789/insertgoodsinfo/",
                            //     formData: {
                            //         'action':1
                            //     }
                            // }, function optionalCallback(err, httpResponse, body) {
                            //     console.log(111);
                            // })
                        }
                    })
                }
            }

        }
    }
})

























// request.post({

// })

// var express = require('express');
// var router = express.Router();
// const url = require('url');
// router.post('/', function (req, res, next) {
//     res.setHeader("Access-Control-Allow-Origin", "*");//允许跨域
//     res.setHeader("Content-Type", "text/plain;charset=UTF-8");//字符编码

    


    
// });
// module.exports = router;



