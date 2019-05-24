(function () {

})();

function initMap() {
  var map;
  var styleMap = [
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
  var markers = [];
  var markerList = [  // index, posY, posX, category, title, position arrow, size
    ['0', 50.4502514,30.4868468, 'main', './img/icons/FRANKLIN.png',     'ЖК FRANKLIN',  "marker-right-bottom", 90, './img/location/national-circus-ukraine-victory-square-kiev-1124342897_src=3jmfi4ThObiT7Y02ZuXPmQ.jpg', 'Площадь Победы2'],
    ['1', 50.4122514,30.4238468, '1',    './img/icons/theater-masks.svg','ЖК FRANKLIN2', "marker-left-bottom",  70, './img/location/national-circus-ukraine-victory-square-kiev-1124342897_src=3jmfi4ThObiT7Y02ZuXPmQ.jpg', 'Площадь Победы3'],
    ['2', 50.4852514,30.5198468, '2',    './img/icons/clown.svg',        'ЖК FRANKLIN3', "marker-left-top",     70, './img/location/national-circus-ukraine-victory-square-kiev-1124342897_src=3jmfi4ThObiT7Y02ZuXPmQ.jpg', 'Площадь Победы4'],
    ['3', 50.454889, 30.356829, '3',     './img/icons/fireworks.svg',    'ЖК FRANKLIN4', "marker-right-top",    70, './img/location/national-circus-ukraine-victory-square-kiev-1124342897_src=3jmfi4ThObiT7Y02ZuXPmQ.jpg', 'Площадь Победы5'],
    ['4', 50.4962514,30.4358468, '4',    './img/icons/shopping-cart.svg','ЖК FRANKLIN5', "marker-left-bottom",  70, './img/location/national-circus-ukraine-victory-square-kiev-1124342897_src=3jmfi4ThObiT7Y02ZuXPmQ.jpg', 'Площадь Победы6'],
    ['5', 50.4062514,30.5158468, '5',    './img/icons/park.svg',         'ЖК FRANKLIN',  "marker-left-bottom",  70, './img/location/national-circus-ukraine-victory-square-kiev-1124342897_src=3jmfi4ThObiT7Y02ZuXPmQ.jpg', 'Площадь Победы8'],
    ['6', 50.461513, 30.649678, '6',     './img/icons/park.svg',         'ЖК FRANKLIN',  "marker-left-bottom",  70, './img/location/national-circus-ukraine-victory-square-kiev-1124342897_src=3jmfi4ThObiT7Y02ZuXPmQ.jpg', 'Площадь Победы9'],
  ];
  var settings = {
    center: {lat: 50.4502514, lng: 30.4868468},
    zoom: 12,
    disableDefaultUI: true,
  };

  map = new google.maps.Map(document.getElementById('location__map'),settings);
  map.setOptions({styles: styleMap});
  markerList.forEach(function (marker) {
    addMarker(marker);
  });

  function addMarker(marker) {
    var position = {
      x: 0,
      y: 0
    };

    switch(marker[6]) {
      case 'marker-right-bottom':
        position.x = marker[7];
        position.y = marker[7];
        break;

      case 'marker-left-bottom':
        position.x = 0;
        position.y = marker[7];
        break;

      case 'marker-left-top':
        position.x = 0;
        position.y = 0;
        break;

      case 'marker-right-top':
        position.x = marker[7];
        position.y = 0;
        break;
    }

    var marker1 = new google.maps.Marker({
      // position: new google.maps.LatLng(newlong, newLat),
      position: new google.maps.LatLng(marker[1], marker[2]),
      category: marker[3],
      map: map,
      title: marker[6],
      icon: new google.maps.MarkerImage(marker[4],
        new google.maps.Size(marker[7], marker[7]),
        new google.maps.Point(0, 0),
        new google.maps.Point(position.x, position.y))
    });

    createInfo(marker1, marker);

    markers.push(marker1);
  }

   $('.js-point__click').click(function (event) {
    var category = event.target.dataset.category;
    markers.forEach(function (marker) {
      marker.category === category ? marker.setMap(map) : marker.setMap(null);
    })

  });

  function createInfo(marker, mark){
    console.log(mark);
    var content = '<img class="maps-info__img" src='+ mark[8]+' alt="">\n' +
      '            <div class="maps-info__content">\n' +
      '                <div class="maps-info__address">Адрес:</div>\n' +
      '                <div class="maps-info__description"> ' + mark[9] + '</div>\n' +
      '            </div>';
    marker.addListener('click', function() {
      $('.maps-info').html(content);
      $('.maps-info').css('display','block')
    });

    google.maps.event.addListener(map, "click", function () {
      $('.maps-info').css('display','none')
    });
  }


}

