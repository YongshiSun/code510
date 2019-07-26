/*
 * Go and register for a client ID here:<br>
 * https://instagram.com/developer/clients/manage/
 * and click on the Green "Register New Client" button.
 */
var authentication = {
	client_id: "0a9b5d3e475a4123928545c0a0458f6d", //replace with your Client ID
	redirect_uri: "http://code510.org/yongshi/0729", //replace with your Redirect URI
	
	getToken: function () {
		return localStorage.getItem("instagram_token");
	},
	
	setToken: function (token) {
		localStorage.setItem("instagram_token", token);
	},
	
	checkToken: function () {
		var token = this.getToken();
		if(!token || token === 'undefined') {
			var urlTokens = window.location.href.split("access_token=");
			if(urlTokens[1]) {
				this.setToken(urlTokens[1]);
				window.location = '.';
			} else {
				this.loadLoginForm();
				return false;
			}
		}
		return true;
	},
	
	loadLoginForm: function () {
		this.checkIfValuesSet();
		var that = this;
		$.ajax({
	        url: 'templates/login-form.tpl?rand=' + Math.random(),
	        dataType: "text",
	        success: function (response) {
	        	var template = Handlebars.compile(response);
	        	var formData = {
	        		client_id: that.client_id,
	        		redirect_uri: that.redirect_uri
	        	}
	        	$(".main.clearfix").html(template(formData));
	        }
	    });
	},
	
	logout: function (e) {
		localStorage.removeItem('instagram_token');
		window.location = '.';
	},
	
	checkIfValuesSet: function () {
		if (this.client_id == 'YOUR_CLIENT_ID') {
			alert("Go to https://instagram.com/developer/clients/manage/ and register for your own client_id!");
		}
	}
};