var n = 1 
var loadMore = true;
var query
var endOfResults = false

var displayResults = function (photos) {
	
	for (var i = 0; i < photos.length / 2; i++ ) {
		displayPhoto( photos[i] )
	}

}

var displayPhoto = function (photo) {

	var url = [
		'https://farm',
		photo.farm,
		'.staticflickr.com/',
		photo.server,
		'/',
		photo.id,
		'_',
		photo.secret,
		'_q.jpg'
	].join('');

	var $img = $('<img>').attr('src', url);
	var $link = $('<a></a>').append($img);

	$img.appendTo('#results')
}

var searchFlickr = function (query) {

	var flickrUrl = 'https://api.flickr.com/services/rest/?jsoncallback=?';

		$.getJSON(flickrUrl, {
		    method: 'flickr.photos.search',
		    api_key: '2f5ac274ecfac5a455f38745704ad084',
		    text: query,
		    format: 'json',
		    page: n++
		  }).done(function(result){
		  	loadMore = true;
		  	var photos = result.photos.photo; // drilling in for a photo object in an array
		  	displayResults(photos);

		  	if (result.photos.pages === pageNumber) {
		  		endOfResults = true;
		  		console.log('end')
		  	}
		  })
};

var checkWindow = function () {
	var query = $('#query').val(); 
	if ( Math.abs(($(window).scrollTop() + $(window).height()) - $(document).height()) <= Math.floor($(document).height()/9) && loadMore  === true ) {
		
		if (loadMore && !endOfResults) {
			searchFlickr(query)
			loadMore = false;
		}
	} 
}

$(document).ready(function(){
 


	$('#search').on('submit', function ( event ) {
		
		event.preventDefault();
 		endOfResults = false;
		$('#results').html('');

		query = $('#query').val();
		searchFlickr(query);

	});

	$(window).on('scroll', checkWindow);
});
