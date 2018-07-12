// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#Polyfill
if (!Array.prototype.filter){
  Array.prototype.filter = function(func, thisArg) {
    'use strict';
    if ( ! ((typeof func === 'Function' || typeof func === 'function') && this) )
        throw new TypeError();
   
    var len = this.length >>> 0,
        res = new Array(len), // preallocate array
        t = this, c = 0, i = -1;
    if (thisArg === undefined){
      while (++i !== len){
        // checks to see if the key was set
        if (i in this){
          if (func(t[i], i, t)){
            res[c++] = t[i];
          }
        }
      }
    }
    else{
      while (++i !== len){
        // checks to see if the key was set
        if (i in this){
          if (func.call(thisArg, t[i], i, t)){
            res[c++] = t[i];
          }
        }
      }
    }
   
    res.length = c; // shrink down array to proper size
    return res;
  };
}

addEventListener('click', function (ev) {
    if (ev.target.classList.contains('smoothlink')) {
        ev.preventDefault();
        loadPage(ev.target.href
	        .split("/")
	        .filter(function (c) { return c.length;})
	        .pop());
    }   
});

function processPageData(response, urlPath){
    var title = 'colinator27 - ' + response.title;
    if (response.title == '')
    	title = 'colinator27';
    
    document.getElementById('content-area').innerHTML = response.content;
    document.title = title;
    window.history.pushState({'content': response.content, 'title': title}, '', urlPath);
}

function loadPage(path){
	if (path == window.location.hostname)
		path = '/';

	var name = path.replace('/', '');
	if (name == '')
		name = 'index';

	$.ajax({
		url: '/page_data/' + name + '.json',
		dataType: 'json',
		complete: function(data){
		    if (data.statusText != "success"){
		    	console.error('Failed to load page with name "' + name + '"');
		    	return;
		    }
			processPageData(data.responseJSON, path);
		},
	    fail: function(xhr, textStatus, errorThrown){
	    	console.error('Failed to load page with name "' + name + '"');
	    }
	});
}

window.onpopstate = function(e){
    if(e.state){
        document.getElementById('content-area').innerHTML = e.state.content;
        document.title = e.state.title;
    }
};