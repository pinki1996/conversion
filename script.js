// console.log("Perform 3 conversion");

// // celsius to fahrenheit

// console.log("Celsius to Fahrenheit");

// //     function CtoF(celsius){
// //     const fah = celsius;
// //     const CtoFahr = (fah * 9/5) +32;
// //     console.log(CtoFahr)
// //     }

// var c = 23;
// var f = (c * 9/5) +32;
// console.log(f);


// console.log("Kilogram to Pound");


function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelcius").innerHTML=(valNum * 9/5)+32;
  }

  // // kilogram to pound
  function gramConverter(valNum1) {
    valNum = parseFloat(valNum1);
    document.getElementById("outputpounds").innerHTML=(valNum1 * 2.2);
  }

// // Feet to Centimeters

  function feetConverter(valNum2) {
    valNum = parseFloat(valNum2);
    document.getElementById("outputCentimeter").innerHTML=(valNum2 * 30.48);
  }