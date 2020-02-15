/**
 * Created by tonyguan on 2014/8/24.
 */

//var o = {};
console.log('---------Object-------------');
var o = new Object();

console.log(o.toString());
console.log(o.constructor);
console.log(o.valueOf());

console.log('---------String-------------');
var s = new String("Tony Guan");
console.log(s.length);                           //9
console.log(s.toUpperCase());               //TONY GUAN
console.log(s.toLowerCase());               //tony guan

console.log(s.charAt(0));                       //T
console.log(s.indexOf('n'));                   //2
console.log(s.lastIndexOf('n'));            //8
console.log(s.substring(5, 9));             //Guan
console.log(s.split(" "));                      //[ 'Tony', 'Guan' ]

console.log('---------Math-------------');
console.log(Math.PI);
console.log(Math.SQRT2);
console.log(Math.random());

console.log(Math.min(1, 2, 3));
console.log(Math.max(1, 2, 3));

console.log(Math.pow(2, 3));
console.log(Math.sqrt(9));

console.log('---------Date-------------');
var d = new Date();
console.log(d.toString());

var d = new Date('2009 11 12');
console.log(d.toString());

var d = new Date('1 2 2012');
console.log(d.toString());
console.log(d.getYear());               //112
console.log(d.getMonth());          //0
console.log(d.getDay());              //1