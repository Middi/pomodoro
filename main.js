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
function convertMins(seconds) {

    var minutes = Math.floor(seconds / 60);

    // add zeros to front of single digits
    if (seconds < 10) {
        return minutes + ':' + '0' + seconds;
    }
    else {
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
    // interval timer 1 second
    setInterval(count, 1000);
}

// rest timer
function rest() {
    // timeLeft set to 5mins with 300
    timeLeft = 10;
    counter = 0;
    // if time hasn't run out update dom
    if (timeLeft - counter > 0) {
        counterDom.innerHTML = "<h3>" + (convertMins(timeLeft - counter)) + "</h3><p>Rest</p>";
        counter++;
    }
    // if time has run out, run countdown timer and play sound
    else {
        countDown(1);
        audio.play();
    }
}



// event listeners
var button = document.getElementById("start-button");

button.addEventListener("click", function () {
    countDown(1);

    if (button.innerHTML === 'START') {
        button.innerHTML = 'STOP';
    }
    else {
        button.innerHTML = 'START';
    }
});