const hourA = document.querySelector("#hour");
const minA = document.querySelector("#min");
const secA = document.querySelector("#sec");

function updateClock(){
    let currentDate = new Date();
    let currentH = currentDate.getHours();
    let currentM = currentDate.getMinutes();
    let currentS = currentDate.getSeconds();
    let hourDeg = (currentH / 12) * 360;
    let minDeg = (currentM / 60) * 360;
    let secDeg = (currentS / 60) * 360;

    hourA.style.transform = `rotate(${hourDeg}deg)`;
    minA.style.transform = `rotate(${minDeg}deg)`;
    secA.style.transform = `rotate(${secDeg}deg)`;
}

updateClock();
setInterval(updateClock, 1000);