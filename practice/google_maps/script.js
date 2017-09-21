var locations = [{
      lat: 40.726388,
      long: -74.007792
    },
    {
      lat: 40.741993,
      long: -73.989936
    }
];

var choice = 1;
console.log(locations[choice]);
var lati;
var long;
if (choice == 0) {
  lati = locations[choice].lat;
  long = locations[choice].long;
} else if (choice == 1) {
  lati = locations[choice].lat;
  long = locations[choice].long;
}

console.log(locations);


function initMap() {
  var uluru = {lat: lati, lng: long};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
