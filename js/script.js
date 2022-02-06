//fixheaer
var scrollTop = 0;
var scrollSkill = 0;
scrollTop = $(document).scrollTop();
fixHeader();
activateSkillMotion();

//윈도우 창 조절
$(window).on('scroll resize', function () {
    scrollTop = $(document).scrollTop();
    fixHeader();
    activateSkillMotion();
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
$(function(){
    $('#btnSkill').on('click', function(){
        let scroll = $('#skill').offset().top;
        $('html, body').animate({scrollTop: (scroll)}, 300);
    });
});
$(function(){
    $('#btnContact').on('click', function(){
        let scroll = $('#contact').offset().top;
        $('html, body').animate({scrollTop: (scroll)}, 300);
    });
});


//메인 슬라이드
$(function() {
    $('.main .slide').slick({
        arrows: true,   
        dots: false,    
        fade: true,    
        autoplay: true,  
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


function activateSkillMotion() {
    // console.log(scrollTop)
   if(scrollTop > 2000) {
       $('.skill').addClass('active');
    } else {
        $('.skill').removeClass('active');
   }
}

//애니메이션 
$(function() {
    $('.animate').scrolla({
        mobile: false,
        once: false
    });
});


// 타이틀 버블
jQuery(document).ready(function($) {
    var bArray = [];
    var sArray = [4,6,8,10];

    for (var i = 0; i < $('.bubbles').width()/4; i++) {
        bArray.push(i);
    }

    function randomValue(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    setInterval(function(){
        var size = randomValue(sArray);
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity' : '-=0.8'
        }, 3000, function(){
            $(this).remove()
        }
        );
    }, 320);
});


// 어바웃미 사이트 이동
$().ready(function () { 
    $(".github").click(function () { 
        Swal.fire({ 
            title: 'Github으로 이동하시겠어요?', 
            icon: 'question', 
            showCancelButton: true, 
            confirmButtonColor: '#1abc9c', 
            cancelButtonColor: '#ff5492', 
            confirmButtonText: '확인', 
            cancelButtonText: '취소' 
        }).then((result) => { 
            if (result.isConfirmed) { 
                Swal.fire( 
                    '확인이 완료되었습니다.', 
                    'Github으로 이동합니다.', 
                    'success',
                ) 
                location.href='https://github.com/umingming';
            } 
        }) 
    }); 

    $(".notion").click(function () { 
        Swal.fire({ 
            title: 'Notion으로 이동하시겠어요?', 
            icon: 'question', 
            showCancelButton: true, 
            confirmButtonColor: '#1abc9c', 
            cancelButtonColor: '#ff5492', 
            confirmButtonText: '확인', 
            cancelButtonText: '취소' 
        }).then((result) => { 
            if (result.isConfirmed) { 
                Swal.fire( 
                    '확인이 완료되었습니다.', 
                    'Notion으로 이동합니다.', 
                    'success',
                ) 
                location.href='https://yumding.notion.site/YOU-ME-0159c1005eab4abd8d05c06b62f3418e';
            } 
        }) 
    });
});


// 어바웃미 마우스 이동
$(function(){
    $('.btn.notion').on('mouseover', function(){
        $('.cursor.notion').addClass('click');
        $('.btn.notion').addClass('click');
    });
    $('.btn.notion').on('mouseout', function(){
        $('.cursor.notion').removeClass('click');
        $('.btn.notion').removeClass('click');
    });

    $('.btn.github').on('mouseover', function(){
        $('.cursor.github').addClass('click');
        $('.btn.github').addClass('click');
    });
    $('.btn.github').on('mouseout', function(){
        $('.cursor.github').removeClass('click');
        $('.btn.github').removeClass('click');
    });
});