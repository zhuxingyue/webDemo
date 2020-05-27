/*
js 中的类对象创建同样使用关键字function
    创建对象关键字new,定义本类属性用关键字 this
*/

function People(name,age,sex){
    //创建对象中属性
    this.name = name;
    this.age = age;
    this.sex = sex;
    
    //创建对象中的函数
    this.eat = function(){
        console.log("人吃饭!");
    }

    this.getInfor = function(){
        console.log("我的名字:"+this.name);
        console.log("我的年龄:"+this.age);
        console.log("我的性别:"+this.sex);
    }
}

// 创建新对象
var people = new People("zhang",28,"男");

console.log(people.name);
people.eat();

people.getInfor();
