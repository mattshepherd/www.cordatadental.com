// ==========  START GOOGLE MAP ========== //
function initialize() {
var myLatLng = new google.maps.LatLng(48.805198,-122.495189);

var mapOptions = {
    zoom: 17,
    center: myLatLng,
	disableDefaultUI: true,
	scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false,
    mapTypeControlOptions: {
    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
    }
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  
  var image = {
      url: 'img/location-icon.png',
      scaledSize: new google.maps.Size(32, 32)
    };
  
  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image,
	  title: '',
	  zIndex: 9999
  });

/*  we dont really need this right now
  var contentString = '<div style="max-width: 300px" id="content">'+
      '<div id="bodyContent">'+
	  '<h5 class="color-primary"><strong>Cordata Dental</strong></h5>' +
      '<p style="font-size: 12px">Lorem ipsum dolor sit amet,' +
      'incididunt ut labore et dolore psum dolor magna aliqua.</p>'+
      '</div>'+
      '</div>';


  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });
  
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
*/
  var styledMapOptions = {
    name: 'US Road Atlas'
  };

  var usRoadMapType = new google.maps.StyledMapType(styledMapOptions);

  map.mapTypes.set('roadatlas', usRoadMapType);
  map.setMapTypeId('roadatlas');
  
  google.maps.event.addDomListener(window, 'resize', function() {
      map.setCenter(myLatLng);
  });
}

google.maps.event.addDomListener(window, "load", initialize);


// ========== END GOOGLE MAP ========== //