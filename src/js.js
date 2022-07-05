function displayWeather(response) {
    let cityInput = document.querySelector("#city");
    cityInput.innerHTML = response.data.name;
    let temp = document.querySelector("#temperature");
    temp.innerHTML = Math.round(response.data.main.temp);
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = Math.round(response.data.main.humidity);
    let wind = document.querySelector("#wind");
    wind.innerHTML = Math.round(response.data.wind.speed);
    let desc = document.querySelector("#description");
    desc.innerHTML = response.data.weather[0].main;
  }
  
  function newCity(event) {
    event.preventDefault();
    let apiKey = "ee99798ae127a8c0919105d66f5a9bfd";
    let city = document.querySelector("#city-input").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(displayWeather);
  }
  let currentCity = document.querySelector("#search-form");
  currentCity.addEventListener("submit", newCity);
  