(function ($) {
    //배너 슬라이드   
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1, //보여지는 슬라이드 개수
      spaceBetween: 0, //슬라이드 사이 공간
      loop: true,  // 반복 슬라이드
      keyboard: {
        enabled: true,  //키보드 제어
      },
    /*  autoplay: {
        //delay: 4000, // 4초마다 슬라이드
        disableOnInteraction: true, //버튼 제어시 멈춤
      },*/
      pagination: {
        el: '.swiper-pagination',
        clickable: true, //블릿버튼 제어
      },
      navigation: { //이전다음버튼 제어
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    
    

    //영화차트 이미지 슬라이드
    var mySwiper = new Swiper('.swiper-container2', {
        slidesPerView: 4,
        spaceBetween: 24,
        /*mousewheel: {
            invert: true,
        },*/
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            600: {
                slidesPerView: 1.4,
                spaceBetween: 24
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 24
            },
            960: {
                slidesPerView: 3,
                spaceBetween: 24
            }
        }
    });

    //영화차트 탭메뉴
    var movBtn = $('.movie_title > ul > li');
    var movCont = $('.movie_chart > div');

    movCont.hide().eq(0).show();

    movBtn.click(function (e) {
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        movBtn.removeClass('active');
        target.addClass('active');
        movCont.css('display', 'none');
        movCont.eq(index).css('display', 'block');
    });

    //공지사항 탭 메뉴
    var tabMenu = $('.notice');



    //컨텐츠 내용 숨김
    tabMenu.find('ul > li > ul').hide();
    tabMenu.find('li.active > ul').show();

    function tabList(e) {
        e.preventDefault();
        var target = $(this);
        target.next().show().parent('li').addClass('active').siblings('li').removeClass('active').find('ul').hide();
    }

    tabMenu.find('ul > li > a').click(tabList).focus(tabList);
})(jQuery);