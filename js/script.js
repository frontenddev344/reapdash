
    $(".mobile_btn").click(function(){
  $(".links_bar").toggleClass("sidebar");
});





//  droupdown

$(document).ready(function() {
  $(".links_bar li").click(function() {
    $(".dropdown").toggle();
  });
});





    $('.banner-slide').owlCarousel({
    loop: true,
    margin: 10,
    slideTransition: 'linear', // Smooth linear transition
    items: 1,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 2000, // Time between slides
    autoplaySpeed: 16000, // Smooth autoplay speed
    nav: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        }
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
    autoplayTimeout: 5000,
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
            items: 1.5
        },
        1200: {
          items: 2.5
      }
    }
});



$('.web-page-slider').owlCarousel({
    loop:true,
    margin:0,
    autoplay: false,
    autoplaySpeed: 2000,
    autoplayTimeout: 5000,
    dots: true,
    items: 4,
    nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
            
        },
        1000:{
            items:3,
        },
        1200:{
          items:4,
      }
    }
})


$(document).ready(function() {
    var $carousel = $('.product-slide');
    var totalItems = $carousel.find('.item').length;
    var $progressBarFill = $('.progress-bar-fill');

    $carousel.owlCarousel({
        loop: true,
        items: 6,            // Show 6 items
        autoplay: true,
        autoplaySpeed: 2000,
        autoplayTimeout: 5000,
        margin: 12,          // Space between slides
        startPosition: 0,    // Start from the first slide
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1.2,    // 1 item on mobile
            },
            600: {
                items: 2.2,    // 2 items on tablets
            },
            1000: {
                items: 3.2,  // Show 5.2 items on desktop
            },
            1600: {
              items: 4.2,  // Show 5.2 items on desktop
          },
          1800: {
            items: 5.3,  // Show 5.2 items on desktop
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
  



var sliderSelector = ".swiper-container",
  options = {
    init: false,
    loop: true,
    speed: 800,
    slidesPerView: 4,
    centeredSlides: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 45,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
      scale: 0.8
    },
    grabCursor: true,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>'; // Create custom bullet for pagination
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      1180: {
        slidesPerView: 2
      },
      1023: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      1500: {
        coverflowEffect: {
            rotate: 35,
          }
      }
    },
    on: {
      imagesReady: function () {
        this.el.classList.remove("loading");
      },
      slideChange: function () {
        // Update counter display
        const currentIndex = this.realIndex + 1; // realIndex is 0-based
        const totalSlides = this.slides.length - 2; // Exclude duplicated slides in loop mode
        document.querySelector('.swiper-counter').textContent = `${currentIndex} / ${totalSlides}`;
      }
    }
  };

var mySwiper = new Swiper(sliderSelector, options);
mySwiper.init();

// Initialize counter on first load
const totalSlides = mySwiper.slides.length - 2; // Exclude duplicated slides in loop mode
document.querySelector('.swiper-counter').textContent = `1 / ${totalSlides}`; // Show initial counter
