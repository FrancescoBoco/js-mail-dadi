/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  console.log(getRandomInt(7));

  let dado = `<h1> ${getRandomInt(7)} </h1>`


document.getElementById('umano').innerHTML = dado

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  console.log(getRandomInt(7));

  let secondoDado = `<h1> ${getRandomInt(7)} </h1>`


document.getElementById('robot').innerHTML = secondoDado
