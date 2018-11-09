// Cornet
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(200, 250);
ctx.lineTo(250, 150);
ctx.strokeStyle = "#AA6522";
ctx.stroke();
ctx.fillStyle = "#AA6522";
ctx.fill();

//La glace
var g = document.getElementById("myCanvas");
var gtx = g.getContext("2d");
gtx.beginPath();
gtx.moveTo(150, 150);
ctx.quadraticCurveTo(220,50, 250, 150);
gtx.strokeStyle = "#E0E1F3";
gtx.stroke();
gtx.fillStyle = "#E0E1F3";
gtx.fill();
