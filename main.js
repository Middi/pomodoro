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

// draw canvas
draw();


// ======= Timer ======== //

var counter = 0;
var timeLeft;
var audio = new Audio('alarm.mp3');
var counterDom = document.getElementById('counter');

// conversion for minutes
function convertMins(secs) {

    var minutes = Math.floor(secs / 60);
    var seconds = secs % 60;

    // add zeros to front of single digits
    if (seconds < 10) {
        return minutes + ':' + '0' + seconds;
    } else {
        return minutes + ':' + seconds;
    }

}

// countdown function
function countDown(mins) {
    // take input and make seconds from it
    timeLeft = mins * 6;

    function count() {
        // if time hasn't run out update dom
        if (timeLeft - counter > 0) {
            counterDom.innerHTML = "<h3>" + (convertMins(timeLeft - counter)) + "</h3>";
            counter++;
        }
        // if time has run out, run 5minute rest timer and play sound
        else {
            rest();
            audio.play();
        }
    }
    setInterval(count, 1000);


}

function rest() {

    timeLeft = 10;
    counter = 0;
    if (timeLeft - counter > 0) {
        counterDom.innerHTML = "<h3>" + (convertMins(timeLeft - counter)) + "</h3><p>Rest</p>";
        counter++;
    }

    else {
        countDown(1);
        audio.play();
    }
}




var button = document.getElementById("start-button");

button.addEventListener("click", function () {
    countDown(1);

    if (button.innerHTML === 'START') {
        button.innerHTML = 'STOP';
    } else {
        button.innerHTML = 'START';
    }
});