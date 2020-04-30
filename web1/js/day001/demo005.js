/*
switch case语句:
*/


var weather = "春季";

switch(weather){
    case "春季":
        println("春季包含:3,4,5月");
        break;
    case "夏季":
        println("夏季包含:6,7,8月");
        break;
    case "秋季":
        println("秋季包含:9,10,11月");
        break;
    case "冬季":
        println("冬季包含:12,1,2月");
        break;
    default:
        println("选择的季节错误!!!");
        break;
}
