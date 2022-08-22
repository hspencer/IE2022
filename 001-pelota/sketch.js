/**

Pelota Feliz
Herbert Spencer
Esta pelota sigue al círculo y cuando llega, se pone feliz

*/


let pelotaX, pelotaY; // las coordenadas de la pelota
let difX, difY; // la diferencia con el círculo negro
let ROCE = 0.025; // lo que le cuesta avanzar
let feliz = false; // no es feliz, por ahora
let diam = 32; // diametro
function setup() {
  createCanvas(windowWidth, windowHeight);
  pelotaX = mouseX = width / 2;
  pelotaY = mouseY = height / 2;
  noCursor(); // sin cursor
}

function draw() {
  background(255, 220, 230);

  // calcule la diferencia entre el mouse y la pelota en 2 dimensiones
  difX = mouseX - pelotaX;
  difY = mouseY - pelotaY;

  // defina la posición de la pelota añadiéndole roce
  // pelotaX = pelotaX + (difX * ROCE);
  pelotaX += difX * ROCE;
  pelotaY += difY * ROCE;

  // dibuje la pelota (función propia)
  pelota(pelotaX, pelotaY);

  // haga el círculo donde está el mouse (invisible)
  stroke(0);
  strokeWeight(3);
  noFill();
  ellipse(mouseX, mouseY, diam, diam);
}

function pelota(x, y) {

  noStroke(); //sin contorno

  // calcule la distancia lineal entre la pelota y el mouse
  let d = dist(pelotaX, pelotaY, mouseX, mouseY);

  // si esa distancia es menor que 1, la pelota es feliz 
  if (d < 1) {
    feliz = true;
  } else {
    feliz = false;
  }

  // y si es feliz, haga que se ponga roja y salte de felicidad
  if (feliz) {
    let salta = y + sin(millis() / 30) * diam/4;
    fill(200, 0, 0);
    ellipse(x, salta, diam/2 + d / 5, diam/2 + d / 5);
  } else {
    // si no es feliz, entonces que siga tratando de seguir a la pelota
    fill(0);
    ellipse(x, y, diam/2 + d / 5, diam/2 + d / 5);
  }
}