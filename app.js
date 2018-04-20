const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyCCVcSH7pWaZiddxSdOmt7l-KKizoSjHb0'
//squelch submit
function handleSubmit() {
	$('.input-form').submit(function(event) {
		event.preventDefault(); 
		console.log("button squelched");
		pullValue();
	});
	
}

//pull value from seach field
function pullValue() {
	let search = $('#search-field').val();
	$('#search-field').val('');
  	console.log(search);
}












//send api request
//render results 
//display results in thumbnails with title 
//create page buttons to navigate through results





$(handleSubmit);
