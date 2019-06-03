(function ($) {

  var progressBar = function () {
    var progressItem = document.querySelectorAll('.progressbar-item');

    for (var i = 0; i < progressItem.length; i++) {
      var lineAccent = document.querySelectorAll('.line--accent'),
        count = document.querySelectorAll('.count'),
        progressValue = progressItem[i].dataset.value;

      count[i].innerHTML = progressValue + '%';
      lineAccent[i].style.width = progressValue + '%';
    }
  };
  var stageGallery = function () {
    var groups = {};
    $('.photo-stage-group-js').each(function () {
      var id = parseInt($(this).attr('data-group'), 10);
      if (!groups[id]) {
        groups[id] = [];
      }

      groups[id].push(this);
    });

    $.each(groups, function () {

      $(this).magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        gallery: {
          enabled: true
        }
      })

    });

  };

  /* Initialize
   * ------------------------------------------------------ */
  (function hpInitStageDevelopment() {
    progressBar();
    stageGallery();
  })();

})(jQuery);