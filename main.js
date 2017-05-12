var mainCanvas = document.getElementById("myCanvas");
var mainContext = mainCanvas.getContext("2d");
 
function draw() {
    mainContext.beginPath();
    mainContext.arc(200, 460, 160, 1.5*Math.PI, 1 * Math.PI, false);
 
    // draw the stroke
    mainContext.lineWidth = 15;
    mainContext.strokeStyle = "rgba(197, 35, 112, 1.0)";
    mainContext.stroke();
}
    draw();