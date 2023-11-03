const apiKey = ``;
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
            //iscoldElement.textContent = myTemp;
            if(myTemp < 5){
                iscoldElement.textContent = "You're Going to Freeze!";
                console.log("yep, it's cold");
                document.body.style.backgroundImage = url('https://plus.unsplash.com/premium_photo-1698846880685-4b8b54c28ad3?auto=format&fit=crop&q=80&w=1113&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
            } else if (myTemp < 12){
                iscoldElement.textContent = "You're going to need a Jacket!";
            } else if (myTemp < 19){
                iscoldElement.textContent = "You're going to need a Jacket!";
            } else if (myTemp > 20){
                iscoldElement.textContent = "Summer, yay!  You can go out in a T-Shirt!";
            }
            
            
            
            
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
