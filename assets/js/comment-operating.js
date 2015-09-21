$(function(){
	var bodyHeight = $(window).height();
	var bottomCss = {
			"z-index":"10001",
			"position": "fixed",
			"width": "100%",
			"top": bodyHeight - 41 - 33,
			"height": "41px",
			"background-color": "#007294",
			"text-align": "center"
		};
	$(
		'<div id="bottomBar">' +
			'<span class="title"><img src="./images/common-opreat.png" height="41" width="100%"></span>' +
		'</div>'
	)
	.css(bottomCss)
	.resize(function(){
		$(this).css(bottomCss);
	})
	.appendTo("body");
});