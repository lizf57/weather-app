// FOR WEATHER APP
var apiKey = "f8bebd04413517d30c305d0904d20aa5";


// function getWeatherByCity() {
//     fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + apiKey)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(weatherData){
//         console.log(weatherData)
//         var h2 = document.createElement('h2')
//         h2.innerText = cityName
//         var ul = document.createElement('ul')
//         var li1 = document.createElement('li')
//         var li2 = document.createElement('li')
//         var li3 = document.createElement('li')
//         li1.innerText = "Temp" + weatherData.main.temp
//         li2.innerText = "Hum" + weatherData.main.humidity
//         ul.appendChild(li1)
//         ul.appendChild(li2)
//         document.body.appendChild(h2)
//         document.body.appendChild(ul)

//     })
// }

// getWeatherByCity('Milwaukee')
console.log('hello...')



// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}