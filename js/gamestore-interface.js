var Map = require('./../js/gamestore.js').mapModule;
var apiKey = require('./../.env').apiKey;

// Assemble Script for Header
  $(document).ready(function() {
    var apiScript = document.createElement('script');
    apiScript.type = 'text/javascript';
    apiScript.src = "https://maps.googleapis.com/maps/api/js?key=" + apiKey;
    apiScript.async = true;
    apiScript.defer = true;
    $("head").append(apiScript);

    // Create New Map
    var gamestore = new Map();

    // Initialize Map after 1 Second Timeout
    setTimeout(function() {
      gamestore.initialize();
    }, 1000);

    //On Click jQuery to Send Marker Request to Guardian Games
    $('#store-button').click(function() {
      var store = $('#store-select option:selected').val();
      console.log(gameStores[store]);
      gamestore.marker(gameStores[store], gamestore.google);
    });



  // End Document Ready
  });
