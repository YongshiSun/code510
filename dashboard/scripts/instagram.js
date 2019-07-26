var instagram = {
	key: "instagram",
	json: null,
	template: null,
	templateText: null,
	photoTemplatePath: "templates/instagram-photo.tpl",
	
	getYourPhotos: function () {
		hello(this.key)
			.api('https://api.instagram.com/v1/users/self/media/recent')
			.then(this.showPhotos.bind(this), this.handleError.bind(this));	
	},
	
	getFeed: function () {
		hello(this.key)
			.api('https://api.instagram.com/v1/users/self/feed')
			.then(this.showPhotos.bind(this), this.handleError.bind(this));
	},
	
	getPhotosByTag: function () {
		hello(this.key)
			.api('https://api.instagram.com/v1/tags/btsfanart/media/recent')
			.then(this.showPhotos.bind(this), this.handleError.bind(this));
	},
	
	showPhotos: function (json) {
		this.json = json;
		if(!this.templateText) {
			this.loadTemplate(json);
		}
		this.template = Handlebars.compile(this.templateText);
		$('.' + this.key + ' > .sm-content').html(this.template(this.json));
	},
	
	showJSON: function (json) {
		this.json = json;
		$('.' + this.key + ' > .sm-content').html(JSON.stringify(json));
	},
	
	loadTemplate: function (json) {
	    var that = this;
	    $.ajax({
	        url: this.photoTemplatePath + '?rand' + Math.random(),
	        dataType: "text",
	        success: function (response) {
	        	that.templateText = response;
	        	that.showPhotos(json);
	        }
	    });
	},
	
	handleError: function (e) {
		alert('Whoops! ' + e.error.message);
	}
};

