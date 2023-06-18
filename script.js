const input = document.querySelector('input');
const btn = document.querySelector('button');
const info = document.querySelector('#info');
const load = document.querySelector('#load');
const loc = document.querySelector('#location');
const dt = document.querySelector('#dateTime');
const cond = document.querySelector('#condition');
const icon = document.querySelector('#icon');
const temp = document.querySelector('#temp');
const feels = document.querySelector('#feelsLike');
const hum = document.querySelector('#humidity');
const clouds = document.querySelector('#clouds');
const url = 'https://api.weatherapi.com/v1/current.json?key=7ff95b83f9ee4132b0044357231706';

const img = document.createElement('img');


async function getWeatherData() {
    try {
        info.style.display = 'none';
        load.style.display = 'block';
        
        let response = await fetch(url + `&q=${input.value}`, {mode: 'cors'});
        let weatherData = await response.json();
        await displayData(weatherData);

        load.style.display = 'none';
        info.style.display = 'block';
    }
    catch {
        info.textContent = "Location not found. Please try again!!!";
        load.style.display = 'none';
        info.style.display = 'block';
    }
}

btn.addEventListener('click', () => {
    getWeatherData();
});

async function displayData(weatherData) {
    loc.textContent = weatherData.location.name + ', ' +weatherData.location.country;
    dt.textContent = weatherData.current.last_updated;
    cond.textContent = weatherData.current.condition.text;
    img.src = weatherData.current.condition.icon;
    icon.appendChild(img);
    temp.textContent = "Temperature: " + weatherData.current.temp_c + ' °C';
    feels.textContent = "Feels Like: " + weatherData.current.feelslike_c + ' °C';
    hum.textContent = "Humidity: " + weatherData.current.humidity;
    clouds.textContent = "Clouds: " + weatherData.current.cloud;
}