var Game = require('./../js/gamestore.js').mapModule;
var apiKey = require('./../.env').apiKey;

// Assemble Script for Header
  $(document).ready(function() {
    var apiScript = document.createElement('script');
    apiScript.type = 'text/javascript';
    apiScript.src = "https://maps.googleapis.com/maps/api/js?key=" + apiKey ;
    apiScript.async = true;
    apiScript.defer = true;
    $("head").append(apiScript);

    console.log(apiScript);
    var game = new Game();

    setTimeout(function() {
      game.initMap();


    }, 1000);

  // End Document Ready
  });
