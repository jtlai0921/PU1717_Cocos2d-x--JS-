/**
 * Created by tonyguan on 2014/8/23.
 */

console.log("--不帶標簽的break敘述範例--");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
for (var i = 0; i < numbers.length; i++) {
    if (i == 3) {
        break;
    }
    console.log("Count is: " + i);
}

console.log("--帶標簽的break敘述範例--");
var arrayOfInts = [
    [ 32, 87, 3, 589],
    [ 12, 1076, 2000, 8 ],
    [622, 127, 77, 955]
];

var searchfor = 12;
var i, j = 0;
var foundIt = false;

search: for (i = 0; i < arrayOfInts.length; i++) {
    for (j = 0; j < arrayOfInts[i].length; j++) {
        if (arrayOfInts[i][j] == searchfor) {
            foundIt = true;
            break search;
        }
    }
}

if (foundIt) {
    console.log("找到元素 " + searchfor + " 在第" + i + "行, 第" + j + "列");
} else {
    console.log(searchfor + "在陣列中沒有找到！");
}

console.log("--不帶標簽的continue敘述範例--");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
for (var i = 0; i < numbers.length; i++) {
    if (i == 3) {
        continue;
    }
    console.log("Count is: " + i);
}

console.log("--帶標簽的continue敘述範例--");
var n = 0;
outer: for (var i = 101; i < 200; i++) { // 外層循環
    for (var j = 2; j < i; j++) {           // 內層循環
        if (i % j == 0) {
            continue outer; // 不能使用 "break"
        }
    }
    console.log("i= " + i);
}
