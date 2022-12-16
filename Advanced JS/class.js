// Class is a syntactical sugar over Prototypes
class Person {
    constructor(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

const p1 = new Person('John', 'Wick')
const p2 = new Person('Jack', 'Sparrow')
p1.getFullName();
p2.getFullName();

// ------- CLass Inheritance -----------------------
class SuperHero extends Person {
    constructor(fname, lname) {
        super(fname, lname)
        this.isSuperHero = true;
    }
    fightCrime() {
        console.log(`${this.firstName} ${this.lastName} is fighting crime`);
    }
}
const batman = new SuperHero('Bruce', 'Wayne')
batman.getFullName();
batman.fightCrime();