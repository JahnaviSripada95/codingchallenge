// const add =  document.querySelector("#add");
// const sub =  document.querySelector("#subtract");
// const resetCount =  document.querySelector("#reset");
// const count =  document.querySelector(".count");

// add.addEventListener("click", () =>{
//     count.innerHTML++;
// });

// sub.addEventListener("click", () =>{
//     count.innerHTML--;
// });

// resetCount.addEventListener("click", () =>{
//     count.innerHTML = 0;
// });

// another approach using event delegation 

const count =  document.querySelector(".count");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click" , (e) => {
    if(e.target.id==="add"){
        count.innerHTML++;
        setColor();
    }
    if(e.target.id==="subtract"){
        count.innerHTML--;
        setColor();
    }
    if(e.target.id==="reset"){
        count.innerHTML=0;
        setColor();
    }
});

function setColor(){
    if(count.innerHTML >0){
        count.style.color = "yellow";
    }else if(count.innerHTML < 0){
        count.style.color = "orangered";
    }else{
        count.style.color = "white";
    }
}


