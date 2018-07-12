function processPageData(response, urlPath){
    var title = 'colinator27 - ' + response.title;
    if (response.title == '')
    	title = 'colinator27';
    
    document.getElementById('content-area').innerHTML = response.html;
    document.title = title;
    window.history.pushState({'content': response.html, 'title': title}, '', urlPath);
}

function loadPage(name){
	var path = '/' + name;
	if (name == 'index')
		path = '';

	$.ajax({
		url: '/page_data/' + name,
		dataType: 'application/json',
		complete: function(data){
			processPageData(data, path);
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