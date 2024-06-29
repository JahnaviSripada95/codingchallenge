
// Time Countdown
let time = 240; // Time in minutes
let promoTime = time * 60; //time got converted into seconds

let counting = document.getElementById("countdown");

function startCountdown() {
  let promoTimer = setInterval(() => {
    if (promoTime <= 0) {
      clearInterval(promoTimer);
      counting.innerHTML = "Shop now🥳";
      counting.classList.add("sale");
    } else {
      promoTime--;
      let day = Math.floor(promoTime / 3600 / 24);
      let hours = Math.floor(promoTime / 3600) % 24;
      let min = Math.floor(promoTime / 60) % 60;
      let sec = Math.floor(promoTime % 60);

      counting.innerHTML = `Sale starts in : ${format(hours)}hr : ${format(
        min
      )}min : ${format(sec)}`;
    }
  }, 1000);
}

function format(t) {
  return t < 10 ? `0${t}` : t;
}

startCountdown();
