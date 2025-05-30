const oddArr = [];
for (let i = 1; i < 7; i++){
    const number = Number(prompt(`inserisci il ${i}° numero`));
    if (number % 2 !== 0) {
        oddArr.push(number);
    }
}
console.log(oddArr);