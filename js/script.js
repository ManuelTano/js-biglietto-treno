// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e
// l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
// secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va stampato in pagina forma umana 
// (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo 
// di ricerca.


// Recupero elemento

const price = document.getElementById('prezzo');

// Chiedo quanti chilometri vuole percorrere

const distance = prompt('Quanti chilometri vuoi percorrere?');

// Chiedo la sua età

const age = prompt('Qual è la tua età?');

// Se l'età e il chilometraggio sono maggiori di zero

if (distance > 0 && age > 0) {

    // e se l'età è compresa fra 18 e 65

    if (age < 18 || age < 65) {

        // mi calcoli il prezzo non scontato

        const prezzo = (distance * 0.21);
    }

    // altrimenti

    else {

        // se l'età è minore di 18

        if (age < 18) {

            // mi calcoli il prezzo scontato del 20%

            const prezzo = (prezzo - 100 * 20)
        }

        // se, invece,  l'età è maggiore di 65
        
        if (age > 65) {

            // mi calcoli il prezzo scontato del 40%

            const prezzo = (prezzo - 100 * 40)
        }
    }
}

else {
    alert('Errore. Devi avere un età minima e chilometraggio maggiore di 0.');
}


// Genero il prezzo finale in decimali

prezzo.innerText = (age + distance);