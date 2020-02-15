/**
 * Created by tonyguan on 2014/8/22.
 */

var a = 12;
console.log(-a);
var b = a++;
console.log(b);
b = ++a;
console.log(b);

console.log("-------");

var intResult = 1 + 2;
console.log(intResult);

intResult = intResult - 1;
console.log(intResult);

intResult = intResult * 2;
console.log(intResult);

intResult = intResult / 2;
console.log(intResult);

intResult = intResult + 8;
intResult = intResult % 7;
console.log(intResult);

console.log("-------");
//宣告一個浮點型變數
var doubleResult = 10.0;
console.log(doubleResult);

doubleResult = doubleResult - 1;
console.log(doubleResult);

doubleResult = doubleResult * 2;
console.log(doubleResult);

doubleResult = doubleResult / 2;
console.log(doubleResult);

doubleResult = doubleResult + 8;
doubleResult = doubleResult % 7;
console.log(doubleResult);

console.log("-------");
var a = 1;
var b = 2;
a += b; 			// 相當於 a = a + b
console.log(a);

a += b + 3; 		// 相當於 a = a + b + 3
console.log(a);
a -= b; 			// 相當於 a = a - b
console.log(a);

a *= b;			// 相當於 a=a*b
console.log(a);

a /= b;			// 相當於 a=a/b
console.log(a);

a %= b;			// 相當於 a=a%b
console.log(a);
