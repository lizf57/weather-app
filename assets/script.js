// FOR WEATHER APP
var apiKey = "f8bebd04413517d30c305d0904d20aa5";
var cardForecastContainer = document.querySelectorAll("#card-forecast-container .card-body")

// search button function - current/future weather conditions for city searched and saved to the search history

var searchButton = document.querySelector('.btn')
var currentCity = document.querySelector('.currentCity')
var currentDate = document.querySelector('#currentDate')
var icon = document.querySelectorAll('.icon')

searchButton.addEventListener('click', function (event) {
    event.preventDefault()

    var inputValue = document.querySelector('.inputValue').value
    getCurrentWeather(inputValue)
    getForecast(inputValue)
    let searchHistory = JSON.parse(localStorage.getItem("history")) 
    searchHistory.push({
      city:inputValue
    })
    localStorage.setItem("history", JSON.stringify(searchHistory))

  });


// When I view current weather conditions for that city, I'm presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
function getCurrentWeather(inputValue) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputValue + "&units=imperial&appid=" + apiKey)
    .then(function(response){
        return response.json()
    }) 
    .then(function(weatherInfo){
      
        currentCity.innerText = weatherInfo.name

        
        var todayTemp = document.querySelector("#todayTemp")
        todayTemp.innerText=weatherInfo.main.temp + " F"
        
        var todayWind = document.querySelector("#todayWind")
        todayWind.innerText = weatherInfo.wind.speed + " MPH"

        var todayHumid = document.querySelector("#todayHumid")
        todayHumid.innerText = weatherInfo.main.humidity + " %"

        let date = new Date().toLocaleDateString();
        currentDate.innerText = date  
      
    })
};

function updateForecastCards(forecastInfo) {
    var cardList = []
    for (let i=0; i < forecastInfo.list.length; i++) {
        var listItem = forecastInfo.list[i] 
        if (listItem.dt_txt.split(" ")[1] === "12:00:00"){
            cardList.push(listItem)
        }
    }

    for (let i=0; i < cardList.length; i++){
        let cardListObject = cardList[i]
        var card = cardForecastContainer[i]
        
        card.querySelector(".date").innerText = cardListObject.dt_txt.split(" ")[0]

        card.querySelector(".temp").innerText = cardListObject.main.temp + " F"

        card.querySelector(".wind").innerText = cardListObject.wind.speed + " MPH"

        card.querySelector(".humid").innerText = cardListObject.main.humidity + " %"
        
    }
}


// When I view future weather conditions for that city, I'm presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity.
function getForecast(inputValue) {
    fetch(" https://api.openweathermap.org/data/2.5/forecast?q=" + inputValue + "&units=imperial&appid=" + apiKey)
    .then(function(response){
        return response.json()
    }) 
    .then(function(forecastInfo){
        updateForecastCards(forecastInfo)
    })
};


// When I click on a city in the search history, I'm presented with current and future conditions for that city.

var historyList = JSON.parse(localStorage.getItem("history")) || []

for (let i=0; i<5; i++){
    var citiesSearched = historyList[i]
    console.log(citiesSearched)

    let searchHistoryButton = document.createElement('button')
        searchHistoryButton.innerText = citiesSearched

        searchHistoryButton.addEventListener("click", function(event){
            getCurrentWeather(event.target.innerText)
            getForecast(event.target.innerText)
        });
    document.querySelector(".searchHistory").append(searchHistoryButton)
};