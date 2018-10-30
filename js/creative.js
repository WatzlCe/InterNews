/// <reference path="../typings/globals/jquery/index.d.ts"/>
//@ts-check

( function ( $ ) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $( 'a[href*="#"]:not([href="#"])' ).click( function () {
    if ( location.pathname.replace( /^\//, '' ) == this.pathname.replace( /^\//, '' ) && location.hostname == this.hostname ) {
      var target = $( this.hash );
      target = target.length ? target : $( '[name=' + this.hash.slice( 1 ) + ']' );
      if ( target.length ) {
        $( 'html, body' ).animate( {
          scrollTop: ( target.offset().top - 48 )
        }, 1000, "easeInOutExpo" );
        return false;
      }
    }
  } );

  // Activate scrollspy to add active class to navbar items on scroll
  $( 'body' ).scrollspy( {
    target: '#mainNav',
    offset: 48
  } );

  // Closes responsive menu when a link is clicked
  $( '.navbar-collapse>ul>li>a' ).click( function () {
    $( '.navbar-collapse' ).collapse( 'hide' );
  } );


  /** Collapse the navbar when page is scrolled */
  $( window ).scroll( function () {
    if ( $( "#mainNav" ).offset().top < 700 ) {
      $( "#mainNav" ).removeClass( "navbar-shrink" );
    } else {
      $( "#mainNav" ).addClass( "navbar-shrink" );
    }

    updateLogo();
  } );

  /**Update the logo when page is loaded */
  updateLogo();

  /**Updates the logo dependend on with or offset */
  function updateLogo() {
    if ( $( window ).width() < 990 || $( "#mainNav" ).offset().top >= 700 ) {
      $( ".logo" ).attr( "src", "img/InterNews-Logo.svg" );
    } else {
      $( ".logo" ).attr( "src", "img/InterNews-Logo-White.svg" );
    }

  }

  /**
   * Change the Logo based on window size
   */
  $( window ).resize( updateLogo );


  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal( '.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200 );
  sr.reveal( '.sr-button', {
    duration: 1000,
    delay: 200
  } );
  sr.reveal( '.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300 );

  // Magnific popup calls
  $( '.popup-gallery' ).magnificPopup( {
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [ 0, 1 ]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  } );

} )( jQuery ); // End of use strict