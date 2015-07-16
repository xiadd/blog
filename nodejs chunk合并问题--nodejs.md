先上代码
```javascript
var superagent = require('superagent');
var cheerio = require('cheerio');
var http = require('http');

var qq_url='http://m.qzone.qq.com/cgi-bin/new/get_msgb?uin=0&hostUin=727050120&num=10&start=10&hostword=0&essence=1&r=0.48072542040608823&iNotice=0&inCharset=utf-8&outCharset=utf-8&format=jsonp&ref=qzone&g_tk=5381'
http.get(qq_url,function(res) {
    var data = "";
    res.on('data',function(chunk) {
        data+=chunk;
        var b=data.slice(data.indexOf('(')+1,data.lastIndexOf(')'));
        console.log(b)
    })
})
```
这边的chunk是两个buffer，暂时还不知道怎么合并（**留**）
