var the_json;
var initDataFeed = function(auth) {
	$('.' + auth.network + ">  .profile").html(
		"You are currently logged into " + auth.network + "."
	);
	console.log(auth.network, $('.' + auth.network).find('button'));
	$('.' + auth.network).find('button').removeClass("hide");
	switch(auth.network) {
		case "instagram":
			instagram.getPhotosByTag();
			break;
		case "twitter":
			twitter.getTweetsByTag();
			break;
		case "soundcloud":
			soundcloud.getTracks();
			break;
	}
};
// <ion-side-menus>
//   <!-- Center content -->
//   <ion-side-menu-content ng-controller="ContentController">
//   </ion-side-menu-content>

//   <!-- Left menu -->
//   <ion-side-menu side="left">
//   </ion-side-menu>

//   <!-- Right menu -->
//   <ion-side-menu side="right">
//   </ion-side-menu>

//   <ion-side-menu-content>
//   <!-- Main content, usually <ion-nav-view> -->
//   </ion-side-menu-content>
// </ion-side-menus>

var init = function () {
	$('.zocial').click(function () {
		var service = $(this).attr("service");
		hello(service).login();
	});
	$('.get-photos').click(function () {
		instagram.getYourPhotos();
	});
	$('.get-feed').click(function () {
		instagram.getFeed();
	});
	$('.get-photos-by-tag').click(function () {
		instagram.getPhotosByTag();
	});
	
	$('.twitter-timeline').click(function () {
		twitter.getTimeline();
	});
	$('.search-twitter').click(function () {
		twitter.getTweetsByTag();
	});
	$('.soundcloud-profile').click(function () {
		soundcloud.getFavorites();
	});
	$('.soundcloud-playlist').click(function () {
		soundcloud.getPlaylist();
	});
	$('.soundcloud-tracks').click(function () {
		soundcloud.getTracks();
	});
	
	hello.on('auth.login', initDataFeed);
	
	hello.init({
		instagram: 'dbbc3741a1a2498d8dd3ce40471dc594',
		twitter: 'AWIOlJxOVIbuLirzS0YAEJU2M',
		soundcloud: '4fe90d925b64e1db68646025e19168c5'
	}, {
		redirect_uri: 'https://yongshisun.github.io/code510/',
		//redirect_uri: 'http://code510.org/yongshi/dashboard/',
		oauth_proxy: 'https://auth-server.herokuapp.com/proxy'
	});
};

init();

