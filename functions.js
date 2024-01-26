function canSmoke(age) {

    if (age >= 18) {
        return "You can smoke"
    }
    return "You can't smoke"

}
let personAge = 15;

console.log(canSmoke(personAge));


function canSmokeTrueFail(age) {
    return age >= 18 ? true : "fail"
}

let result = canSmokeTrueFail(personAge); 
console.log(result);


let determineSmokingStatus = age => age >= 18 ? "You can smoke" : "You can't smoke";

console.log(determineSmokingStatus(personAge));

const allowedToIn = (name, age, department) => {
    
    if (age >= 18 && department === "IT") {
        return `${name}, you are allowed to enter the IT department.`;
    } else if (age >= 21 && department === "HR") {
        return `${name}, you are allowed to enter the HR department.`;
    } else {
        return `${name}, you are not allowed to enter.`;
    }
};

let personName = "Olena";
let personAge1 = 33;
let personDepartment = "IT";

let result1 = allowedToIn(personName, personAge1, personDepartment);
console.log(result1);