// celcius to kelven and farenheit:
// K = C + 273.15.
// F = (9/5 × C) + 32.

//kelvin to farenheit and celcius:
// C = K − 273.15.
// F = (K – 273.15) × 9 ⁄ 5 + 32.

//farenheit to celcius and kelvin
// F = C(9 ⁄ 5) + 32.
// K = (F − 32) × 5 ⁄ 9 + 273.15.

// standard values to check 
//  0 c = 32f 
//  100 c = 212f
//  30c = 303.15k


let c = document.querySelector(".celcius"),
 k = document.querySelector(".kelvin"),
 f = document.querySelector(".farenheit"),
 form = document.querySelector("form");

form.addEventListener("input", convertTemperature);

function convertTemperature(e){
    // celcius to kelven and farenheit:
  if(e.target.classList.contains("celcius")){
   let x= (e.target.value);
     if(x !== ""){
        let c = parseFloat(x); // Convert string to float
        k.value = (c+ 273.15).toFixed(2) + " K" ;
        f.value = ((9/5 * c) + 32).toFixed(2)  + " °F" ;
     } else {
        // If there is no input, clear the other fields
        k.value = "";
        f.value = "";
      }
    }



  //kelvin to farenheit and celcius:

  if(e.target.classList.contains("kelvin")){
    let x = (e.target.value);
    if(x !== ""){
    let k = parseFloat(x); // Convert string to float
    c.value = ((k - 273.15)).toFixed(2)+ " °C";
    f.value = (((k - 273.15) *(9/5)) + 32).toFixed(2)  + " °F";
    }
    else {
        // If there is no input, clear the other fields
        c.value = "";
        f.value = "";
      }
  }
   //farenheit to celcius and kelvin
   if(e.target.classList.contains("farenheit")){
    let x = e.target.value;
    if(x !== ""){
    let f= parseFloat(x);
    c.value = ((f-32)*(5/9)).toFixed(2)+ " °C";
    k.value = (((f - 32) * (5 / 9))+ 273.15).toFixed(2) + " K";
    }
    else {
        // If there is no input, clear the other fields
        c.value = "";
        k.value = "";
      }
   }
}
