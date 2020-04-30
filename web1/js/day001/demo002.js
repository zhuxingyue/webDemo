/*
    javascript 判断语句:
    判断分数:80分以上优秀,60分以上及格,30分以上不及格,30分以下太差
*/
var learnSort = 20;

if(learnSort >= 80)
    document.write("优秀!!");
else if(learnSort >=60 && learnSort < 80)
    document.write("及格!!!");
else if(learnSort >=30 && learnSort < 60)
    document.write("不及格!!!");
else
    document.write("太差!!!");