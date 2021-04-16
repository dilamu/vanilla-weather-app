function formatDate(timestamp) {
  
    let date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
    console.log(timestamp);
}

//function showWheatherCondition(response) {

     //document.querySelector("#city").innerHTML =
     //response.data.name;

     //document.querySelector("#temperature").innerHTML =
     //Math.round(response.data.main.temp);
    //console.log(response.data.main.temp);
//}

//function searchForLocation(position) {
    //let apiKey = "b2347491570b2c40e3677712ca14813f";
    //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    //console.log(apiUrl);

    //axios.get(apiUrl).then(showWheatherCondition);
//}

//function myLocation(event) {
    //event.preventDefault();
    //navigator.geolocation.getCurrentPosition(searchForLocation);
//}

function layoutForecastDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return days[day];
}

function displayForecast(response) {
    let forecast = response.data.daily;
    let forecastElement = document.querySelector("#weather-forecast");

let forecastHTML = `<div class="row">`;
forecast.forEach(function(forecastDay, index) {
    if (index < 6) {
        forecastHTML = 
        forecastHTML + 
                        `
                        <div class="col-2" style="background-color: #ffff0g; border-bottom:5%; border-style: solid; border-width: thin; text-size: 15px; font-family: Roboto,arial,sans-serif; border-color: black; height: 150px;  text-align:center; color:white; ">
                            <div class="forecast-date" style="font-family: Roboto,arial,sans-serif; display: inline-block; color:white; ">${layoutForecastDay(forecastDay.dt)}</div> 
                                    <img style="text-align:center;" src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png" alt="Cloudy" id="sunday-icon">
                                        <div class="forecast-temperature">
                                            <span class="temperature-highest">${Math.round(forecastDay.temp.max)}</span>° |
                                            <span class="temperature-lowest">${Math.round(forecastDay.temp.min)}</span>°
                                        </div>
                        </div>                               
 `;
    }
});
    forecastHTML = forecastHTML + `</div>`;
    forecastElement.innerHTML = forecastHTML;
    console.log(forecastHTML);
}
function showForecast(coordinates) {
    console.log(showForecast);  
    let apiKey = "b2347491570b2c40e3677712ca14813f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=imperial`;
  console.log(apiUrl);
    axios.get(apiUrl).then(displayForecast);
}

function showTemperature(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");
    //let sundayIconElement = document.querySelector("#sunday-icon");
    //let mondayIconElement = document.querySelector("#monday-icon");
    //let tuesdayIconElement = document.querySelector("#tuesday-icon");
    //let wednesdayIconElement = document.querySelector("#wednesday-icon");
    //let thursdayIconElement = document.querySelector("#thursday-icon");
    //let fridayIconElement = document.querySelector("#friday-icon");
    //let saturdayIconElement = document.querySelector("#saturday-icon");

celsiusTemperature = response.data.main.temp;

    //saturdayIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    //fridayIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    //thursdayIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    //wednesdayIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    //tuesdayIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    //mondayIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    //sundayIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
   
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    windElement.innerHTML = Math.round(response.data.wind.speed);
    humidityElement.innerHTML = response.data.main.humidity;
    descriptionElement.innerHTML = response.data.weather[0].description;
    temperatureElement.innerHTML = Math.round(celsiusTemperature);
    cityElement.innerHTML = response.data.name;

    showForecast(response.data.coord);
}

function search(city) {
let apiKey = "b2347491570b2c40e3677712ca14813f";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//console.log(apiUrl);
axios.get(apiUrl).then(showTemperature);
  
}

function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
}

function displayCelsiusTemperature(event) {
    event.preventDefault();
    celsiusLink.classList.add("active");
    fahrenheitLink.classList.remove("active");
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML =  Math.round(celsiusTemperature);
}

function displayFahrenheitTemperature(event) {
    event.preventDefault();

       celsiusLink.classList.remove("active");
       fahrenheitLink.classList.add("active");

       let fahrenheitTemperature = (celsiusTemperature * 9)/5 + 32;
       let temperatureElement = document.querySelector("#temperature");
       temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

let celsiusTemperature = null;


let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);


let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

//et currentLocationButton = document.querySelector("#current-location-button");
//currentLocationButton.addEventListener("click", myLocation);


search("New York"); 
