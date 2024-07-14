const links = document.querySelectorAll(".nav-list li a");

for (link of links) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
}

// Sticky Header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
// Scroll Indicator JS
window.onscroll = () => scrollProgress(); 

function scrollProgress(){ //safari browser        
  const currentState = document.body.scrollTop || document.documentElement.scrollTop; //chrome browser

  const pageHeight = document.documentElement.scrollHeight- document.documentElement.clientHeight;

  const scrollPercent = (currentState/pageHeight)*100;

  const progressBar = document.querySelector(".progress");
  progressBar.style.visibility = "visible";
  progressBar.style.width = scrollPercent + "%" ;

  // newsletter js
const newsLetter = document.querySelector(".newsletter");
const close = document.querySelector(".fa-xmark");
if (scrollPercent > 80){
    newsLetter.style.transform = "translateX(0)";
}else{
  newsLetter.style.transform = "translateX(-100%)";
}
close.addEventListener("click", ()=>{
  newsLetter.style.transform = "translateX(-100%)";
});
}


