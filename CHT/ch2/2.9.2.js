/**
 * Created by tonyguan on 2014/8/23.
 */


var global = 1;
function f() {
    var local = 2;
    global++;
    return global;
}

f();

console.log(global);
//console.log(local);         //執行錯誤