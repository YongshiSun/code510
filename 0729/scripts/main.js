//var template_path = "templates/likesonly.tpl";
var template_path = "templates/carousel.tpl";
var template_path = "templates/followedby.tpl";
var template_text;
var count = 24;
var tag = "BangtanBoys"; 
var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent";
/*var feed = "https://api.instagram.com/v1/users/" + user +"/media/recent";*/
var json;

var getInstagramData = function (newURL) {
	if(!authentication.checkToken()) { return; }
	
	console.log("getting instagram data from:", newURL);
	$.ajax({
  		dataType: "jsonp",
  		url: newURL,
  		data: { 
  			access_token: authentication.getToken(), 
  			count: count 
  		},
  		success: function (response) {
  			json = response;
  			if (template_text) {
  				updatePage();	
  			} else {
  				getTemplateText();
  			}
  		}
	});
};

//------------------------------------------------------------------------------
// ignore this function for now. Not important for you to understand yet: 
//------------------------------------------------------------------------------
var getTemplateText = function () {
    $.ajax({
        url: template_path + '?rand' + Math.random(),
        dataType: "text",
        success: function (response) {
        	template_text = response;
        	updatePage();
        }
    });
};


// When the data comes back from Instagram, it is merged with the template
var updatePage = function () {
	var template = Handlebars.compile(template_text);
	$(".main.clearfix").html(template(json));
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
	url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent";
	template_text = null;
	template_path = "templates/carousel.tpl";
	getInstagramData(url);
};
var getFeed = function (){
  url = "https://api.instagram.com/v1/users/self/feed";
  template_text = null;
	template_path = "templates/carousel.tpl";
   getInstagramData(url);
};
var getFollowedby = function () {
  url = "https://api.instagram.com/v1/users/self/followed-by";
  template_text = null;
  template_path = "templates/followedby.tpl";
  getInstagramData(url);
};
var getLiked = function () {
  url = "https://api.instagram.com/v1/users/self/media/liked";
  template_text = null;
	template_path = "templates/carousel.tpl";
  getInstagramData(url);
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
	$('.feed').click(getFeed);
	$('.followedby').click(getFollowedby);
	$('.logout').click(authentication.logout);
	$('.liked').click(getLiked);
	
};

initialize();