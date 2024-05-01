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
    let linkstyle = document.getElementById("linkstyle");

    if (hours < 18) {
        linkstyle.setAttribute("href", "style/light.css");
    } else {
        linkstyle.setAttribute("href", "style/dark.css");
    }
}
