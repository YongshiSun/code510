  <head>
    <style>
      .carousel {
  position: relative;
  width: 320px;
  height: 320px;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
}
.carousel:hover .slide:after,
.carousel:hover .counter,
.carousel:hover .slide:before {
  opacity: 1;
}
.slide {
  float: right;
  position: absolute;
  z-index: 1;
  width: 320px;
  height: 320px;
  background-color: #eee;
  text-align: center;
  transition: opacity 0.4s;
  opacity: 1;
}
.slide:before {
  content: attr(annot);
  display: block;
  position: absolute;
  left: 20px;
  bottom: 20px;
  color: rgba(255,255,255,0.9);
  font-size: 14px;
  font-weight: 300;
  z-index: 12;
  opacity: 0;
  transition: opacity 0.3s;
  text-shadow: 0 0 1px #000;
}
.slide:after {
  content: attr(slide);
  display: block;
  position: absolute;
  bottom: 0;
  transition: opacity 0.3s;
  width: 100%;
  height: 80px;
  opacity: 0;
  background-image: linear-gradient(transparent, rgba(0,0,0,0.5));
  text-align: left;
  text-indent: 549px;
  line-height: 101px;
  font-size: 13px;
  color: rgba(255,255,255,0.9);
  text-shadow: 0 0 1px #000;
}

.faux-ui-facia {
  top: 0;
  right: 0;
  float: right;
  position: absolute;
  margin-top: 0;
  z-index: 9;
  background: #eee;
  height: 100%;
  width: 100%;
  opacity: 0;
  cursor: pointer;
}
.faux-ui-facia:checked {
  z-index: 8;
}
.faux-ui-facia:checked + .slide {
  opacity: 0;
}
.faux-ui-facia:checked:nth-child(1):checked {
  z-index: 9;
}
.faux-ui-facia:nth-child(1):checked {
  float: left;
  z-index: 9;
}
.faux-ui-facia:nth-child(1):checked + .slide {
  opacity: 1;
}
.faux-ui-facia:nth-child(1):checked ~ .faux-ui-facia {
  float: left;
  z-index: 8;
}
.faux-ui-facia:nth-child(1):checked ~ .faux-ui-facia + .slide {
  opacity: 0;
}
.faux-ui-facia:nth-child(1):checked ~ .faux-ui-facia:checked {
  z-index: 9;
}
.faux-ui-facia:nth-child(1):checked ~ .faux-ui-facia:checked + .slide {
  opacity: 1;
}
/* --- Intro text --- */
.intro {
  padding: 80px 0 60px 0;
  text-align: center;
  color: #fff;
  margin: auto;
  width: 800px;
}
.intro .intro__title {
  font-weight: 200;
  font-size: 32px;
  color: #fff;
}
.intro .intro__body {
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  opacity: 0.48;
  padding: 0 160px;
  margin: 0;
}

    </style>
  </head>
  <body>
  <div class="carousel">
  {{#each data}}
  <input type="checkbox" class="faux-ui-facia"> 
  <div class="slide" slide="5" annot="{{caption.text}}">
    <img src="{{images.low_resolution.url}}" alt="Slide 5">
  </div>
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
</div>
</body>