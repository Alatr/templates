(function () {
  initSlDay();
})();

function initSlDay(){
  $('.js__day--sl').on('init',function (event, slick) {
    $($('.js__dots')[0]).addClass('active');
  });

  $('.js__day--sl').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    //arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0',
    nextArrow: '<button type="button" class="sl__btn sl__day--next"><svg height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 11"><g><g><path d="M1.392 11.004L-.01 9.63l4.205-4.125L-.01 1.378 1.392.003l4.205 4.125 1.401 1.376z"/></g></g></svg></button>',
    prevArrow: '<button type="button" class="sl__btn sl__day--prev"><svg height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 11"><g><g><path d="M1.392 11.004L-.01 9.63l4.205-4.125L-.01 1.378 1.392.003l4.205 4.125 1.401 1.376z"/></g></g></svg></button>',

  });

   $('.js__day--sl').on('afterChange', function (slick, currentSlide) {
     $('.js__dots').each(function (index, el) {
       dellClassActive(el);
       addClassActiv(el, index, currentSlide.currentSlide)
     });
   })
};

function addClassActiv(el, i, amount) {
  if( i < amount ){
    $(el).addClass('pre-active')
  } else if(i === amount){
    $(el).addClass('active');
  }
}

function dellClassActive(el) {
  if( $(el).hasClass('pre-active')){
    $(el).removeClass('pre-active')
  }else if($(el).hasClass('active')){
    $(el).removeClass('active')
  }
}