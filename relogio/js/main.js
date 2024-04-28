const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

setInterval( () => {
    let fulldate = new Date();
    let newHours = fulldate.getHours();
    let newMinutes = fulldate.getMinutes();
    let newSeconds = fulldate.getSeconds();

    colorBackground(newHours);

    hours.textContent = newHours;
    minutes.textContent = newMinutes;
    seconds.textContent = newSeconds;
}, 1000);

function colorBackground(hours){
    if (hours < 18) {
        document.body.style.backgroundColor = "#d1c68a";
    } else {
        document.body.style.backgroundColor = "#1d1d1d";
    }
}