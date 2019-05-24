(function () {
  initMain()
})();

function initMain(){
  $('.js-main-three').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
  });

  $('.js-dots').on("click",function () {
    var id = +$(this).attr('data-id');

    $('.js-dots.active').removeClass('active');
    $('.js-main-three').slick('slickGoTo', id);
    $('.js-dots[data-id='+id+']').addClass('active');
  });
}