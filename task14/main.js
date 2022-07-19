let a = 80;
let b = 34;
let c = 15;

let l;
let m;
let s;

if(a > b && a > c) {
    l=a;
}else if (b >a && b > c){
    l=b;
}else{
    l=c;
}

if (a < b && a < c){
    s=a;
}else if (b < a && b <c){
    s=b;
}else {
    s=c;
}

m=(a+b+c) - (l+s)

console.log(s,m,l);
console.log(l,m,s);
 