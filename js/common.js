$(window).on('load', function () {
  "use strict";

  // Preloader
  $('.preloader').fadeOut(500);
  $('.header-image-container').addClass('slideInDown');
  // Preloader


  // waypoints.js
  function onScrollInit(items, trigger) {
    items.each(function () {
      var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
      osElement.css({
        '-webkit-animation-delay': osAnimationDelay,
        '-moz-animation-delay': osAnimationDelay,
        'animation-delay': osAnimationDelay,
        'opacity': 0
      });
      var osTrigger = (trigger) ? trigger : osElement;
      osTrigger.waypoint(function () {
        osElement.addClass('animated').addClass(osAnimationClass);
      }, {

        triggerOnce: false,

        opacity: 1,
        offset: '80%'
      });
    });
  }
  onScrollInit($('.os-animation'));
  onScrollInit($('.staggered-animation'), $('.staggered-animation-skill'));
  // waypoints.js
});

// Main js
$(document).ready(function () {
  "use strict";

  // Remove paralax in IE
  if (navigator.userAgent.match(/Trident\/7\./)) {
    $('body').on("mousewheel", function () {
      // remove default behavior
      event.preventDefault();

      //scroll without smoothing
      var wheelDelta = event.wheelDelta;
      var currentScrollPosition = window.pageYOffset;
      window.scrollTo(0, currentScrollPosition - wheelDelta);
    });
  }
  // Remove paralax in IE

  // Smooth scroll
  $('a[href*="#"]:not([href="#"])').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
  // Smooth scroll

  // ScrollSpy offset
  $('.navbar').scrollspy({
    offest: 70
  });
  // ScrollSpy offset

  // Sticky navbar
  $(document).on('ready', function () {
    function sticky_relocate() {
      var window_top = $(window).scrollTop();
      var div_top = $('.menu-sticky').offset().top;
      if (window_top > div_top) {
        $('.navbar').addClass('stick');
      } else {
        $('.navbar').removeClass('stick');
      }
    }
    $(function () {
      $(window).on('scroll', sticky_relocate);
      sticky_relocate();
    });
  });
  // Sticky navbar

  // Navbar toggle
  $(".navbar-toggle").on("click", function () {
    $('.navbar-toggle').toggleClass("active");
  });
  $('.logo-navbar a, .nav a').on('click', function () {
    if ($('.navbar-toggle').hasClass('active')) {
      $('.navbar-toggle').trigger("click");
    }
  });
  // Navbar toggle


  // Directions
  $(".directions-item-container").on('click', function () {
    $(".directions-item-container").removeClass("active");


  });
  $(function () {
    $(".directions-box").addClass('fadeInRightBox');
    $(".directions-item-container").on('click', function () {
      var selectedClass = $(this).attr("data-rel");
      $(".directions-box").not("." + selectedClass).removeClass('active');
      $("." + selectedClass).addClass('active');


    });
  });
  // Directions

  // Magnific video
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: true,
  });
  // Magnific video

  // Team Slider
  $(".team-slider").slick({
    dots: true,
    fade: false,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipe: true,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 990,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    }, ]
  });
  // Team Slider

  // Questions accordion
  $(".questions-container-accordion-set a").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".questions-container-accordion-set a i")
        .removeClass("fa-chevron-circle-up")
        .addClass("fa-chevron-circle-down");
    } else {
      $(".questions-container-accordion-set a i")
        .removeClass("fa-chevron-circle-up")
        .addClass("fa-chevron-circle-down");
      $(this)
        .find("i")
        .removeClass("fa-chevron-circle-down")
        .addClass("fa-chevron-circle-up");
      $(".questions-container-accordion-set a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });
  // Questions accordion

  // Testimonials Slider
  $(".testimonials-slider").slick({
    dots: true,
    fade: false,
    infinite: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    swipe: true,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 990,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    }, ]
  });
  // Testimonials Slider

  // Map
  var map;

  function initialize() {
    var myLatLng = {
      lat: 48.206482,
      lng: 16.383666
    };
    var roadAtlasStyles = [];
    var mapOptions = {
      zoom: 14,
      scrollwheel: false,
      center: myLatLng,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'usroadatlas']
      }
    };
    var marker = new google.maps.Marker({
      map: map,
      position: myLatLng,
      title: 'Kyiv'
    });
    map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
    var styledMapOptions = {};
    var usRoadMapType = new google.maps.StyledMapType(
      roadAtlasStyles, styledMapOptions);
    map.mapTypes.set('usroadatlas', usRoadMapType);
    map.setMapTypeId('usroadatlas');
  }
  google.maps.event.addDomListener(window, 'load', initialize);
  // Map

  // Footer paralax
  siteFooter();
  $(window).on("resize", function () {
    siteFooter();
  });

  function siteFooter() {
    var siteContent = $('.site-content');
    var siteContentHeight = siteContent.height();
    var siteContentWidth = siteContent.width();

    var siteFooter = $('.footer');
    var siteFooterHeight = siteFooter.height();
    var siteFooterWidth = siteFooter.width();

    siteContent.css({
      "margin-bottom": siteFooterHeight
    });
  }
  // Footer paralax

});