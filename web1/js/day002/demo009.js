/*
js 中可枚举类型,不可枚举:

    可枚举:能够用 for in 语句遍历对象属性
    不可枚举:不能
*/

//创建对象,并创建属性
function People(){
    this.name = "kxy";
    this.age = 20;
}

//给对象添加属性的方法
People.prototype = {
    job:"student"

};

//实例化对象
var people = new People();

//设置对象中的sex属性是不可枚举的
Object.defineProperty(people,"sex",{
    value:"female",
    enumerable:false
});

//设置对象中的salary属性是可枚举的
Object.defineProperty(people,"salary",{
    value:"10000",
    enumerable:true
});

//遍历对象中的属性
for(var pro in people){
    console.log("people." + pro + " = " + people[pro]);
}

//js 中的输出语句
console.log(people["sex"]);



