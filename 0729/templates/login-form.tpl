<form id="token-form" action="https://instagram.com/oauth/authorize/" method="GET">
  	<div class="form-group">
  		<h2>Please grant this application access to Instagram</h2>
  		<p class="disclaimer">
			instagram-auth.js (one of the scripts that this sample app uses)
			will only store your Instagram token on the computer you are currently
			using. As soon as you logout of this sample app, your token will be 
			destroyed.  We do not store your token in any remote database. 
			This app is just for testing / learning purposes.
		</p>
    	<div class="col-sm-1">
    		<label for="client_id" class="control-label">client_id:</label>
    	</div>
    	<div class="col-sm-5">
    		<input type="text" class="form-control" id="client_id" name="client_id" value="{{ client_id }}" placeholder="Client ID">
  		</div>
  		<div class="col-sm-1">
  			<button type="submit" class="btn btn-primary">Get Access Token</button>
  		</div>
  	</div>
  	<div class="row clearfix">
		
  	</div>
  	<input type="hidden" name="response_type" value="token">
	<input type="hidden" id="redirect_uri" name="redirect_uri" value="{{ redirect_uri }}">
	
</form>