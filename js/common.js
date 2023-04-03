$(document).ready(function () {
    $('.trusted-slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 2500,
        cssEase: 'linear',
        pauseOnHover: false,
        pauseOnFocus: false,
        swipe: false,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        },
        ]
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 40) {
            $('header.header').addClass('header__shadow');
        } else {
            $('header.header').removeClass('header__shadow')
        }
    });

    // menu mobile
    if ($(window).width() < 992) {
        $('.submenu').click(function () {
            $(this).find('ul').slideToggle();
        });
    }


    $('.burger').click(function () {
        $(this).toggleClass('open');
        $('.mobilemenu-wrapper').toggleClass('open');
    });

    
    var aboutStatistics = $('.about__statistics')
    function counter () {
        var statisticsCount = 0;

        $(window).scroll(function() {
            var oTop = $('.about__statistics').offset().top - window.innerHeight;
            if (statisticsCount ==0 && $(window).scrollTop() > oTop) { 
                $('.count').each(function() {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    
                    $({ countNum: $this.text()}).animate({
                          countNum: countTo
                    },
                  
                    {
                        duration: 2000,
                        easing:'linear',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                        }
                    });  
                    statisticsCount = 1;
                });
            }
    
        })
    }
    if (aboutStatistics.length) {
        counter()
    }









});

// video
if (document.querySelector('video')) {
    // const player = new Plyr('#player');
    document.addEventListener('DOMContentLoaded', () => {
        // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
        const controls = [
            'play-large', // The large play button in the center
            'rewind', // Rewind by the seek time (default 10 seconds)
            'play', // Play/pause playback
            'fast-forward', // Fast forward by the seek time (default 10 seconds)
            'progress', // The progress bar and scrubber for playback and buffering
            'current-time', // The current time of playback
            'duration', // The full duration of the media
            'mute', // Toggle mute
            'volume', // Volume control
            'captions', // Toggle captions
            'settings', // Settings menu
            'pip', // Picture-in-picture (currently Safari only)
            'airplay', // Airplay (currently Safari only)
            'fullscreen' // Toggle fullscreen
        ];

        // const player = new Plyr('#player', { controls });
        const players = Plyr.setup('.video__controls', {
            controls
        });

        // Expose
        window.players = players;

        // Bind event listener
        function on(selector, type, callback) {
            document.querySelector(selector).addEventListener(type, callback, false);
        }
    });
}