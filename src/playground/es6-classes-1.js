class Person {
	constructor(name = 'Anonymus', age = 0){
		this.name = name;
		this.age = age
	}
	getGretting(){
		return `Hi! I am ${this.name}. `;
	}
	getDescription(){
		return `${this.name} is ${this.age} year(s) old.`
	}
}

class Student extends Person {
	constructor(name, age, major) {
		super(name, age);
		this.major = major;
	}
	hasMajor() {
		return !!this.major;
	}
	getDescription() {
		let description = super.getDescription();

		if(this.hasMajor()) {
			description += `their major is ${this.major}`;
		}
		return description;
	}
}

class Traveler extends Person {
	constructor(name, age, homeLocation) {
		super(name, age);
		this.homeLocation = homeLocation;
	}

	hasHomeLocation() {
		return !!this.homeLocation;
	}

	getGretting(){
		let gretting = super.getGretting();
		if (this.hasHomeLocation()) {
			gretting += `My location is ${this.homeLocation}.`;
		}
		return gretting;
	}
}

const me = new Traveler('Andre Mead', 26, 'Paris');
console.log(me.getGretting());
const other = new Traveler();
console.log(other.getGretting());

// const me = new Student('Andre Mead', 26, 'Computer Science');
// console.log(me.getGretting());
// console.log(me);
// console.log(me.getDescription());
// console.log(me.hasMajor());

// const other = new Student();
// console.log(other.getGretting());
// console.log(other);
// console.log(other.getDescription());
// console.log(other.hasMajor());