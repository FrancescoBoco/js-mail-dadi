/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// FUNZIONE PER CREARE UN NUMERO A CASO 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  console.log(getRandomInt(7));
// A DADO GLI DO' L'ATTRIVUTO NUMERO RANDOM  CON L'ID DADO1
  let dado = `
    <h1 id="dado1" >
        ${getRandomInt(7)} 
        <div> umano </div>
    </h1>

    `


/*
 RIPETO IL PROCESSO 
*/
  
// A DADO GLI DO' L'ATTRIVUTO NUMERO RANDOM  CON L'ID DADOW
let secondoDado = `
<h1 id="dado2"> 
    ${getRandomInt(7)} 
    <div>
    robot
    </div>
</h1>`


/*
 STAMPO SU HTML
*/
  

// STANPO DADO DENTRO L'ID UMANO 
document.getElementById('umano').innerHTML = dado

document.getElementById('robot').innerHTML = secondoDado

console.log (typeof dado, secondoDado)


/*
 CICLO 
*/

// PRENDO SOLO IL VALORE DELLE VARIABILI IN MODO TALE CHE SIANO NUMERI O STRINGHE 

// METTO DENTRO LA VARIABILE DADO 1 IL VALORE DI DADO, SAREBBE IL NUMERO RANDOMNICO 
let dado1 =  document.getElementById('dado1').value

 // METTO DENTRO LA VARIABILE DADO 2 IL VALORE DI DADO, SAREBBE IL NUMERO RANDOMNICO 
 let dado2 =  document.getElementById('dado1').value








 const valoreDado1 = document.getElementById('dado1').value
// console.log ('tipi' ,typeof dado1, typeof dado 2)

// NON ENTRA NEMMENO NELL'OPERATORE LOGICO... 
// if (valoreDado1 > 2 ) {
//     console.log ('happy')
// }
