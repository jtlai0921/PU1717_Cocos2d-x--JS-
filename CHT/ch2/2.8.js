/**
 * Created by tonyguan on 2014/8/23.
 */

var studentList = ["張三","李四","王五","董六"];
for (var item  in studentList) {
    console.log(studentList[item]);
}

var studentList = new Array("張三","李四","王五","董六");
for (var item  in studentList) {
    console.log(studentList[item]);
}

var studentList = new Array();
studentList[0] = "張三";
studentList[1] = "李四";
studentList[2] = "王五";
studentList[3] = "董六";
for (var item  in studentList) {
    console.log(studentList[item]);
}





