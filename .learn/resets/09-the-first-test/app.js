const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))
module.exports = { sum };


// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
  };
  
  let fromEuroToDollar = (amountInEuros) => {
    return amountInEuros * oneEuroIs["USD"];
  };
  let fromDollarToYen = (amountInDollars) => {
    const euroToYen = oneEuroIs["JPY"];
    const euroToDollar = oneEuroIs["USD"];
    return (amountInDollars / euroToDollar) * euroToYen;
  };
  
  let fromYenToPound = (amountInYen) => {
    const euroToYen = oneEuroIs["JPY"];
    const euroToPound = oneEuroIs["GBP"];
    return (amountInYen / euroToYen) * euroToPound;
  };
  
  // Ejemplos de uso:
  console.log(fromDollarToYen(10)); // Convierte 10 USD a JPY
  console.log(fromYenToPound(1000)); // Convierte 1000 JPY a GBP
  console.log(fromEuroToDollar(2)); // Esto debería mostrar 2.14
  
