let x;
let y;
let distancia;
function setup() {
  createCanvas(400, 400);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}
function draw() {
    background("darkgray");
    let distanciaX;//cateto
    let distanciaY;//cateto
    let distancia;//hipotenusa
    distanciaX = mouseX - x;
  //diferença da distancia x
    distanciaY = mouseY - y;
  //diferença da distancia Y
    distancia = sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
    //teorema de pitagoras
  //distancia= dist (mouseX, mouseY)
  distancia = int(distancia)
  //valor inteiro da hipotenusa
    circle(mouseX, mouseY, distancia);
 
  distancia=dist(mouseX, mouseY, x, y)
    //console.log(distancia);
   
  if(distancia < 3) {
    text("encontrei!",200, 200);
    noLoop();
  }


if(distancia > 150) {
  fill("blue")
  circle (mouseX, mouseY, distancia)
} else if (distancia > 100){
    fill ("RGB(170, 15, 255)")
    circle (mouseX, mouseY, distancia)
    } else if (distancia > 75){
      fill("orange");
      circle (mouseX, mouseY, distancia)
      } else if (distancia > 15) {
        fill ("red")
        circle (mouseX, mouseY, distancia)
        }
}