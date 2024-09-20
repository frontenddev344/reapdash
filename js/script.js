
    $(".mobile_btn").click(function(){
  $(".links_bar").toggleClass("sidebar");
});





//  droupdown

    $(document).ready(function(){
  $(".links_bar li").click(function(){
    $(".droupdown").toggle();
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
    // autoplay: true,
    items: 2.5, // Show 2.5 slides at a time
    responsiveClass: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 5000,
    dots: false,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2.5,
        },
        1000: {
            items: 2.5
        }
    }
});



$('.web-page-slider').owlCarousel({
    loop:true,
    margin:0,
    // autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 5000,
    dots: false,
    items: 4,
    nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
            
        },
        1000:{
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
        // autoplay: true,
        // autoplaySpeed: 2000,
        // autoplayTimeout: 5000,
        margin: 12,          // Space between slides
        startPosition: 0,    // Start from the first slide
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,    // 1 item on mobile
            },
            600: {
                items: 2,    // 2 items on tablets
            },
            1000: {
                items: 5.2,  // Show 5.2 items on desktop
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
    centerMode:false,
    focusOnSelect: true,
    arrows: true
  });