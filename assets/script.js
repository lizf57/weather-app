// FOR WEATHER APP
var apiKey = "f8bebd04413517d30c305d0904d20aa5";

// search button function - current/future weather conditions for city searched and saved to the search history

var searchButton = document.querySelector('.btn')
var currentCity = document.querySelector('.currentCity')
var currentDate = document.querySelector('#currentDate')
var currentWeatherIcon = document.querySelector('#currentWeatherIcon')

searchButton.addEventListener('click', function (event) {
    event.preventDefault()

    var inputValue = document.querySelector('.inputValue').value
    getApi(inputValue)
    let searchHistory = JSON.parse(localStorage.getItem("history")) || []
    searchHistory.push({
      city:inputValue
    })
    localStorage.setItem("history", JSON.stringify(searchHistory))

  });



// When I view current weather conditions for that city, I'm presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
function getApi(inputValue) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputValue + "&units=imperial&appid=" + apiKey)
    .then(function(response){
        return response.json()
    }) 
    .then(function(weatherInfo){
        console.log(weatherInfo)
        console.log(weatherInfo.name)
        console.log(weatherInfo.coord.lat)
        console.log(weatherInfo.coord.lon)
        console.log(weatherInfo.main.humidity)
        console.log(weatherInfo.main.temp)
        console.log(weatherInfo.wind.speed)
        currentCity.innerText = weatherInfo.name
        
        var todayTemp = document.querySelector("#todayTemp")
        todayTemp.innerText=weatherInfo.main.temp + " F"
        
        var todayWind = document.querySelector("#todayWind")
        todayWind.innerText = weatherInfo.wind.speed + " MPH"

        var todayHumid = document.querySelector("#todayHumid")
        todayHumid.innerText = weatherInfo.main.humidity + " %"

        let date = new Date().toLocaleDateString();
        currentDate.innerText = date
        console.log(date)
      
    })
};





// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}


// When I view future weather conditions for that city, I'm presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity.


// When I click on a city in the search history, I'm presented with current and future conditions for that city.