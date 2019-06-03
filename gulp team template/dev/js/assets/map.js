(function ($) {

  var mapBlock = function () {

    // Создаём пустые масивы в которых будет храниться дальшейшая информация о маркерах

    var gmarkers1 = [];
    var markers1 = [];
    var infowindow = new google.maps.InfoWindow({
      content: '',
      maxWidth: 200
    });


    // Два масива для русской и украинской версии сайта. B функции addMarker() рассшифровка что означает каждый элемент масива


    markers1 = [
      ['0', '', 50.408442, 30.542944, 'main', './img/location/logo.svg', 'ЖК "Nordica" Залізодорожнє шоссе, 48'],
      ['1', '', 50.422524, 30.455401, 'main', './img/location/mark.svg', 'Отдел продаж "Повітрофлотський проспект, 56'],
      ['2', '', 50.462029, 30.489213, 'main', './img/location/mark.svg', 'Отдел продаж "Глибочицька, 13"']
      // ['0', '', 50.461922, 30.418754, 'pharmacy', 'img/svg/location/loc-ico/pharm-cross.svg', 'Парк Нивки'],
      // ['1', '', 50.458609, 30.419816, 'hospital', 'img/svg/location/loc-ico/pharm-cross.svg', 'Берестейська'],
      // ['2', '', 50.459435, 30.431500, 'gym', 'img/svg/location/loc-ico/pharm-cross.svg', 'Спеціалізована школа №82'],
      // ['3', '', 50.465274, 30.438023, 'graduation', 'img/svg/location/loc-ico/pharm-cross.svg', 'Мотузковий парк'],
      // ['4', '', 50.467398, 30.434836, 'school', 'img/svg/location/loc-ico/pharm-cross.svg', 'Київська дитяча залізниця'],
      // ['5', '', 50.467692, 30.438924, 'garden', 'img/svg/location/loc-ico/pharm-cross.svg', 'Сирецький парк'],
      // ['6', '', 50.456413, 30.440894, 'mall', 'img/svg/location/loc-ico/pharm-cross.svg', 'КНЕУ'],
      // ['7', '', 50.454856, 30.445475, 'supermarket', 'img/svg/location/loc-ico/pharm-cross.svg', 'Шулявська'],
    ];
    markers2 = [
      ['0', '', 50.408442, 30.542944, 'main', 'img/location/logo.svg', 'ЖК "Nordica" Залізодорожнє шоссе, 48'],
      ['1', '', 50.422524, 30.455401, 'main', './img/location/mark.svg', 'Отдел продаж "Повітрофлотський проспект, 56'],
      ['2', '', 50.462029, 30.489213, 'main', './img/location/mark.svg', 'Отдел продаж "Глибочицька, 13"']
      // ['0', '', 50.461922, 30.418754, 'pharmacy', 'img/svg/location/loc-ico/pharm-cross.svg', 'Парк Нивки'],
      // ['1', '', 50.458609, 30.419816, 'hospital', 'img/svg/location/loc-ico/pharm-cross.svg', 'Берестейская'],
      // ['2', '', 50.459435, 30.431500, 'gym', 'img/svg/location/loc-ico/pharm-cross.svg', 'Специализированная школа №82'],
      // ['3', '', 50.465274, 30.438023, 'graduation', 'img/svg/location/loc-ico/pharm-cross.svg', 'Веревочный парк'],
      // ['4', '', 50.467398, 30.434836, 'school', 'img/svg/location/loc-ico/pharm-cross.svg', 'Киевская детская железная дорога'],
      // ['5', '', 50.467692, 30.438924, 'garden', 'img/svg/location/loc-ico/pharm-cross.svg', 'Сырецький парк'],
      // ['6', '', 50.456413, 30.440894, 'mall', 'img/svg/location/loc-ico/pharm-cross.svg', 'КНЭУ'],
      // ['7', '', 50.454856, 30.445475, 'supermarket', 'img/svg/location/loc-ico/pharm-cross.svg', 'Шулявская'],

    ];


    // Фильтрация, функция принимает в параметр  категорию из дата атрибута и сравнивает, используя метод гугл API setMap скрывает и показывает 
    filterMarkers = function (category) {
      for (i = 0; i < markers1.length; i++) {
        marker = gmarkers1[i];
        if (marker.category == category || category == 'all') {
          marker.setMap(map);
          // marker.setAnimation(google.maps.Animation.DROP);
        } else {
          marker.setMap(null)
        }
      }
    }

    // функция вешает обработчик клика на все элементы списка и вызывает функцию filterMarkers передавая в нее значение дата атрибута
    var markItems = document.querySelectorAll('.mark-item');

    for (var i = 0; i < markItems.length; i++) {
      markItems[i].addEventListener('click', function () {
        console.log(markItems);

        markItems.forEach(function (item, i) {
          if (item.classList.contains('active-map-item')) {
            item.classList.remove('active-map-item');
          }
        });

        this.classList.add('active-map-item');
        var category = this.dataset.category;
        filterMarkers(category);
      });
    }


    // Функция добавления маркеров, берёт значение из масива вносит их в переменные и используя метод гугл API new google.maps.Marker клепает маркера
    function addMarker(marker) {
      var category = marker[4];
      var title = marker[1];
      var pos = new google.maps.LatLng(marker[2], marker[3]);
      var content = "<p class='content'>" + marker[6] + "</p>";
      var markerIcon = {
        url: marker[5]
      };
      marker1 = new google.maps.Marker({
        title: title,
        position: pos,
        category: category,
        map: map,
        icon: markerIcon,
        // animation: google.maps.Animation.DROP,
      });
      gmarkers1.push(marker1);
      // Marker click listener
      google.maps.event.addListener(marker1, 'click', (function (marker1, content) {
        return function () {
          infowindow.setContent(content); // установка нужного контента в всплывайку
          infowindow.open(map, marker1); // открытие нужного окна
          map.panTo(this.getPosition()); // установка центра карты в координатах кликнутой иконки
        }
      })(marker1, content));
    }

    var styleMap = [{
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }]
      },
      {
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#f5f5f5"
        }]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#bdbdbd"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "color": "#eeeeee"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#e5e5e5"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9e9e9e"
        }]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#301bf3"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dadada"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#301bf3"
        }]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [{
          "color": "#e5e5e5"
        }]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [{
          "color": "#eeeeee"
        }]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#c9c9c9"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9e9e9e"
        }]
      }
    ];


    // init карты все очевидно 
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 50.408442,
        lng: 30.542944
      },
      zoom: 17,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    map.setOptions({
      styles: styleMap
    });



    // настройка для смены языка проверяет адресную строку и в зависимости от выбраного языка подставляет нужный массив с данными
    var uri = window.location.href;
    var searchIndex = uri.search('/ru/');
    if (searchIndex > -1) {
      for (i = 0; i < markers2.length; i++) {
        addMarker(markers2[i]);
      }
    } else {
      for (i = 0; i < markers1.length; i++) {
        addMarker(markers1[i]);
      }
    }





    // подробнее o методах и классах гугл API https://developers.google.com/maps/documentation/javascript/reference/
  };
  /* Initialize
   * ------------------------------------------------------ */
  (function hpInitMap() {
    mapBlock();
  })();

})(jQuery);