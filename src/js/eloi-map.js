---
---
var geocoder;
var map;
var address = "Studio Éloi";

function initMap() {

    geocoder = new google.maps.Geocoder();
    var mapContainer = document.getElementById( 'map' );
    var mapStyles = {{ site.data.map-style | jsonify }};
    var latlng = new google.maps.LatLng(45.525403, -73.611911);
    var mapOptions = {
        zoom: 15,
        center: latlng,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        navigationControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: mapStyles // this is loaded in scripts
    };

    map = new google.maps.Map( mapContainer, mapOptions );

    if (geocoder) {
        geocoder.geocode({
          'address': address
        }, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
              map.setCenter(results[0].geometry.location);

              var infowindow = new google.maps.InfoWindow({
                content: '<b>' + address + '</b>',
                size: new google.maps.Size(150, 50)
              });

              var marker = new google.maps.Marker({
                position: results[0].geometry.location,
                map: map,
                title: address
              });
              google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
              });

            } else {
              alert("No results found");
            }
          } else {
            alert("Geocode was not successful for the following reason: " + status);
          }
        });
      }

}

// google.maps.event.addDomListener(window, 'load', initMap);
