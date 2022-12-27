let dateElement = document.querySelector("#date");

let currentTime = new Date();

let hours = currentTime.getHours();
if (hours < 10) {
  hours = "0" + hours;
}
let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = "0" + minutes;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let dayIndex = currentTime.getDay();

dateElement.innerHTML = days[dayIndex] + hours + ":" + minutes;

function searchNewCity(event) {
  event.preventDefault();
  let newCity = document.querySelector("#city");
  let currentCity = document.querySelector("#city-input");
  newCity.innerHTML = currentCity.value;

  searchCity(currentCity.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchNewCity);

function searchCity(city) {
  let apiKey = "25407a59ee5855b5bd6ae54c00f8cfc4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeather);
}

function showWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
}
