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



// Chiedo quanti chilometri vuole percorrere

const distance = prompt('Quanti chilometri vuoi percorrere?');

// Chiedo la sua età

const age = prompt('Qual è la tua età?');

let discountMessage = 'Ti è stato applicato uno sconto del ';

// Prezzo non scontato

let prezzo = distance * 0.21;


// Se l'età e il chilometraggio sono maggiori di zero

if (distance > 0 || age > 0) {
    
        // se l'età è minore di 18

        if (age < 18) {

            // mi calcolo il prezzo scontato del 20%
            hasDiscount = true;
            prezzo = (prezzo - (prezzo * 0.2));
            discountMessage += '20%'
        }

        // se, invece,  l'età è maggiore di 65
        
        if (age > 65) {

            // mi calcolo il prezzo scontato del 40%

            hasDiscount = true;
            prezzo = (prezzo - (prezzo * 0.4));
            discountMessage += '40%'

        }
    }


else {

    alert('Errore. Devi avere un età e chilometraggio maggiore di 0.');
}

// Recupero elemento

const price = document.getElementById('prezzo');

// Genero il prezzo finale in decimali

price.innerHTML = prezzo.toFixed(2);

if (hasDiscount) {
    const discountElement = document.getElementById('sconto');
    discountElement.innerText = discountMessage;
}


