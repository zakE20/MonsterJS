let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// Taille du canvas
canvas.width = 600;
canvas.height = 600;
canvas.style.background = "lightblue";
canvas.style.border = "1px solid black";
canvas.style.display = "block";
canvas.style.margin = "auto";
canvas.style.borderRadius = "10px";

let clownX = 300;
let clownY = 300;
let vitesse = 10; 

function dessinerClown(x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 

    // Tête
    ctx.beginPath();
    ctx.arc(x, y, 100, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.stroke();

    // Oreilles
    ctx.beginPath();
    ctx.arc(x - 100, y, 20, 0, 2 * Math.PI); // Oreille gauche
    ctx.arc(x + 100, y, 20, 0, 2 * Math.PI); // Oreille droite
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();

    // Yeux (Blancs)
    ctx.beginPath();
    ctx.arc(x - 40, y - 30, 20, 0, 2 * Math.PI);
    ctx.arc(x + 40, y - 30, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();

    // Pupilles
    ctx.beginPath();
    ctx.arc(x - 40, y - 30, 8, 0, 2 * Math.PI);
    ctx.arc(x + 40, y - 30, 8, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();

    // Nez
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();

    // Bouche
    ctx.beginPath();
    ctx.arc(x, y + 40, 40, 0, Math.PI);
    ctx.lineWidth = 4;
    ctx.strokeStyle = "red";
    ctx.stroke();

    // Joues
    ctx.beginPath();
    ctx.arc(x - 70, y + 10, 10, 0, 2 * Math.PI);
    ctx.arc(x + 70, y + 10, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "pink";
    ctx.fill();

    // Chapeau Triangle
    ctx.beginPath();
    ctx.moveTo(x - 70, y - 100);
    ctx.lineTo(x + 70, y - 100);
    ctx.lineTo(x, y - 170);
    ctx.closePath();
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();

    // Cheveux (Boucles oranges)
    ctx.strokeStyle = "orange";
    ctx.fillStyle = "orange";
    for (let i = -2; i <= 2; i++) {
        ctx.beginPath();
        ctx.arc(x + i * 30, y - 100, 20, 0, Math.PI, true);
        ctx.fill();
        ctx.stroke();
    }
}

function deplacerClown(event) {
    if (event.key === "ArrowUp") {
        clownY -= vitesse;
    } else if (event.key === "ArrowDown") {
        clownY += vitesse;
    } else if (event.key === "ArrowLeft") {
        clownX -= vitesse;
    } else if (event.key === "ArrowRight") {
        clownX += vitesse;
    }

    clownX = Math.max(100, Math.min(canvas.width - 100, clownX));
    clownY = Math.max(100, Math.min(canvas.height - 100, clownY));

    dessinerClown(clownX, clownY);
}

window.addEventListener("keydown", deplacerClown);

dessinerClown(clownX, clownY);
