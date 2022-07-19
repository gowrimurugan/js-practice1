// let year = prompt("enter the year");
// function leapyear(year){
//     return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapyear(year))



let year = prompt("enter the year");
if (year % 400 === 0 && year % 4 === 0)
{
console.log("true");
} else {
    console.log("false")
}