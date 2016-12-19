function search() {
	var searchInput = $('#search').val();
	var resultsCont = document.getElementById("results");
	var viewerContainer = document.getElementById("viewer-container");
	
	resultsCont.innerHTML = '';

	if(searchInput.length == 0){
		resultsCont.style.backgroundColor = 'transparent';
		viewerContainer.style.marginTop = '20%';
	}

	$.ajax({
	    url: "https://en.wikipedia.org/w/api.php?action=query&generator=search&utf8=1&prop=extracts&exintro=1&exlimit=20&exchars=200&explaintext=1",
	    jsonp: "callback",
	    dataType: "jsonp",
	    data: {
	        gsrsearch: searchInput,
	        gsrlimit: 20,
	        format: "json"
	    },
	    success: function(data) {
	    	var results = data.query.pages;
	    	for(var prop in results){
	    		resultsCont.style.backgroundColor = '#fff';
	    		resultsCont.innerHTML += "<a href='https://en.wikipedia.org/?curid="+results[prop].pageid+"' target='_blank'><div class='item'><h3>"+results[prop].title+"</h3><p>"+results[prop].extract+"</p></div></a>";
	    	}
	    	viewerContainer.style.marginTop = '5%';
	    }
	});
};
