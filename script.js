const apiKey = `3e4fc0c79896fe05c7fd9258c07f1819`;
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

const iscoldElement = document.getElementById('iscold');


searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
            let myTemp = data.main.temp;
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
            iscoldElement.textContent = myTemp;
            if(myTemp < 16){
                console.log("yep, it's cold")
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
