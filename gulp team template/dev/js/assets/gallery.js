(function () {
  initSlider()
})();


function checkAmountImg() {
  return $('.js--gallery__sl--little img:not(".slick-cloned")').length;  // проверка кол-ва img исключая клоны
}

function addWidthSliderLittle(amount) {  // устанавливает ширину маленького слайдераб в зависимости от кол-ва картинок
  var width = $('.gallery__sl--little img')[0].width * amount + (5 * (amount - 1) * 2);
  console.log(width,amount,$('.gallery__sl--little img')[0].width);
  $($('.gallery__sl--little')[0]).css({width:width});
}

function initSlider() {
  $('.js--gallery__sl').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="sl__btn sl__next"><svg height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 11"><g><g><path d="M1.392 11.004L-.01 9.63l4.205-4.125L-.01 1.378 1.392.003l4.205 4.125 1.401 1.376z"/></g></g></svg></button>',
    prevArrow: '<button type="button" class="sl__btn sl__prev"><svg height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 11"><g><g><path d="M1.392 11.004L-.01 9.63l4.205-4.125L-.01 1.378 1.392.003l4.205 4.125 1.401 1.376z"/></g></g></svg></button>',
    asNavFor: '.js--gallery__sl--little',
    //fade: true,
  });

  $('.js--gallery__sl--little').init(function () {
    $('.js--gallery__sl--little [data-slick-index="0"]').addClass('active');
    addWidthSliderLittle(checkAmountImg() < 6 ? 3 : 5);
  });

  $('.js--gallery__sl--little').slick({
    slidesToShow: checkAmountImg() < 6 ? 3 : 5,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    asNavFor: '.js--gallery__sl',
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }],
  });

  $('.js--gallery__sl--little').on('afterChange', function (slick, currentSlide) {
    $(currentSlide.$slides[currentSlide.currentSlide]).addClass('active');
  });
  $('.js--gallery__sl--little').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.slick-active').removeClass('active');
  })
}