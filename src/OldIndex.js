function setDate() {
  let now = new Date();

  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let minutes = now.getMinutes();

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let string = `${daysOfWeek[now.getDay()]} ${now.getHours()}:${minutes}`;
  return string;
}

let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = setDate();

function displayData(response) {
  let temperature = Math.round(response.data.temperature.current);
  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = temperature;
  let humidity = Math.round(response.data.temperature.humidity);
  let currentHumidity = document.querySelector("#humidity");
  currentHumidity.innerHTML = `${humidity}%`;
  let wind = response.data.wind.speed;
  let currentWind = document.querySelector("#wind");
  currentWind.innerHTML = `${wind} km/h`;
  let city = response.data.city;
  let h1 = document.querySelector("h1");
  h1.innerHTML = city;
}

function replaceData(event) {
  event.preventDefault();

  let city = document.querySelector(".search-input");
  let str = city.value;
  let apiKey = "obbt00a19b0447e3fbfabf89040f3c88";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${str}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayData);
}
let form = document.querySelector("form");
form.addEventListener("submit", replaceData);
