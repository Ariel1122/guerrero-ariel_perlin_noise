// perling noise efectos visuales, patrones de ruido
// utiliza la función noise(x, y), toma cordenada en X y Y como entrada y devuelve un valor de ruido Perlin en ese punto

let xoff = 0; //variable para controlar la frecuencia horizontal del ruido

function setup() {
  createCanvas(500, 500);
}

function draw() {
  fill(0);
  // noFill();
  stroke(255);
  // stroke(255, 20);
  strokeWeight(2);
  background(220);

  // map = mapea el valor del ruidp
  let x = map(noise(xoff), 0, 1, 0, width); //La función noise(xoff) genera un valor de ruido Perlin en función de la variable xoff. Luego, el valor se mapea a un valor dentro del rango de 0 a width (ancho del lienzo). Esto controla la posición horizontal del punto que se mueve en función del ruido.
  let y = map(noise(xoff + 100), 0, 1, 0, height); // se genera un valor de ruido Perlin utilizando xoff incrementado en una cantidad grande (1000000) para obtener un patrón diferente. El valor se mapea al rango de 0 a height (altura del lienzo), controlando así la posición vertical del punto.
  let tamñ = random(20, 30);

  // print("ya");

  if (y > height / 2) {
    rectMode(CENTER);
    square(x, y, tamñ);
  } else {
    ellipse(x, y, tamñ, tamñ);
  }

  xoff += 0.01; //variable xoff se incrementa en cada fotograma, lo que hace que el patrón de ruido cambie con el tiempo
}

// let xoff = 0; // Variable para controlar la frecuencia horizontal del ruido
// let time = 0; // Variable de tiempo para controlar la posición del polígono

// function setup() {
//   createCanvas(500, 500);
// }

// function draw() {
//   fill(0);
//   stroke(255);
//   strokeWeight(2);

//   // Mapeo del valor del ruido
//   let x = map(noise(xoff), 0, 1, 0, width);
//   let y = map(noise(xoff + 1000000), 0, 1, 0, height);

//   // Calculamos la posición del polígono en función del tiempo
//   let polyX = x + cos(time) * 50;
//   let polyY = y + sin(time) * 50;

//   myPattern(polyX, polyY, 50, mouseY / 10);

//   xoff += 0.01;
//   time += 0.02; // Ajusta la velocidad del movimiento
// }

// function myPattern(x, y, d, amp) {
//   // Iniciamos un polígono con beginShape
//   beginShape();
//   vertex(x - d / 2 + random(-amp, amp), y - d / 2 + random(-amp, amp)); // Punto 0
//   vertex(x + d / 2 + random(-amp, amp), y - d / 2 + random(-amp, amp)); // Punto 1
//   vertex(x + d / 2 + random(-amp, amp), y + d / 2 + random(-amp, amp)); // Punto 2
//   vertex(x - d / 2 + random(-amp, amp), y + d / 2 + random(-amp, amp)); // Punto 3
//   endShape(CLOSE); // Cerramos el polígono para conectar los puntos
// }
