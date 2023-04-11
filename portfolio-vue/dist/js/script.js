//fixheaer
var scrollTop = 0;
var scrollSkill = 0;
scrollTop = $(document).scrollTop();
fixHeader();
activateSkillMotion();

//윈도우 창 조절
$(window).on("scroll resize", function () {
    scrollTop = $(document).scrollTop();
    fixHeader();
    activateSkillMotion();
});

function fixHeader() {
    if (scrollTop > 150) {
        $("header").addClass("on");
    } else {
        $("header").removeClass("on");
    }
}

//메뉴 이동
$(function () {
    $("#btnProject").on("click", function () {
        let scroll = $("#project").offset().top - 100;
        $("html, body").animate({ scrollTop: scroll }, 700);
    });
});
$(function () {
    $(".logo").on("click", function () {
        let scroll = $(".main").offset().top - 100;
        $("html, body").animate({ scrollTop: scroll }, 700);
    });
});
$(function () {
    $("#btnHome").on("click", function () {
        let scroll = $(".main").offset().top - 100;
        $("html, body").animate({ scrollTop: scroll }, 700);
    });
});
$(function () {
    $("#btnScroll").on("click", function () {
        let scroll = $("#about").offset().top - 100;
        $("html, body").animate({ scrollTop: scroll }, 700);
    });
});
$(function () {
    $("#btnAbout").on("click", function () {
        let scroll = $("#about").offset().top - 100;
        $("html, body").animate({ scrollTop: scroll }, 700);
    });
});
$(function () {
    $("#btnSkill").on("click", function () {
        let scroll = $("#skill").offset().top - 100;
        $("html, body").animate({ scrollTop: scroll }, 700);
    });
});
$(function () {
    $("#btnContact").on("click", function () {
        let scroll = $("#contact").offset().top - 100;
        $("html, body").animate({ scrollTop: scroll }, 700);
    });
});

//메인 슬라이드
$(function () {
    $(".main .slide").slick({
        arrows: true,
        dots: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 7000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
    $(".slick-prev").text("prev");
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
});

function activateSkillMotion() {
    // console.log(scrollTop)
    if (scrollTop > 2100 && scrollTop < 4000) {
        $(".skill").addClass("active");
    } else {
        $(".skill").removeClass("active");
    }
}

//애니메이션
$(function () {
    $(".animate").scrolla({
        mobile: false,
        once: false,
    });
});

// 타이틀 버블
jQuery(document).ready(function ($) {
    var bArray = [];
    var sArray = [4, 6, 8, 10];

    for (var i = 0; i < $(".bubbles").width() / 4; i++) {
        bArray.push(i);
    }

    function randomValue(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    setInterval(function () {
        var size = randomValue(sArray);
        $(".bubbles").append(
            '<div class="individual-bubble" style="left: ' +
                randomValue(bArray) +
                "px; width: " +
                size +
                "px; height:" +
                size +
                'px;"></div>'
        );
        $(".individual-bubble").animate(
            {
                bottom: "100%",
                opacity: "-=1",
            },
            2500,
            function () {
                $(this).remove();
            }
        );
    }, 260);
});

//화면 조정
let popupWidth = 1200;
let popupHeight = 800;
let popupX = window.screen.width / 2 - popupWidth / 2;
let popupY = window.screen.height / 2 - popupHeight / 2;

// 어바웃미 사이트 이동
$().ready(function () {
    $(".github").click(function () {
        Swal.fire({
            title: "Github을 구경하시겠어요?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#1abc9c",
            cancelButtonColor: "#ff5492",
            confirmButtonText: "확인",
            cancelButtonText: "취소",
        }).then((result) => {
            if (result.isConfirmed) {
                window.open(
                    "https://github.com/umingming",
                    "clonecoding",
                    "height=" +
                        popupHeight +
                        ", width=" +
                        popupWidth +
                        ", left=" +
                        popupX +
                        ", top=" +
                        popupY
                );
                //     Swal.fire(
                //         '확인이 완료되었습니다.',
                //         'Github으로 이동합니다.',
                //         'success',
                //     )
                //     location.href='https://github.com/umingming';
            }
        });
    });

    $(".notion").click(function () {
        Swal.fire({
            title: "Notion을 구경하시겠어요?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#1abc9c",
            cancelButtonColor: "#ff5492",
            confirmButtonText: "확인",
            cancelButtonText: "취소",
        }).then((result) => {
            if (result.isConfirmed) {
                window.open(
                    "https://yumding.notion.site/YOU-ME-0159c1005eab4abd8d05c06b62f3418e",
                    "clonecoding",
                    "height=" +
                        popupHeight +
                        ", width=" +
                        popupWidth +
                        ", left=" +
                        popupX +
                        ", top=" +
                        popupY
                );
                // location.href='https://yumding.notion.site/YOU-ME-0159c1005eab4abd8d05c06b62f3418e';
            }
        });
    });
});

// 어바웃미 마우스 이동
$(function () {
    $(".btn.notion").on("mouseover", function () {
        $(".cursor.notion").addClass("click");
        $(".btn.notion").addClass("click");
    });
    $(".btn.notion").on("mouseout", function () {
        $(".cursor.notion").removeClass("click");
        $(".btn.notion").removeClass("click");
    });

    $(".btn.github").on("mouseover", function () {
        $(".cursor.github").addClass("click");
        $(".btn.github").addClass("click");
    });
    $(".btn.github").on("mouseout", function () {
        $(".cursor.github").removeClass("click");
        $(".btn.github").removeClass("click");
    });
});

// 프로젝트 링크
$(function () {
    $("#goguma").on("click", function () {
        window.open(
            "https://github.com/umingming/Goguma/blob/master/README.md",
            "goguma",
            "height=" +
                popupHeight +
                ", width=" +
                popupWidth +
                ", left=" +
                popupX +
                ", top=" +
                popupY
        );
    });

    $("#portfolio").on("click", function () {
        window.open(
            "https://github.com/umingming/Portfolio/blob/master/README.md",
            "portfolid",
            "height=" +
                popupHeight +
                ", width=" +
                popupWidth +
                ", left=" +
                popupX +
                ", top=" +
                popupY
        );
    });

    $("#dragonland").on("click", function () {
        window.open(
            "https://github.com/umingming/DragonLand/blob/master/README.md",
            "dragonland",
            "height=" +
                popupHeight +
                ", width=" +
                popupWidth +
                ", left=" +
                popupX +
                ", top=" +
                popupY
        );
    });

    $("#dragoncenter").on("click", function () {
        window.open(
            "https://github.com/umingming/DragonCenter/blob/master/README.md",
            "dragoncenter",
            "height=" +
                popupHeight +
                ", width=" +
                popupWidth +
                ", left=" +
                popupX +
                ", top=" +
                popupY
        );
    });

    $("#deeproot").on("click", function () {
        window.open(
            "https://github.com/umingming/DeepRoot/blob/master/README.md",
            "deeproot",
            "height=" +
                popupHeight +
                ", width=" +
                popupWidth +
                ", left=" +
                popupX +
                ", top=" +
                popupY
        );
    });

    $("#clonecoding").on("click", function () {
        window.open(
            "https://github.com/umingming/CloneCoding/blob/master/README.md",
            "clonecoding",
            "height=" +
                popupHeight +
                ", width=" +
                popupWidth +
                ", left=" +
                popupX +
                ", top=" +
                popupY
        );
    });
});

//스킬 마우스 이동
$(function () {
    $(".java").on("mouseover", function () {
        $(".java").addClass("active");
    });
    $(".java").on("mouseout", function () {
        $(".java").removeClass("active");
    });
});
