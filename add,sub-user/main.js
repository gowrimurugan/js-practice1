let x = parseInt(prompt("enter the first number"));
let z = prompt("operator");
let y = parseInt(prompt("enter the 2nd number"));
switch (z) {
    case "+":
        console.log((x + y));
        break;
    case "-":
        console.log((x - y));
        break;
    case "*":
        console.log((x * y));
        break;
    case "/":
        console.log((x / y));
    default:
        console.log("unknown operator");
}