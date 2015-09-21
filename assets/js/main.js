/*
	Minimaxing by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel
		.breakpoints({
			desktop: '(min-width: 737px)',
			tablet: '(min-width: 737px) and (max-width: 1200px)',
			mobile: '(max-width: 736px)'
		})
		.viewport({
			breakpoints: {
				tablet: {
					width: 1080
				}
			}
		});

	$(function() {

		var $window = $(window),
			$body = $('body');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Off-Canvas Navigation.

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#navPanel" class="toggle"></a>' +
						'<span class="title">中国护理之声</span>' +
						'<span class="goback"><img src="images/back.png" width="36"></span>'+
					'</div>'
				)
				.appendTo($body);
					
				$("#titleBar").find(".title")
				.css({
					"float": "left",
					"margin-left": "58px"
				});
				
				$("#titleBar").find(".goback")
				.css({
					"float": "right",
					"margin-top": "10px"
				});
					
				$(".goback").on("touchend", function () {
					window.history.back();
				});
			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});
			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #navPanel, #page-wrapper')
						.css('transition', 'none');
			//optionListBar
			$(
				'<div id="barAll">' +
					'<div id="optionBar" style="float: left; width: 15%;">' +
						'<img id="homePageBtn" src="images/optionBtn.jpg" style="float: left;" width="100%" height="33">' +
					'</div>' +
					'<div id="optionBar-2" style="float: left; width: 17%;">' +
						'<img id="optionBar-2" src="images/optionBtn-2.jpg" style="float: left;" width="100%" height="33">' +
					'</div>' +
					'<div id="optionBar-3" style="float: left; width: 17%;">' +
						'<img id="optionBar-3" src="images/optionBtn-3.jpg" style="float: left;" width="100%" height="33">' +
					'</div>' +
					'<div id="optionBar-4" style="float: left; width: 17%;">' +
						'<img id="optionBar-4" src="images/optionBtn-4.jpg" style="float: left;" width="100%" height="33">' +
					'</div>' +
					'<div id="optionBar-5" style="float: left; width: 17%;">' +
						'<img id="optionBar-5" src="images/optionBtn-5.jpg" style="float: left;" width="100%" height="33">' +
					'</div>' +
					'<div id="optionBar-6" style="float: left; width: 16.9%;">' +
						'<img id="optionBar-6" src="images/optionBtn-6.jpg" style="float: left;" width="100%" height="33">' +
					'</div>' +
				'</div>'
			)
			.appendTo($body)
			.css({
				"z-index":"10001",
				"position": "fixed",
				"width": "100%",
				"top": 44,
				"height": "31px",
				"text-align": "center"
			});
			
			$("#main").css({
				"padding-top": "30px"
			});
			$("#homePageBtn").on("touchend", function () {
				location.href = 'page2.html';
			});
			$("#optionBar-2").on("touchend", function () {
				location.href = 'optionBar-2.html';
			});
			$("#optionBar-3").on("touchend", function () {
				location.href = 'optionBar-3.html';
			});
			$("#optionBar-4").on("touchend", function () {
				location.href = 'optionBar-4.html';
			});
			$("#optionBar-5").on("touchend", function () {
				location.href = 'optionBar-5.html';
			});
			$("#optionBar-6").on("touchend", function () {
				location.href = 'optionBar-6.html';
			});
			var bodyTotalHeight = $(window).height();
			//optionListBar-bottom
			$(
				'<div id="barAll">' +
					'<div id="optionBar-7" style="float: left; width: 20%;">' +
						'<img src="images/optionBtn-7.jpg" style="float: left;" width="100%" height="33">' +
					'</div>' +
					'<div id="optionBar-8" style="float: left; width: 20%;">' +
						'<img src="images/optionBtn-8.jpg" style="float: left;" width="100%" height="33">' +
					'</div>' +
					'<div id="optionBar-9" style="float: left; width: 20%;">' +
						'<img src="images/optionBtn-9.jpg" style="float: left;" width="100%" height="33">' +
					'</div>' +
					'<div id="optionBar-10" style="float: left; width: 20%;">' +
						'<img src="images/optionBtn-10.jpg" style="float: left;" width="100%" height="33">' +
					'</div>' +
					'<div id="optionBar-11" style="float: left; width: 20%;">' +
						'<img src="images/optionBtn-11.jpg" style="float: left;" width="100%" height="33">' +
					'</div>' +
				'</div>'
			)
			.appendTo($body)
			.css({
				"z-index":"10001",
				"position": "fixed",
				"width": "100%",
				"top": bodyTotalHeight-33,
				"height": "31px",
				"text-align": "center"
			});
			$("#optionBar-11").on("touchend", function () {
				location.href = 'page8.html';
			});
	});

})(jQuery);