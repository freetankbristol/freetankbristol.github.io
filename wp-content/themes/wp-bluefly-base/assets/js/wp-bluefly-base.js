$(document).ready(function(){
    $(window).on('scroll', function(){
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
    
        var elemTop = $('.slide-overlay h2').offset().top;
        var elemBottom = elemTop + $('.slide-overlay h2').height();

        if(docViewTop > 0){
          $('.site-nav').addClass('active');
        }else{
          $('.site-nav').removeClass('active');
        }
    
        // return 
        if(!((elemBottom <= docViewBottom) && (elemTop >= docViewTop))){
          $('.site-nav h1').addClass('active');
        }else{
            $('.site-nav h1').removeClass('active');
        }
    });

    $('.menu-button').on('click', function(event){
      event.preventDefault();

      $('.site-nav-list').slideToggle();
    });
    
    $('.section').last().addClass('last');

    $('.next-section-link').on('click', function(event){
        event.preventDefault();
        
        var that = $(this);

        $('html, body').animate({
            scrollTop: that.closest('.section').next('section').offset().top
        }, 750);
	});
	
	$('.slides').slick({
    fade: true,
    dots: true,
    dotsClass: 'slide-nav',
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true
  });

    // $('.slide-nav-item').on('click', function(){
	// 	$(this).parent('.slide-nav').children('.slide-nav-item').removeClass('active');
	// 	$(this).addClass('active');
    // });

    // $('.slides').each(function(){
    //     var initialFadeIn = 0;
    //     var itemInterval = 5000;
    //     var numberOfItems = $(this).children('.slide').length;
    //     var currentItem = 0;
    //     var that = $(this);

    //     that.children('.slide').eq(currentItem).addClass('first');
    //     that.siblings('.slide-nav').children('.slide-nav-item').eq(currentItem).addClass('active');

    //     var infiniteLoop = setInterval(function(){
    //         that.children('.slide').eq(currentItem).removeClass('active');
    //         that.siblings('.slide-nav').children('.slide-nav-item').eq(currentItem).removeClass('active');

    //         if(currentItem == numberOfItems -1){
    //             currentItem = 0;
    //         }else{
    //             currentItem++;
    //         }

    //         that.siblings('.slide-nav').children('.slide-nav-item').eq(currentItem).addClass('active');
    //         that.children('.slide').eq(currentItem).addClass('active');

    //     }, itemInterval);
    // });

    $('.site-nav a').on('click', function(event){
        event.preventDefault();
        var that = $(this);
        var is_admin = 0;

        $('.site-nav a').removeClass('active');
        that.addClass('active');

        if($('body').hasClass('admin-bar')){
          is_admin = 32;
        }

        $('html, body').animate({
            scrollTop: $(that.attr('href')).offset().top - ($('.site-nav').outerHeight() + is_admin)
        }, 750);
    });

    var google_map_length = $('#visit-map').length;
    var map = '';

    function new_map($el){
        var $markers = $el.find('.marker');
        var args = {
            zoom : 16,
            center : new google.maps.LatLng(0, 0),
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: true,
            draggable: true,
            streetViewControl: false,
            mapTypeControlOptions: {
                 mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'tehgrayz']
            }
        };        
                
        map = new google.maps.Map( $el[0], args);
        map.markers = [];

        $markers.each(function(){            
            add_marker($(this), map);            
        });

        var stylez = [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e3df"
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#bdbdbd"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#b5c890"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#aad2d2"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            }
          ];

        var mapType = new google.maps.StyledMapType(stylez, { name:"Grayscale" });
        map.mapTypes.set('tehgrayz', mapType);
        map.setMapTypeId('tehgrayz');

        center_map(map); 
        return map;
    }

    function add_marker( $marker, map ) {
        var latlng = new google.maps.LatLng($marker.attr('data-lat'), $marker.attr('data-lng'));

        var image = {
            url: window.location.href + '/wp-content/themes/wp-bluefly-base/assets/images/map-marker.png',
            // scaledSize: new google.maps.Size(25, 32),
            size: new google.maps.Size(35, 54),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(15, 54)
        }

        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            icon: image
        });

        map.markers.push(marker);

        if(!$marker.is(':empty')){
            var infowindow = new google.maps.InfoWindow({
                content: $marker.html()
            });

            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            });
        }
    }

    function center_map(map){
        var bounds = new google.maps.LatLngBounds();
            
	    $.each( map.markers, function( i, marker ){
		    var latlng = new google.maps.LatLng( marker.position.lat(), marker.position.lng() );
            bounds.extend( latlng );
        });
            
        if(map.markers.length == 1){
            map.setCenter(bounds.getCenter());
            map.setZoom(16);
        }else{
            map.fitBounds(bounds);
        }

    }

    if(google_map_length){
        $('.visit-map').each(function(){
            map = new_map($(this));
        });

        google.maps.event.addDomListener(window, 'resize', function() {
            center_map(map);
        });
    }

});