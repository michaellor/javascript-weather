var apiKey = require('./../.env').apiKey;

var converterC = require('./../js/temperature.js').converterC;
var converterF = require('./../js/temperature.js').converterF;

$(document).ready(function() {

  $('#weatherTemp').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      var temperature = response.main.temp;
      var temp_celsius = converterC(temperature);
      var temp_farenheit = converterF(temperature);
      $('.showTemp').text("The temperature in " + city + " is, celsius: " + temp_celsius + " farenheit: " + temp_farenheit);
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
