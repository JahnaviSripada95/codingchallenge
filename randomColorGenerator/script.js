const hex = document.querySelector(".hex"); // hex is the class name of span which shows hex color
const btn = document.querySelector(".generator"); // generator is the classname for button
const generateColor = () => {
    const randomColor = Math.random().toString(16).substring(2,8);
    document.body.style.backgroundColor = "#" + randomColor;
    hex.innerHTML = "#" + randomColor;
};
btn.addEventListener("click" , generateColor);
generateColor();