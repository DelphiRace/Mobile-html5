var pages = ['Page0', 'Page1'];
if(location.hash){
	location.href = location.origin + location.pathname;
}
$(document).on('pageinit', '#Page0', function () {

	$(document).on("swiperight", function () {
		var pageId = $.mobile.activePage.attr('id');
		var idx = pages.indexOf(pageId);
		idx = idx - 1 < 0 ? pages.length - 1 : idx - 1;
		$.mobile.changePage('#' + pages[idx], {
			'transition': 'slide',
			'reverse': true
		});
	});

	$(document).on("swipeleft", function () {
		var pageId = $.mobile.activePage.attr('id');
		var idx = pages.indexOf(pageId);
		idx = ++idx % pages.length;
		$.mobile.changePage('#' + pages[idx], {
			'transition': 'slide',
		});
	});
	
	$("#homeMenuLeft").on("touchend", function () {
		var pageId = $.mobile.activePage.attr('id');
		var idx = pages.indexOf(pageId);
		idx = idx - 1 < 0 ? pages.length - 1 : idx - 1;
		$.mobile.changePage('#' + pages[idx], {
			'transition': 'slide',
			'reverse': true
		});
	});
	var windowWidth = $(window).width();
	$("#homeMenuRight").on("touchend", function () {
		var pageId = $.mobile.activePage.attr('id');
		var idx = pages.indexOf(pageId);
		idx = ++idx % pages.length;
		$.mobile.changePage('#' + pages[idx], {
			'transition': 'slide',
		});
	}).css({
		"left": windowWidth-29
	});
});
