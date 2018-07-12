function processPageData(response, urlPath){
    var title = 'colinator27 - ' + response.title;
    if (response.title == '')
    	title = 'colinator27';
    
    document.getElementById('content-area').innerHTML = response.content;
    document.title = title;
    window.history.pushState({'content': response.content, 'title': title}, '', urlPath);
}

function loadPage(name){
	var path = '/' + name;
	if (name == 'index')
		path = '';

	$.ajax({
		url: '/page_data/' + name + '.json',
		dataType: 'json',
		complete: function(data){
		    if (data.statusText != "success")
		    	return;
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