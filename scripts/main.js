// main.js
const body = document.body;

const p = document.querySelectorAll('p');

function changeColor() {
    // console.log('changeColor');
    const currentHour = new Date().getHours();
    const currentMinute = new Date().getMinutes();
    const currentSecond = new Date().getSeconds();
    const currentMillisecond = new Date().getMilliseconds();

    const millisecond = currentMillisecond / 1000;

    // convert to fraction of 255
    const currentHourBits = currentHour / 24 * 255;
    const currentMinuteBits = currentMinute / 60 * 255;
    const currentSecondBits = currentSecond / 60 * 255;

    // const rgb = `rgb(${currentHour}, ${currentMinute}, ${currentSecond})`;
    // use hsl instead of rgb
    // const rgb = `hsl(${currentHour}, ${currentMinute}%, ${currentSecond}%)`;
    // use rgb with fraction of 255
    const rgb = `rgb(${currentHourBits}, ${currentMinuteBits}, ${currentSecondBits})`;
    const inverseRgb = `rgb(${255 - currentHour}, ${255 - currentMinute}, ${255 - currentSecond})`;
    // const inverseRgb = `hsl(${100 - currentHour}, ${100 - currentMinute}%, ${100 - currentSecond}%)`;
    body.style.backgroundColor = rgb;
    p.forEach((p) => {
        // console.log('change color of p', p);
        p.style.color = inverseRgb;
    });
}
changeColor();
setInterval(changeColor, 1);