// PARAGRAPH TYPING EFFECT
var i = 0;
var txt = "Hello, I'am Artist Name! I love people love to feel beautiful, which is the reason I've spent the last 12 years engulfed in doing makeup.";
var speed = 30;
var cursorVisible = true;

function typeWriter() {
    if (i <= txt.length) {
        var element = document.querySelector(".artist_info_para_customs");
        element.innerHTML = txt.substring(0, i) + (cursorVisible ? "|" : "");
        i++;
        cursorVisible = !cursorVisible;
        setTimeout(typeWriter, speed);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(typeWriter, 700);
});
// PARAGRAPH TYPING EFFECT



// ADD OR REMOVE ACTIVE CLASS ON NAV BAR
document.addEventListener("DOMContentLoaded", function() {
    var menuItems = document.querySelectorAll('.nav_bar_item_lists_customs li.nav-item a');

    menuItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            menuItems.forEach(function(menuItem) {
                menuItem.classList.remove('active');
            });
            event.target.classList.add('active');
        });
    });
});
// ADD OR REMOVE ACTIVE CLASS ON NAV BAR



// ADDING OR REMOVING CLASS ON NAV BAR SCROLLING
document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.querySelector('nav.navbar.navbar-expand-lg.sticky-top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled_customs');
        } else {
            navbar.classList.remove('scrolled_customs');
        }
    });
});
// ADDING OR REMOVING CLASS ON NAV BAR SCROLLING



// CAROUSEL 
function setupCustomCarousels() {
    const pricingCarousels = document.querySelectorAll('.our_pricing_listings');
    const testimonialsCarousels = document.querySelectorAll('.carousel_testimonials_customs');
    const blogCarousels = document.querySelectorAll('.blog_box_customs_main_div');
    const servicesCarousels = document.querySelectorAll('.our_services_box_custom_row');

    pricingCarousels.forEach(customCarousel => {
        if (typeof $(customCarousel).owlCarousel === 'function') {
            $(customCarousel).owlCarousel({
                items: 2,
                loop: true,
                dots: true,
                autoplay: true,
                autoplayTimeout: 4000,
                autoHeight: true,
                nav: false,
                margin: 20,
                responsive: {
                  0: {
                    items: 1 
                  },
                  800: {
                    items: 1
                  },
                  900: {
                    items: 2
                  }
                }
            });

            $(customCarousel).on('mouseenter', () => {
                $(customCarousel).trigger('stop.owl.autoplay');
            });

            $(customCarousel).on('mouseleave', () => {
                $(customCarousel).trigger('play.owl.autoplay');
            });
        }
    });

    testimonialsCarousels.forEach(customCarousel => {
        if (typeof $(customCarousel).owlCarousel === 'function') {
            $(customCarousel).owlCarousel({
                items: 1,
                loop: true,
                dots: true,
                autoplay: true,
                autoplayTimeout: 4000,
                autoHeight: true,
                nav: false,
                margin: 10,
                responsive: {
                  0: {
                    items: 1 
                  },
                  800: {
                    items: 1
                  },
                  900: {
                    items: 1
                  }
                }
            });

            $(customCarousel).on('mouseenter', () => {
                $(customCarousel).trigger('stop.owl.autoplay');
            });

            $(customCarousel).on('mouseleave', () => {
                $(customCarousel).trigger('play.owl.autoplay');
            });
        }
    });

    blogCarousels.forEach(customCarousel => {
        if (typeof $(customCarousel).owlCarousel === 'function') {
            $(customCarousel).owlCarousel({
                items: 3,
                loop: true,
                dots: true,
                autoplay: true,
                autoplayTimeout: 4000,
                autoHeight: true,
                nav: false,
                margin: 10,
                responsive: {
                  0: {
                    items: 1 
                  },
                  800: {
                    items: 2
                  },
                  900: {
                    items: 3
                  }
                }
            });

            $(customCarousel).on('mouseenter', () => {
                $(customCarousel).trigger('stop.owl.autoplay');
            });

            $(customCarousel).on('mouseleave', () => {
                $(customCarousel).trigger('play.owl.autoplay');
            });
        }
    });

    servicesCarousels.forEach(customCarousel => {
        if (typeof $(customCarousel).owlCarousel === 'function') {
            $(customCarousel).owlCarousel({
                items: 3,
                loop: true,
                dots: true,
                autoplay: true,
                autoplayTimeout: 4000,
                autoHeight: true,
                nav: false,
                margin: 20,
                responsive: {
                  0: {
                    items: 1
                  },
                  800: {
                    items: 3
                  },
                  900: {
                    items: 3
                  }
                }
            });

            $(customCarousel).on('mouseenter', () => {
                $(customCarousel).trigger('stop.owl.autoplay');
            });

            $(customCarousel).on('mouseleave', () => {
                $(customCarousel).trigger('play.owl.autoplay');
            });
        }
    });
}

window.onload = setupCustomCarousels;
// CAROUSEL 




// AFTER BEFORE IMAGE JS

// AFTER BEFORE IMAGE JS






