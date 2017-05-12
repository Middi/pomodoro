var mainCanvas = document.getElementById("myCanvas");
var mainContext = mainCanvas.getContext("2d");
 
function draw() {

    mainContext.beginPath();
    mainContext.arc(150, 150, 100, 0*Math.PI, 2 * Math.PI, false);
 
    // draw the stroke
    mainContext.lineWidth = 10;
    mainContext.strokeStyle = "rgba(36, 38, 54, 1.0)";
    mainContext.stroke();


    mainContext.beginPath();
    mainContext.arc(150, 150, 100, 1.5*Math.PI, 1 * Math.PI, false);
 
    // draw the stroke
    mainContext.lineWidth = 10;
    mainContext.strokeStyle = "rgba(216, 0, 96, 1.0)";
    mainContext.stroke();
}
    draw();