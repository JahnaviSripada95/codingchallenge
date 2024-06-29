const count = document.querySelector(".count"); // hex is the class name of span which shows hex color
const input = document.querySelector("input"); // generator is the classname for button
input.addEventListener("keyup", ()=>{
    count.innerHTML = input.value.length;
});