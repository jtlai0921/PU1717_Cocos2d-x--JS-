/**
 * Created by tonyguan on 2014/8/23.
 */

var score = 95;

console.log('------ if結構範例-------');
if (score >= 85) {
    console.log("您真優秀！");
}

if (score < 60) {
    console.log("您需要加倍努力！");
}

if (score >= 60 && score < 85) {
    console.log("您的成績還可以，仍需繼續努力！");
}

console.log('------ if…else結構範例------');
if (score < 60) {
    console.log("不及格");
} else {
    console.log("及格");
}

console.log('------elseif結構範例------');

var testscore = 76;
var grade;

if (testscore >= 90) {
    grade = 'A';
} else if (testscore >= 80) {
    grade = 'B';
} else if (testscore >= 70) {
    grade = 'C';
} else if (testscore >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}
console.log("Grade = " + grade);

console.log('------多分支敘述 switch範例------');

var date = new Date();
var month = date.getMonth();

switch (month) {
    case 0:
        console.log("January");
        break;
    case 1:
        console.log("February");
        break;
    case 2:
        console.log("March");
        break;
    case 3:
        console.log("April");
        break;
    case 4:
        console.log("May");
        break;
    case 5:
        console.log("June");
        break;
    case 6:
        console.log("July");
        break;
    case 7:
        console.log("August");
        break;
    case 8:
        console.log("September");
        break;
    case 9:
        console.log("October");
        break;
    case 10:
        console.log("November");
        break;
    case 11:
        console.log("December");
        break;
    default:
        console.log("Invalid month.");
}