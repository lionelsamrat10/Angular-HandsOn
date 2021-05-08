//Create the objectin javascript
var person = {
    firstName: "Samrat",
    lastName: "Mitra",
    age: 21,
    eyeColor: "black",
    //We can also have methods inside the object
    fullname: function(){
        return this.firstName + " " + this.lastName;
    }
};
//Print the object
console.log(person)
//Aceess specific elements
var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

console.log(firstName + " " + lastName + " with age " + age + " has " + eyeColor + " eyes.");

//Another way of accessing elements of an object
console.log("Name: " + person["firstName"] + " " + person["lastName"]);

//Access the function inside the object
console.log("Full name of the person is: " + person.fullname());