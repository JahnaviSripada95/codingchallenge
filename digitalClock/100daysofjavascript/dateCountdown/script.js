const countTo = "27 June 2024";

const c = setInterval(() => {

    const endDate = new Date(countTo); //set to the counTo date
    const currentDate = new Date(); // displays today's date
    
    const totalSeconds = (endDate - currentDate) / 1000;
    /* The reason we divide totalSeconds by 1000 in your code is because the difference between the 
     endDate and currentDate is calculated in milliseconds. 
     JavaScript's Date object operates in milliseconds when 
     calculating the difference between two dates. Therefore, to convert milliseconds into seconds, you divide the total milliseconds by 1000,
     since there are 1000 milliseconds in one second. */
    
    const days = Math.floor(totalSeconds / 3600 / 24); 
    const hours = Math.floor(totalSeconds / 3600) % 24; 
    const minutes = Math.floor(totalSeconds / 60) % 60; 
    const seconds = Math.floor(totalSeconds) % 60; 

    const countDown = document.getElementById("countdown");

    countDown.textContent = `${days}Days ${format(hours)}Hrs : ${format(minutes)}Min : ${format(seconds)}s`;

    if (totalSeconds < 0) {
        clearInterval(c);
        countDown.textContent = "Book Your Tickets Now";
    }

}, 1000)

function format(t) {
    return t < 10 ? `0${t}` : t;
}