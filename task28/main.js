let r = 20;
let n1 = 0;
let n2 = 1;
let ans = 0;

console.log (n1);
console.log (n2);

for (let i=1; i<=r; i++){
    ans = n1 + n2;
    console.log (ans);
    n1 =n2;
    n2 = ans;
}