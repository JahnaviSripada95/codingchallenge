//const rand = (Math.floor(Math.random()*90)) + 1;--> if you declare rand here , the number is generated only when the page is loaded.
const num = document.querySelector(".number");
const btn = document.querySelector(".buttons");
//console.log(rand);

btn.addEventListener("click" , () =>{
    const rand = (Math.floor(Math.random()*100)) + 1; // if you declare rand here , the number is generated whenever the button is clicked.
    num.innerText = rand;
    console.log(rand);
});

