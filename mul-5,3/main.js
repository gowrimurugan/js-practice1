let a = prompt("enter the range");
let sum = 0;
for (let i = 0; i <= a; i++) {
    if (i % 3 == 0 || i % 5 == 0)
    sum = sum + i
}
console.log(sum)