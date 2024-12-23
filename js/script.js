
$(".mobile_btn").click(function(){
  $(".links_bar").toggleClass("sidebar");
});


$(".cross-bar").click(function(){
  $(".links_bar").removeClass("sidebar");
});


//  droupdown

$(document).ready(function() {
  $(".links_bar li").click(function() {
    $(".dropdown").toggle();
  });
});





$(document).ready(function() {
  if ($('.banner-slide').length) { // Check if .banner-slide exists
    $('.banner-slide').owlCarousel({
      loop: true,
      margin: 10,
      slideTransition: 'linear', // Smooth linear transition
      items: 1,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 2000, // Time between slides
      autoplaySpeed: 8000, // Smooth autoplay speed
      nav: false,
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        1000: { items: 1 }
      }
    });
  }
});


$('.banner-slide').on('changed.owl.carousel', function(event) {
    // Pause autoplay for 20 seconds (20,000 ms) after each slide
    $('.banner-slide').trigger('stop.owl.autoplay'); // Stop autoplay
    setTimeout(function() {
        $('.banner-slide').trigger('play.owl.autoplay', [2000]); // Resume autoplay after pause
    }, 20000); // 20-second pause
});

// brand-slider

$('.brand-slider').owlCarousel({
    loop: true,
    margin: 12,
    autoplay: true,
    items: 2.5, // Show 2.5 slides at a time
    responsiveClass: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 8000,
    dots: false,
    nav: true,
    responsive: {
        0: {
            items: 1.2,
        },
        600: {
            items: 1.5,
        },
        1000: {
            items: 2
        },
        1400: {
          items: 2.3
      },
        1600: {
          items: 2.5
      }
    }
});




//  web-page-slider

$(document).ready(function() {
  $('.web-page-slider').owlCarousel({
      loop: true,
      margin: 0,
      autoplay: true,
      autoplaySpeed: 1000,
      dots: false,
      items: 4,
      nav: false,
      responsive: {
          0: {
              items: 1,
          },
          600: {
              items: 2,
          },
          1000: {
              items: 3,
          },
          1200: {
              items: 4,
          }
      }
  }).on('initialized.owl.carousel changed.owl.carousel', function(event) {
      // Use setTimeout to ensure DOM is ready
      setTimeout(function() {
          // Get all active items
          var activeItems = $('.web-page-slider .owl-item.active');

          // Debugging: Check active items
          console.log("Active Items Count: ", activeItems.length);

          // Reset padding for all active items
          activeItems.css({
              'padding-left': '0',
              'padding-right': '0'
          });

          // Add padding to the first and last active items
          if (activeItems.length > 0) {
              activeItems.first().css('padding-left', '20px');  // Add left padding for the first active item
              activeItems.last().css('padding-right', '20px');  // Add right padding for the last active item
          }
      }, 50); // Delay to ensure DOM updates
  });
});





$(document).ready(function() {
  var $carousel = $('.product-slide');
  var totalItems = $carousel.find('.item').length;
  var $progressBarFill = $('.progress-bar-fill');

  $carousel.owlCarousel({
      loop: true,
      items: 6,            // Show 6 items
      autoplay: false,
      autoplaySpeed: 2000,
      autoplayTimeout: 5000,
      margin: 0,          // Space between slides
      startPosition: 0,    // Start from the first slide
      nav: true,
      dots: false,
      responsive: {
          0: {
              items: 1.2,    // 1 item on mobile
          },
          600: {
              items: 2, 
              margin:10,   // 2 items on tablets
          },
          1000: {
              items: 3.2,  // Show 3.2 items on desktop
          },
          1400: {
            items: 3.2,  // Show 3.2 items on desktop
        },
          1600: {
            items: 4.2,  // Show 4.2 items on large desktop
        },
        1800: {
          items: 5.2,  // Show 5.2 items on extra large desktop
      }
      },
      onInitialized: function(event) {
          updateProgressBar(event);
          updateMiddleSlide(event);   // Call custom function to add middle slide class
      },
      onTranslated: function(event) {
          updateProgressBar(event);
          updateMiddleSlide(event);   // Call custom function to add middle slide class
      }
  });

  // Update Progress Bar
  function updateProgressBar(event) {
      var index = event.item.index - event.relatedTarget._clones.length / 2; // Adjust for clones
      if (index >= totalItems) {
          index = 0;
      }
      var progressPercent = ((index + 1) / totalItems) * 100; // Calculate current progress
      $progressBarFill.css('width', progressPercent + '%');
  }

  // Add 'middle-slide' class to the middle slide
  function updateMiddleSlide(event) {
      var visibleItems = event.page.size;  // Number of currently visible items
      var middleIndex = Math.floor(visibleItems / 2);  // Calculate middle item index
      
      // Remove the 'middle-slide' class from all slides
      $carousel.find('.owl-item').removeClass('middle-slide');

      // Add 'middle-slide' class to the middle visible item
      $carousel.find('.owl-item.active').eq(middleIndex).addClass('middle-slide');
  }
});



// galery

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: false,
    focusOnSelect: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  



  const sliderSelector = ".swiper-container";

  if (document.querySelector(sliderSelector)) {
    const options = {
      init: false,
      loop: true,
      slidesPerView: 4,
      speed: 800,
      centeredSlides: true,
      effect: "coverflow",
      coverflowEffect: {
        rotate: 43,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        scale: 0.4
      },
      grabCursor: true,
      parallax: true,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        1500: { slidesPerView: 3, spaceBetween: 30 },
        1180: { slidesPerView: 2, spaceBetween: 20 },
        1023: { slidesPerView: 2, spaceBetween: 15 },
        575: { slidesPerView: 1, spaceBetween: 10 }
      },
      on: {
        imagesReady: function () {
          this.el.classList.remove("loading");
        },
        init: function () {
          // Set initial slide count display when Swiper initializes
          const totalSlides = this.slides.length - 2; // Adjust for loop duplicates
          document.querySelector('.swiper-counter').textContent = `1 / ${totalSlides}`;
        },
        slideChange: function () {
          // Update slide count display on each slide change
          const currentIndex = this.realIndex + 1;
          const totalSlides = this.slides.length - 2;
          document.querySelector('.swiper-counter').textContent = `${currentIndex} / ${totalSlides}`;
        }
      }
    };
  
    const mySwiper = new Swiper(sliderSelector, options);
    mySwiper.init();
  }
  


$(document).ready(function() {
  $(".mobile_menu-toggle").on("click", function() {
    $(this).parent().parent(".fixed-mobile-menu").toggleClass("active-menu");
  });
});


