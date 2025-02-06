let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// Paramètres du canvas
canvas.width = 600;
canvas.height = 600;
canvas.style.background = "lightblue";
canvas.style.border = "1px solid black";
canvas.style.display = "block";
canvas.style.margin = "auto";
canvas.style.borderRadius = "10px";

// Tête
ctx.beginPath();
ctx.arc(300, 300, 100, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.stroke();

// Oreilles
ctx.beginPath();
ctx.arc(200, 300, 20, 0, 2 * Math.PI); // Oreille gauche
ctx.arc(400, 300, 20, 0, 2 * Math.PI); // Oreille droite
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();

// Yeux (Blancs)
ctx.beginPath();
ctx.arc(260, 270, 20, 0, 2 * Math.PI);
ctx.arc(340, 270, 20, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();

// Pupilles 
ctx.beginPath();
ctx.arc(260, 270, 8, 0, 2 * Math.PI);
ctx.arc(340, 270, 8, 0, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();

// Nez 
ctx.beginPath();
ctx.arc(300, 300, 15, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();

// Bouche 
ctx.beginPath();
ctx.arc(300, 340, 40, 0, Math.PI);
ctx.lineWidth = 4;
ctx.strokeStyle = "red";
ctx.stroke();

// Joues 
ctx.beginPath();
ctx.arc(230, 310, 10, 0, 2 * Math.PI); 
ctx.arc(370, 310, 10, 0, 2 * Math.PI); 
ctx.fillStyle = "pink";
ctx.fill();

// Chapeau Triangle
ctx.beginPath();
ctx.moveTo(230, 200);
ctx.lineTo(370, 200);
ctx.lineTo(300, 100);
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();
ctx.stroke();

// Cheveux (Boucles oranges)
ctx.strokeStyle = "orange";
ctx.fillStyle = "orange";
for (let i = -2; i <= 2; i++) {
    ctx.beginPath();
    ctx.arc(300 + i * 30, 200, 20, 0, Math.PI, true);
    ctx.fill();
    ctx.stroke();
}
