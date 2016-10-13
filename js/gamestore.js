
function Map() {
 this.loaded = false;
 this.google;
}

var gameStores = {
  guardianGames: { lat: 45.5154, lng: -122.6621, desc: 'I am a description'},
  timeVaultGames: { lat: 45.5156, lng: -122.6813 },
  redCastleGames: { lat: 45.4894, lng: -122.5968  }
};

// Game.prototype.initMap = function(gameStore) {
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 45.523452, lng: -122.676207},
//     zoom: 12
//   });
//   var ggmarker = new google.maps.Marker({
//     position: gameStores['guardianGames'],
//     map: map
//   });
//   var tvmarker = new google.maps.Marker({
//     position: gameStores['timeVaultGames'],
//     map: map
//   });
//   var rcmarker = new google.maps.Marker({
//     position: gameStores['redCastleGames'],
//     map: map
//   });
//
//   return map;
// };
//
// Game.prototype.guardianGames = function() {
//   var marker = new google.maps.Marker({
//     position: {lat: 45.5154, lng: -122.6621},
//     map: map
//   });
// }

Map.prototype.initialize = function(request) {
  var portland = new google.maps.LatLng(45.523452, -122.676207);

  var newMap = new google.maps.Map(document.getElementById('map'), {
    center: portland,
    zoom: 12,
    mapTypeId: "hybrid",
    scrollwheel: false
  });



  var request = {
    location: portland,
    radius: '500',
    types: ['store']
  };

  if(map) {
    this.loaded = true;
    this.google = newMap;
  }

  return newMap;
}


exports.mapModule = Map;
