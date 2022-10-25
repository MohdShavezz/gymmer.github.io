$(document).ready(function(){

    // $(window).scroll(function(){
    //     if(this.scrollY>20){
    //         $('.navbar').addClass('sticky')
    //     }else{
    //         $('.navbar').removeClass('sticky')
    //     }
    // });

    $('.menu-btn').click(function(){
        $('.headerIn ul').toggleClass('act');
        $('.menu-btn i').toggleClass('act');
    });

    //andy query
    // $(".menu li a").click(function(){
    //     $('.headerIn').removeClass('act');
    // });


});