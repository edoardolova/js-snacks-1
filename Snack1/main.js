let input1 = prompt("inserisci il primo numero");
let input2 = prompt("inserisci il secondo numero");

if (input1 !== null && input2 !== null && input1.trim() !== "" && input2.trim() !== "") {
    let num1 = Number(input1);
    let num2 = Number(input2);

    if (!isNaN(num1) && !isNaN(num2)) {
        if (num1 > num2) {
            console.log(`Il numero maggiore è ${num1}`);
        } 
        else if (num2 > num1) {
            console.log(`Il numero maggiore è ${num2}`);
        } 
        else {
            console.log("I numeri sono uguali");
        }
    } 
    else {
        console.log("Valore non valido: inserisci numeri validi");
    }
}
else {
    console.log("Input vuoto o annullato");
}
