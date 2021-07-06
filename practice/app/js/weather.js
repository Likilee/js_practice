"use strict";

const API_KEY = "e69546d847bba0ad743f6a04f393a1ef";
//위치를 가져올 수 있다.

function onGeoOk(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  console.log("You live in ", lat, long);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:last-child");
      const weather = document.querySelector("#weather span:first-child");
      city.innerText = data.name;
      weather.innerText = `${data.main.temp}°C / ${data.weather[0].main}`;
      console.log(name, weather);
    });
}

function onGeoError() {
  alert("Can't find you!. no weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
