/*隐藏显示 */
$(document).ready(function(){
    $("#jsdemo").click(function(){
        $("h1").hide();
    });
    
    $("#jsdemo2").click(function(){
        $("h1").show();
    });
});