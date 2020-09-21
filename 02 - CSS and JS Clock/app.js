//TODO: remove the transition from .hand when seconds reaches at top and toggle it back on 


const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hour = now.getHours();

    const secondsDegrees = ((seconds/60) * 360) + 90; //added 90 because of previous offset
    const minutesDegrees = ((minutes/60) * 360) + 90;
    const hourDegrees = ((hour / 12) * 360)  + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate,1000);
