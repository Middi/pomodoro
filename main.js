var mainCanvas = document.getElementById("myCanvas");
var mainContext = mainCanvas.getContext("2d");

function draw() {

    mainContext.beginPath();
    mainContext.arc(150, 150, 100, 0 * Math.PI, 2 * Math.PI, false);

    // draw the full circle in grey
    mainContext.lineWidth = 10;
    mainContext.strokeStyle = "rgba(53, 50, 56, 1.0)";
    mainContext.stroke();


    mainContext.beginPath();
    mainContext.arc(150, 150, 100, 1.5 * Math.PI, 1 * Math.PI, false);

    // draw the pink progress
    mainContext.lineWidth = 10;
    mainContext.strokeStyle = "rgba(216, 0, 96, 1.0)";
    mainContext.stroke();
}
draw();


// ======= Timer ======== //

var counter = 0;
var timeLeft;

function convertMins (secs) {

    var minutes = Math.floor(secs / 60);
    var seconds = secs % 60;

if(seconds < 10) {
    return minutes + ':' + '0' + seconds;
}
else {
    return minutes + ':' + seconds;
}
    
}

function countDown(mins) {


timeLeft = mins * 60 - 1;


function count() {
document.getElementById('counter').innerHTML =
            "<h3>" + (convertMins(timeLeft - counter)) + "</h3>";
counter++;

}
setInterval(count, 1000);

}

var button = document.getElementById("start-button");

button.addEventListener("click", function() {
    countDown(25);
    button.innerHTML = 'STOP';
});