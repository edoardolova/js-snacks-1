let input1= prompt("inserisci la prima parola");
let input2= prompt("inserisci la seconda parola");

if (input1.length > input2.length) {
    console.log(`la parola più corta è ${input2}`);
    console.log(`la parola più lunga è ${input1}`);
}
else if (input2.length > input1.length) {
    console.log(`la parola più corta è ${input1}`);
    console.log(`la parola più lunga è ${input2}`);
}
else{
    console.log(`le due parole sono lunghe uguali`);

}