let a = prompt ("Enter the number");
let i=1;

for (i=1; i<=a; i++){   
    fact=1;
    for(let j=i; j>=1; j--){
      fact*=j;  
    }

    console.log(fact);
}