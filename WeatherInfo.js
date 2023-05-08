const weatherSettings = {
    async: true,
    crossDomain: true,
    url: 'https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2019-01-01T00%3A00%3A00' +
        '&aggregateHours=24&location=Washington%2CDC%2CUSA&endDateTime=2019-01-03T00%3A00%3A00&unitGroup' +
        '=us&dayStartTime=8%3A00%3A00&contentType=csv&dayEndTime=17%3A00%3A00&shortColumnNames=0',
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6c7f342edbmsh47f9904e7ae6542p1af1bfjsn171d9447d3df',
        'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});

function weatherCheck() {
    const cityWeather = document.getElementById("cityWeather").value;
    const provinceWeather = document.getElementById("provinceWeather").value;
    const countryWeather = document.getElementById("countryWeather").value;
    const dateWeather = document.getElementById("dateWeather").value;
    weatherSettings.url = "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime="+dateWeather+"T00%3A00" +
        "%3A00&aggregateHours=24&location="+cityWeather+"%2C"+provinceWeather+"%2C"+countryWeather+"&endDateTime=" +
        dateWeather+"T00%3A00%3A00&unitGroup" +
        "=us&dayStartTime=8%3A00%3A00&contentType=csv&dayEndTime=17%3A00%3A00&shortColumnNames=0"
    $.ajax(weatherSettings).done(function (response) {
        var weatherResult = JSON.stringify(response, null, 5);
        console.log(weatherResult);
        document.getElementById("weatherResult").innerHTML = "weatherResult:\n" + weatherResult;
    });
}

function SuzhouWeather() {
    weatherSettings.url = "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2023-01-01T00%3A00" +
        "%3A00&aggregateHours=24&location=Suzhou%2CJS%2CCHN&endDateTime=2023-01-01T00%3A00%3A00&unitGroup" +
        "=us&dayStartTime=8%3A00%3A00&contentType=csv&dayEndTime=17%3A00%3A00&shortColumnNames=0"
    $.ajax(weatherSettings).done(function (response) {
        var weatherResult = JSON.stringify(response, null, 5);
        console.log(weatherResult);
        document.getElementById("weatherResult").innerHTML = "weatherResult:\n" + weatherResult;
    });
}