const holidaySettings = {
	async: true,
	crossDomain: true,
	url: 'https://holidayapi.com/v1/holidays?country=US&year=2022&key=4a9b2b96-0226-4e07-b70a-6c87c9180c27',
	method: 'GET',
};

$.ajax(holidaySettings).done(function (response) {
	console.log(response);
});

function HolidayCheck() {
	const country = document.getElementById("country").value;
	holidaySettings.url = "https://holidayapi.com/v1/holidays?country="+country+"&year=2022&key=4a9b2b96-0226-4e07-b70a-6c87c9180c27"
	$.ajax(holidaySettings).done(function (response) {
		var holidayResult = JSON.stringify(response, null, 5);
		console.log(holidayResult);
		document.getElementById("holidayResult").innerHTML = "holidayResult:\n" + holidayResult;
	});
}

function KoreaHoliday() {
	const country = document.getElementById("country").value;
	holidaySettings.url = "https://holidayapi.com/v1/holidays?country=kr&year=2022&key=4a9b2b96-0226-4e07-b70a-6c87c9180c27"
	$.ajax(holidaySettings).done(function (response) {
		var holidayResult = JSON.stringify(response, null, 5);
		console.log(holidayResult);
		document.getElementById("holidayResult").innerHTML = "holidayResult:\n" + holidayResult;
	});
}