var styles = require('./../js/mapstyle.js').styles;

function Map() {
 this.loaded = false;
 this.google = null;
}

  var gmarkers = [];

  Map.prototype.initialize = function() {
    var portland = new google.maps.LatLng(45.523452, -122.676207);

      var newMap = new google.maps.Map(document.getElementById('map'), {
        center: portland,
        zoom: 12,
        mapTypeId: "terrain",
        scrollwheel: false,
        styles: styles
      });

      if(newMap) {
        this.loaded = true;
        this.google = newMap;
      }
  };

  Map.prototype.mapSearch = function(query) {
    var request = {
      location: map.getCenter(),
      radius: '500',
      query: query
    };
    return request;
  };

  Map.prototype.marker = function(request, map) {
    var marker = new google.maps.Marker({
      position: request,
      map: map
    });
    gmarkers.push(marker);
  };

  Map.prototype.removeMarkers = function() {
    for(var i = 0; i<gmarkers.length; i++){
      gmarkers[i].setMap(null);
    }
  };

exports.mapModule = Map;
