//fixheaer
var scrollTop = 0;
scrollTop = $(document).scrollTop();
fixHeader();

//윈도우 창 조절
$(window).on('scroll resize', function () {
   scrollTop = $(document).scrollTop();
   fixHeader();
});

function fixHeader() {
   if(scrollTop > 650) {
       $('header').addClass('on');
   } else {
       $('header').removeClass('on');
   }
}

//메뉴 이동


//메인 슬라이드
$(function() {
    $('.main .slide').slick({
        arrows: true,   
        dots: false,    
        fade: true,    
        autoplay: false,  
        autoplaySpeed: 7000, 
        pauseOnHover: false,
        pauseOnFocus: false
    })
    $('.slick-prev').text('prev');

})