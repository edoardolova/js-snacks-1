let sum=0;
for(let i = 1; i < 11; i++){
    const number = Number(prompt(`inserisci il ${i}° numero`));
    sum += number;
}
console.log(sum)