exports.converterC = function(temperature) {
  var celsius = temperature - 273.15;
  return celsius;
}

exports.converterF = function(temperature) {
  var farenheit = 1.8*(temperature - 273) + 32;
  return farenheit;
}
