$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load',function(){
      $('#menu').toggleClass('fa-times');
        $('header').toggleClass('toggle');
        if($(window).scrollTop() > 0){
           $('.top').show();
        }else{
            $('.top').hide();
        } 
    });

    // smooth scrolling
    $('a[href"=""#"]').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scroltop : $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
        );
    });

});