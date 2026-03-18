// Descrizione:
// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. 

// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// MILESTONE 3:
// Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.

// Nota:
// Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.

const userNameElement = document.getElementById('userNameEl')
const userKmElement = document.getElementById('kmEl');
const userCentElement = document.getElementById('ageEl');
const userBtnElement = document.querySelector('.btnEl');
console.log(userNameElement,userKmElement,userCentElement,userBtnElement );

//uso addEvenListener cosi che al click del bottone esegue logica
userBtnElement.addEventListener('click', function(e){
e.preventDefault()
const userName = userNameElement.value;
const userKm = Number(userKmElement.value);
const userAge = Number(userCentElement.value);

console.log(userName, userKm, userAge);

let priceTotal = userKm * 0.21
if (userAge < 18 ) {
    console.log('Applica il 20% di sconto');
    priceTotal= priceTotal * 0.8   
}else{ (userAge>65)
    console.log('applica il 40% di sconto');
    priceTotal = userKm * 0.6
}
console.log(priceTotal.toFixed(2));
})

//prendo i valori delle variabili tramite .value dentro addevenlistener
//mi calcolo il prezzo del biglietto tramite if
// per finire lo loggo in console



