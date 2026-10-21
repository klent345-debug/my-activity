document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('menu-toggle');
    const menu = document.getElementById('navbar-menu');
    const slider = document.getElementById('slider');
    const locationButton = document.getElementById('location-button');
    const locationMap = document.getElementById('location-map');

    if (toggleButton && menu) {
        toggleButton.addEventListener('click', function () {
            menu.classList.toggle('in');
        });
    }

    if (locationButton && locationMap) {
        locationButton.addEventListener('click', function (event) {
            event.preventDefault();
            const isVisible = locationMap.classList.toggle('is-visible');
            locationMap.setAttribute('aria-hidden', String(!isVisible));
            locationButton.setAttribute('aria-expanded', String(isVisible));

            if (isVisible) {
                locationMap.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    if (window.jQuery && $.fn.typed) {
        $('.typing-text').typed({
            strings: ['I love codings and to share !!.', 'That is a joke only.'],
            typeSpeed: 90,
            backSpeed: 50,
            startDelay: 400,
            backDelay: 1000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }

    if (window.jQuery && $.fn.ripples && slider) {
        $(slider).ripples({
            resolution: 256,
            dropRadius: 20,
            perturbance: 0.03,
            interactive: true,
            crossOrigin: ''
        });
    }
    
    if (window.jQuery) {
        $(window).scroll(function(){
            var top =$(window).scrollTop();
            if(top>=60){
                $("nav").addClass('secondary');
            }
            else
                if($("nav").hasClass('secondary')){
                    $("nav").removeClass('secondary');
                }
        });
    }
        if ($.fn.owlCarousel) {
            $("#team-members").owlCarousel({
            items:3,
            autoplay:true,
            smartSpeed:700,
            loop:true,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                768:{
                    items:3
                }
            }
            });
        }
});
