var apiKey = "94f8c8d73890a96605037542b9ef5ea6";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(responsetemp) {
      $('.showWeather').text("The humidity in " + city + " is " + responsetemp.main.humidity + "%" + responsetemp.main.temp);
    });
  });
});

var apiKey = "94f8c8d73890a96605037542b9ef5ea6";
var converterC = require('./../js/temperature.js').converterC;
var converterF = require('./../js/temperature.js').converterF;

$(document).ready(function() {
  $('#weatherTemp').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    var temperature = response.main.temp;
    var temp_celsius = converterC(temperature);
    var temp_farenheit = converterF(temperature);
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('.showTemp').text("The temperature in " + city + " is, celsius: " + temp_celsius + " farenheit: " + temp_farenheit);
    });
  });
});
