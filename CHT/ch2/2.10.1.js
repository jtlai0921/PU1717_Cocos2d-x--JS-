/**
 * Created by tonyguan on 2014/8/24.
 */


var Person = {
    name: "Tony",
    age: 18,
    description: function () {
        var rs = this.name + "的年齡是:" + this.age;
        return rs;
    }
}

var p = Person;
console.log(p.description());

var p1 = Object.create({
    name: "Tom",
    age: 28,
    description: function () {
        var rs = this.name + "的年齡是:" + this.age;
        return rs;
    }
});
console.log(p1.description());

var p2 = Object.create(Person);
p2.age = 29;
console.log(p2.description());
console.log(Person.description());


function Student(name, age) {
    this.name = name;
    this.age = age;
    this.description = function () {
        var rs = this.name + "的年齡是:" + this.age;
        return rs;
    }
}

var p3 = new Student('Tony', 28);
var p4 = new Student('Tom', 38);
console.log(p3.description());
console.log(p4.description());
