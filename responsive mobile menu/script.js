const links = document.querySelectorAll(".nav-list li a");

for (let link of links) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
  behavior: "smooth",
  });
  
}

// RESPONSIVE MOBILE MENU
const menu = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

// Listen for scroll events on the window
window.addEventListener('scroll', () => {
  hideMenu();
});


const showMenu = () => {
  hamburger.style.display = "none";
  close.style.transform = "translateY(0)";
  menu.style.transform = "translateY(0)";
};

const hideMenu = () => {
  close.style.transform = "translateY(-20rem)";
  hamburger.style.display = "block";
  menu.style.transform = "translateY(-200%)";
};

// hamburger.addEventListener("click", showMenu);
// close.addEventListener("click", hideMenu);
if (menu && hamburger && close) {
  hamburger.addEventListener("click", showMenu);
  close.addEventListener("click", hideMenu);
}
