var day, hour, minute, second, clock;

function currentTime() {
    day = new Date();
    hour = day.getHours();
    minute = day.getMinutes();
    second = day.getSeconds();

  //all props need zeros for numbers less than 10
        if (hour < 10) {
            hour = "0" + hour;
          }
        if (minute < 10) {
            minute = "0" + minute;
          }
        if (second < 10) {
            second = "0" + second;
          }

clock = hour+":"+minute+":"+second;

document.getElementById("color").innerHTML = clock;
  
var colors = [
    "#5536E0",
    "#6736E0",
    "#8936E0",
    "#BC36E0",
    "#DF36E0",
    "#e036c8"
    ];

var bodyColor = Math.floor(Math.random() * colors.length);
var selectedcolor = colors[bodyColor];

document.body.style.background = selectedcolor;
}

setInterval(currentTime, 1000);