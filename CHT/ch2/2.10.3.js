/**
 * Created by tonyguan on 2014/8/24.
 */

function Vector(v1, v2) {
    this.vec1 = v1;
    this.vec2 = v2;

    /**
     * 兩個Vector相加
     * @param vector要相加向量
     */
    this.add = function (vector) {
        this.vec1 = this.vec1 + vector.vec1;
        this.vec2 = this.vec2 + vector.vec2;
    }

    this.toString = function () {
        console.log("vec1 = " + this.vec1 + ", vec2 = " + this.vec2);
    }
}

var vecA = new Vector(10.5, 4.7);
var vecB = new Vector(32.2, 47);
//vecA = vecA + vecB 給予值給vecA
vecA.add(vecB);
vecA.toString();

Vector.prototype.sub =  function (vector) {
    this.vec1 = this.vec1 - vector.vec1;
    this.vec2 = this.vec2 - vector.vec2;
}

var vecA = new Vector(10.5, 4.7);
var vecB = new Vector(32.2, 47);
vecA.sub(vecB);
vecA.toString();

