// API Key = fb68b46da0b70b46aa59fbffde8728c3;

// Selectors
let cityName = document.querySelector(".city");
let iconVal = document.querySelector(".icon");
let temperature = document.querySelector(".temp");
let desc = document.querySelector(".description");
let humiditiValue = document.querySelector(".humidity");
let windSpeed = document.querySelector(".wind");
let searchBarInput = document.querySelector(".search input");
// console.log(searchBarInput);

//

let weather = {
  apiKey: "fb68b46da0b70b46aa59fbffde8728c3",
  city: "Kolkata",
  countryCode: 700001,

  fetchWeather: function (city) {
    (url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`),
      fetch(url)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
  },

  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    // console.log(name, icon, description, temp, humidity, speed);
    cityName.innerText = `Weather in ${name}`;
    iconVal.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    desc.innerText = description;
    temperature.innerText = `${temp} °C`;
    humiditiValue.innerText = `Humidity : ${humidity}%`;
    windSpeed.innerText = `Wind Speed : ${speed} km/h`;
    document.querySelector(".weather").classList.remove("loading");
  },
  searchWeather: function () {
    this.fetchWeather(searchBarInput.value);
  },
};

// SearchBar

let searchButton = document.querySelector(".search button");
// console.log(searchButton);
// Event Listeners
searchButton.addEventListener("click", () => {
  weather.searchWeather();
  searchBarInput.value = "";
});
// Functions

// Event-Listener ON SEARCH BAR

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter" && searchBarInput.value !== "") {
      weather.searchWeather();
      searchBarInput.value = "";
    }
  });
