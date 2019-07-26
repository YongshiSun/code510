/*
 * References:
 * https://developers.soundcloud.com/docs/api/reference#GET--users--id--favorites
 */
var soundcloud = {
	key: "soundcloud",
	json: null,
	template: null,
	templateText: null,
	playlistTemplatePath: "templates/soundcloud-playlist.tpl",
	
	getFavorites: function () {
		hello(this.key)
			.api('https://api.soundcloud.com/me/favorites')
			.then(this.showPlaylist.bind(this), this.handleError.bind(this));
	},
	
	getTracks: function () {
		hello(this.key)
			.api('http://api.soundcloud.com/tracks', 'GET', {
			  "q": "bangtan"
			})
			.then(this.showPlaylist.bind(this), this.handleError.bind(this));
	},
	
	getPlaylist: function () {
		hello(this.key)
			.api('http://api.soundcloud.com/playlists/39648358')
			.then(this.showPlaylist.bind(this), this.handleError.bind(this));
	},
	
	showPlaylist: function (json) {
		this.json = json;
		if ( json.tracks) {
			json.data = json.tracks;
		}
		if (!this.templateText) {
			this.loadTemplate(json, this.showPlaylist.bind(this));
		}
		this.template = Handlebars.compile(this.templateText);
		$('.' + this.key + ' > .sm-content').html(this.template(this.json));
		this.initPlayer();
	},
	
	showJSON: function (json) {
		this.json = json;
		$('.' + this.key + ' > .sm-content').html(JSON.stringify(json, null, "  "));
	},
	
	loadTemplate: function (json, callback) {
	    var that = this;
	    $.ajax({
	        url: this.playlistTemplatePath + '?rand' + Math.random(),
	        dataType: "text",
	        success: function (response) {
	        	that.templateText = response;
	        	callback(json);
	        }
	    });
	},
	
	handleError: function (e) {
		alert('Whoops! ' + e.error.message);
	},
	
	initPlayer: function (e) {
		var token = hello.utils.store(this.key).access_token,
			that = this;

		// Setup the player to autoplay the next track
		var a = audiojs.createAll({
			css: false,
			trackEnded: function() {
				var next = $('ol li.playing').next();
				if (!next.length) next = $('ol li').first();
				next.addClass('playing').siblings().removeClass('playing');
				audio.load($('a', next).attr('data-src'));
				audio.play();
			}
		});

	     // Load in the first track
	     var audio = a[0];
	     first = $('ol a').attr('data-src') + "?oauth_token=" + token;
	     $('ol li').first().addClass('playing');
	     audio.load(first);

		// Load in a track on click
		$('ol li').click(function(e) {
			e.preventDefault();
			var index = parseInt($('a', this).attr("index")),
				art = that.json.data[index].artwork_url;
			if (art) {
				$('.album-art').attr("src", art).removeClass("hide");
			} else {
				$('.album-art').addClass("hide");
			}
			$(this).addClass('playing').siblings().removeClass('playing');
			audio.load($('a', this).attr('data-src') + "?oauth_token=" + token);
			audio.play();
		});
     
	}
};

