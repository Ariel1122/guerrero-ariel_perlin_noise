// // perling noise efectos visuales, patrones de ruido
// // utiliza la función noise(x, y), toma cordenada en X y Y como entrada y devuelve un valor de ruido Perlin en ese punto

let xoff = 0; //variable para controlar la frecuencia horizontal del ruido
// variable de tiempo del noise

function setup() {
  createCanvas(500, 500);
}

function draw() {
  // map = mapea el valor del ruidp
  //calculo de la posicion horizontal
  let x = map(noise(xoff + 100), 0, 1, 0, width); //La función noise(xoff) genera un valor de ruido Perlin en función de la variable xoff. Luego, el valor se mapea a un valor dentro del rango de 0 a width (ancho del lienzo). Esto controla la posición horizontal del punto que se mueve en función del ruido.
  let y = map(noise(xoff + 100), 0, 1, 0, height); // se genera un valor de ruido Perlin utilizando xoff incrementado en una cantidad grande (1000000) para obtener un patrón diferente. El valor se mapea al rango de 0 a height (altura del lienzo), controlando así la posición vertical del punto.
  // let tamñ = random(20, 30);
  console.log(x);
  let tamñ = map(noise(xoff), 0, 1, 5, 100);
  // de 5 a 50 el tamaño crece a la derecha y disminuye a la izquierda
  // let tamñ = noise(xoff), 0, 1, 5, 50;

  // print("ya");

  //map_recorrer un arreglo ARRAR

  fill(0);
  // noFill();
  stroke(255);
  // stroke(255, 20);
  strokeWeight(2);
  background(220);
  if (y > height / 2) {
    rectMode(CENTER);
    square(x, y, tamñ);
    square(height - x, y, tamñ); //height - x;: Aquí se calcula la posición reflejada horizontalmente del objeto original. Restar x (la posición original) de la altura del lienzo (height) significa que  estará en el lado opuesto del lienzo con respecto a la posición original. Esto crea un efecto de reflejo horizontal.
  } else {
    ellipse(x, y, tamñ, tamñ);
    ellipse(height - x, y, tamñ, tamñ);
  }

  //la posicion en y ya esta calculando con el noise, razon por la que se mueve de arriba a abajo
  //
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

// para el perlin noise es necesario una variable de tiempo
// la funcion map sirve para mapear un rago numerico y convertirlo en otro rango numerico
// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   // let verde = map(mouseX, o, windowWidth, 0, 255); //el valor a usar en lugar de mouse x
//   // // vamos a mapear el valor en x

//   let posX = map()

//   stroke(255, verde, 0);
//   strokeWeight(4);
//   line(mouseX, 0, mouseX, windowHeight);
// }

// let xoff = 0; // Variable para controlar la frecuencia horizontal del ruido

// function setup() {
//   createCanvas(500, 500);
// }

// function draw() {
//   fill(0);
//   stroke(255);
//   strokeWeight(2);
//   background(220);

//   // Map = mapea el valor del ruido para la pelota 1
//   let x1 = map(noise(xoff), 0, 1, 0, width);
//   let y1 = map(noise(xoff + 100), 0, 1, 0, height);
//   let tamaño1 = map(noise(xoff), 0, 1, 5, 100);

//   // Dibuja la pelota 1
//   ellipse(x1, y1, tamaño1, tamaño1);

//   // // Map = mapea el valor del ruido para la pelota 2
//   // let x2 = map(noise(xoff + 200), 0, 1, 0, width);
//   // let y2 = map(noise(xoff + 300), 0, 1, 0, height);
//   // let tamaño2 = map(noise(xoff + 400), 0, 1, 5, 100);

//   // // Dibuja la pelota 2
//   // ellipse(x2, y2, tamaño2, tamaño2);

//   // Calcula la posición de la pelota 1 reflejada verticalmente
//   let y1Reflejado = height - y1;

//   // Dibuja la pelota 1 reflejada
//   ellipse(x1, y1Reflejado, tamaño1, tamaño1);

//   // // Calcula la posición de la pelota 2 reflejada verticalmente
//   // let y2Reflejado = height - y2;

//   // // Dibuja la pelota 2 reflejada
//   // ellipse(x2, y2Reflejado, tamaño2, tamaño2);

//   xoff += 0.01; // La variable xoff se incrementa en cada fotograma
// }
