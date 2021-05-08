//Create the interface called IPerson
interface IPerson {
    firstName: string,
    lastName: string,
    sayHi: (a, b) => string
};

var person:IPerson = {
    firstName: "Samrat",
    lastName: "Mitra",
    sayHi: (firstName, lastName):string => {return ("Hi " + firstName + " " + lastName)}
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.sayHi("Sam", "Wilson"));