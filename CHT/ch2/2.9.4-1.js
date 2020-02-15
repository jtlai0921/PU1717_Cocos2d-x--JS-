﻿/**
 * Created by tonyguan on 2014/8/23.
 */

//定義計算長方形面積函數
function rectangleArea(width, height) {
    var area = width * height;
    return area;
}

//定義計算三角形面積函數
function triangleArea(bottom, height) {
    var area = 0.5 * bottom * height;
    return area;
}

function getArea(type) {
    var returnFunction;
    switch (type) {
        case "rect":   //rect 表示長方形
            returnFunction = rectangleArea;
            break;
        case "tria":  //tria 表示三角形
            returnFunction = triangleArea;
    }
    return returnFunction;
}

//獲得計算三角形面積函數
var area = getArea("tria");
console.log("底10 高13，三角形面積：" + area(10, 15));

//獲得計算長方形面積函數
var area = getArea("rect");
console.log("寬10 高15，計算長方形面積：" + area(10, 15));