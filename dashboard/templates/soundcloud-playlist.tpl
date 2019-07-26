<div id="wrapper">
	<h1>Your SoundCloud Tracks</h1>
	{{#if data.[0].artwork_url}}
		<img class="album-art" src="{{ data.[0].artwork_url}}" />
	{{else}}
		<img class="album-art hide" src="" />
	{{/if}}
	<audio preload></audio>
	<ol>
	 	{{#each data}}
		<li>
			<a href="#" index="{{@index}}" data-src="{{ stream_url }}">{{ title }}</a>
		</li>
		{{/each }}
	</ol>
</div>