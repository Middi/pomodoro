function draw(){mainContext.beginPath(),mainContext.arc(150,150,100,0*Math.PI,2*Math.PI,!1),mainContext.lineWidth=10,mainContext.strokeStyle="rgba(53, 50, 56, 1.0)",mainContext.stroke(),mainContext.beginPath(),mainContext.arc(150,150,100,1.5*Math.PI,1*Math.PI,!1),mainContext.lineWidth=10,mainContext.strokeStyle="rgba(216, 0, 96, 1.0)",mainContext.stroke()}function convertMins(t){var n=Math.floor(t/60);return t<10?n+":0"+t:n+":"+t}function countDown(t){function n(){timeLeft-counter>0?(counterDom.innerHTML="<h3>"+convertMins(timeLeft-counter)+"</h3>",counter++):(clearInterval(intervalId),rest(),audio.play())}timeLeft=9*t,counter=0,counterDom.style.background="none",counterDom.innerHTML="<h3>"+convertMins(timeLeft-counter)+"</h3>",n(),intervalId=setInterval(n,1e3)}function rest(){function t(){if(!(timeLeft-counter>0))return clearInterval(intervalId),countDown(1),void audio.play();counterDom.innerHTML="<h3>"+convertMins(timeLeft-counter)+"</h3><p>Rest</p>",counter++}timeLeft=6,counter=0,counterDom.innerHTML="<h3>"+convertMins(timeLeft-counter)+"</h3><p>Rest</p>",counterDom.style.background="#34cd37",t(),intervalId=setInterval(t,1e3)}function startPomodoro(){button.removeEventListener("click",startPomodoro),button.addEventListener("click",stopPomodoro),clearInterval(intervalId),counterDom.style.background="none",countDown(1),button.innerHTML="STOP"}function stopPomodoro(){button.removeEventListener("click",stopPomodoro),button.addEventListener("click",startPomodoro),clearInterval(intervalId),counterDom.style.background="none",counterDom.innerHTML="<h3>25:00</h3>",button.innerHTML="START"}var mainCanvas=document.getElementById("myCanvas"),mainContext=mainCanvas.getContext("2d");draw();var counter=0,timeLeft,intervalId,audio=new Audio("alarm.mp3"),counterDom=document.getElementById("counter"),button=document.getElementById("start-button");button.addEventListener("click",startPomodoro);