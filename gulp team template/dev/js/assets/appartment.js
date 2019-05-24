(function($) {

	var showAppartment = function() {
    $('.appartment-img').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			image: {
				verticalFit: false
			},
			zoom: {
					enabled: true,
					duration: 300 // don't foget to change the duration also in CSS
			},
			callbacks: {
		        beforeOpen: function() {
		            var $triggerEl = $(this.st.el),
		                newClass = $triggerEl.data("modal-class");
		            if (newClass) {
		                this.st.mainClass = this.st.mainClass + ' ' + newClass;
		            }
		        }
		    }
    });
	};
  var hoverListFloor = function(){
    var floorList = $('.floor-list'),
        prev = $('.appartment-block__left .slaider-button-wrap .prev '),
        next = $('.appartment-block__left .slaider-button-wrap .next '),
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
			showAppartment();
			hoverListFloor();
	 })();

})(jQuery);