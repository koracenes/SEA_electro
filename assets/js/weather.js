const weatherContainer = document.querySelector(".weather-container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");

search.addEventListener("click", () => {
  const APIKey = "a83d6fd15292776668c560e0cabb59ee";
  const city = document.querySelector(".search-box input").value;

  if (city == "") return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then((response) => response.json())
    .then((json) => {});
});
