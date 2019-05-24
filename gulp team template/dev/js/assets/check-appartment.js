(function ($) {

  var hoverFloor = function () {
    if ($(window).width() > 768) {
      var currentMousePos = {
        x: -1,
        y: -1
      };
      $(document).mousemove(function (event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;
      });

      $('.plan-floor-appartment-link').mousemove(function () {
        var divInfoLeftPos = currentMousePos.x - 340;
        var divInfoTopPos = currentMousePos.y - $('.appartment-info').height() - 350;

        $('.appartment-info').css({
          left: divInfoLeftPos
        });
        $('.appartment-info').css({
          top: divInfoTopPos
        });

        var rooms = this.dataset.flats;
        var square = this.dataset.square;
        var livsquare = this.dataset.livsquare;
        var number = this.dataset.number;

        $('.appartment-table__rooms').html(rooms);
        $('.appartment-table__floor').html(number);
        $('.appartment-table__square').html(square);
        $('.appartment-table__livsquare').html(livsquare);

      });


      $('.plan-floor-appartment-link').mouseover(function () {
        if ($(window).width() > 320) {
          $('.appartment-info').css({
            visibility: 'visible'
          });
          $('.appartment-info').css({
            display: 'flex'
          });
        }
      });
      $('.plan-floor-appartment-link').mouseout(function () {
        if ($(window).width() > 320) {
          $('.appartment-info').css({
            visibility: 'hidden'
          });
          $('.appartment-info').css({
            display: 'none'
          });
        }
      });
      
    }

    $('.plan-floor-appartment-link').each(function() {
      $(this).find('polygon').css("opacity", "0.6");
      console.log($(this))
      if($(this).data("flats")==1){
          $(this).find('polygon').css("fill", "rgba(114, 111, 124, .6)");
      } if($(this).data("flats")==2){
          $(this).find('polygon').css("fill", "rgba(81, 79, 106, .9)");
      } if($(this).data("flats")==3){
          $(this).find('polygon').css("fill", "rgba(181, 175, 126, .6)");
      }
});
  };
  var hoverListFloor = function(){
    var floorList = $('.floor-list'),
    prev = $('.check-appartment-block__header .slaider-button-wrap .prev '),
    next = $('.check-appartment-block__header .slaider-button-wrap .next '),
    lastHover;
    
    prev.hover(function () {
      lastHover = $(this);
      $(this).addClass('btn--active');
      floorList.addClass('flipInY position--top');
    }, function () {
      floorList.removeClass('flipInY position--top');
      $(this).removeClass('btn--active');
    });

    next.hover(function () {
      lastHover = $(this);
      $(this).addClass('btn--active');
      floorList.addClass('flipInY position--bottom');
    }, function () {
      floorList.removeClass('flipInY position--bottom');
      $(this).removeClass('btn--active');
    });

    floorList.hover(function (e) {
      floorList.addClass('flipInY');
      if(lastHover[0].className=='next'){
        floorList.addClass('position--bottom');
      } else{
        floorList.addClass('position--top');
      }
      lastHover.addClass('btn--active');
    }, function (e) {
      floorList.removeClass('flipInY position--top position--bottom');
      lastHover.removeClass('btn--active');

    });
  };

  /* Initialize
   * ------------------------------------------------------ */
  (function hpInitAppartment() {
    hoverFloor();
    hoverListFloor();
  })();

})(jQuery);