const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

setInterval( () => {
    let fulldate = new Date();
    let newHours = fulldate.getHours();
    let newMinutes = fulldate.getMinutes();
    let newSeconds = fulldate.getSeconds();

    hours.textContent = newHours;
    minutes.textContent = newMinutes;
    seconds.textContent = newSeconds;
}, 1000);