// let apiKey = "861fb20b505f7e96a549db90c19a5142";
let units = "metric";
let city = "charlotte";
// let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

// function search(event) {
//   event.preventDefault();
//   let cityElement = document.querySelector("#city");
//   let cityInput = document.querySelector("#city-input");
//   cityElement.innerHTML = cityInput.value;
// }

// function convertToFahrenheit(event) {
//   event.preventDefault();
//   let temperatureElement = document.querySelector("#temperature");
//   temperatureElement.innerHTML = 66;
// }

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temperature}`;
}

function search(event) {
  let city = event.data.main.name;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${city}`;
}

function showWeather(response) {
  let h1 = document.querySelector("h1");
  let temperature = Math.round(response.data.main.temp);
  h1.innerHTML = `It is currently ${temperature}° in ${response.data.name}`;
}

function retrievePosition(position) {
  let apiKey = "861fb20b505f7e96a549db90c19a5142";
  let lat = position.data.coord.lat;
  let lon = position.data.coord.lon;
  let city = position.data.main.name;
  let units = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  // let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  // let url = `https://api.openweathermap.org/data/2.5/weather?q=charlotte&appid=861fb20b505f7e96a549db90c19a5142&units=metric`;
  axios.get(url).then(showWeather);
}
// Feature #1
let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

// Feature #2
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

// Bonus Feature
// let fahrenheitLink = document.querySelector("#fahrenheit-link");
// fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

// axios.get(apiUrl).then(showCityTemperature);

navigator.geolocation.getCurrentPosition(retrievePosition);
