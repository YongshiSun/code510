<head>
  <link href='http://fonts.googleapis.com/css?family=Amita' rel='stylesheet' type='text/css'>
</head>
{{#each data}}
<div>
   <a class="link link--kukuri" href="#" data-letters="Thanks">Thanks</a>
  <style>
    /*.link {
      font-family: 'Amita', cursive;
      color: #88D18A;
      outline: none;
	text-decoration: none;
	position: relative;
	font-size: 8em;
	line-height: 1;
    }*/
    .link {
	outline: none;
	text-decoration: none;
	position: relative;
	font-size: 8em;
	line-height: 1;
	color: #9e9ba4;
	display: inline-block;
}
    .link--kukuri {
	text-transform: uppercase;
	font-weight: 900;
	overflow: hidden;
	line-height: 0.75;
	color: #b2b0a9;
}

.link--kukuri:hover {
	color: #b2b0a9;
}

.link--kukuri::after {
	content: '';
	position: absolute;gi
	height: 16px;
	width: 100%;
	top: 50%;
	margin-top: -8px;
	right: 0;
	background: #F9F9F9;
	transform: translate3d(-100%,0,0);
	transition: transform 0.4s;
	transition-timing-function: cubic-bezier(0.7,0,0.3,1);
}

.link--kukuri:hover::after {
	transform: translate3d(100%,0,0);
}

.link--kukuri::before {
	content: attr(data-letters);
	position: absolute;
	z-index: 2;
	overflow: hidden;
	color: #424242;
	white-space: nowrap;
	width: 0%;
	transition: width 0.4s 0.3s;
}

.link--kukuri:hover::before {
	width: 100%;
}
  </style>
  {{username}}<br> 
</div>
{{/each}}