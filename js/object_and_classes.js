/*
function Person(firstName, lastName, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.dob = new Date(dob);
	//comes inside the object
	this.fullName = () => `${this.firstName} ${this.lastName}`;
}

//comes inside the prototype
Person.prototype.birthYear = function() {
	return this.dob.getFullYear();
}
*/

class Person {
	constructor(firstName, lastName, dob) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = new Date(dob);
	}
	//comes inside the object
	fullName = () => `${this.firstName} ${this.lastName}`;
	//comes inside the prototype
	birthYear() {
		return this.dob.getFullYear();
	}
}

const person1 = new Person('John', 'Doe', '4/3/1980');
const person2 = new Person('Chlara', 'Smith', '10/6/2004');

console.log(person1);
