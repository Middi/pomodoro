// =========== Canvas ========= //

var mainCanvas = document.getElementById("myCanvas");
var mainContext = mainCanvas.getContext("2d");

function draw() {

    var arcStart = 0 * Math.PI;
    var arcEnd = 2 * Math.PI;

    mainContext.beginPath();
    mainContext.arc(150, 150, 100, arcStart, arcEnd, false);

    // draw the full circle in grey
    mainContext.lineWidth = 10;
    mainContext.strokeStyle = "rgba(53, 50, 56, 1.0)";
    mainContext.stroke();

    mainContext.beginPath();
    mainContext.arc(150, 150, 100, arcStart, arcEnd, false);

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
var intervalId;
var audio = new Audio('alarm.mp3');
var counterDom = document.getElementById('counter');

// conversion for minutes
function convertMins(secs) {

    var minutes = Math.floor(secs / 60);
    var seconds = secs % 60;

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
    timeLeft = mins * 60;
    counter = 0;
    counterDom.style.background = "none";
    counterDom.innerHTML = "<h4>+</h4><h3>" + (convertMins(timeLeft - counter)) + "</h3><h4>-</h4><p>Rest 5:00</p>";
    count();
    function count() {
        // if time hasn't run out update dom
        if (timeLeft - counter > 0) {
            counterDom.innerHTML = "<h4>+</h4><h3>" + (convertMins(timeLeft - counter)) + "</h3><h4>-</h4><p>Rest 5:00</p>";
            counter++;
        }
        // if time has run out, run 5minute rest timer and play sound
        else {
            clearInterval(intervalId);
            rest();
            audio.play();
        }
    }

    // interval timer 1 second
    intervalId = setInterval(count, 1000);
}

// rest timer
function rest() {
    // timeLeft set to 5mins with 300
    timeLeft = 300;
    counter = 0;
    counterDom.innerHTML = "<h4>+</h4><h3>" + (convertMins(timeLeft - counter)) + "</h3><h4>-</h4><p>Rest 5:00</p>";
    counterDom.style.background = "rgba(216, 0, 96, 1.0)";

    restCount();
    function restCount() {
        // if time hasn't run out update dom
        if (timeLeft - counter > 0) {
            counterDom.innerHTML = "<h4>+</h4><h3>" + (convertMins(timeLeft - counter)) + "</h3><h4>-</h4><p>Rest 5:00</p>";
            counter++;
        }
        // if time has run out, run countdown timer and play sound
        else {
            clearInterval(intervalId);
            countDown(25);
            audio.play();
            return;
        }
    }

    // interval timer 1 second
    intervalId = setInterval(restCount, 1000);
}


//  --------- event listeners --------- //

var button = document.getElementById("start-button");

// initially add event istener to run start
button.addEventListener('click', startPomodoro);

// start Pomodoro
function startPomodoro() {
    button.removeEventListener('click', startPomodoro);
    button.addEventListener('click', stopPomodoro);
    clearInterval(intervalId);
    audio.pause();
    counterDom.style.background = "none";
    countDown(25);
    button.innerHTML = 'RESTART';
}

// pause Pomodoro
function stopPomodoro() {
    button.removeEventListener('click', stopPomodoro);
    button.addEventListener('click', startPomodoro);
    clearInterval(intervalId);
    audio.pause();
    counterDom.style.background = "none";
    counterDom.innerHTML = "<h4>+</h4><h3>25:00</h3><h4>-</h4><p>Rest 5:00</p>";
    button.innerHTML = 'START';
}
