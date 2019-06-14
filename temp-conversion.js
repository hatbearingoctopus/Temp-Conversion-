
//create function - take farenheit in- return an object with celsius and kelvin conversions


let tempConverter = function(fahrenheit) {
  return {
   fahrenheit: fahrenheit,
   celsius: (fahrenheit - 32) * 5/9,
   kelvin: (fahrenheit + 459.67) * 5/9
  }
}

let celsiusConversion = tempConverter(20)
let kelvinConversion = tempConverter(65)

console.log(celsiusConversion.celsius)
console.log(kelvinConversion.kelvin)
