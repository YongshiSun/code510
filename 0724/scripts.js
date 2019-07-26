var template = "your-image-template.tpl";
var templateMerger;
var token = "2114568991.967d3b8.17d507111b1c4daea2eb0c3fc6f6504d";
var tag = "landscapes"; 
var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent";
var json;

//------------------------------------------------------------------------------
// This function goes out to the Instagram API and retrieves data
//------------------------------------------------------------------------------
var getInstagramData = function (newURL) {
	console.log("getting instagram data from:", newURL);
	$.ajax({
  		dataType: "jsonp",
  		url: newURL,
  		data: { 
  			access_token: token, 
  			count: 9 
  		},
  		success: function (response) {
  			json = response;
  			getTemplate();
  		},
  		async: false
	});
};

//------------------------------------------------------------------------------
// ignore this function for now. Not important for you to understand yet: 
//------------------------------------------------------------------------------
var getTemplate = function () {
	if (templateMerger) {
		updatePage();
	} else {
	    $.ajax({
	        url: template + '?rand' + Math.random(),
	        dataType: "text",
	        success: function (response) {
	        	templateMerger = Handlebars.compile(response);
	        	updatePage();
	        }
	    });
	}
};

//------------------------------------------------------------------------------
// When the data comes back from Instagram, it is merged with the template
//------------------------------------------------------------------------------
var updatePage = function () {
	var templateWithData = templateMerger(json);
	$(".main.clearfix").html(templateWithData);
};

// menu function
var toggleMenu = function () {
    $("header nav ul").toggleClass("show_menu");
    $("#menu_icon").toggleClass("close_menu");
    return false;
};

// changes the API URL so that it gets a different tag:
var getPhotosByTag = function () {
	tag = $(this).attr("tag");
	console.log("The selected tag is:", tag);
	url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent"
	getInstagramData(url);
};

// changes the API URL so that it gets "popular" photos:
var getPopular = function () {
	getInstagramData("https://api.instagram.com/v1/media/popular");
};

// changes the API URL so that it gets your favorites:
var getYourFavorites = function () {
	getInstagramData("https://api.instagram.com/v1/users/self/media/liked");
};

//------------------------------------------------------------------------------
// This function sets up the whole page
//------------------------------------------------------------------------------
var initialize = function () {
	
	// calls the getPhotosByTag function for the first time when the page loads
	$(document).ready(function () {
		getPhotosByTag(url);
	});
	
	//making the menu work:
	$("#menu_icon").click(toggleMenu);
	
	// adding an "click" event handler to the .photos-by-tag selector
	$('.photos-by-tag').click(getPhotosByTag);
	
	// adding a different "click" event handler to the .popular selector
	$('.popular').click(getPopular);
	
	// adding a different "click" event handler to the #favorites selector
	$('#favorites').click(getYourFavorites);
};

//above, we defined the functions. Now, we call the appropriate function:
initialize();

