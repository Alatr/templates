(function ($) {
  new WOW().init();
  var changeLang = function () {
    $('.language').hover(function () {
      $('.lang_dropdown').addClass('lang-dropdown--active')
      $('.lang--active').css('margin-top', '-28px');
    }, function () {
      $('.lang_dropdown').removeClass('lang-dropdown--active')
      $('.lang--active').css('margin-top', '0');
  
    });
  
    $('.language-btn').focus(function () {
      $('.lang_dropdown').addClass('lang-dropdown--active');
      $('.lang--active').css('margin-top', '-28px');
    });
    $('.lang__item:last-child a').blur(function () {
      $('.lang_dropdown').removeClass('lang-dropdown--active')
      $('.lang--active').css('margin-top', '0');
    });
  };
  var siteMenu = function(){
    var menuWrap = $('.menu-wrap'),
        menuBtn = $('.menu-btn'),
        menuAside = $('.menu-aside'),
        closeMenuBtn = $('.close-menu-btn-js'),
        body = $('body');

    closeMenuBtn.on('click', function () {
      menuWrap.addClass('anim-close');
      menuWrap[0].addEventListener('animationend', animationMenu);
      menuWrap[0].addEventListener('webkitAnimationEnd', animationMenu);
      
      function animationMenu() {
        menuWrap.addClass('visible--hidden');
        body.removeClass('overflow--hidden');
        menuWrap.removeClass('anim-close');
        menuWrap.removeClass('animopen');
        menuWrap[0].removeEventListener('animationend', animationMenu);
        menuWrap[0].removeEventListener('webkitAnimationEnd', animationMenu);
        menuAside.removeClass('anim-aside')
      };
    });
    
    menuBtn.on('click', function(){
      menuWrap.removeClass('visible--hidden');
      menuWrap.addClass('animopen');
      body.addClass('overflow--hidden');
      menuAside.addClass('anim-aside')
    });

    var  titleMenu = $('.menu-list .has-children');


    titleMenu.addClass('animated fadeInUp');

    var a = 0.0;

    titleMenu.each(function(indx, element){
      $(element).css({'animation-delay':  (a + indx*1/10) +'s'});
    });

    var  titleMenu = $('.has-children');


    titleMenu.addClass('animated fadeInUp');

    var a = 0.0;

    titleMenu.each(function(indx, element){
      $(element).css({'animation-delay':  (a + indx*1/10) +'s'});
    });


  };
  var mainForm = function () {
    $('.mainForm__input').on('focus', function () {
      $(this).parent().addClass('input-focus-js');
    }).blur(function () {
      if ($(this).val() === '') {
        $(this).parent().removeClass('input-focus-js');
      }
    });


    $('#popup-form').on('submit', function (e) {
      event.preventDefault();
      var parent = e.target;
      ajax_form(parent);
    });
    $('#price-form').on('submit', function (e) {
      event.preventDefault();
      var parent = e.target;
      ajax_form(parent);
    });
    $('#feedback-form').on('submit', function (e) {
      event.preventDefault();
      var parent = e.target;
      ajax_form(parent);
    });
    $('#contact-1').on('submit', function (e) {
      event.preventDefault();
      var parent = e.target;
      ajax_form(parent);
    });
    $('#contact-2').on('submit', function (e) {
      event.preventDefault();
      var parent = e.target;
      ajax_form(parent);
    });

    function ajax_form(e) {
      event.preventDefault();
      console.log(e)
      var str = $("#" + e.id).serialize();
      //var x = document.forms[e.id]["name"].value;
      //var y = document.forms[e.id]["tel"].value;

      var errors = false; // по умолчанию ошибок в форме нет
      $(e).find('.mainForm__input-requaired').each(function () {
        if ($.trim($(this).val()) === '') { // $.trim - убирает пробелы с начала и конца строки таким образом пользователь не может отправить строку с пробелами

          errors = true;
          var errorMessage = $(this).prev().data("errormessage"); // добавляем в input сообщение об ошибке из dataAttr и class
          $(this).prev().text(errorMessage);
          $(this).addClass('js-no-valid');
        }

        $(".mainForm__input").on("mouseup", function () {
          var defaultMessage = $(this).prev().data("defaultmessage"); // при клике на input убираем сообщение и class
          $(this).prev().text(defaultMessage);
          $(this).removeClass('js-no-valid');
        });

      });
      if (!errors) {
        $.ajax({
            method: "POST",
            url: "",
            data: str,
            beforeSend: function () {
              $(e).find('button.sand-form').text('Отправка...') // замена текста в кнопке при отправке
            },
            error: function () {
              $(e).find('button.sand-form').text('Ошибка отправки!'); // замена текста в кнопке при отправке в случае
            }

          })

          .done(function (msg) {
            // success();
            $('.form-succses').addClass('form-succses-active');
            $(e).find('input').val('');
            location.replace('/message/');
            //$(e).find('input').prev().removeClass('contact-form-input__text_active')
            $(e).find('button.sand-form').text('Отправить')
            /*ga('send', {
              hitType: 'event',
              eventCategory: 'sendForm',
              eventAction: 'send',
              eventLabel: 'newRequest'
            });*/

            // открытие модального окна с благодарностью

            // $.magnificPopup.open({
            //   items: {
            //     src: '.thanks'
            //   },
            //   type: 'inline',
            //   mainClass: 'mfp-animation'
            // });
          });
      }
    }
  };
  var dataInput = function () {
    $.datetimepicker.setLocale('ru');
    var logic1 = function (currentDateTime) {
      if (currentDateTime.getDate() == new Date().getDate()) {
        this.setOptions({
          minTime: new Date()
        });
      } else {
        this.setOptions({
          minTime: '9:00'
        });
      }
    };

    $('.datetimepicker_dark').datetimepicker({
      //            theme:'dark',
      // value: 'trololo',
      // value: new Date(),
      minDate: new Date(),
      maxTime: '20:00',
      yearStart: 2019,
      yearEnd: 2019,
      dayOfWeekStart: 1,
      onSelectDate: logic1,
      onShow: logic1

    });
  };
  var popup = function() {
    $('.popup-with-form-js').magnificPopup({
      type: 'inline',
      preloader: false,
      removalDelay: 500,
      callbacks: {
        beforeOpen: function () {
          this.st.mainClass = this.st.el.attr('data-effect');
        }
      },
      midClick: true
    });

    $('.price-popup-with-form-js').magnificPopup({
      type: 'inline',
      preloader: false,
      mainClass: 'mfp-animation',

      // When elemened is focused, some mobile browsers in some cases zoom in
      // It looks not nice, so we disable it:
      callbacks: {
        beforeOpen: function() {
          if($(window).width() < 700) {
            this.st.focus = false;
          } else {
            this.st.focus = '#name';
          }
          var $triggerEl = $(this.st.el),
              newClass = $triggerEl.data("modal-class");
          if (newClass) {
              this.st.mainClass = this.st.mainClass + ' ' + newClass;
          }
        }

      },

      zoom: {
          enabled: true,
          duration: 300 // don't foget to change the duration also in CSS
      },
    });
  };
  var hpOutline = function () {
    var swit = false,
      timeoutSwitTriger;

    function timeoutSwit() {
      timeoutSwitTriger = setTimeout(function () {
        if ($('body').hasClass('focus-tab--enable')) {
          swit = false;
          $('body').removeClass('focus-tab--enable');
        }
      }, 5000);
    };

    $(document).on('keydown', function (e) {

      if (e.key == 'Tab') {

        if (!swit) {
          timeoutSwit();
          swit = true;

        } else {
          clearTimeout(timeoutSwitTriger)
          timeoutSwit();
        }

        $('body').addClass('focus-tab--enable');
      }
    });
  };
  var telMask = function () {
    jQuery(function ($) {
      $.mask.definitions['#'] = '[0-9]';
      $.mask.definitions['9'] = '';
      $(".inputtelmask").mask("+(38) ### ###-##-##", {
        placeholder: "_"
      });
    });

    var telInput = $(".inputtelmask");

    telInput.intlTelInput({
      initialCountry: 'ua',
      preferredCountries: ['ua', 'ru'],
      nationalMode: false
    });

    $(telInput).on("countrychange", function (e, countryData) {
      $(this).intlTelInput("setNumber", "");
      $(this).trigger('blur');
      $(this).mask('+(' + countryData.dialCode + ')' + ' ### ###-##-##', {
        placeholder: "_"
      });
    });
  };



  /* Initialize 
   * ------------------------------------------------------ */
  (function hpInit() {
    changeLang();
    siteMenu();
    mainForm();
    dataInput();
    popup();
    hpOutline();
    telMask();
  })();
})(jQuery);