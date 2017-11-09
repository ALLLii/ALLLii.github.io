(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

// When the window has finished loading create our google map below
 google.maps.event.addDomListener(window, ‘load’, init);
 
 function init() {
 // Basic options for a simple Google Map
 // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
 var mapOptions = {
 // How zoomed in you want the map to start at (always required)
 zoom: 11,
// The latitude and longitude to center the map (always required)
 center: new google.maps.LatLng(-6.402868, 106.833692), // New York
// How you would like to style the map. 
 // This is where you would paste any style found on Snazzy Maps.
 styles: dark
 };
// Get the HTML DOM element that will contain your map 
 // We are using a div with id=”map” seen below in the <body>
 var mapElement = document.getElementById(‘map’);
// Create the Google Map using our element and options defined above
 var map = new google.maps.Map(mapElement, mapOptions);
// Let’s also add a marker while we’re at it
 var marker = new google.maps.Marker({
 position: new google.maps.LatLng(-6.402868, 106.833692),
 map: map,
 title: ‘Snazzy!’
 });
 }