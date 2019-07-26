{{#data}}
<div class="thumbnail instagram-thumb">
    {{#if videos }}
		<video controls>
		 	<source src="{{videos.low_resolution.url}}" type="video/mp4">
		   	Your browser does not support the video tag.
		</video>
    {{ else }}
  		<img src="{{images.low_resolution.url}}" />
    {{/if}}
    <div class="caption">
	    {{#first_n tags 2}}
	      	<span class="tag">{{ this }}</span>
	    {{/first_n}}
	    <p>{{caption.text}}</p>
    </div>
</div>
{{/data}}