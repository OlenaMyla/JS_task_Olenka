let age = 33;
console.log(typeof 5);
console.log(" Olenka " + age);
console.log(typeof 'Olenka');
console.log(typeof `Olenka ${age}`);


console.log(typeof 1234567n);
console.log(typeof BigInt(123));
console.log(typeof Symbol("unique"));

console.log(null);

let variable;
console.log(typeof variable);


let thisYear = 2024;
let thisYearI = 2024;
console.log(thisYear === thisYearI)

let thisYear1 = 2024;
let thisYear2 = "2024";
console.log(thisYear1 == thisYear2)