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
			var bodyTotalWidth = $(window).width();
		// Off-Canvas Navigation.
				var loginCookie = $.cookie();
				var title = 46;
				var navPanel = '';
				var loginStr = '<a href="login.html" style="color:#fff;text-decoration:none;">登入</a>';
				var titleBarMargin = 0;
				if(Object.size(loginCookie) > 0){
					title = 34;
					navPanel = '<a href="#navPanel" class="toggle"></a>';
					loginStr = loginCookie.name;
					titleBarMargin = 37;
				}
								
				var urlBar = location.href;
				var gobackToShow = 'hidden';
				if(urlBar.indexOf(".html") != -1){
					gobackToShow = 'visible';
				}
			// Title Bar.
				$(
					'<div id="titleBar">' +
						navPanel +
						'<span class="title" style="width: '+title+'%;"><img src="images/logos.png" width="100%" height="44"></span>' +
						//'<span class="topLoginBtn" style="width: 19%;">'+
						'<span class="topLoginBtn" style="width: 19%; padding-top: 15px; font-size: 15px;">'+
							//'<a href="login.html"><img src="images/loginbtn.png" width="100%" height="44"></a>'+
							loginStr +
						'</span>' +
						'<span class="goback" style="width: 8%; visibility:'+gobackToShow+';"><img src="images/back.png" width="100%" height="44"></span>' +
						'<span class="home" style="width: 9%;"><a href="./"><img src="images/home.png" width="100%" height="44"></a></span>' +
						'<span class="search" style="width: 8%;"><a href="search.html"><img src="images/search.png" width="100%" height="44"></a></span>' +
						'<span class="notice" style="width: 10%;"><img src="images/notice.png" width="100%" height="44"></span>' +
					'</div>'
				)
				.appendTo($body)
				.css({
					"width":bodyTotalWidth,
					"font-size": 10
				});
					
				$("#titleBar").find(".title")
				.css({
					"float": "left",
					"margin-left": titleBarMargin
				});
				
				$("#titleBar").find(".goback, .home, .topLoginBtn, .search, .notice")
				.css({
					"float": "left",
				});
				$("#titleBar").find(".goback, .home,.search").find("img").css({
					"width":28
				});
				$("#titleBar").find(".goback, .home,.search, .topLoginBtn").find("a").on("touchend", function () {
					var href=$(this).prop("href");
					if(href){
						location.href = href;
					}
					return false;
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
			// $(
				// '<div id="barAll">' +
					// '<div id="optionBar" style="float: left; width: 15%;">' +
						// '<img id="homePageBtn" src="images/optionBtn.jpg" style="float: left;" width="100%" height="33">' +
					// '</div>' +
					// '<div id="optionBar-2" style="float: left; width: 17%;">' +
						// '<img id="optionBar-2" src="images/optionBtn-2.jpg" style="float: left;" width="100%" height="33">' +
					// '</div>' +
					// '<div id="optionBar-3" style="float: left; width: 17%;">' +
						// '<img id="optionBar-3" src="images/optionBtn-3.jpg" style="float: left;" width="100%" height="33">' +
					// '</div>' +
					// '<div id="optionBar-4" style="float: left; width: 17%;">' +
						// '<img id="optionBar-4" src="images/optionBtn-4.jpg" style="float: left;" width="100%" height="33">' +
					// '</div>' +
					// '<div id="optionBar-5" style="float: left; width: 17%;">' +
						// '<img id="optionBar-5" src="images/optionBtn-5.jpg" style="float: left;" width="100%" height="33">' +
					// '</div>' +
					// '<div id="optionBar-6" style="float: left; width: 16.9%;">' +
						// '<img id="optionBar-6" src="images/optionBtn-6.jpg" style="float: left;" width="100%" height="33">' +
					// '</div>' +
				// '</div>'
			// )
			// .appendTo($body)
			// .css({
				// "z-index":"10001",
				// "position": "fixed",
				// "width": bodyTotalWidth,
				// "top": 44,
				// "height": "31px",
				// "text-align": "center"
			// });
			
			// $("#main").css({
				// "padding-top": "30px"
			// });
			// $("#homePageBtn").on("touchend", function () {
				// location.href = './';
			// });
			// $("#optionBar-2").on("touchend", function () {
				// location.href = 'optionBar-2.html';
			// });
			// $("#optionBar-3").on("touchend", function () {
				// location.href = 'optionBar-3.html';
			// });
			// $("#optionBar-4").on("touchend", function () {
				// location.href = 'optionBar-4.html';
			// });
			// $("#optionBar-5").on("touchend", function () {
				// location.href = 'optionBar-5.html';
			// });
			// $("#optionBar-6").on("touchend", function () {
				// location.href = 'optionBar-6.html';
			// });
			var bodyTotalHeight = $(window).height();
			//optionListBar-bottom
			/*$(
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
				"width": bodyTotalWidth,
				"top": bodyTotalHeight-33,
				"height": "31px",
				"text-align": "center"
			});*/
			
			$(
				'<div id="barLink2">' +
					'<div id="optionBar-7" style="float: left; width: 20%;padding: 8px;font-size:10px;margin-left:-9px">' +
						'友情联结' +
					'</div>' +
					'<div id="optionBar-8" style="float: left; width: 25%;padding: 8px;font-size:10px;margin-left:-14px">' +
						'<a href="#" style="color:#fff">广西健康网</a>|' +
					'</div>' +
					'<div id="optionBar-8" style="float: left; width: 25%;padding: 8px;font-size:10px; margin-left:-27px">' +
						'<a href="#" style="color:#fff">奇峰医疗</a>|' +
					'</div>' +
					'<div id="optionBar-8" style="float: left; width: 25%;padding: 8px;font-size:10px; margin-left:-33px">' +
						'<a href="#" style="color:#fff">粤桂高科</a>|' +
					'</div>' +
					'<div id="optionBar-8" style="float: left; width: 22%;padding: 8px;font-size:10px; margin-left:-27px">' +
						'<a href="#" style="color:#fff">护理管理</a>|' +
					'</div>' +
					'<div id="optionBar-8" style="float: left; width: 25%;padding: 8px;font-size:10px; margin-left:-27px">' +
						'<a href="#" style="color:#fff">医院管理</a>|' +
					'</div>' +
				'</div>'
			)
			.appendTo($body)
			.css({
				"z-index":"10001",
				"position": "fixed",
				"width": bodyTotalWidth,
				"top": bodyTotalHeight-31,
				"height": "31px",
				"text-align": "center",
				"background":"#0075bb",
				"color":"#fff"
			});
			
	});

})(jQuery);

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

// Get the size of an object
//var size = Object.size(myArray);