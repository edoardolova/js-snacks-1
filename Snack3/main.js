const numbers=[];
let sum=0;

for(let i = 1; i < 11; i++){
    const number = Number(prompt(`inserisci il ${i}° numero`));
    numbers.push(number);
}
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log(sum)