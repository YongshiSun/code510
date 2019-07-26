Handlebars.registerHelper('times', function(n, block) {
    var accum = '';
    for(var i = 0; i < n; ++i)
        accum += block.fn(i);
    return accum;
});

Handlebars.registerHelper('first_n', function(ary, max, options) {
    if(!ary || ary.length == 0)
        return options.inverse(this);
    var result = [ ];
    for(var i = 0; i < max && i < ary.length; ++i)
        result.push(options.fn(ary[i]));
    return result.join('');
});

Handlebars.registerHelper('slugify', function(text) {
  	return text.toLowerCase().replace(/ /g, "-");
});

Handlebars.registerHelper('show_lat_lng', function(geom) {
	if(geom) {
		return geom.coordinates[1].toFixed(3) + ", " + 
					geom.coordinates[0].toFixed(3);
	}
	return null;
});

Handlebars.registerHelper('tagify', function(string) {
    if(string && string.length > 0) {
    	if (string.indexOf(',') !== -1) {
       		string = string.replace(/,/g, '</span><span class="tag">');
    	}
    	string = new Handlebars.SafeString('<span class="tag">' + string + '</span>');
    }
    return string;
});