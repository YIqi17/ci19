var data;
var precipProbability;
//if Precipitation = 0, display an image;
//if Precipitation = 1, display an image;
//0.1 + add another layer
//if precipitation is between 0-0.5, display another;
//if precipitation is between 0.5-0.9, display another;
//have functions to check future 7 day's probability;
//the speed of the image movement is determined by the time, for daily is faster
//get weather and precipitationprobability
  const key = "379de9507cfdca38207d7ded1b07bac6";
    getWeather({
      coords: {
          latitude: 37.8267, 
          longitude: -122.4233
        }
    });

  function getWeather(position){
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      var url = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+key+"/"+lat+","+lon;
      console.log(url);
      fetch(url)
        .then(res => res.json())
        .then(json => handleJSON(json));
  }


  var handling = "Daily";
  function handleJSON(json){
    // list of backgrounds and the maximum value at which it will be shown (always takes smallest match)
    let backgrounds = ['comp3.jpg', 'try8.jpg', 'try7.jpg', 'try1.jpg'];
    let limits      = [   0.05,          0.45,        0.8,         1.0];

    data = json;
    let pprob = 0;

    //whateve ruser clicked on will be used for which probability
    if(handling == "Currently") {
      pprob = data.currently.precipProbability;
    }
    else if(handling == "Next 24 hrs") {
      pprob = data.daily.data[0].precipProbability;
    }
    else if(handling == "Next 48 hrs") {
      pprob = data.daily.data[1].precipProbability;
    }
    else if(handling == "Next 72 hrs") {
      pprob = data.daily.data[2].precipProbability;
    }
     else if(handling == "Next 96 hrs") {
      pprob = data.daily.data[3].precipProbability;
    }
    else if(handling == "Next 120 hrs") {
      pprob = data.daily.data[4].precipProbability;
    }
    else if(handling == "Next 144 hrs") {
      pprob = data.daily.data[5].precipProbability;
    }
    // else if whatever

    //look through limits to find an index that is GREATER than our probability
    let index = 0;
    while(limits[index] < pprob) {
      index += 1;
    }


    let tiles = document.getElementsByClassName("image");
    for(let i=0;i<tiles.length;i++) {
      tiles[i].style.backgroundImage = "url('./img/"+backgrounds[index]+"')";
    }
  }
    
//start to draw the kaleido and make the different sections
$( document ).ready( function () {
  $("#tabs ul li").click(function() {
    handling = $(this).html();
    handleJSON(data);
  });

  // $('.kaleidoscope .tile .image').css('background-image', 'url(img/comp.jpg');
  var parameters = ( function ( src ) {
    var params = {}, qryStr = src.split( '?' )[ 1 ];
    if( qryStr ) {
      $.each( qryStr.split( '&' ), function ( i, p ) {
        var ps = p.replace( /\/$/, '' ).split( '=' );
        var k = ps[ 0 ].replace( /^\?/, '' );
        params[ k ] = ps[ 1 ] || true;
      });
    }
    return params;
  })( location.search );

  var x = 0;
  var y = 0;

  var auto;
  var auto_x = 400;
  var auto_y = 0;
    var auto_throttle;

  //*s* is the speed of the automatic timeout animation.
  var s = parameters.s || 500;
  var n = ~~parameters.n || 6;

  var tiles = '';
  if ( n ) {
    for ( var i = 0; i <= n * 2; i++ ) {
      tiles += [ '<div class="tile t', i, '"><div class="image"></div></div>' ].join( '' );
    }
  }

  var $kaleidescope = $( '.kaleidoscope' )
    .addClass( 'n' + n )
    .append( tiles );

  var $image = $kaleidescope.find( '.image' );

  var $fullscreen = $( '#fullscreen' );

  //animation
  var opacity = parseFloat( parameters.opacity );
  if ( opacity ) {
    $kaleidescope.css('opacity', 0).fadeTo( 3000, opacity );
  }

  $fullscreen.click( function() {
    if ( document.fullscreenEnabled) {
      if ( k.requestFullscreen )       k.requestFullscreen();
    }
  });

  // Animate all the things!
  window.requestAnimFrame = ( function( window ) {
    var suffix = "equestAnimationFrame",
      rAF = [ "r", "webkitR", "mozR" ].filter( function( val ) {
        return val + suffix in window;
      })[ 0 ] + suffix;

    return window[ rAF ]  || function( callback ) {
      window.setTimeout( function() {
        callback( +new Date() );
      }, 1000 / 60 );
    };
  })( window );


  var dx = 1;
  function animate() {
    // var time = []
    // for (var i = 300; i <= 700; i++) {
    // time.push(i)
    // }

    // for(auto_x = 500, auto_x < 700, auto_x++){

    // }

    // if (auto_x<699){
    //   for(auto_x, auto_x > 500, auto_x = auto_x -1);
    // }

    auto_x += dx;
    if(auto_x > 700  || auto_x < 400) {
      dx = -dx;
    }

    auto_y++;

    move( auto_x, auto_y );
    if ( auto ) requestAnimFrame( animate );
  }

  function move( x, y ) {
    $image.css( 'background-position', [ x + "px", y + "px" ].join( ' ' ) );
  }

  // Timer to check for inactivity
  (function timer() {
      setTimeout( function() {
        timer();
        if( auto && !auto_throttle ) {
          animate();
          auto_throttle = true;
        } else {
          auto = true;
        }
      }, 500 );
  })();

});
