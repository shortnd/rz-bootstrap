/*-----------------------------------------------------------------------------------

	Theme Name: SiteName
	Author Design: Designer
	Developer: Developer
	Author URI: http://www.revize.com/
	Date: MONTH DAY, 2017

-----------------------------------------------------------------------------------*/

(function($) {

    'use strict';

    var $window = $(window),
        $body = $('body');

    /*!
     * IE10 viewport hack for Surface/desktop Windows 8 bug
     * Copyright 2014-2015 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */

    // See the Getting Started docs for more information:
    // http://getbootstrap.com/getting-started/#support-ie10-width
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        ); document.querySelector('head').appendChild(msViewportStyle);
    }

    // Elements to declare a role
    var header = $('header'),
        navigation = $('nav'),
        search = $('#search'),
        navToggle = $('#nav-toggle'),
        searchToggle = $('#search-toggle');
    // Role declaration
    header.attr('role', 'banner');
    navigation.attr('role', 'navigation');
    search.attr('role', 'search');
    navToggle.attr('role', 'button').attr('tabindex', '0');
    searchToggle.attr('role', 'button').attr('tabindex', '0');

    // Skip to content
    $('<a class="skip" href="' + window.location.href.split("#")[0] + '#content" alt="Skip to Content">Skip to Content</a>').insertBefore('header').click(function(e) {
        $("#content").focus();
    });
    $('<a name="content" tabIndex="-1" id="content">&nbsp;</a>').insertBefore('.entry');

    // if tabbing into the li that has a sub menu
    $('#nav li:has("ul"), #flyout li:has("ul")').on('keyup', function (e) {
        // console.log(e);
        if (e.keyCode === 9) {
            $(this).children('ul').removeClass('hideUl');
            $(this).children('ul').addClass('showUl');
        }
    });

    // if tabbing backwards through menus, remove appropriate classes to hide menus
    $('#nav a, #flyout a').on('focus', function (e) {
        $(this).parent('li').next().find('ul').removeClass('showUl').addClass('hideUl');
    });

    // if key is pressed while on the last link in a sub menu
    $('#nav li > ul > li:last-child > a, #flyout li > ul > li:last-child > a').on('keydown', function (e) {
        if ((e.keyCode === 9) && $(this).parent('li').children('ul').length === 0) {
            // close this sub menu
            $(this).parent('li').parent('ul').removeClass('showUl').addClass('hideUl');

            // if also tabbing out of a third level sub menu
            // AND there are no other links in the parent (level 2) sub menu
            if ($(this).parent('li').parent('ul').parent('li').parent('ul').parent('li').children('ul').length > 0
                && $(this).parent('li').parent('ul').parent('li').is(':last-child')) {

                // Close the parent sub menu (level 2) as well
                $(this).parent('li').parent('ul').parent('li').parent('ul').removeClass('showUl').addClass('hideUl');
            }
        }
    });

    $window.ready(function() {

        // RZ Class
        if (typeof $.fn.RZ !== "undefined") {
            if (RZ.login) {
                $body.addClass("user-logged-in");
            } else{
                $body.addClass("user-not-logged-in");
            }
        }

        // Search Toggle
        $('#search-toggle').on('click keyup',function(e) {
            if (e.type === 'keyup' && e.keyCode === 13 || e.type === 'click') {
                $('#search').stop().slideToggle(200);
                $(this).toggleClass('fa-search fa-close');
                // $('body').toggleClass('search-open');
            }
        });

        // Navigation Toggle
        $("#nav-toggle").on("click keyup", function(e) {
            if (e.type === 'keyup' && e.keyCode === 13 || e.type === 'click') {
                $("#nav").stop().slideToggle();
                $(this).toggleClass("active");
            }
        });

        // Menu Toggles
        $("#nav > li > ul, #flyout > li > ul").addClass('first-level');
        $("#nav ul ul").addClass('second-level');
        $("#nav > li:has(ul)").find("a:first").append('<i class="fa fa-angle-down toggle">');
        $("#nav li li:has(ul)").find("a:first").append('<i class="fa fa-angle-down toggle2">');
        $("#flyout > li:has(ul)").find("a:first").append('<i class="fa fa-angle-down toggle">');

        function addNavClass() {
            if ($window.width() < 992) {
                $("#nav > li > ul").addClass('first-level');
                $("#nav li ul ul").addClass('second-level');

            } else{
                $("#nav > li >ul").removeClass('first-level').css('display','');
                $("#nav li ul ul").removeClass('second-level').css('display','');
            }
        }
        addNavClass();
        $window.resize(addNavClass);

        $(".toggle").click(function(e) {
            e.preventDefault();
            if($(this).parent().next('.first-level').is(":visible")){
                $(this).parent().next('.first-level').slideUp();
            } else {
                $(".first-level").slideUp("slow");
                $(this).parent().next('.first-level').slideToggle();
            }
        });

        $(".toggle2").click(function(e) {
            e.preventDefault();
            if($(this).parent().next('.second-level').is(":visible")){
                $(this).parent().next('.second-level').slideUp();
            } else {
                $(".second-level").slideUp("slow");
                $(this).parent().next('.second-level').slideToggle();
            }
        });

        // Flyout
        var flyout = $('#flyout'),
            flyoutwrap = $('#flyout-wrap');

        if (flyout.text().length) {
            flyoutwrap.prepend('<div id="flyout-toggle"><em class="fa fa-bars"></em> <span class="sr-only">Sub Menu</span></div>');
        }

        $("#flyout-toggle").on("click", function() {
            flyout.slideToggle();
            $(this).toggleClass("active");
        });

        $("#flyout ul").addClass('flyout-children');
        var flyoutChildren = $('.flyout-children');

        // inView.js
        $('#nav > li:has(ul)').hover(function(){
            $window.width() > 991 ? $(this).find('ul').inView('top') : '';
        });
        $('#nav > li > ul > li:has(ul)').hover(function(){
            $window.width() > 991 ? $(this).find('ul').inView('flyout') : '';
        });

        // simpleWeather
        if ( typeof $.fn.revizeWeather !== "undefined" ) {
            $.fn.revizeWeather({
                zip: '48326',
                city_name: '',
                unit: 'f',
                success: function(weather) {
                    var date = new Date();
                    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                    var day = days[date.getDay()];
                    var month = months[date.getMonth()];
                    var year = date.getFullYear();
                    var date = date.getDate();
                    var dateInfo = '<span class="date">'+ day +', '+ month +' '+ date +', '+ year +'</span>';
                    var html = '<i class="' + weather.icon + '"><span class="sr-only">Weather Icon</span></i><span class="forecast">' + weather.temp +'&deg; ' + weather.forecast +'</span><span class="weather-divider">|</span>' + dateInfo;

                    $(".weather").html(html);
                },
                error: function(error) {
                    // better to just hide the section if there is an error
                    $('.weather').hide();
                    console.log(error);
                }
            });
        }

        // Tabs
        $('#tabs li a').click(function(e) {
            $('#tabs li, #tabs-content .current').removeClass('current').removeClass('fadeInLeft');
            $(this).parent().addClass('current');

            var currentTab = $(this).attr('href');

            e.preventDefault();
            $(currentTab).addClass('current animated fadeInLeft');
        });

        // Owl Slider Helper Functions
        var attachOwlBtnRoles = function (slider) {
            slider.find('.owl-prev').attr('role', 'button').attr('tabIndex', '0');
            slider.find('.owl-next').attr('role', 'button').attr('tabIndex', '0');
        };
        var attachOwlDotRoles = function (slider) {
            slider.find('.owl-dot').attr('role', 'button').attr('tabIndex', '0')
        };

        // Owl Slider
        var owlSlider = $('.owl-slider');
        if (typeof $.fn.owlCarousel !== "undefined") {
            owlSlider.owlCarousel({
                items: 5,
                responsive: {
                    0: {items: 2},
                    767: {items: 3},
                    991: {items: 4},
                    1200: {items: 5},
                },
                margin: 0,
                stagePadding: 0,
                nav: false,
                navText: ['',''],
                dots: false,
                loop: false,
                rewind: true,
                autoplay: false,
                autoplayTimeout: 5000,
                autoHeight: false,
                autoplayHoverPause: true,
                onInitialized: function () {
                    attachOwlBtnRoles(owlSlider);
                    attachOwlDotRoles(owlSlider);
                }
            });
        }

        // enables keyboard actions on owl slider
        var owlCarousels = $('.owl-carousel');
        $(document).on('keydown', function(e) {
            var sliderTarget;
            owlCarousels.each(function () {
                if ($(this).find(':focus').length > 0) {
                    sliderTarget = $(this) || null;
                }
            });

            var target = $(e.target),
                owl = sliderTarget,
                type;

            switch (e.which) {
                case 39:
                    type = 'next';
                    break;
                case 37:
                    type = 'prev';
                    break;
                case 13:
                    type = 'enter';
                    break;
                default:
                    type = null;
            }

            // log out for debugging arrow controls
            // console.log(target, owl, type);

            if (type === 'enter') {
                // owl controls
                if (target.hasClass('owl-next')) {
                    owl.trigger('next.owl.carousel');
                } else if (target.hasClass('owl-prev')) {
                    owl.trigger('prev.owl.carousel');
                } else if (target.hasClass('owl-dot')) {
                    target.click();
                }
            }

            if (sliderTarget && sliderTarget.find(':focus').length > 0) {
                if (type === 'next') {
                    sliderTarget.find('.owl-next').click();
                } else if  (type === 'prev') {
                    sliderTarget.find('.owl-prev').click();
                }
            }
        });

        // matchHeight
        if (typeof $.fn.matchHeight !== "undefined") {
            $('.equal').matchHeight({
                //defaults
                byRow: true,
                property: 'height', // height or min-height
                target: null,
                remove: false
            });
        }

        // bxSlider
        if (typeof $.fn.bxSlider !== "undefined") {
            $('.bxslider').bxSlider({
                mode:'fade',
                auto:($('.bxslider').children().length < 2) ? false : true,
                pager: false
            });
        }

        // Twitter Feed
        if (typeof $.fn.tweet !== "undefined") {
            $("#twitterfeed").tweet({
                modpath: '_assets_/plugins/twitter/',
                username: "RevizeSoftware",
                join_text: "auto",
                avatar_size: 0,
                count: 1,
                auto_join_text_default: "",
                auto_join_text_ed: "",
                auto_join_text_ing: "",
                auto_join_text_reply: "",
                auto_join_text_url: "",
                loading_text: "Loading Tweet..."
            });
        }

        // Instafeed Feed
        if (typeof $.fn.Instafeed !== "undefined") {
            var userFeed = new Instafeed({
                get: 'user',
                resolution:'standard_resolution',
                limit:9,
                userId: 223202806,
                accessToken: '303202123.f7e9b72.27c687fbd9c24ecbb29dc92951cdf724',
                target: ''
            });
            userFeed.run();
        }

        // Sticky
        if (typeof $.fn.sticky !== "undefined") {
            $("#sticky").sticky({
                topSpacing:0
            });
        }

        // Animations http://www.oxygenna.com/tutorials/scroll-animations-using-waypoints-js-animate-css
        function onScrollInit( items, trigger ) {
            items.each( function() {
                var osElement = $(this),
                    osAnimationClass = osElement.data('os-animation'),
                    osAnimationDelay = osElement.data('os-animation-delay');

                osElement.css({
                    '-moz-animation-delay':     osAnimationDelay,
                    'animation-delay':          osAnimationDelay,
                    '-webkit-animation-delay':  osAnimationDelay
                });

                var osTrigger = ( trigger ) ? trigger : osElement;

                if (typeof $.fn.waypoint !== "undefined") {
                    osTrigger.waypoint(function() {
                        osElement.addClass('animated').addClass(osAnimationClass);
                    },{
                        triggerOnce: true,
                        offset: '100%'
                    });
                }
            });
        }
        onScrollInit($('.os-animation'));

        //#Smooth Scrolling
        $('a[href*=#]:not([href=#],[href*="#collapse"])').click(function() {
            if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });

        /*global jQuery */
        /*!
        * FlexVerticalCenter.js 1.0
        *
        * Copyright 2011, Paul Sprangers http://paulsprangers.com
        * Released under the WTFPL license
        * http://sam.zoy.org/wtfpl/
        *
        * Date: Fri Oct 28 19:12:00 2011 +0100
        */
        $.fn.flexVerticalCenter = function( options ) {
            var settings = $.extend({
                cssAttribute:   'margin-top', // the attribute to apply the calculated value to
                verticalOffset: 0,            // the number of pixels to offset the vertical alignment by
                parentSelector: null,         // a selector representing the parent to vertically center this element within
                debounceTimeout: 25,          // a default debounce timeout in milliseconds
                deferTilWindowLoad: false     // if true, nothing will take effect until the $(window).load event
            }, options || {});

            return this.each(function() {
                var $this   = $(this); // store the object
                var debounce;

                // recalculate the distance to the top of the element to keep it centered
                var resizer = function () {

                    var parentHeight = (settings.parentSelector && $this.parents(settings.parentSelector).length) ?
                        $this.parents(settings.parentSelector).first().height() : $this.parent().height();

                    $this.css(
                        settings.cssAttribute, ( ( ( parentHeight - $this.height() ) / 2 ) + parseInt(settings.verticalOffset) )
                    );
                };

                // Call on resize. Opera debounces their resize by default.
                $(window).resize(function () {
                    clearTimeout(debounce);
                    debounce = setTimeout(resizer, settings.debounceTimeout);
                });

                if (!settings.deferTilWindowLoad) {
                    // call it once, immediately.
                    resizer();
                }

                // Call again to set after window (frames, images, etc) loads.
                $(window).load(function () {
                    resizer();
                });

            });

        };
        $('.v-align').flexVerticalCenter();

        // Remove matchHeight on document center pages
        if ($('#RZdocument_center').length) {
            $('.aside,.entry').matchHeight({remove:true});

            if (window.matchMedia("(min-width: 992px)").matches) {
                setInterval(function() {
                    if ($('.post').outerHeight() + 300 > $('.entry').outerHeight()) {
                        $('.aside').css('height',$('.entry').outerHeight() + 'px');
                    }
                }, 200);
            }
        }

        // finds all edit buttons - not full-proof but it works ¯\_(ツ)_/¯
        var editBtns = $('script[language="JavaScript"]').next('a').has('img').parent();
        editBtns.each(function (i) {
            var editBtnConsole = `.${$(this).attr('class')} {}`; // string templates like a boss
            console.log(editBtnConsole);
        });

    }); // Ready

})(jQuery);