function setTopBtn() {
    $('#topBtn').click(function(){
        $('body,html').animate({'scrollTop':0});
    });

    $('#topBtn').css({'top':$(window).height()-$('#topBtn').height()-20});
    //視窗重整時
    $(window).resize(function(){
        $('#topBtn').css({'top':$(window).height()-$('#topBtn').height()-20});
    });

    $(window).scroll(function(){
        var scrollOut=$(window).scrollTop();
        var winH=$(window).height();
        var btnH=$('#topBtn').height();
        var moveTo=winH+scrollOut-btnH-20;
        $('#topBtn').stop().animate({'top':moveTo});
    })
}