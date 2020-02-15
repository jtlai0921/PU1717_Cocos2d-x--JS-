/**
 * Created by tonyguan on 2014/8/22.
 */

var i = 0;
var a = 10;
var b = 9;

if ((a > b) || (i++ == 1)) {// 換成 | 試一下
    console.log("或運算為 真");
} else {
    console.log("或運算為 假");
}
console.log("i = " + i);

i = 0;
if ((a < b) && (i++ == 1)) {// 換成 & 試一下
    console.log("或運算為 真");
} else {
    console.log("或運算為 假");
}
console.log("i = " + i);