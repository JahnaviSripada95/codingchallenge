// -- From pounds to --
// kilograms = x / 2.2046;
// grams = x / 0.0022046;
// ounces = x * 16;

// -- From Kilogram to --
// pounds = x * 2.2046;
// grams = x * 1000;
// ounces = x * 35.274;

// -- From Gram to --
// kilograms = x / 1000;
//   pounds = x * 0.0022046;
//   ounces = x * 0.035274;

// -- From Ounce to --
// kilograms = x / 35.274;
// grams = x / 0.035274;
// pounds = x * 0.0625;

let pounds = document.querySelector(".pounds"),
 kgs = document.querySelector(".kgs"),
 gms = document.querySelector(".gms"),
 ounces = document.querySelector(".ounces"),
 form = document.querySelector("form");

form.addEventListener("input", convertWeight);

function convertWeight(e){
  if(e.target.classList.contains("pounds")){
   let x= e.target.value;
   kgs.value= (x / 2.2046).toFixed(2);
   gms.value= (x / 0.0022046).toFixed(2);
   ounces.value= (x * 16).toFixed(2);
   
  }

  if(e.target.classList.contains("kgs")){
    let x= e.target.value;
   pounds.value= (x * 2.2046).toFixed(2);
   gms.value= (x * 1000).toFixed(2);
   ounces.value= (x * 35.274).toFixed(2);
    
    
   }

   if(e.target.classList.contains("gms")){
    let x= e.target.value;
    kgs.value= (x / 1000).toFixed(2);
    pounds.value= (x * 0.0022046).toFixed(2);
    ounces.value=( x * 0.035274).toFixed(2);
    
   }

   if(e.target.classList.contains("ounces")){
    let x= e.target.value;
    kgs.value=  (x / 35.274).toFixed(2);
    gms.value=  (x / 0.035274).toFixed(2);
    pounds.value=  (x * 0.0625).toFixed(2);
    
   }
}
