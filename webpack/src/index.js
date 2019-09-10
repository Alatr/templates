
import './assets/css/main.css';
import './assets/sass/main.scss';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import WOW from 'wow.js'

function requireAll(r) {
	r.keys().forEach(r);
}
requireAll(require.context('../src/assets/img/icon/', true, /\.svg$/));
requireAll(require.context('../src/assets/img/', true, /\.(gif|png|jpe?g)$/i));

const wow = new WOW({
	boxClass: 'wow',
	animateClass: 'animated',
	offset: 0,
	live: true
});
wow.init();
// валидация формы 

	$('.main-form__input').on('focus', function () {
		$(this).parent().addClass('js-input-focus');
	}).blur(function () {
		if ($(this).val() === '') {
			$(this).parent().removeClass('js-input-focus');
		}
	});

	$('#form').on('submit', function (e) {
		event.preventDefault();
		var parent = e.target;
		ajax_form(parent);
	});

	function ajax_form(e) {
		event.preventDefault();
		var err = [];
		var rulesPattern = {
			email: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
			tel: /^\+38\(\d{3}\)\d{7}$/
		};
		var validatorMethods = {
			empty: function (el) {
				return (el === '') ? true : false;
			},
			pattern: function (el, pattern) {
				return pattern.test(el);
			},
			contains: function (el1, el2) {
				return (el1 == el2) ? false : true;
			},
			check: function (el) {
				return (el.checked) ? false : true;
			},
			max: function (el) {
				return (el.length > 5) ? true : false;
			}
		}
		var removeAnimationClass = function(selector, classAnimation){
			selector.addClass(classAnimation);
			selector.on("animationend", function () {
				selector.removeClass(classAnimation);
			});
		}
		var pushError = function (key) {
			err.push(key);
		}
		var showError = function (key) {
			var errorMessage = $(this).next().data("errormessage"); // добавляем в input сообщение об ошибке из dataAttr и class
			var inputText = $(this).next().find('.main-form__text');

			removeAnimationClass(inputText, 'shake')
			inputText.text(errorMessage);
			$(this).addClass('js-no-valid');
			pushError(key)
		}
		var showDefaultMessage = function () {
			var defaultMessage = $(this).next().data("defaultmessage"); // при клике на input убираем сообщение и class
			console.log(defaultMessage)
			$(this).next().find('.main-form__text').text(defaultMessage);
			
			$(this).removeClass('js-no-valid');
		}
		var str = $("#" + e.id).serialize();
		//var x = document.forms[e.id]["name"].value;
		//var y = document.forms[e.id]["tel"].value;
		console.log(str);
		

		var errors = true; // по умолчанию ошибок в форме нет
		$(e).find('.main-form__input-requaired').each(function () {
			var rule = $(this).data("rule").split(' ');
			if ($(this).data("patterns") != undefined) {
				var pattern = $(this).data("patterns").split(' ');
			}
			if ($(this).data("compare") != undefined) {
				var compare = $(this).data("compare").split(' ');
			}

			rule.forEach((el) => {
				var self = $(this);

				switch (el) {
					case 'pattern':
						pattern.forEach((elPat) => {
							errors = !validatorMethods[el]($.trim($(this).val()), rulesPattern[elPat]);
							if (errors) showError.call($(this), elPat);
						});
						break;
					case 'contains':
						var compareElemOne = $('#' + compare[0]).val();
						var compareElemTwo = $('#' + compare[1]).val();
						errors = validatorMethods[el](compareElemOne, compareElemTwo);
						if (errors) showError.call($(this), el);
						break;
					case 'check':
						errors = validatorMethods[el]($(this)[0]);
						if (errors) showError.call($(this), el);
						break;
					default:
						errors = validatorMethods[el]($.trim($(this).val()));
						if (errors) showError.call($(this), el);
				}
			})

			$(".main-form__input").on("mouseup", showDefaultMessage);

		});
		console.log(err)
		if (err.length == 0) {
			$.ajax({
					method: "POST",
					url: "",
					data: str,
					beforeSend: function () {
						$(e).find('button.main-form__button').text('Отправка...') // замена текста в кнопке при отправке
						$('body').css('cursor', 'wait')
					},
					error: function () {
						$(e).find('button.main-form__button').text('Ошибка отправки!'); // замена текста в кнопке при отправке в случае
					}

				})

				.done(function (msg) {
					console.log(msg);
					
					// success();
					$('.form-succses').addClass('form-succses-active');
					$(e).find('.main-form__input-requaired').each(function (el) {
						$(this).val('')
						showDefaultMessage.call($(this))
					})
					$(e).find('.main-form-block.requaired').removeClass('js-input-focus')
					$('body').css('cursor', 'default')
					//location.replace('/message/');
					$(e).find('button.main-form__button').text('Отправить')
				});
		}
	}

	let pallaxItemsArr = []
	const block = $('.js-parallax-item');
	
	
	$(window).scroll(function (e) {
		pallaxItemsArr.forEach(element => {
			let windowScroll = $(window).scrollTop() + 200 - element.blockOffset;
			let translatePercent = element.defStyle + (windowScroll / element.speed);
			setStyleParallax.call(element.el, translatePercent);
		});
	});
	
	function setStyleParallax(translateVal){
		this.css('transform', 'translateY(' + translateVal * -1 + '%)')
	}

	block.each(function (indx, element) {
		const el = $(element)
		const blockParrent = el.closest('section').height();
		let blockWidth = el.height();
		let blockOffset = el.offset().top + blockParrent/2;
		let speed = el.data('speed');
		let defStyle = (el.css('transform').match(/-?[\d\.]+/g)[5] / blockWidth) * 100;

		let infoEl = {
			el: el,
			blockParrent: blockParrent,
			blockWidth: blockWidth,
			blockOffset: blockOffset,
			speed: speed,
			defStyle: defStyle
		}
		pallaxItemsArr.push(infoEl)
});


	var win = $(window),
		target = $('body'),
		wrapper = target.find('> div'),
		easing = "ease-out" //css easing
		,
		duration = "1.2s" //duration ms(millisecond) or s(second)
		,
		top = 0,
		kineticScroll = {
			_init: function () {
				if (wrapper.length == 1) {
					target.height(wrapper.height());
					wrapper.css({
						transition: 'transform ' + duration + ' ' + easing,
						position: 'fixed',
						top: '0',
						left: '0',
						width: '100%',
						padding: '0',
						zIndex: '2'
					});

					win.on({
						scroll: function () {
							kineticScroll._scroll();
						},
						resize: function () {
							target.height(wrapper.outerHeight());
						}
					});

					kineticScroll._scroll();
				}
			},
			_scroll: function () {
				top = win.scrollTop();
				wrapper.css('transform', 'translateY(-' + top + 'px)');
			}
		};

	if (typeof window.ontouchstart == 'undefined') {
		kineticScroll._init();
	}