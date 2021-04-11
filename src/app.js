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
    let iconElement = document.querySelector("#icon");
    let sundayIconElement = document.querySelector("#sunday-icon");
    let mondayIconElement = document.querySelector("#monday-icon");
    let tuesdayIconElement = document.querySelector("#tuesday-icon");
    let wednesdayIconElement = document.querySelector("#wednesday-icon");
    let thursdayIconElement = document.querySelector("#thursday-icon");
    let fridayIconElement = document.querySelector("#friday-icon");
    let saturdayIconElement = document.querySelector("#saturday-icon");

    saturdayIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    fridayIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    thursdayIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    wednesdayIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    tuesdayIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    mondayIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    sundayIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    windElement.innerHTML = Math.round(response.data.wind.speed);
    humidityElement.innerHTML = response.data.main.humidity;
    descriptionElement.innerHTML = response.data.weather[0].description;
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
}

let apiKey = "b2347491570b2c40e3677712ca14813f";
let city = "Mexico City";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Guadalajara&appid=${apiKey}&units=imperial`;

console.log(apiUrl);

axios.get(apiUrl).then(showTemperature);