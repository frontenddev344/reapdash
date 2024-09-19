
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
    autoplay: true,
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
    autoplay: true,
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
        items: 5.2,
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1 // 1 item on mobile
            },
            600: {
                items: 2 // 2 items on tablet
            },
            1000: {
                items: 3 // 3 items on desktop
            }
        },
        onInitialized: updateProgressBar, // Initial Progress Bar state
        onTranslated: updateProgressBar  // Update Progress Bar when slide changes
    });

    function updateProgressBar(event) {
        var index = event.item.index - event.relatedTarget._clones.length / 2; // Adjust for clones
        if (index === totalItems) {
            index = 0;
        }
        var progressPercent = ((index + 1) / totalItems) * 100; // Percent of current slide
        $progressBarFill.css('width', progressPercent + '%');
    }
});