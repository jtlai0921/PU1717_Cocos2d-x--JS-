/*
 * 對Date的延伸，將 Date 轉化為指定格式的String   
 * 月(M)、日(d)、小時(h)、分(m)、秒(s)、季度(q) 可以用 1-2 個占位符，   
 * 月(M)、日(d)、小時(h)、分(m)、秒(s)、季度(q) 可以用 1-2 個占位符，   
 * (new Date()).format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
 * (new Date()).format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18   
 */
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小時
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

/*
 * 對Number的延伸，透過Error Code獲得Error Message   
 */
Number.prototype.errorMessage = function () {
    var errorStr = "";
    switch (this.valueOf()) {
        case -7:
            errorStr = "沒有資料.";
            break;
        case -6:
            errorStr = "日期沒有輸入.";
            break;
        case -5:
            errorStr = "內容沒有輸入.";
            break;
        case -4:
            errorStr = "ID沒有輸入.";
            break;
        case -3:
            errorStr = "據存取失敗.";
            break;
        case -2:
            errorStr = "您的賬號最多能插入10條資料.";
            break;
        case -1:
            errorStr = "使用者不存在，請到http://cocoagame.net登錄.";
    }
    return errorStr;
}

