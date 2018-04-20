const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyCCVcSH7pWaZiddxSdOmt7l-KKizoSjHb0'
//squelch submit
function handleSubmit() {
	$('.input-form').submit(function(event) {
		event.preventDefault(); 
		console.log("button squelched");
		let search = $('#search-field').val();
		$('#search-field').val('');
		


		sendRequest(search, displayYoutubeSearchData);
  		console.log(search);
	});
	
}

//pull value from seach field

//send api request
function sendRequest(searchTerm, callback) {
	console.log('request being sent');
	const settings = {
		url: YOUTUBE_URL,
		data: {
			part: 'snippet',
			key: API_KEY,
			q: `${searchTerm} in: name`,
			maxResults: 24,
			order: 'viewCount',
			safeSearch: 'moderate',
			type: 'video'

		},
		dataType: 'json',
		type: 'GET',
		success: callback
	};

	$.ajax(settings);

}
//render results 
function displayYoutubeSearchData(data) {
	console.log('display trying resolve');
	const results = data.items.map((item, index) => renderSearchResults(item));
	$('#search-results').html(results);
}

function renderSearchResults(result) {
	console.log('results rendering')
	return `
	<div class="well" id="result-well">
	<img src="${result.snippet.thumbnails.default.url}" class="thumnail">
	<p id="vid-link"><a href="http://www.youtube.com/watch?v=${result.id.videoId}">${result.snippet.title}</a></p>
	</div>
	</div>
	</div>
	`;
}



//display results in thumbnails with title 
//create page buttons to navigate through results





$(handleSubmit);
