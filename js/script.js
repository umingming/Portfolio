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
   if(scrollTop > 150) {
       $('header').addClass('on');
   } else {
       $('header').removeClass('on');
   }
}

//메뉴 이동
$(function(){
    $('#btnProject').on('click', function(){
        let scroll = $('#project').offset().top;
        $('html, body').animate({scrollTop: (scroll)}, 300);
    });
});
$(function(){
    $('#btnHome').on('click', function(){
        let scroll = $('.main').offset().top;
        $('html, body').animate({scrollTop: (scroll)}, 300);
    });
});
$(function(){
    $('#btnScroll').on('click', function(){
        let scroll = $('#about').offset().top;
        $('html, body').animate({scrollTop: (scroll)}, 300);
    });
});
$(function(){
    $('#btnAbout').on('click', function(){
        let scroll = $('#about').offset().top;
        $('html, body').animate({scrollTop: (scroll)}, 300);
    });
});


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
    // $('.projectSlide').slick({
    //     arrows:true,  //화살표
    //     dots:true,  //인디케이터
    //     autoplay:true,    //자동 재생
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplaySpeed:6000,  //재생 시간
    //     pauseOnHover:true,  //호버시 멈추도록 설정
    //     pauseOnFocus:true
    // });
})
