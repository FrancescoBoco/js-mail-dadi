/* 

chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.

*/

/* 

    1) CREARE UNA LISTA DI MAIL CON ARRY 
    2) CREO UN FORM SU HTML
    2) CHIEDERE ALL'UTENTE DI INSERIRE LA MAIL 
    3) VEDERE SE LA MAIL INSERITA CORRISPONDE ALLA LISTA ARRY 
        SE - SI ' STAMPA ''PUOI ACCEDERE AL SITO''
        SE - NO ' STAMPA NON PUOI ACCEDERE AL SITO 

*/

const emailCheck = [ 
    "Alessandro.Ebreo@gmail.com",
    "Alessandro.Mungai@gmail.com",
    "Alessandro.Mungai@gmail.com",
    "Alessandro.Mungai@gmail.com",
    "Alessandro.Mungai@gmail.com",
    "Alessandro.Mungai@gmail.com",
    "Alessandro.Mungai@gmail.com",
]  
 


const form = document.getElementById('email-form');
const email = document.getElementById('mail').value

form.addEventListener('submit',
    function(event) {
        event.preventDefault();

        console.log('Form sottomesso');

        for (let i = 0; i < emailCheck.length; i++) {
            // console.log('-', emailCheck[i]);
        if(email == emailCheck[i]) {
            console.log('corretto')}
            else {
                console.log('non corretto ')
            }
        }
    });

            // Corretto
        // for (let i = 0; i < emailCheck.length; i++) {
        //     console.log('-', emailCheck[i]);

        //     if (LA MAIL DELLUTENTE E UGUALE AL ARRY )
        //     SCRIVI PUOI PROSEGUIRE 
        //     else (LA MAIL DELLUTENTE NON E UGUALE AL ARRY )
        //     SCRIVI NON PUOI  PROSEGUIR
        // }

    
    
    



