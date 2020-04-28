(function($){
  'use strict'; 
  // Animate loader off screen
  $(window).load(function(){
    $('.spinner-cover').fadeOut('slow',function(){$(this).remove();});
  });

  /*matchHeight*/
  $('.matchHeight').matchHeight();
  
  /*tooltip*/
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  function smartMenu() {
    var lastScrollTop = 0;
    $(window).on('scroll', function() {
      var wScroll = $(this).scrollTop();
      var contentHeight = $('#wrapper').height();

      if ( contentHeight > 500  ) {
        if ( wScroll > $('#header').height() + 600 ) {
          if ( wScroll < lastScrollTop ) {
            $('#main-menu').removeClass('slide-up').addClass('slide-down');          
          } else {
            $('#main-menu').removeClass('slide-down').addClass('slide-up');          
          }
        }
        if ( wScroll > 0 ) {
          if ( wScroll < lastScrollTop ) {          
            $('.sticky-header').removeClass('slide-up').addClass('slide-down');
          } else {           
            $('.sticky-header').removeClass('slide-down').addClass('slide-up');
          }
        } else {
          $('.sticky-header').removeClass('slide-down');
        }
        if ( wScroll > $('#header').height() + 600 ) {
          $('#main-menu').addClass('fixed');
        } else {
          $('#main-menu').removeClass('fixed');
          $('#main-menu').removeClass('slide-down');
        }
        lastScrollTop = wScroll;
      }
    });    
  }

  function darkMode() {
    $(".embe_dark_mode_toggle").on('click', function(event) {
        if ($("body").hasClass("embe-dark-mode")) {
            $("body").removeClass("embe-dark-mode");
            $(".alith_epk_title").removeClass("alith_epk_title_dark");
            $(".alith_block_heading").removeClass("alith_epk_title_dark");
        } else {
            $("body").addClass("embe-dark-mode");          
            $(".alith_epk_title").addClass("alith_epk_title_dark");          
            $(".alith_block_heading").addClass("alith_epk_title_dark");
        }
        $(".has-dark-mode").removeAttr("style");
    });
  }

  function stickMenu() {
    $(".stick").scrollToFixed({
          preFixed: function() {
              $(".menu-top").animate({
                  height: 83
              }, 400, function() {
                  $(this).css("overflow", "visible")
              })
          },
          postFixed: function() {
              $(".menu-top").css("overflow", "hidden").animate({
                  height: 0
              }, 400)
          }
      });
  }
  function mobileMenu() {
    $('.menu-toggle-icon').on('click', function(event) {
      $(this).toggleClass('act');
        if($(this).hasClass('act')) {
          $('.mobi-menu').addClass('act');
        }
        else {
          $('.mobi-menu').removeClass('act');
        }
    });

    $('.mobi-menu .menu-item-has-children').append('<span class="sub-menu-toggle"></span>');

    $('.sub-menu-toggle').on('click', function(event) {
      $(this).parent('li').toggleClass('open-submenu');
    });
  }


  function backToTop() {
      var o = $("body").width();
       $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
          $(".back-to-top").fadeIn();
          $(".social-icon-left").fadeIn();
        } else {
          $(".back-to-top").fadeOut();
          $(".social-icon-left").fadeOut();
        }       
      }), $(".back-to-top").on('click', function() {
          return $("html, body").animate({
              scrollTop: 0
          }, 700), !1
      })
      if (o > 450) {
        $(".back-to-top").addClass('animation-shadow-pulse');
      }
  }

  function searchForm() {
    $(".open-search-btn").on('click',function() {      
      $('.search-popup').fadeIn(500);
      $('.search-popup').addClass('On');
      $('.search_field' ).focus();     
    });    
    $(".close-search-btn").on('click',function() {
      $('.search-popup').fadeOut(500);
      $('.search-popup').removeClass('On');      
    }); 
  }

  function scrollBar() {
    $(window).scroll(function() {
        // calculate the percentage the user has scrolled down the page
        var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
        $('.top-scroll-bar').css('width', scrollPercent +"%"  );

    });
  }

  function theiaSticky() {
      $('.sticky-sidebar').theiaStickySidebar({
          additionalMarginTop: 70
      });
    };

  function owlCarausel() {
    $(document).ready(function(){
      $('.slideshow_face').owlCarousel({
        items:1,
        dots: false,
        nav: true,
        margin:0,
        stagePadding:0,    
        loop: true,
        autoplay:false,
        autoHeight:true,
        navText : ["<i class='ti-arrow-left'></i>","<i class='ti-arrow-right'></i>"]
      });
      $('.slideshow_small').owlCarousel({
        items:1,
        dots: true,
        nav: false,
        margin:0,
        stagePadding:0,    
        loop: true,
        autoplay:true,
        autoHeight:true,
      });
      $('.sticky-posts').owlCarousel({
        items:1,
        dots: false,
        nav: false,
        margin:0,
        stagePadding:0,    
        loop: true,
        autoplay:true,
      });
      $('.slider-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        navText : ["<i class='ti-arrow-left'></i>","<i class='ti-arrow-right'></i>"],
        autoplay:false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            912: {
                items: 4
            },
        },
        autoHeight:true
      });
      $('.slider-carousel-big').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        navText : ["<i class='ti-arrow-left'></i>","<i class='ti-arrow-right'></i>"],
        autoplay:false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            912: {
                items: 3
            },
        },
        autoHeight:true
      });
      $('.slider-carousel-boxed').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        autoplay:false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            912: {
                items: 3
            },
        },
        autoHeight:true
      });
      $('.slider-carousel-small').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        autoplay:true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            912: {
                items: 4
            },
        },
        autoHeight:true
      });
      $('.related-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
        },
        autoHeight:true
      });

      $('.carausel_slider_2').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        autoplay:true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
        },
        autoHeight:true
      });
      $('.carausel_slider_3').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        autoplay:true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            912: {
                items: 3
            },
        },
        autoHeight:true
      });
      $('.carausel_slider_4').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        autoplay:true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            912: {
                items: 4
            },
        },
        autoHeight:true
      });
    });
  }

  function ShowComment() {
    $('.show_comments').on('click', function(e) {
      jQuery('.comments_wrap').fadeIn();
      jQuery(this).hide();
      e.preventDefault();
      return false;
    });
  };

  var OffCanvas = function() {
    $(".embe-mark").hide();

    $('.off-canvas-toggle').on('click', function(event){   
      $(this).toggleClass('open');   
      $("body").toggleClass("has-offcanvas");
      $(".embe-mark").toggle();
      $('html, body').animate({
        scrollTop: $('html').offset().top
      }, 500, 'swing');     
      return false;
    });

    $('.embe-mark').on('click', function(event) {
      $(this).hide();
      $("body").removeClass("has-offcanvas");
      $('.off-canvas-toggle').removeClass("open")      
      return false;
    });
  };

  var LogoTextFontSize = function(){
    var logoText = $(".header_logo .logo a");
    var numCharacter = logoText.text().length;

    if ((numCharacter >= 1) && (numCharacter < 5)) {
        logoText.css("font-size", "50px");
    }
    else if ((numCharacter >= 5) && (numCharacter < 10)) {
        logoText.css("font-size", "30px");
    }
    else if ((numCharacter >= 10) && (numCharacter < 20)) {
        logoText.css("font-size", "23px");
    }
    else if ((numCharacter >= 20) && (numCharacter < 30)) {
        logoText.css("font-size", "20px");
    }
    else if ((numCharacter >= 30) && (numCharacter < 40)) {
        logoText.css("font-size", "15px");
    }
    else {
        logoText.css("font-size", "12px");
    }
  };

  $(window).load(function() {
    LogoTextFontSize();    
    mobileMenu();
    smartMenu();
    stickMenu();
    searchForm();
    owlCarausel();
    scrollBar();
    theiaSticky();
    ShowComment();
    OffCanvas();
    backToTop();
    darkMode();
  });

})(jQuery);