// turn on stop function 
function turnOnStopLight(){
  document.getElementById("stopLight").style.backgroundColor = "red";
}
//turn off stop function
function turnOffStopLight(){
  document.getElementById("stopLight").style.backgroundColor = "black";
}
// turn on slow function
function turnOnSlowLight(){
  document.getElementById("slowLight").style.backgroundColor = "yellow";
}
//turn off slow function
function turnOffSlowLight(){
  document.getElementById("slowLight").style.backgroundColor = "black";
}
// turn on go function
function turnOnGoLight(){
  document.getElementById("goLight").style.backgroundColor = "green";
}
//turn off go function
function turnOffGoLight(){
  document.getElementById("goLight").style.backgroundColor = "black";
}
// set stop light click event
document.getElementById("stopButton").onclick = function(){
  turnOnStopLight(); 
  turnOffGoLight(); 
  turnOffSlowLight();
};
// set slow light click event
document.getElementById("slowButton").onclick = function(){
  turnOffStopLight(); 
  turnOffGoLight(); 
  turnOnSlowLight();
};
// set go light click event
document.getElementById("goButton").onclick = function(){
  turnOffStopLight(); 
  turnOnGoLight(); 
  turnOffSlowLight();
};


