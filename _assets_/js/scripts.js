/*-----------------------------------------------------------------------------------

	Theme Name: SiteName
	Front-end developer: Richard Opiniano | Kevin Nowalski | Collin O'Connell | DeMarc Johnson
	Author Design: Samir Alley @samiralley | Kat Wiard | Nasryn Abou-Arabi | Alex Parent
	Author URI: http://www.revize.com/
	Date: MONTH DAY, 2015

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

	// Preloader
	$window.load(function() {

		setTimeout(function(){
			$body.addClass('loaded');
			 $('#loader-wrapper').fadeOut();
		}, 600);

	});

	$window.ready(function(){
		
		
		// If template is freeform, add flyout background
		if ($('#flyout-wrap').length){
			$('main').css('position','relative');
			$('<div id="flyout-background"></div>').prependTo('main').css({
				
			});
		}
		
		// Fill sides script
		function fillSide(){
            var mainWidth = $('body').outerWidth();
            var pixelValue = (mainWidth - $('.container').width()) / 2;
			$('#flyout-wrap').css({
				'margin-left': -pixelValue,
				'padding-left': pixelValue
			});
			
			$('#flyout-background').width($('#flyout-wrap').outerWidth());
		}
        fillSide();
        $window.resize(fillSide);

		/*
		* E-Notify Auto submit
		*/
		$.urlParam=function(n){var e=new RegExp("[?&]"+n+"=([^]*)").exec(window.location.href);return null==e?null:e[1]||0};
		var $enotify = $('iframe[src*="/revize/plugins/notify/notify.jsp"]');
		if( $enotify.length > 0 ){
			var emailStr = $.urlParam("email");
			if( emailStr != null ){
				$enotify.attr("src", $enotify.attr("src") + "&email=" + emailStr);
			}
		}

		// RZ Class
		if(typeof RZ !== "undefined"){
		 if(RZ.login){
		  $body.addClass("user-logged-in");
		 } else{
			 $body.addClass("user-not-logged-in");
		 }
		}

		// Search Toggle
		$('#search-toggle').on('click',function(e){
			$('#search').stop().slideToggle(200);
			$(this).toggleClass('fa-search fa-close');
		});

		// Navigation Toggle
		$("#nav-toggle").on("click", function(){
			$("#nav").stop().slideToggle();
			$(this).toggleClass("active");
		});

		// Menu Arrows
		$("#nav > li:has(ul)").addClass('first-parent').children("a,span").append('<i class="fa fa-angle-down down-arrow">');

		// Menu Toggles
		$("#nav >li:has(ul)").children("a,span").append('<i class="fa fa-angle-down toggle">');
		$("#nav li li:has(ul)").children("a,span").append('<i class="fa fa-angle-down toggle2">');

		function addNavClass() {
			if ($window.width() < 992) {
				$("#nav >li>ul").addClass('first-level');
				$("#nav  li ul ul").addClass('second-level');

			} else{
					$("#nav >li>ul").removeClass('first-level').css('display','');
					$("#nav  li ul ul").removeClass('second-level').css('display','');
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

		if (flyout.text().length){
			flyoutwrap.prepend('<div id="flyout-toggle"><i class="fa fa-bars"></i> Sub Menu</div>');
		}

		$("#flyout-toggle").on("click", function(){
			flyout.slideToggle();
			$(this).toggleClass("active");
		});

		$("#flyout li:has(ul)").children("a,span").append('<i class="fa fa-angle-down toggle-children">');
		$("#flyout ul").addClass('flyout-children');

		var flyoutChildren = $('.flyout-children');

		$(".toggle-children").click(function(e) {
				e.preventDefault();
			if($(this).parent().next(flyoutChildren).is(":visible")){
				$(this).parent().next(flyoutChildren).slideUp();
			} else {
				$(flyoutChildren).slideUp("slow");
				$(this).parent().next(flyoutChildren).slideToggle();
			}
		});

		// revizeWeather
		if( typeof $.fn.revizeWeather !== "undefined" ){
			$.fn.revizeWeather({
				zip: '48326',
				city_name: '',
				unit: 'f',
				success: function(weather) {
					var date = new Date();
					date = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
					var html = '<span>'+date+'</span> <span class="forecast">'+weather.temp+'&deg; '+weather.forecast+'</span>';
					html += '<i class="'+weather.icon+'"></i>';

					$("#weather").html(html);
				},
				error: function(error) {
					// better to just hide the secion if there is an error
					$('.weather').hide();
					console.log(error);
				}
			});
		}
		
		if ( typeof $.fn.sociafeed !== "undefinded"){
			$('.social-feed-container').socialfeed({
				// Facebook
				facebook:{
					accounts: ['@teslamotors','!teslamotors'],  //Array: Specify a list of accounts from which to pull wall posts
					limit: 2,                                   //Integer: max number of posts to load
					access_token: 'YOUR_FACEBOOK_ACCESS_TOKEN'  //String: "APP_ID|APP_SECRET"
				},

				// Twitter
				twitter:{
					accounts: ['@spacex'],                       //Array: Specify a list of accounts from which to pull tweets
					limit: 2,                                    //Integer: max number of tweets to load
					consumer_key: 'YOUR_CONSUMER_KEY',           //String: consumer key. make sure to have your app read-only
					consumer_secret: 'YOUR_CONSUMER_SECRET_KEY', //String: consumer secret key. make sure to have your app read-only
					tweet_mode: 'compatibility'                  //String: change to "extended" to show the whole tweet
				 },

				// Instagram
				instagram:{
					accounts: ['@teslamotors','#teslamotors'],  //Array: Specify a list of accounts from which to pull posts
					limit: 2,                                   //Integer: max number of posts to load
					client_id: 'YOUR_INSTAGRAM_CLIENT_ID',       //String: Instagram client id (option if using access token)
					access_token: 'YOUR_INSTAGRAM_ACCESS_TOKEN' //String: Instagram access token
				},

				// General settings
				length:400,
				show_media:true,
				media_min_width: 300,
				update_period: 5000,
				template: "template.html",
				callback: function() {
					console.log("All posts collected!");
				}
			});
		}

		// Tabs
		$('#tabs li a').click(function(e){
			$('#tabs li, #tabs-content .current').removeClass('current').removeClass('fadeInLeft');
			$(this).parent().addClass('current');

			var currentTab = $(this).attr('href');

			e.preventDefault();
			$(currentTab).addClass('current animated fadeInLeft');
		});

		// Owl Slider
		if(typeof $.fn.owlCarousel !== "undefined"){
			$("#owl-slider").owlCarousel();
		}

		// matchHeight
		if(typeof $.fn.matchHeight !== "undefined"){
			$('.equal').matchHeight({
				//defaults
				byRow: true,
				property: 'height', // height or min-height
				target: null,
				remove: false
			});
		}

		// bxSlider
		if(typeof $.fn.bxSlider !== "undefined"){
			$('.bxslider').bxSlider({
				mode:'fade',
				auto:($('.bxslider').children().length < 2) ? false : true,
				pager: false
			});
		}

		// Sticky
		if(typeof $.fn.sticky !== "undefined"){
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

				if(typeof $.fn.waypoint !== "undefined"){
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

			return this.each(function(){
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
		
	}); // Ready

})(jQuery);
