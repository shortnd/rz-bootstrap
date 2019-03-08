/*-----------------------------------------------------------------------------------
	Theme Name: Website name
	Front-end developer: Collin O'Connell
	Author Design: Samir Alley @samiralley | Kat Wiard | Nasryn Abou-Arabi | Alex Parent
	Author URI: http://www.revize.com/
	Date: mm/dd/yy
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
	/*
	* E-Notify Auto Submit
	*/
	$.urlParams=function(n){var e=new RegExp("[?&]"+n+"=([^]*)").exec(window.location.href);return null===e?null:e[1]||0};
	var $enotify = $('iframe[src*="/revize/plugins/notify/notify.jsp"]');
	if ($enotify.length > 0) {
		var emailStr = $.urlParams("email");
		if (emailStr) {
			$enotify.attr("src", $enotify.attr("src") + "&email=" + emailStr);
		}
	}
	// RZ Class
	if (typeof RZ !== "undefined") {
		if (RZ.login) {
			$body.addClass("user-logged-in");
		} else {
			$body.addClass("user-no-logged-in");
		}
	}
	// Skip to Content
	$('#skip').on('click', function(e){
		e.preventDefault();
		$('#main').attr({'tabindex': '-1'});
		$('#main').focus();
		$('#main').removeAttr('tabindex');
	});
	// Keyboard Navigation: Nav, flyout
	var isClick = false;
	$("#nav li a, #flyout  li a, a, button, .toggle, .toggle2").on('focusin', function(e) {
		console.log(isClick);
		if( isClick === false ) {
			$(".focused").removeClass("focused");
			$(e.currentTarget).parents("#nav li, #flyout li").addClass("focused");
			// $(".opened:not(.focused) ul:visible,.opened2:not(.focused) ul:visible").slideUp().parent().removeClass("opened opened2");
			$('.opened:not(.focused) ul:visible, .opened2:not(.focused) ul:visible').slideUp().removeClass('opened opened2');
		} else {
			$(".focused").removeClass("focused");
			isClick = false;
		}
	});
	// prevent focused class changes on click - This way arrows wont pop when clicking nav links
	$("#nav a,#flyout a").on('mousedown',function(){
		isClick = true;
	});
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
		// $("#nav > li:has(ul)").addClass('first-parent').children("a,span").append('<i class="fa fa-angle-down down-arrow">');
		// Menu Toggles
		$("#nav >li>ul,#flyout >li>ul").addClass('first-level').attr({'aria-labelledby': 'dropdown-toggle'});
		$("#nav  li ul ul").addClass('second-level');
		$("#nav>li:has(ul)").each(function(){
			$('<a href="#" class="fa fa-angle-down toggle" tabindex="0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Show Dropdown for '+ $(this).find('a:first').text() +'"></a>').insertAfter($(this).find('a:first'));
		});
		$('#nav li li:has(ul)').each(function() {
			$('<a href="#" class="fa fa-angle-down toggle2" tabindex="0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Show Dropdown for '+ $(this).find('a:first').text() +'"></a>').insertAfter($(this).find('a:first'));
		});
		$('#flyout >li:has(ul)').each(function() {
			$('<a href="#" class="fa fa-angle-down toggle" tabindex="0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Show Flyout for '+ $(this).find('a:first').text() +'"></a>').insertAfter($(this).find('a:first'));
		});
		function addNavClass() {
			if ($window.width() < 992) {
				$("body").addClass('mobile');
				$("body").removeClass('desktop');
			} else{
				$("body").addClass('mobile');
				$("body").removeClass('desktop');
			}
		}
		addNavClass();
		$window.resize(addNavClass);
		$(".toggle").on("click keydown",function(e) {
			if (e.keyCode === 13 || e.type === 'click') {
					e.preventDefault();
					var $parent = $(this).parent();
					var $parentLi = $parent.parent();
					$parent.toggleClass('opened');
					console.log($parent.addClass('active').next('.first-level').is(':visible'));
					if($parent.addClass('active') && $(this).next('.first-level').is(":visible")){
						$(this).next('.first-level').slideUp();
						$parent.removeClass('active');
						$(this).attr({'aria-expanded': 'false'});
					} else {
						$(this).attr({'aria-expanded': 'true'});
						$(".first-level").slideUp("slow");
						$parent.addClass('active');
						$(this).next('.first-level').slideToggle();
					}
				}
			});
	    $(".toggle2").on("click keydown",function(e) {
				if (e.keyCode === 13 || e.type === 'click') {
					e.preventDefault();
					var $parent = $(this).parent();
					var $parentLi = $parent.parent();
					$parent.toggleClass('opened2');
					if($parent.addClass('active') && $(this).next('.second-level').is(":visible")){
						$(this).next('.second-level').slideUp();
						$parent.removeClass('active');
						$(this).attr({'aria-expanded': 'false'});
					} else {
						$(this).attr({'aria-expanded': 'true'});
						$(".second-level").slideUp("slow");
						$parent.addClass('active');
						$(this).next('.second-level').slideToggle();
					}
				}
			});

			$('#nav>li:last-child, #nav ul>li:last-child, #flyout li:last-child, #flyout ul>li:last-child').keydown(function(e) {
				if (e.which === 9 && e.shiftKey) {
					// Do Nothing
				} else if (e.which === 9) {
					$(this).parent().parent().find('.toggle').attr({'aria-expanded': 'false'});
					$(this).parent().slideToggle('200');
				}
			});
			$('#nav>li:first-child, #nav ul>li:first-child, #flyout li:first-child, #flyout ul>li:first-child').keydown(function(e) {
				if (e.which === 9 && e.shiftKey) {
					$(this).parent().parent().find('.toggle').attr({'aria-expanded': 'false'});
					$(this).parent().slideToggle('200');
				} else if (e.which === 9) {
					// Do nothing continue on
				}
			})
			$('.accessibility-menu ul>li:last-child').keydown(function(e) {
				if (e.which === 9 && e.shiftKey) {
					// Do nothing
				} else if (e.which === 9) {
					$('.accessibility-wrap').removeClass('visible');
					$('.accessibility-menu a').attr('tabindex', '-1');
					$('#accessibility-button').attr({'aria-expanded': 'false'});
				}
			});

			//collapse nav if left
			$(".desktop *").focus(function(e){
			var $opened = $(".opened");
			var $opened2 = $(".opened2");
			if( $opened.length > 0 || $opened2.length > 0 ) {
				if( $(".opened :focus").length < 1 ){
					$opened.children("ul").slideUp();
					$opened.removeClass("opened");
					$(".opened2").removeClass("opened2");
				}
				if( $(".opened2 :focus").length < 1 ){
					$opened2.children("ul").slideUp();
					$opened2.removeClass("opened2");
				}
			}
		});
		// Flyout
		var flyout = $('#flyout'),
			flyoutwrap = $('#flyout-wrap');
		if (flyout.text().length){
			flyoutwrap.prepend('<div id="flyout-toggle" class="hidden-lg hidden-md"><i class="fa fa-bars"></i> Sub Menu</div>');
		}
		$("#flyout-toggle").on("click", function(){
			flyout.slideToggle();
			$(this).toggleClass("active");
		});
		$("#flyout ul").addClass('flyout-children');
		// Start Calendar Resizer
		function resizeIframe(height) {
			var iFrameID = document.getElementById('calendar');
			if (iFrameID) {
				iFrameID.height = "";
				iFrameID.height = height;
			}
			console.log('Height to: ' + height);
		}
		var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
		var eventHandler = window[eventMethod];
		var messageEvent = eventMethod === "attachEvent" ? "onmessage" : "message"
		eventHandler(messageEvent, function(e) {
			if (e.data && e.data[0] === "setCalHeight") {
				if (typeof resizeIframe === "function") {
					resizeIframe(e.data[1]);
				}
			}
		});
		// End Calendar Resizer

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
		// Mega Footer Toggle
		$('.header-toggle').on('click keydown', function(e) {
			if (e.keyCode === 13 || e.type === 'click') {
				var inner = $(this).next('.inner-toggle');
				if (inner.is(':hidden')) {
					inner.slideDown('200');
				} else {
					inner.slideUp('200');
				}
			}
		});

		// Tabs
		$('#tabs li a').on('click keydown', function(e) {
			if (e.keyCode === 13 || e.type === 'click') {
				e.preventDefault();
				$('#tabs li, #tabs-content .current').removeClass('current').removeClass('fadeInLeft');
				$(this).parent().addClass('current');
				$('#tabs-content .content').eq($(this).parent().index()).addClass('current animated zoomIn').find('h2').focus();
			}
		});

		if ( typeof $.fn.sociafeed !== "undefined"){
			$('.social-feed-container').socialfeed({
				// Facebook
				facebook:{
					accounts: ['@facebook'],
					limit: 2,
					access_token: 'YOUR_FACEBOOK_ACCESS_TOKEN'
				},

				// Twitter
				twitter:{
					accounts: ['@spacex'],
					limit: 2,
					consumer_key: 'YOUR_CONSUMER_KEY',
					consumer_secret: 'YOUR_CONSUMER_SECRET_KEY',
					tweet_mode: 'compatibility'
				},

				// Instagram
				instagram:{
					accounts: ['&facebook'],
					limit: 2,
					access_token: 'YOUR_INSTAGRAM_ACCESS_TOKEN'
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
		// Sticky
		if(typeof $.fn.sticky !== "undefined"){
			$("#sticky").sticky({
				topSpacing:0
			});
		}
		// bxSlider
		if (typeof $.fn.bxSlider !== "undefined") {
			$('.bxslider').bxSlider({
				mode: 'fade',
				auto: ($('.bxslider').children().length < 2) ? false : true,
				pager: false
			});
		}
		// Owl Slider
		if (typeof $.fn.owlCarousel !== "undefined") {
			function resOwl(quickLinkCount, count) {
				return {
					items: (quickLinkCount >= count ? count : quickLinkCount),
					nav: (quickLinkCount > count ? true : false),
					mouseDrag: (quickLinkCount > count ? true : false),
					touchDrag: (quickLinkCount > count ? true : false)
				};
			}
			$("#owl-slider").owlCarousel();
		}
		// Preloader
		$window.load(function() {
			setTimeout(function(){
				$body.addClass('loaded');
					$('#loader-wrapper').fadeOut();
			}, 600);
		});

		// Cookies
		function setCookie(cookieName, cookieValue, expDays) {
			var date = new Date();
			date.setTime(date.getTime() + (expDays * 24 * 60  * 60 * 1000));
			var expires = "expires="+date.toUTCString();
			document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
		}
		function resetCookie(cname) {
			setCookie(cname, true, 14);
		}
		function getCookie(cookieName) {
			var name = cookieName + "=";
			var cookieArray = document.cookie.split(';');
			for (var i = 0; i < cookieArray.length; i++) {
				var cookie = cookieArray[i];
				while (cookie.charAt(0) == ' ') {
					cookie = cookie.substring(1);
				}
				if (cookie.indexOf(name) == 0) {
					return cookie.substring(name.length, cookie.length);
				}
			}
			return "";
		}
		function removeCookie(cookieName) {
			var date = new Date();
			date.setTime(date.getTime() - (1000 * 60 * 60 * 24));
			var expires = "expires=" + date.toUTCString();
			document.cookie = cookieName + "=;" + expires + ";path=/";
		}
		// Cookies

	$window.ready(function(){

		// If template is freeform, add flyout background and position the main tag relative
		if ($('#flyout-wrap').length){
			$('main').css({'position':'relative','z-index':'1'});
			$('<div id="flyout-background"></div>').prependTo('main').css({
				'position':'absolute',
				'top':'0',
				'bottom':'0',
				'left':'0',
				'z-index':'0-1',
				'background':'#000' // change background-color of flyout-background here
			});
		}
		// Fill sides script
		function fillSide(){
			var windowWidth = $('body').outerWidth();
			var pixelValue = (windowWidth - $('.container').width()) / 2;
			$('.fillLeft').css({'margin-left': -pixelValue});
			$('.fillRight').css({'margin-right': -pixelValue});
			$('.fillLeft.withPadding').css({'margin-left': -pixelValue,'padding-left': pixelValue});
			$('.fillRight.withPadding').css({'margin-right': -pixelValue,'padding-right': pixelValue});
			$('#flyout-background').width($('#flyout-wrap').outerWidth());
		}
		fillSide();
		$window.resize(fillSide);
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
