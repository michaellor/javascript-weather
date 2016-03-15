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
