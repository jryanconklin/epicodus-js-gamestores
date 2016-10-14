
function Game() {
  var map;
}

var gameStores = {
  guardianGames: { lat: 45.5154, lng: -122.6621, desc: 'I am a description'},
  timeVaultGames: { lat: 45.5156, lng: -122.6813 },
  redCastleGames: { lat: 45.4894, lng: -122.5968  }
};

Game.prototype.initMap = function(gameStore) {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.523452, lng: -122.676207},
    zoom: 8
  });
  var ggmarker = new google.maps.Marker({
    position: gameStores['guardianGames'],
    map: map
  });
  var tvmarker = new google.maps.Marker({
    position: gameStores['timeVaultGames'],
    map: map
  });
  var rcmarker = new google.maps.Marker({
    position: gameStores['redCastleGames'],
    map: map
  });

  return map;
};

Game.prototype.guardianGames = function() {
  var marker = new google.maps.Marker({
    position: {lat: 45.5154, lng: -122.6621},
    map: map
  });
}




exports.mapModule = Game;
