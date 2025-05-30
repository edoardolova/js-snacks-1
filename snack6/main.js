const number = 2;
let result = 1;
let i = 0;

while (result < 1000) {
    console.log(result);
    i++;
    result = number ** i;
}
