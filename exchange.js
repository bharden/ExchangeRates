
var api = 'https://api.exchangerate-api.com/v4/latest/';




document.getElementById('button').addEventListener('click', loadJSON);

function loadJSON(event) {
  event.preventDefault();
  console.log("It's working1");
  const userInput = document.getElementById('CurrencyInput').value;
  const url = api + userInput;
  console.log("It's working2");


  fetch(url)
    .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });
}

function appendData(data) {
  var mainContainer = document.getElementById("CurrencyResults");
  var currencyCodes = Object.keys(data.rates)
  for (var i = 0; i < currencyCodes.length; i++) {
    var code = currencyCodes[i]
    var rate = data.rates[code]
    var div = document.createElement("div");
    div.innerHTML = 'Currency: ' + data.base + ': ' + code + ' - ' + rate;
    mainContainer.appendChild(div);
  }
}

// document.getElementById('CurrencyInput').addEventListener("click", funtion(event) {
//   event.preventDefault();
//   const value = document.getElementById('')
// }

// var value = document.getElementById('CurrencyInput').value;
// if(value === "") {
//   return;
//   console.log(value);
// }
// url = api + value;
// fetch(url)
//   .then(function(goodResponse) {
//     return goodRespones.json();
//   }).then(function(json) {
//       let resul
//   })



// //Ready event handler possibly needed
// document.getElementById("weatherSubmit").addEventListener("click", function(event) {
//   event.preventDefault();
//   const value = document.getElementById("weatherInput").value;
//   if (value === "")
//     return;
//   console.log(value);
// const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=4c8bbea0e2459349cea889c87f53c930";
//   fetch(url)
//     .then(function(response) {
//       return response.json();
//     }).then(function(json) {
//       let results = "";
//       results += '<h2>Weather in ' + json.name + "</h2>";
//       for (let i=0; i < json.weather.length; i++) {
// 	results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
//       }
//       results += '<h2>' + json.main.temp + " &deg;F</h2>"
//       results += "<p>"
//       for (let i=0; i < json.weather.length; i++) {
// 	results += json.weather[i].description
// 	if (i !== json.weather.length - 1)
// 	  results += ", "
//       }
//       results += "</p>";
//       document.getElementById("weatherResults").innerHTML = results;
//     });
//     const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=4c8bbea0e2459349cea889c87f53c930";
//     fetch(url2)
//     .then(function(response) {
//     return response.json();
//     }).then(function(json) {
//       let forecast = "";
//         for (let i=0; i < json.list.length; i++) {
//   	forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
//   	forecast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
//   	forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
//         }
//         document.getElementById("forecastResults").innerHTML = forecast;
//   });
// });
