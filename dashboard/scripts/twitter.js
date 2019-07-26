/*
 * References:
 * https://dev.twitter.com/rest/public/search
 * https://dev.twitter.com/rest/public
 */
var twitter = {
	json: null,
	key: "twitter",
	template: null,
	templateText: null,
	templatePath: "templates/tweet.tpl",
	getTimeline: function () {
		hello(this.key)
			.api('https://api.twitter.com/1.1/statuses/user_timeline.json')
			.then(this.showTweets.bind(this), this.handleError.bind(this));
	},
	
	getTweetsByTag: function () {
		hello(this.key)
			.api(
				'https://api.twitter.com/1.1/statuses/user_timeline.json',
				'GET',
				{ user_id: 335141638, result_type: 'recent' }
			).then(this.showTweets.bind(this), this.handleError.bind(this));
	},
	
	showJSON: function (json) {
		this.json = json;
		$('.' + this.key + ' > .sm-content').html(JSON.stringify(json));
	},
	
	showTweets: function (json) {
		this.json = json;
		if(json.statuses) { json.data = json.statuses; }
		if(!this.templateText) {
			this.loadTemplate(json);
		}
		this.template = Handlebars.compile(this.templateText);
		$('.' + this.key + ' > .sm-content').html(this.template(this.json));
	},
	
	loadTemplate: function (json) {
	    var that = this;
	    $.ajax({
	        url: this.templatePath + '?rand' + Math.random(),
	        dataType: "text",
	        success: function (response) {
	        	that.templateText = response;
	        	that.showTweets(json);
	        }
	    });
	},
	
	handleError: function (e) {
		alert('Whoops! ' + e.error.message);
	}
};

