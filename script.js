let searchCity = document.querySelector(".search");
let searchCityName = document.querySelector("input");
let cityWeather = document.querySelector(".city");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let weather_icon = document.querySelector(".weather_icon");
let weather_condition = document.querySelector(".weatherIcon p");

searchCity.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    getWeather(capitaliseFLetter(searchCityName.value));
    searchCity.value = "";
  }
});

function capitaliseFLetter(letter) {
  return letter.charAt(0).toUpperCase() + letter.slice(1);
}

function getWeather(city) {
  fetch(
    "https://openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=439d4b804bc8187953eb36d2a8c26a02"
  )
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      cityWeather.innerHTML = "Weather in " + city;
      temp.innerHTML = Math.round(data.main.temp) + "&degC";
      humidity.innerHTML = "Humidity: " + data.main.humidity + "%";
      wind.innerHTML = "Wind: " + Math.round(data.wind.speed * 10) / 10 + "m/s";
      weather_icon.src =
        "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
      weather_condition.innerText = data.weather[0].description;
    });
}

getWeather("Salem");

function getDateTime() {
  days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"];
  const DateTime = new Date();
  const present_time = DateTime.toLocaleTimeString();
  const today_day = DateTime.getDay();
  const today_date = DateTime.toLocaleDateString("en-GB");

  document.querySelector(".DateTime h2").innerText = present_time;
  document.querySelector(".DateTime h3").innerText =
    days[today_day] + ", " + today_date;
}

setInterval(getDateTime, 1000);
getDateTime();
