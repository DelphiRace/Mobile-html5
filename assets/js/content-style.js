function creatListContent(title, content){
	var str = '<div class="4u 12u(mobile)"><section>';
	str += '<h2>' + title + '</h2>';
	str += '<p>' + content + '</p>';
	str += '<footer class="controls">';
	str += '<a href="page7.html" class="button">阅读全文</a>';
	str += '</footer>';
	str += '</section>';
	str += '</div>';
	$(str).appendTo("#listContent");
}

function creatVideoListContent(title, content){
	var str = '<div class="4u 12u(mobile)"><section>';
	str += '<h2>' + title + '</h2>';
	str += '<p>' + content + '</p>';
	str += '</section>';
	str += '</div>';
	$(str).appendTo("#listContent");
}