function formatDate(timestamp) {
  
    let date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
    console.log(timestamp);
}

function showTemperature(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");

    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    windElement.innerHTML = Math.round(response.data.wind.speed);
    humidityElement.innerHTML = response.data.main.humidity;
    descriptionElement.innerHTML = response.data.weather[0].description;
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
}

let apiKey = "b2347491570b2c40e3677712ca14813f";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}&units=imperial`;

console.log(apiUrl);

axios.get(apiUrl).then(showTemperature);