$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>200){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    })
});

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()> 800){
            $('#top-btn').fadeIn();
        }else{
            $('#top-btn').fadeOut();
        }

    })
    $('#top-btn').click(function(){
        $('html,body').animate({scrollTop:0},900)
    }

    ) 
});

$(window).on("load",function(){
     $(".loader-container").fadeOut(1000)
});