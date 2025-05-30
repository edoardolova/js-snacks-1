// l'utente scrive 2 numeri tramite prompt stampiamo il maggiore 
let num1 = prompt("inserisci il primo numero");
let num2 = prompt("inserisci il secondo numero");

if(num1 > num2){
    console.log(`il numero maggiore è ${num1}`);
}

else if(num2 > num1){
    console.log(`il numero maggiore è ${num2}`);
}

else{
    console.log("i numeri sono uguali");
}