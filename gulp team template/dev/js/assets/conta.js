(function ($) {

  var tabs = function () {
    var tabsHeader = $('.tabs__header li'),
      tabsContent = $('.tabs__inner');

    tabsHeader.on('click', function () {
      if (!$(this).hasClass('active-li')) {
        var data = $(this).data('page');
        tabsContent.removeClass('active-js');
        tabsContent.eq(data).addClass('active-js');

        tabsHeader.removeClass('active-li');
        $(this).addClass('active-li');
      }
    });

  };
  var loc = function () {
    // Создаём пустые масивы в которых будет храниться дальшейшая информация о маркерах

    var gmarkers1 = [];
    var markers1 = [];
    var infowindow = new google.maps.InfoWindow({
      content: '',
      maxWidth: 200
    });


    // Два масива для русской и украинской версии сайта. B функции addMarker() рассшифровка что означает каждый элемент масива


    markers1 = [
     ['0', '', 46.450562, 30.764241, 'public', './img/location/loc-f-i.png', 'Отдел продаж']
     // ['1', '', 46.495361, 30.726722, 'main',         'img/location/icon/map-logo.svg', 'ЖК АртКвартал']
    ];
    markers2 = [
      ['0', '', 46.450562, 30.764241, 'public', './img/location/loc-f-i.png', 'Отдел продаж']
      //['1', '', 46.495361, 30.726722, 'main',         'img/location/icon/map-logo.svg', 'ЖК АртКвартал']
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


    // init карты все очевидно 
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 46.495447, 
        lng: 30.727724
      },
      zoom: 13,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    console.log('1')



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

    // берёт json файл и стилизует карту согласно настройкам в нём
    var styleMap  = [
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#5f5b4b"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#3b3b3b"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#5a595c"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#2b2b2b"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#5a595c"
          },
          {
            "lightness": 29
          },
          {
            "weight": 0.2
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#2e2e2e"
          },
          {
            "lightness": 18
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#282828"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#353535"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#353535"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "off"
          },
          {
            "color": "transparent"
          },
          {
            "lightness": 1
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "saturation": 36
          },
          {
            "color": "#918c7a"
          },
          {
            "lightness": 40
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#343434"
          },
          {
            "lightness": 19
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#fefefe"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#fefefe"
          },
          {
            "lightness": 17
          },
          {
            "weight": 1.2
          }
        ]
      }
    ];

    map.setOptions({
      styles: styleMap
    });

  };

  /* Initialize
   * ------------------------------------------------------ */
  (function hpInitContact() {
    tabs();
    loc();
  })();

})(jQuery);