function Map() {
 this.loaded = false;
 this.google = null;
}

var gameStores = {
  guardianGames: { lat: 45.5154, lng: -122.6621 },
  timeVaultGames: { lat: 45.5156, lng: -122.6813 },
  redCastleGames: { lat: 45.4894, lng: -122.5968  }
};

Map.prototype.initialize = function(request) {
  var portland = new google.maps.LatLng(45.523452, -122.676207);

    var newMap = new google.maps.Map(document.getElementById('map'), {
      center: portland,
      zoom: 12,
      mapTypeId: "terrain",
      scrollwheel: false
    });

    if(map) {
      this.loaded = true;
      this.google = newMap;
    }

  return newMap;
};

// Map.prototype.markerWithPlace = function(placeId, map) {
//   var marker = new
// };


Map.prototype.marker = function(request, map) {
  var marker = new google.maps.Marker({
    position: request,
    map: map
  });
};


exports.mapModule = Map;
