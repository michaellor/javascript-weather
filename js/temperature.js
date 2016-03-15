exports.converterC = function(temperature) {
  var celsius = temperature - 273.15;
  return Math.floor(celsius);
}

exports.converterF = function(temperature) {
  var farenheit = 1.8*(temperature - 273) + 32;
  return Math.floor(farenheit);
}
