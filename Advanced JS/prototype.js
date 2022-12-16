function Person(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
}
Person.prototype.getFullName = function () {
    console.log(`${this.firstName} ${this.lastName}`)
}

const p1 = new Person('John', 'Wick')
const p2 = new Person('Jack', 'Sparrow')
p1.getFullName();
p2.getFullName();

// --------- Prototypal Inheritance --------------------------
function SuperHero(fname, lname) {
    Person.call(this, fname, lname)
    this.isSuperHero = true;
}
SuperHero.prototype = Object.create(Person.prototype);
SuperHero.prototype.fightCrime = function () {
    console.log(`${this.firstName} ${this.lastName} is fighting crime`);
}
SuperHero.prototype.constructor = SuperHero;

const batman = new SuperHero('Bruce', 'Wayne')
batman.getFullName();
batman.fightCrime();