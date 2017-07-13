/*
  Author: Lumberjacks
  Template: Sawmill (HTML Template)
  Version: 1.0
  URL: http://themeforest.net/user/Lumberjacks/
*/


"use strict";

$(document).ready(function (){

  // backstretch
  $("header").backstretch("img/header-1.jpg");
  $(".download").backstretch("img/download.jpg");
  $(".quote-slider").backstretch("img/quote-2.jpg");

  // Tweetie
  $('.lj-twitter').twittie({
    username: 'lumberjacksnews',
    count: 2,
    dateFormat: '%d %b %Y',
    hideReplies: true,
    template: '<p>{{tweet}}</p><span>{{date}}</span>',
    apiPath: 'twitter/api/tweet.php'
  });

  // E-mail validation via regular expression
  function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
  };

  // Contact form functions
  $("#contact-form").on('submit',function (event) {
      
    event.preventDefault();
    event.stopImmediatePropagation();
    
    var info = $('#contact-form .message');
    var name = $("input#contact-name");
    var email = $("input#contact-email");
    var phone = $("input#contact-phone");
    var company = $("input#contact-company");
    var message = $("textarea#contact-message");

    if (name.val() == "" || email.val() == "" || message.val() == "") {
      info.stop(true).html('<span class=\"error\"><i class=\"ion-ios-close-outline\"></i>Please fill in required fields!</span>');
      $("#contact-form").find("input[type=text],textarea").filter(function(){
        if($(this).val() == ""){
           event.preventDefault();
           return true;
        }
      }).first().focus();
    }
    else if (!isValidEmailAddress( email.val() )) {
      info.stop(true).html('<span class=\"error\"><i class=\"ion-ios-close-outline\"></i>Email address is not valid!</span>');
      email.focus();
    }
    else {
      $.ajax({
        type: "POST",
        url: "./php/send-contact.php",
        data: {contact_name:name.val(),
               contact_email:email.val(),
               contact_phone:phone.val(),
               contact_company:company.val(),
               contact_message:message.val()},
        success: function () {
          info.addClass('success').html('<span class=\"success\"><i class=\"ion-ios-checkmark-outline\"></i>Thank you for your message!</span>');
          name.val('');
          email.val('');
          phone.val('');
          company.val('');
          message.val('');
        }
      });
    }
  });

  // Trial form functions
  $("#trial-form").on('submit',function (event) {
      
    event.preventDefault();
    event.stopImmediatePropagation();
    
    var info = $('#trial .message');
    var name = $("input#trial-name");
    var email = $("input#trial-email");

    if (name.val() == "" || email.val() == "") {
      info.stop(true).html('<span class=\"error\"><i class=\"ion-ios-close-outline\"></i>Please fill in all fields!</span>');
      $("#trial-form").find("input[type=text],textarea").filter(function(){
        if($(this).val() == ""){
           event.preventDefault();
           return true;
        }
      }).first().focus();
    }
    else if (!isValidEmailAddress( email.val() )) {
      info.stop(true).html('<span class=\"error\"><i class=\"ion-ios-close-outline\"></i>Email address is not valid!</span>');
      email.focus();
    }
    else {
      $.ajax({
        type: "POST",
        url: "./php/send-trial.php",
        data: {trial_name:name.val(),
               trial_email:email.val()},
        success: function () {
          info.addClass('success').html('<span class=\"success\"><i class=\"ion-ios-checkmark-outline\"></i>Successfully signed for trial!</span>');
          name.val('');
          email.val('');
        }
      });
    }
  });

  // Subscribe form functions
  $("#subscribe-form").on('submit',function (event) {
      
    event.preventDefault();
    event.stopImmediatePropagation();
    
    var info = $('#subscribe-form .message');
    var name = $("input#subscribe-name");
    var email = $("input#subscribe-email");

    if (name.val() == "" || email.val() == "") {
      info.stop(true).html('<span class=\"error\"><i class=\"ion-ios-close-outline\"></i>Fill all fields!</span>');
      $("#subscribe-form").find("input[type=text],textarea").filter(function(){
        if($(this).val() == ""){
           event.preventDefault();
           return true;
        }
      }).first().focus();
    }
    else if (!isValidEmailAddress( email.val() )) {
      info.stop(true).html('<span class=\"error\"><i class=\"ion-ios-close-outline\"></i>Invalid email!</span>');
      email.focus();
    }
    else {
      $.ajax({
        type: "POST",
        url: "./php/send-subscribe.php",
        data: {subscribe_name:name.val(),
               subscribe_email:email.val()},
        success: function () {
          info.addClass('success').html('<span class=\"success\"><i class=\"ion-ios-checkmark-outline\"></i>Subscribed!</span>');
          name.val('');
          email.val('');
        }
      });
    }
  });

  // Setting default easing
  jQuery.easing.def = "easeInOutExpo";

  // Language menu
  $(document).on('click', function(){
    $('.language-options').removeClass('active');
  });

  $('a.language').on('click', function(event){
    event.stopPropagation();
    $('.language-options').toggleClass('active');
  });

  // Mobile menu
  $('.menu > a').on('click', function(){
    $('.menu > ul').toggleClass('active');
  });

  // Slick initializer function
  $(".clients-carousel").slick({
    autoplay: false,
    autoplaySpeed: 5000,
    infinite: false,
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  });

  $(".quotes").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    easing: 'easeInOutExpo',
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  // Floating menu
  $(window).on('scroll', function() {
    var height = $(this).scrollTop();
    var topbar = $('.top');

    if(height > 0) {
      topbar.addClass('floating');
      $('.language-options').removeClass('active');
    }
    else {
      topbar.removeClass('floating');
    }
  });

  // Scroll To # Links
  $('a.scroll[href^="#"]').on('click', function(e) {
    e.preventDefault();

    var target = this.hash;
    target = target.replace('#', '');
    var $target = $('#' + target);
    var offset = 0;
    if(target != 'header') offset = 79;

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top-offset
    }, 1000, function() {
      window.location.hash = '#' + target;
    });
  });

});

// Preloader
// Change delay and fadeOut speed (in miliseconds)
$(window).load(function() {
  $(".preloader").delay(250).fadeOut(500);
});
