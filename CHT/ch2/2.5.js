/**
 * Created by tonyguan on 2014/8/22.
 */

var found = false;
console.log(found.toString());	     //輸出false

var num1 = 10;
var num2 = 10.0;
console.log(num1.toString());	        //輸出 "10"
console.log(num2.toString());      	//輸出 "10"

console.log(num2.toString(2));	     //輸出 "1010"
console.log(num2.toString(8));	     //輸出 "12"
console.log(num2.toString(16));	//輸出 "A"

var num3 = parseInt("12345red");        	//傳回 12345
var num4 = parseInt("0xA");	                //傳回 10
var num5 = parseInt("56.9");	               //傳回 56
var num6 = parseInt("red");	               //傳回 NaN

var num6 = parseInt("10", 2);	//傳回 2
var num7 = parseInt("10", 8);	//傳回 8
var num8 = parseInt("10", 10);	//傳回 10
var num9 = parseInt("AF", 16);	//傳回 175

var num10 = parseFloat("12345red");	//傳回 12345
var num11 = parseFloat("0xA");	//傳回 NaN
var num12 = parseFloat("11.2");	//傳回 11.2
var num13 = parseFloat("11.22.33");	//傳回 11.22
var num14 = parseFloat("0102");	//傳回 102
var num15 = parseFloat("red");	//傳回 NaN


var b1 = Boolean("");		//false - 空字串
var b1 = Boolean("hello");		//true - 非空字串
var b1 = Boolean(50);		//true - 非零數字
var b1 = Boolean(null);		//false - null
var b1 = Boolean(0);		//false - 零
var b1 = Boolean({name: 'tony'});	//true - 物件

var n1 = Number(false);		         //0
var n1 = Number(true);		             //1
var n1 = Number(undefined);		//NaN
var n1 = Number(null);		            //0
var n1 = Number("1.2");		         //1.2
var n1 = Number("12");	                 //12
var n1 = Number("1.2.3");		         //NaN
var n1 = Number({name: 'tony'});	//NaN
var n1 = Number(50);	                //50

var s1 = String(null);	//"null"
var s1 = String({name: 'tony'});	//"[object Object]"