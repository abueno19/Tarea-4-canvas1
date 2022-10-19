document.addEventListener("DOMContentLoaded", function () {
  let canvas = cargar("canvas");

  let x = canvas.canvas.width / 2;
  let y = 0;
  let ancho = 20;
  let alto = 40;
  let dy = 2;
  let color = "red";
  let rote = 0;
  function dibujar() {
    canvas.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
    canvas.rectangulo(x, y, ancho, alto, color, rote);

    if (y + alto > canvas.canvas.height || y < 0) {
      dy = -dy;
    }
    y += dy;
  }
  setInterval(dibujar, 40);
});

CanvasRenderingContext2D.prototype.rectangulo = function (
  x,
  y,
  ancho,
  alto,
  color,
) {
  this.beginPath();
  this.moveTo(x, y);
  this.lineTo(x + ancho, y);
  this.lineTo(x + ancho, y + alto);
  this.lineTo(x, y + alto);
  this.lineTo(x, y);
  this.closePath();
  this.fillStyle = "white";
  this.fill();
  this.stroke();
  // Aqui se genera un circulo dentro de el rectangulo
  this.beginPath();
  this.arc(x + ancho / 2, y + alto / 4, ancho / 4, 0, 2 * Math.PI);
  this.fillStyle = color;
  this.fill();
  this.stroke();

  // Aqui se crea un triangulo encima del rectangulo
  this.beginPath();
  this.moveTo(x, y);
  this.lineTo(x + ancho, y);
  this.lineTo(x + ancho / 2, y - alto / 2);
  this.lineTo(x, y);
  this.closePath();
  this.fillStyle = color;
  this.fill();
  this.stroke();
  this.restore();
  for (let i = 0; i < 10; i++) {
    let ramdom = random(x, ancho);
    this.beginPath();
    this.moveTo(random(x, ancho), y + alto);
    this.lineTo(ramdom, y   + alto*2);
    this.closePath();

    this.fill();
    this.stroke();
    this.restore();

    this.moveTo(random(x, ancho), y + alto*2  );
    this.lineTo(ramdom, y   + alto * 3);
    this.closePath();

    this.fill();
    this.stroke();
    this.strokeStyle = [
      "white",
      "red",
      "blue",
      "green",
      "yellow",
      "black",
      "pink",
      "purple",
      "orange",
      "brown",
    ][random(0, 10)];
    this.restore();
  }
  this.strokeStyle="black";
  // Crea la ala izquierda del cohete
  this.beginPath();
  this.moveTo(x, y + alto);
  this.lineTo(x - x / 4 + ancho, y + alto);
  this.lineTo(x, y + alto / 2);

  this.closePath();
  this.fillStyle = color;
  this.fill();
  this.stroke();
  this.restore();
  //Crea la ala derecha
  this.beginPath();
  this.moveTo(x + ancho, y + alto);
  this.lineTo(x + ancho * 2, y + alto);
  this.lineTo(x + ancho, y + alto / 2);

  this.closePath();
  this.fillStyle = color;
  this.fill();
  this.stroke();
  this.restore();

  this.strokeStyle = "black";
};

function random(x, ancho) {
  return Math.floor(Math.random() * (x + ancho - x) + x);
}

function cargar(id) {
  let elemento = document.getElementById(id);
  if (elemento && elemento.getContext) {
    let contex = elemento.getContext("2d");
    if (contex) {
      return contex;
    }
  }
  return false;
}
