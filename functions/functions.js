let Name;
let firstName = prompt("Enter you first name: ");
let middleName = prompt("enter your middle name: ");
let lastName = prompt("Enter your last name: ");
// function declaration / definition
function first(first="Loris", last="Ndonga"){
    return `My first is: ${first}.`;
}
// anonymous function expression
let middle = function (middleName){
    return `My middle name is: ${middleName}`;
}
// arrow function expression
let last = (lastName) => `My last name is: ${lastName}`;
let fullName = (firstName, middleName, lastName) => `My full name is: ${firstName} ${middleName} ${lastName}.`

Name = fullName(firstName, middleName, lastName);

let newParagraph = document.createElement("p");
newParagraph.innerHTML = Name;
document.body.appendChild(newParagraph);