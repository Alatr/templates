(function ($) {
  var newsSingleSlaider = function () {
    $('.js-init-single-slaider').slick({
 


      dots: false,
      infinite: true,
      speed: 500,
      cssEase: 'linear',
      nextArrow: '<button type="button" class="next slaider-button "><svg><use xlink:href="#icon-arrow"></use></svg></button>',
      prevArrow: '<button type="button" class="prev slaider-button "><svg><use xlink:href="#icon-arrow"></use></svg></button>',
      slidesToShow: 1,
      slidesToScroll: 1
    });

    // $('.slaider-perfect-prev-js').click(function () {
    //   $('.slaider-perfect-js').slick('slickPrev');
    // })

    // $('.slaider-perfect-next-js').click(function () {
    //   $('.slaider-perfect-js').slick('slickNext');
    // });
    $('.js-more-news-slaider').slick({
      dots: false,
      infinite: true,
      speed: 500,
      cssEase: 'linear',
      nextArrow: '<button type="button" class="next slaider-button-more "><svg><use xlink:href="#icon-arrow3"></use></svg></button>',
      prevArrow: '<button type="button" class="prev slaider-button-more "><svg><use xlink:href="#icon-arrow3"></use></svg></button>',
      slidesToShow: 3,
      slidesToScroll: 1,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            centerMode: true,
          }
        }
      ]
    });

    var slaidBtn = $('.slaider-button-more');
    var newsItemHeight = $('.more-news-slaider-wrapper .news-item').outerHeight();
    var newsItemW = $('.more-news-slaider-wrapper .news-item').width();
    if($(window).width() < 768){
      slaidBtn.css({height: newsItemHeight, width: '40px'});
    } else {
      slaidBtn.css({height: newsItemHeight, width: newsItemW });
    }
    $(window).resize(function(){
      var newsItemHeight = $('.more-news-slaider-wrapper .news-item').outerHeight();
      var newsItemW = $('.more-news-slaider-wrapper .news-item').width();
      if($(window).width() < 768){
        slaidBtn.css({height: newsItemHeight, width: '40px'});
      } else {
        slaidBtn.css({height: newsItemHeight, width: newsItemW });
      }
    });
  };




  /* Initialize 
   * ------------------------------------------------------ */
  (function hpInit() {
    newsSingleSlaider();
  })();
})(jQuery);