function test(){
    println("js中的函数测试!!");

    //无参无返回的函数
    test1();

    //无参有返回的函数
    var re = test2();
    println(re);

    //有参无返回的函数
    test3("javascript");

    //有参有返回的函数
    var re1 = test4("javascript");
    println(re1);
}

function test1(){
    println("js 无参无返回的函数!!");
}

function test2(){
    println("js 无参有返回的函数!!");
    return "返回值: Javascript";
}

function test3(a){
    println(a+" 有参无返回的函数!!");
}

function test4(a){
    println(a+" 有参有返回的函数!!");
    return "返回值: javascript";
}

test();