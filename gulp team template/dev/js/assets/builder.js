(function () {
  initSlBuild();
})();

function initSlBuild() {
  $('.js__sl--saga').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    //arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0',
    variableWidth: true,
    nextArrow: '<button type="button" class="sl__btn builder__sl__next"><svg height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 11"><g><g><path d="M1.392 11.004L-.01 9.63l4.205-4.125L-.01 1.378 1.392.003l4.205 4.125 1.401 1.376z"/></g></g></svg></button>',
    prevArrow: '<button type="button" class="sl__btn builder__sl__prev"><svg height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 11"><g><g><path d="M1.392 11.004L-.01 9.63l4.205-4.125L-.01 1.378 1.392.003l4.205 4.125 1.401 1.376z"/></g></g></svg></button>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
        }
      },{
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        }
      }],
  });

  $('.js__sl--perfect').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2300,
    centerMode: true,
    centerPadding: '0',
    variableWidth: true,
    nextArrow: '<button type="button" class="sl__btn builder__sl__next"><svg height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 11"><g><g><path d="M1.392 11.004L-.01 9.63l4.205-4.125L-.01 1.378 1.392.003l4.205 4.125 1.401 1.376z"/></g></g></svg></button>',
    prevArrow: '<button type="button" class="sl__btn builder__sl__prev"><svg height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 11"><g><g><path d="M1.392 11.004L-.01 9.63l4.205-4.125L-.01 1.378 1.392.003l4.205 4.125 1.401 1.376z"/></g></g></svg></button>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
        }
      },{
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        }
      }],
  });
}