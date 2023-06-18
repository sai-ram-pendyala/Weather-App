async function getWeatherData() {
    let response = await fetch('https://api.weatherapi.com/v1/current.json?key=7ff95b83f9ee4132b0044357231706&q=london&days=14', {mode: 'cors'});
    let weatherData = await response.json();
    console.log(weatherData);
}

getWeatherData();