/**
 * Created by tonyguan on 2014/8/23.
 */


i = 0;

while (i * i < 100000) {
    i++;
}
console.log(i + " " + i * i);

var i = 0;
do {
    i++;
} while (i * i < 100000)
console.log(i + " " + i * i);

var i;
console.log("n   n*n");
console.log("---------");
for (i = 1; i < 10; i++) {
    console.log(i + " " + i * i);
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < numbers.length; i++) {
    console.log("Count is: " + numbers[i]);
}

for (var item  in numbers) {
    console.log("Count is: " + numbers[item]);
}