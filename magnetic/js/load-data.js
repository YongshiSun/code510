var json = {
	"images": [
		{
			"the_path": "img/work1.jpg",
			"the_link": "http://google.com",
			"caption": "Google"
		},
		{
			"the_path": "img/work5.jpg",
			"the_link": "http://yahoo.com",
			"caption": "Yahoo"
		},
		{
			"the_path": "img/work6.jpg",
			"the_link": "http://instagram.com",
			"caption": "Instagram"
		}
	]
};

var getTemplate = function () {
	var path = 'templates/image-block.tpl?rand' + Math.random();
    $.ajax({
        url: path,
        dataType: "text",
        success: insertToPage
    });
};

var insertToPage = function (template_file) {
	var template = Handlebars.compile(template_file);
	var templateWithData = template(json);
	$(".main.clearfix").html(templateWithData);
};


//above, we defined the functions. Below, we call the appropriate function:
getTemplate();