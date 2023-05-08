const rentalSettings = {
	async: true,
	crossDomain: true,
	url: 'https://hotels4.p.rapidapi.com/locations/search?query=new%20york&locale=en_US',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6c7f342edbmsh47f9904e7ae6542p1af1bfjsn171d9447d3df',
		'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
	}
};

$.ajax(rentalSettings).done(function (response) {
	console.log(response);
});

function rentalCheck() {
	const cityLocatoin = document.getElementById("city").value;
	rentalSettings.url = "https://hotels4.p.rapidapi.com/locations/search?query="+cityLocatoin+"&locale=en_US"
	$.ajax(rentalSettings).done(function (response) {
		var rentalResult = JSON.stringify(response, null, 5);
		console.log(rentalResult);
		document.getElementById("rentalResult").innerHTML = "rentalResult:\n" + rentalResult;
	});
}

function SuzhouHotel() {
	rentalSettings.url = "https://hotels4.p.rapidapi.com/locations/search?query=Suzhou&locale=en_US"
	$.ajax(rentalSettings).done(function (response) {
		var rentalResult = JSON.stringify(response, null, 5);
		console.log(rentalResult);
		document.getElementById("rentalResult").innerHTML = "rentalResult:\n" + rentalResult;
	});
}