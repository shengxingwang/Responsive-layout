/**
 * Created by Administrator on 2016/10/11.
 */
$(function () {
    for (var i = 1;i<=$(".prod_item img").length;i++){
        $(".prod_item img").eq(i-1).attr("src","../images/pro"+i+".jpg");
    }
    $(window).scroll(function () {
        if(parseInt($(window).scrollTop())>=parseInt($(".top3").offset().top)){
            //alert(1);
            $(".top3").css({
                "position":"fixed",
                "top":0,
                "z-index":300
            });
        }
        if(parseInt($(window).scrollTop())<50){
            $(".top3").css({
                "position":"static",
                "z-index":1
            });
        }
    });
        $(".reduce").click(function () {
            var $val = parseInt($(this).next().html())
            if($val>=1){
                $val--;
            }
            $(this).next().html($val);
        });
        $(".add").click(function () {
            var $val = parseInt($(this).prev().html())
            $val++;
            $(this).prev().html($val);
        });
        var count;
        var c =1;
        $(".navone").click(function(){
            if($(this)[0]==count&&c%2==0){
                //console.log(c);
                $(this).removeClass("active");
            }else{
                $(".navone").removeClass("active");
                $(this).addClass("active");
            }
            c++;
            count = $(this)[0];
        });
    var flag = true;
    $("#beijin").click(function () {
        if(flag){
            $(".top2_nav").slideDown(600);
            flag=false;
        }else{
            $(".top2_nav").slideUp(600);
            flag=true;
        }

    });
    $(".haslist").click(function(){
        if(!$(this).attr("c")){
            $(".haslist").children(".top2_nav2").hide();
            $(this).children(".top2_nav2").show();
            $(this).attr("c","1");
        }else{
            $(this).attr("c","");
            $(this).children(".top2_nav2").hide();
        }
    });
});