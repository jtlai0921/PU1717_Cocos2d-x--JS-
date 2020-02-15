/**
 * Created by tonyguan on 2014/8/23.
 */

function calculate(opr, a, b) {

    //定義+函數
    function add(a, b) {
        return a + b;
    }

    //定義-函數
    function sub(a, b) {
        return a - b;
    }

    var result;

    switch (opr) {
        case "+" :
            result = add(a, b);
            break;
        case "-" :
            result = sub(a, b);
    }
    return result;
}

var res1 = calculate("+", 10, 5);
console.log("10 + 5 = " + res1);

var res2 = calculate("-", 10, 5);
console.log("10 - 5 = " + res2);
