function draw(){mainContext.beginPath(),mainContext.arc(150,150,140,1.5*Math.PI,1*Math.PI,!1),mainContext.lineWidth=15,mainContext.strokeStyle="rgba(216, 0, 96, 1.0)",mainContext.stroke(),mainContext.beginPath(),mainContext.arc(150,150,140,1*Math.PI,1.5*Math.PI,!1),mainContext.lineWidth=15,mainContext.strokeStyle="rgba(36, 38, 54, 1.0)",mainContext.stroke()}var mainCanvas=document.getElementById("myCanvas"),mainContext=mainCanvas.getContext("2d");draw();