let today = new Date();
// console.log(today);

function getDate(d){
    let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();


    // Determine the correct ordinal indicator
    let ordinalIndicator;
    switch (date) {
        case 1:
        case 21:
        case 31:
            ordinalIndicator = "st";
            break;
        case 2:
        case 22:
            ordinalIndicator = "nd";
            break;
        case 3:
        case 23:
            ordinalIndicator = "rd";
            break;
        default:
            ordinalIndicator = "th";
    }

    // Append the ordinal indicator using <sup> for superscript
    return `${day}, ${date}<sup>${ordinalIndicator}</sup> ${month} ${year}`;
}

     

const date = document.querySelector(".date");
date.innerHTML = getDate(today);

//get time
function showTime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if(h==0){
        h=12;
    }

    if(h>12){
        h=h-12;
        session= "PM";
    }

    //Append 0 to single digit 
    h = h < 10 ? "0"+ h :h;
    m = m < 10 ? "0"+ m :m;
    s = s < 10 ? "0"+ s :s;

    let time = `${h}:${m}:${s}:${session}`;
    document.querySelector(".time").innerHTML = time;

}
setInterval(showTime, 1000);
