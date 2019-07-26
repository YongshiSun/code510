{{#each data}}
<div class="work">
	<a href="{{ link }}" target="_blank">
		<img src="{{images.low_resolution.url}}" class="media" alt=""/>
		<div class="caption">
			<div class="work_title">
				<h2>{{ caption.text }}</h2>
			</div>
		</div>
	</a>
</div>
{{/each}}