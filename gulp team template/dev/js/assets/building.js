(function () {
  barInit();
  stageGallery();
})();

function barInit() {
  $('.js-bar').each(function (i,bar) {
    $(bar).css("width" , $(bar).attr('data-procent') + '%');
  })
}
function stageGallery() {
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